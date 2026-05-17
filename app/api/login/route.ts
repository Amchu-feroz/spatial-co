import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

interface LoginRequest {
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  let db: mysql.Connection | null = null;

  try {
    const body: LoginRequest = await req.json();
    const email = body.email?.trim().toLowerCase();

    if (!email || !body.password) {
      return NextResponse.json(
        { error: "Email and password are required" },
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
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const [rows] = await db.execute(
      "SELECT id, email, password FROM users WHERE email = ? LIMIT 1",
      [email]
    );

    const users = rows as User[];
    if (users.length === 0) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(body.password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "Login successful",
        userId: user.id,
        email: user.email,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Login failed. Please try again." },
      { status: 500 }
    );
  } finally {
    await db?.end();
  }
}
