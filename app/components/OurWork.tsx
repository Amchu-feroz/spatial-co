"use client";

export default function OurWork() {

  const works = [
    "https://images.unsplash.com/photo-1614622352876-4a90d2515f0d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1653427603178-9a5d1bc21086?q=80&w=727&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661881396947-8818501ba641?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section id="our-work" className="py-20 bg-[#F5E6D3] text-center">

      <h2 className="text-4xl font-bold mb-10 text-[#5C3A21]">
        Our Work
      </h2>

      {/* Single Row + Dynamic Hover */}
      <div className="flex justify-center gap-6 px-10 flex-wrap">

        {works.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="work"
            className="w-64 h-72 object-cover rounded-lg shadow-lg 
                       transition duration-300 ease-in-out 
                       transform hover:scale-110 hover:shadow-2xl"
          />
        ))}

      </div>

    </section>
  );
}