"use client";

import { useState } from "react";

export default function Portfolio() {
  const data = {
    Kitchen: [
      "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1714860534425-7ce04e013dec?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1609766856939-5b5a934af3d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
],    

    Bedroom: [
      "https://i.pinimg.com/736x/d8/02/fd/d802fd7f2509627088abd71d2e48fd2a.jpg",
      "https://i.pinimg.com/736x/db/2c/7e/db2c7e94830f8168ef192da71dcda789.jpg",
      "https://plus.unsplash.com/premium_photo-1675537843204-a729d7ceedda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],

    LivingRoom: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww", 
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   
],
  };

  const [category, setCategory] =
    useState<keyof typeof data>("Kitchen");

  const [index, setIndex] = useState(0);

  const images = data[category];

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 px-10 bg-[#FFF8F0]">

      <h2 className="text-4xl font-bold text-center mb-10 text-[#6F4E37]">
        Portfolio
      </h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">

        <button
          onClick={() => {
            setCategory("Kitchen");
            setIndex(0);
          }}
          className="bg-[#A3B18A] text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
        >
          Kitchen
        </button>

        <button
          onClick={() => {
            setCategory("Bedroom");
            setIndex(0);
          }}
          className="bg-[#A3B18A] text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
        >
          Bedroom
        </button>

        <button
          onClick={() => {
            setCategory("LivingRoom");
            setIndex(0);
          }}
          className="bg-[#A3B18A] text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
        >
          Living Room
        </button>

      </div>

      <div className="flex items-center justify-center gap-6">

        <button
          onClick={prevImage}
          className="bg-[#6F4E37] text-white px-4 py-2 rounded-full text-2xl"
        >
          ←
        </button>

        <img
          src={images[index]}
          className="w-[700px] h-[450px] object-cover rounded-3xl shadow-xl"
        />

        <button
          onClick={nextImage}
          className="bg-[#6F4E37] text-white px-4 py-2 rounded-full text-2xl"
        >
          →
        </button>

      </div>

    </section>
  );
}