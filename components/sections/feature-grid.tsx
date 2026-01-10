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
    <section className="py-32 px-6 bg-[#FAFAFA] border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-24">
          <div className="font-mono text-[11px] uppercase tracking-wider text-[#999999] mb-4">
            / Features
          </div>
          <h2 className="text-[48px] md:text-[64px] leading-[1] font-bold max-w-3xl">
            Built different.
          </h2>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5]">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-12 hover:bg-[#FF3366] group transition-all duration-500 cursor-default"
            >
              <h3 className="font-mono text-[14px] uppercase tracking-wider font-bold mb-4 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-[#666666] group-hover:text-white/90 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
