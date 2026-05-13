"use client";

export default function Hero() {
  return (
    <div id="home" className="relative h-screen w-full scroll-mt-20">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1633505899118-4ca6bd143043?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="Interior"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-10 md:px-24 text-white">

        <div className="max-w-2xl">

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Spatial & Co
          </h1>

          <p className="text-xl md:text-2xl text-[#E6CCB2] mb-4">
            Designed. Managed. Delivered.
          </p>

          <p className="text-lg text-[#F5E6D3] mb-8">
            Luxury interiors crafted with elegance and comfort.
          </p>

          <a href="#our-work">
            <button className="bg-[#A47148] hover:bg-[#8B5E3C] transition px-8 py-3 rounded-lg text-lg">
              Explore Designs
            </button>
          </a>

        </div>

      </div>
    </div>
  );
}