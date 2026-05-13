export default function FAQ() {

  const faqs = [
    {
      q: "How long does interior design take?",
      a: "Usually between 2 to 6 weeks depending on the project size.",
    },

    {
      q: "Do you provide custom furniture?",
      a: "Yes, we provide customized furniture and decor solutions.",
    },

    {
      q: "Do you work for apartments and villas?",
      a: "Yes, we design interiors for apartments, villas, and offices.",
    },
  ];

  return (
    <section className="py-24 px-10 bg-[#DDB892]">

      <h2 className="text-5xl font-bold text-center mb-12 text-[#4B2E2B]">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#E6CCB2] p-8 rounded-3xl shadow-xl"
          >

            <h3 className="font-semibold text-2xl mb-4 text-[#4B2E2B]">
              {faq.q}
            </h3>

            <p className="text-lg text-[#5C4033] leading-8">
              {faq.a}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}