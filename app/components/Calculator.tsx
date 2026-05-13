"use client";

import { useState } from "react";

export default function Calculator() {

  const [bhk, setBhk] = useState("");
  const [budget, setBudget] = useState<number | null>(null);

  const prices: Record<string, number> = {
    "1BHK": 150000,
    "2BHK": 250000,
    "3BHK": 400000,
    "4BHK": 600000,
    "5BHK": 800000,
  };

  const calculate = () => {
    setBudget(prices[bhk]);
  };

  return (
    <section className="py-24 px-10 bg-[#E6CCB2]">

      <h2 className="text-5xl font-bold text-center mb-12 text-[#4B2E2B]">
        Price Calculator
      </h2>

      <div className="max-w-2xl mx-auto bg-[#FAF7F2] p-12 rounded-3xl shadow-2xl">

        <select
          className="w-full border border-[#B08968] p-4 rounded-xl text-lg"
          onChange={(e) => setBhk(e.target.value)}
        >
          <option>Select BHK</option>
          <option>1BHK</option>
          <option>2BHK</option>
          <option>3BHK</option>
          <option>4BHK</option>
          <option>5BHK</option>
        </select>

        <button
          onClick={calculate}
          className="bg-[#4B2E2B] text-white px-6 py-4 rounded-xl w-full mt-6 text-lg hover:bg-[#6F4E37] transition"
        >
          Calculate Budget
        </button>

        {budget && (
          <h3 className="text-3xl font-bold text-center mt-8 text-[#4B2E2B]">
            Estimated Budget: ₹{budget}
          </h3>
        )}

      </div>

      <div
        id="contact"
        className="text-center mt-24"
      >

        <h2 className="text-5xl font-bold mb-6 text-[#4B2E2B]">
          Contact Us
        </h2>

        <p className="text-xl text-[#5C4033] mb-2">
          Email: thespatialco@gmail.com
        </p>

        <p className="text-xl text-[#5C4033]">
          Phone: +91 9876543210
        </p>

      </div>

    </section>
  );
}
