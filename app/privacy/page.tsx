export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#00FFFF]" />
            <span>/ Privacy Policy</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-[#999999]">Last updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-[#999999] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as your email address and 
              payment information when you make a purchase. We also collect usage data to improve our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>
              We use your information to provide our services, process payments, send product updates, 
              and improve the UIHero platform. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. 
              Payment information is processed securely through our payment provider and not stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Analytics</h2>
            <p>
              We use cookies and analytics tools to understand how visitors use our site. 
              This helps us improve the user experience and our products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. 
              Contact us to exercise these rights or if you have privacy concerns.
            </p>
          </section>

          <section className="pt-8">
            <p className="text-sm text-[#666666]">
              Questions about privacy? <a href="/contact" className="text-[#00FFFF] hover:text-white transition-colors">Get in touch</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
