import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();

  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "spatialco",
  });

  await db.execute(
    "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
    [body.name, body.email, body.message]
  );

  return NextResponse.json({
    message: "Form submitted successfully",
  });
}