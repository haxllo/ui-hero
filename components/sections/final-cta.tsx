export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Stop Worrying About Design.
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Start Shipping.
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join 500+ AI founders who chose confidence over complexity.
          Your landing page shouldn't be your biggest roadblock.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl">
            Get Started - $39
          </button>
          <button className="px-10 py-5 border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors text-lg">
            See Examples
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>One-time payment</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Lifetime updates</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Commercial license</span>
          </div>
        </div>
      </div>
    </section>
  );
}
