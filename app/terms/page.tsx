export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#00FFFF]" />
            <span>/ Terms of Service</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-[#999999]">Last updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-[#999999] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using UIHero, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use of Service</h2>
            <p>
              UIHero provides landing page components for use in your projects. You are responsible 
              for how you use these components and ensuring your use complies with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Payment and Refunds</h2>
            <p>
              Payments are processed securely through our payment provider. All sales are final. 
              We do not offer refunds except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>
              Upon purchase, you receive a license to use the components as described in our licensing terms. 
              UIHero retains all ownership rights to the original components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>
              UIHero is provided "as is" without warranties of any kind. We are not liable for any 
              damages arising from your use of the service.
            </p>
          </section>

          <section className="pt-8">
            <p className="text-sm text-[#666666]">
              Questions about these terms? <a href="/contact" className="text-[#00FFFF] hover:text-white transition-colors">Contact us</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
