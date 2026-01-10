export default function FeatureGrid() {
  const features = [
    {
      icon: "⚡",
      title: "Conversion-Focused",
      description: "Every section is designed to build trust and drive action, not just look pretty."
    },
    {
      icon: "🎯",
      title: "AI-Specific Copy",
      description: "Pre-written copy that speaks to AI product users. Edit to match your brand."
    },
    {
      icon: "🚀",
      title: "Next.js + Tailwind",
      description: "Modern stack. Zero dependencies. Production-ready code you can trust."
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Every section looks perfect on mobile, tablet, and desktop out of the box."
    },
    {
      icon: "🎨",
      title: "Easy Customization",
      description: "Change colors, fonts, and layout with simple Tailwind classes."
    },
    {
      icon: "⚖️",
      title: "Commercial License",
      description: "Use in unlimited projects. No attribution required. You own the code."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for AI Founders Who Ship Fast
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop wrestling with design. Start with sections that convert.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
