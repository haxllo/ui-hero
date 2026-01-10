"use client";

export default function TestimonialsSection01() {
  const testimonials = [
    {
      quote: "This changed everything. We shipped our landing page in one afternoon. Best $39 I've ever spent.",
      author: "Sarah Chen",
      role: "Founder",
      company: "Vertex AI"
    },
    {
      quote: "Finally, components that don't look like every other SaaS. The attention to detail is insane.",
      author: "Marcus Reid",
      role: "Design Lead",
      company: "Quantum Labs"
    },
    {
      quote: "I was skeptical about pre-made components. Then I saw these. They're legitimately beautiful.",
      author: "Priya Sharma",
      role: "CEO",
      company: "NeuralFlow"
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-black">
      {/* Magazine-style layout */}
      <div className="max-w-7xl mx-auto">
        {/* Editorial header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 bg-rose-500 rounded-full" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-600">Testimonials</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-serif italic text-white leading-[1.1] tracking-tight">
            What people
            <br />
            are saying
          </h2>
        </div>

        {/* Testimonial cards - magazine spread style */}
        <div className="grid gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative border-t border-zinc-800 pt-12 ${
                index % 2 === 0 ? 'md:pr-32' : 'md:pl-32'
              }`}
            >
              {/* Large quote */}
              <blockquote className="text-3xl md:text-4xl font-light text-white leading-[1.4] mb-8 group-hover:text-zinc-300 transition-colors duration-500">
                "{testimonial.quote}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-6">
                {/* Initial circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                  <span className="text-2xl font-serif text-white">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>

                {/* Details */}
                <div>
                  <div className="text-white font-medium text-lg mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-zinc-500 text-sm">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Decorative number */}
              <div className="absolute top-8 right-8 text-[120px] font-black text-zinc-950 leading-none pointer-events-none">
                {(index + 1).toString().padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
