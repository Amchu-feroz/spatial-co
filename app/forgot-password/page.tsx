"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {

  const [email, setEmail] = useState("");

  const handleReset = (e:any) => {

    e.preventDefault();

    alert("Password reset link sent successfully");
  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleReset}
        className="bg-white p-8 rounded-2xl shadow-lg w-80 flex flex-col gap-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter Your Email"
          className="border p-3 rounded-lg"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg"
        >
          Reset Password
        </button>

        <Link
          href="/login"
          className="text-center text-blue-500"
        >
          Back to Login
        </Link>

      </form>

    </div>
  );
}