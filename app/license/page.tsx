export default function LicensePage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#00FFFF] mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#00FFFF]" />
            <span>/ License</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Simple licensing.
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8 text-[#999999] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What you can do</h2>
            <ul className="space-y-2 list-inside">
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF] mt-1">✓</span>
                <span>Use components in unlimited personal and commercial projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF] mt-1">✓</span>
                <span>Modify and customize the code however you want</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF] mt-1">✓</span>
                <span>Use for client work (agencies and freelancers)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF] mt-1">✓</span>
                <span>No attribution required</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What you can't do</h2>
            <ul className="space-y-2 list-inside">
              <li className="flex items-start gap-3">
                <span className="text-[#FF0066] mt-1">✗</span>
                <span>Resell or redistribute the components as-is</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF0066] mt-1">✗</span>
                <span>Create a competing product using our components</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF0066] mt-1">✗</span>
                <span>Share your license key with others</span>
              </li>
            </ul>
          </section>

          <section className="pt-8">
            <p className="text-sm text-[#666666]">
              Questions about licensing? <a href="/contact" className="text-[#00FFFF] hover:text-white transition-colors">Get in touch</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
