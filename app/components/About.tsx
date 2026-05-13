"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#FAF3E8] text-center scroll-mt-20">

      <h2 className="text-4xl font-bold text-[#5C3A21] mb-6">
        About Us
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-[#6F4E37] leading-relaxed">
        At The Spatial & Co, we specialize in crafting elegant and modern
        interior spaces that reflect your personality and lifestyle.
        Our designs blend comfort with aesthetics to create timeless living experiences.
      </p>

      <div className="flex justify-center gap-6 mt-10">

        <img
          src="https://plus.unsplash.com/premium_photo-1683121871939-0a87b0f3146a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about1"
          className="w-64 h-64 object-cover rounded-lg shadow-md"
        />

        <img
          src="https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about2"
          className="w-64 h-64 object-cover rounded-lg shadow-md"
        />

      </div>

    </section>
  );
}