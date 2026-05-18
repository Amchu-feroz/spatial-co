"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e:any) => {

    e.preventDefault();

    const res = await fetch("/api/register", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    alert(data.message);

    window.location.href = "/login";
  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-lg w-80 flex flex-col gap-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Register
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="border p-3 rounded-lg"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create Password"
          className="border p-3 rounded-lg"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg"
        >
          Register
        </button>

        <p className="text-center text-sm">

          Already have an account?{" "}

          <Link
            href="/login"
            className="text-blue-500"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
}