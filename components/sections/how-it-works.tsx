export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Pick",
      description: "Browse 6 sections. Each solves a landing page problem."
    },
    {
      number: "02",
      title: "Copy",
      description: "TypeScript + Tailwind. Paste into your Next.js app."
    },
    {
      number: "03",
      title: "Ship",
      description: "Customize in 10 minutes. Deploy. Done."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-24">
          <div className="font-mono text-[11px] uppercase tracking-wider text-[#999999] mb-4">
            / How It Works
          </div>
          <h2 className="text-[48px] md:text-[64px] leading-[1] font-bold max-w-3xl">
            Three steps.
            <br />
            <span className="text-[#999999]">Zero friction.</span>
          </h2>
        </div>
        
        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <div className="font-mono text-[72px] font-bold leading-none mb-6 text-[#FF3366] group-hover:text-[#1A1A1A] transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-[32px] font-bold mb-4">{step.title}</h3>
              <p className="text-[18px] leading-[1.6] text-[#666666]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
