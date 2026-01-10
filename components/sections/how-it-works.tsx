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
    <section className="py-32 px-6 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00FFFF 1px, transparent 1px),
            linear-gradient(to bottom, #00FFFF 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="mb-24">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#00FFFF]" />
            <span>/ How It Works</span>
          </div>
          <h2 className="text-[48px] md:text-[64px] leading-[1] font-bold max-w-3xl text-white">
            Three steps.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/20">Zero friction.</span>
          </h2>
        </div>
        
        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, idx) => (
            <div key={step.number} className="group relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#00FFFF]/20 group-hover:border-[#00FFFF] transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#00FFFF]/20 group-hover:border-[#00FFFF] transition-colors duration-500" />
              
              <div className="p-8">
                <div className="font-mono text-[72px] font-bold leading-none mb-6 text-[#00FFFF] group-hover:scale-110 transition-transform duration-500">
                  {step.number}
                </div>
                <h3 className="text-[32px] font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-[18px] leading-[1.6] text-[#999999]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
