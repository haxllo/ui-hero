export default function SocialProof() {
  const stats = [
    { number: "500+", label: "AI Startups" },
    { number: "10k+", label: "Conversions" },
    { number: "30min", label: "Avg. Launch Time" },
    { number: "4.9/5", label: "User Rating" }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by AI Founders Worldwide
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Join hundreds of teams building credible landing pages in record time
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg text-purple-100">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <p className="text-xl md:text-2xl text-center mb-6 leading-relaxed">
            "We went from blank Figma to a live landing page in 2 hours. 
            UI Hero gave us the confidence to launch fast."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-300"></div>
            <div>
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-sm text-purple-100">Founder, AI Analytics Co.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
