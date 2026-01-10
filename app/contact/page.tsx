export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#00FFFF]" />
            <span>/ Contact</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Get in touch.
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <div className="space-y-6 text-lg text-[#999999]">
            <p>
              Have questions about UIHero? Need custom sections for your project? 
              Want to report a bug or request a feature?
            </p>
            <p className="text-white">
              We'd love to hear from you.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href="mailto:hello@uihero.dev"
              className="p-8 bg-[#161616] border-2 border-transparent hover:border-[#00FFFF]/50 transition-all group"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-4">
                Email
              </div>
              <div className="text-xl text-white group-hover:text-[#00FFFF] transition-colors">
                hello@uihero.dev
              </div>
            </a>

            <a 
              href="https://twitter.com/uihero"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-[#161616] border-2 border-transparent hover:border-[#00FFFF]/50 transition-all group"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-4">
                Twitter
              </div>
              <div className="text-xl text-white group-hover:text-[#00FFFF] transition-colors">
                @uihero
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
