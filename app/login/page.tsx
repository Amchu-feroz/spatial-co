"use client";
import { Eye, EyeOff } from "lucide-react";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e:any) => {

    e.preventDefault();

    const res = await fetch("/api/login", {

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

    if(data.success){

      window.location.href = "/home";

    } else {

      alert("Wrong Email or Password");
    }
  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-80 flex flex-col gap-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="border p-3 rounded-lg"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <div className="relative w-full">

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter Password"
    className="border p-3 rounded-lg w-full pr-10"
    onChange={(e) => setPassword(e.target.value)}
  />

  <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
  >
    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
  </span>

</div>

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg"
        >
          Login
        </button>

        <p className="text-center text-sm">

          Don't have an account?{" "}

          <Link
            href="/register"
            className="text-blue-500"
          >
            Register
          </Link>

        </p>

        <p className="text-center text-sm">

          <Link
            href="/forgot-password"
            className="text-gray-500"
          >
            Forgot Password?
          </Link>

        </p>

      </form>

    </div>
  );
}