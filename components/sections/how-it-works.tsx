export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Browse Sections",
      description: "Pick from conversion-optimized landing sections built specifically for AI products."
    },
    {
      number: "02",
      title: "Copy the Code",
      description: "One click to copy. Clean Next.js + Tailwind code ready to paste into your project."
    },
    {
      number: "03",
      title: "Ship with Confidence",
      description: "Launch a professional landing page that builds trust and converts visitors."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From Idea to Launch in 30 Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No design experience required. Just copy, paste, and ship.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-7xl font-bold text-purple-100 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              {step.number !== "03" && (
                <div className="hidden md:block absolute top-12 -right-4 text-4xl text-purple-300">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
