import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();

  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "spatialco",
  });

  const [rows]: any = await db.execute(
    "SELECT * FROM users WHERE email = ?",
    [body.email]
  );

  if(rows.length === 0){

    return NextResponse.json({
      success: false,
    });
  }

  const user = rows[0];

  const isMatch = await bcrypt.compare(
    body.password,
    user.password
  );

  if(isMatch){

    return NextResponse.json({
      success: true,
    });

  } else {

    return NextResponse.json({
      success: false,
    });
  }
}