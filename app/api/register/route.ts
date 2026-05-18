import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "spatialco",
    });

    await db.execute(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [body.email, hashedPassword]
    );

    return NextResponse.json({
      message: "Registered Successfully",
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      message: "Error",
    });
  }
}