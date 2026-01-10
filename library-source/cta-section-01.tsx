/**
 * CTA Section 01 - "Final Conversion Push"
 * 
 * Strong call-to-action to drive signups before footer.
 * Features: Bold headline, single focused CTA, urgency
 * 
 * Usage:
 * import CTASection01 from '@/components/library/cta-section-01'
 */

export default function CTASection01() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Ready to build the future?
        </h2>
        
        <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-2xl mx-auto">
          Join thousands of developers shipping AI products faster than ever before.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-lg hover:bg-purple-50 transition-all hover:scale-105 shadow-xl">
            Start Building Free
          </button>
          <button className="px-10 py-5 border-2 border-white/30 text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-all">
            Talk to Sales
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-purple-100">
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Free 14-day trial</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
