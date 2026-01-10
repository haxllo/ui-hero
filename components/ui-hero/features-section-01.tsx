"use client";

export default function FeaturesSection01() {
  const features = [
    {
      title: "Pixel Perfect",
      description: "Every detail matters. Components designed with obsessive attention to spacing, typography, and visual rhythm.",
      icon: "✦"
    },
    {
      title: "Dark Mode Native",
      description: "Built dark-first. No afterthoughts. Deep blacks, subtle grays, and vibrant accents that pop.",
      icon: "◆"
    },
    {
      title: "Copy & Ship",
      description: "Zero build process. Copy the code, paste into your project, customize colors, deploy. Done in minutes.",
      icon: "⬡"
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Elegant grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Refined header */}
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-zinc-400 to-transparent mx-auto mb-6" />
            <h2 className="text-6xl md:text-7xl font-light text-white tracking-tight">
              Crafted with
              <br />
              <span className="font-serif italic text-zinc-400">intention</span>
            </h2>
          </div>
        </div>

        {/* Magnetic cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-12 bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-zinc-900/50 cursor-default will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            >
              {/* Floating icon */}
              <div className="text-7xl text-zinc-700 group-hover:text-zinc-500 transition-colors duration-300 mb-8 will-change-transform" style={{ transform: 'translateZ(0)' }}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-light text-white mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-zinc-800 group-hover:border-zinc-600 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>
    </section>
  );
}
