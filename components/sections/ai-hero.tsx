export default function AIHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
          ✨ Trusted by 500+ AI startups
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Make Your AI Startup
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Look Funded
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Copy-paste landing sections built for AI founders who need trust, fast.
          No design skills needed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Browse Sections
          </button>
          <button className="px-8 py-4 border border-white/30 rounded-lg hover:bg-white/10 transition-colors text-lg">
            View Demo
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-sm uppercase tracking-wider">Trusted by</div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="px-6 py-2 bg-white/10 rounded">Logo 1</div>
            <div className="px-6 py-2 bg-white/10 rounded">Logo 2</div>
            <div className="px-6 py-2 bg-white/10 rounded">Logo 3</div>
            <div className="px-6 py-2 bg-white/10 rounded">Logo 4</div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}
