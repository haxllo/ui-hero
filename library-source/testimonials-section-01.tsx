/**
 * Testimonials Section 01 - "Social Proof Grid"
 * 
 * Customer testimonials in a clean grid layout.
 * Features: Profile images, quotes, company names
 * 
 * Usage:
 * import TestimonialsSection01 from '@/components/library/testimonials-section-01'
 */

export default function TestimonialsSection01() {
  const testimonials = [
    {
      quote: "This platform cut our AI development time by 80%. We shipped our MVP in 2 weeks instead of 2 months.",
      author: "Sarah Chen",
      role: "CTO",
      company: "DataViz AI",
      avatar: "bg-gradient-to-br from-purple-400 to-pink-400"
    },
    {
      quote: "The best AI infrastructure I've worked with. Fast, reliable, and the support team is incredible.",
      author: "Marcus Rodriguez",
      role: "Lead Engineer",
      company: "AutoML Labs",
      avatar: "bg-gradient-to-br from-cyan-400 to-blue-400"
    },
    {
      quote: "We scaled from 0 to 1M API calls without any infrastructure headaches. Just works.",
      author: "Emily Zhang",
      role: "Founder",
      company: "Neural Insights",
      avatar: "bg-gradient-to-br from-green-400 to-emerald-400"
    },
    {
      quote: "Finally, an AI platform that doesn't require a PhD to use. Our team was productive on day one.",
      author: "James Wilson",
      role: "Product Manager",
      company: "Cognition Inc",
      avatar: "bg-gradient-to-br from-orange-400 to-red-400"
    },
    {
      quote: "The accuracy and speed are unmatched. Our customers immediately noticed the quality improvement.",
      author: "Priya Sharma",
      role: "VP Engineering",
      company: "SmartChat",
      avatar: "bg-gradient-to-br from-indigo-400 to-purple-400"
    },
    {
      quote: "Migrated from our homegrown solution in a weekend. Wish we'd found this 6 months ago.",
      author: "Alex Kim",
      role: "Senior Developer",
      company: "VisionAI",
      avatar: "bg-gradient-to-br from-yellow-400 to-orange-400"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by thousands of developers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about building with us
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatar}`}></div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
