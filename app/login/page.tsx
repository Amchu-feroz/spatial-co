"use client";

import { useState } from "react";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e:any) => {

    e.preventDefault();

    if(email === "admin@gmail.com" && password === "1234") {

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

        <input
          type="password"
          placeholder="Enter Password"
          className="border p-3 rounded-lg"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg"
        >
          Submit
        </button>

      </form>

    </div>
  );
}