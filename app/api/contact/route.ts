import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  let db: mysql.Connection | null = null;

  try {
    const body: ContactRequest = await req.json();
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "spatialco",
    });

    await db.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await db.execute(
      "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { error: "Message failed. Please try again." },
      { status: 500 }
    );
  } finally {
    await db?.end();
  }
}
