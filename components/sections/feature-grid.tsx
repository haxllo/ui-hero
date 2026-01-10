export default function FeatureGrid() {
  const features = [
    {
      title: "Conversion-First",
      description: "Every pixel drives action. No decoration for decoration's sake."
    },
    {
      title: "Clean Code",
      description: "TypeScript. Tailwind. The kind of code you'd actually write."
    },
    {
      title: "Fast Setup",
      description: "Copy, customize, deploy. 30 minutes, not 30 days."
    },
    {
      title: "Mobile-First",
      description: "Tested on every device. No surprises in production."
    },
    {
      title: "Customizable",
      description: "Change anything with Tailwind. No CSS wrestling."
    },
    {
      title: "Licensed",
      description: "Commercial use. Client work. Your SaaS. Anywhere."
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-24">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#00FFFF]" />
            <span>/ Features</span>
          </div>
          <h2 className="text-[48px] md:text-[64px] leading-[1] font-bold max-w-3xl text-white">
            Built different.
          </h2>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#161616] p-12 hover:bg-gradient-to-br hover:from-[#00FFFF]/10 hover:to-transparent group transition-all duration-500 cursor-default border border-transparent hover:border-[#00FFFF]/30 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/0 to-[#00FFFF]/0 group-hover:from-[#00FFFF]/5 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative">
                <h3 className="font-mono text-[14px] uppercase tracking-[0.15em] font-bold mb-4 text-white group-hover:text-[#00FFFF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-[#999999] group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
