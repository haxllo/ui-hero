/**
 * Features Section 01 - "3-Column Feature Grid"
 * 
 * Showcase your AI product's key features with icons and descriptions.
 * Features: Icon grid, hover effects, benefit-driven copy
 * 
 * Usage:
 * import FeaturesSection01 from '@/components/library/features-section-01'
 */

export default function FeaturesSection01() {
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Process millions of requests per second with our optimized AI infrastructure."
    },
    {
      icon: "🎯",
      title: "Highly Accurate",
      description: "State-of-the-art models delivering 99.9% accuracy on your tasks."
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption for all your data."
    },
    {
      icon: "🌐",
      title: "Global Scale",
      description: "Deploy to 50+ regions worldwide with automatic failover."
    },
    {
      icon: "💡",
      title: "Easy Integration",
      description: "One API call to integrate. Works with any tech stack in minutes."
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Monitor performance, costs, and usage with beautiful dashboards."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to ship AI products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for developers who want to focus on building, not infrastructure
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-500 hover:shadow-xl transition-all duration-300 bg-white"
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
