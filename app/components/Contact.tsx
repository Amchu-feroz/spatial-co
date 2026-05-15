"use client";

import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e:any) => {

    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    alert(data.message);
  };

  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-10">

      <input
        type="text"
        placeholder="Name"
        className="border p-2"
        onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2"
        onChange={(e)=>setForm({...form,email:e.target.value})}
      />

      <textarea
        placeholder="Message"
        className="border p-2"
        onChange={(e)=>setForm({...form,message:e.target.value})}
      />

      <button className="bg-black text-white p-2 rounded">
        Submit
      </button>

    </form>
  );
}