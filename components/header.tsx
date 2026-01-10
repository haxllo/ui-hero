export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg"></div>
          <span className="text-xl font-bold text-gray-900">UI Hero</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sections" className="text-gray-600 hover:text-gray-900 transition-colors">
            Sections
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </a>
          <a href="#examples" className="text-gray-600 hover:text-gray-900 transition-colors">
            Examples
          </a>
        </nav>
        
        <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold">
          Get Started
        </button>
      </div>
    </header>
  );
}
