/**
 * Testimonials Section 01 - "Social Validation"
 * 
 * Customer testimonials in a high-end dark grid.
 * Features: Glowing cards, glassmorphism, refined typography.
 * 
 * Usage:
 * import TestimonialsSection01 from '@/components/library/testimonials-section-01'
 */

export default function TestimonialsSection01() {
  const testimonials = [
    {
      quote: "This infrastructure layer allowed us to scale from 1k to 1M requests overnight without touching a single config file.",
      author: "Dr. Aris Thorne",
      role: "Lead Scientist",
      company: "Cognitive Flux",
      avatar: "bg-cyan-500/20 text-cyan-400"
    },
    {
      quote: "The low-latency response times are unlike anything we've tested. Essential for real-time AI applications.",
      author: "Elena Vance",
      role: "CTO",
      company: "Nova Systems",
      avatar: "bg-purple-500/20 text-purple-400"
    },
    {
      quote: "Finally, a developer-first AI platform. The integration took minutes, and the observability is world-class.",
      author: "Julian Reed",
      role: "SRE",
      company: "Vector Lab",
      avatar: "bg-blue-500/20 text-blue-400"
    },
    {
      quote: "We've reduced our compute costs by 40% while increasing model throughput. A no-brainer for any serious startup.",
      author: "Sarah Jenkins",
      role: "Founder",
      company: "Aether AI",
      avatar: "bg-emerald-500/20 text-emerald-400"
    },
    {
      quote: "The support team actually understands LLM orchestration. They've been a partner, not just a vendor.",
      author: "Marcus Sol",
      role: "VP Eng",
      company: "Deep Logic",
      avatar: "bg-orange-500/20 text-orange-400"
    },
    {
      quote: "The most stable API in the industry. We haven't had a single minute of downtime in 6 months of heavy usage.",
      author: "Lisa Chen",
      role: "Backend Lead",
      company: "Omni Mind",
      avatar: "bg-indigo-500/20 text-indigo-400"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Next Generation
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From solo labs to enterprise clusters, we provide the backbone for tomorrow's intelligent systems.
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/[0.03] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="mb-6">
                {/* 5-star rating (simplified) */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-cyan-500/50" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed text-lg italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs ${testimonial.avatar} border border-white/10`}>
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-cyan-400 transition-colors">{testimonial.author}</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
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
