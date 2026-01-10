"use client";

import { useState } from 'react';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Add your form submission logic here
    console.log({ email, message });
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#00FFFF]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-2xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in touch
          </h2>
          <p className="text-xl text-[#999999]">
            Questions about UIHero? We're here to help.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Message Textarea */}
          <div className="relative group">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={8}
              required
              className="w-full px-6 py-6 bg-[#1A1A1A] border border-white/10 text-white placeholder:text-[#666666] focus:border-[#00FFFF] focus:outline-none transition-all duration-300 resize-none"
            />
            {/* Corner accents that appear on focus */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-transparent group-focus-within:border-[#00FFFF] transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-transparent group-focus-within:border-[#00FFFF] transition-colors duration-300" />
          </div>

          {/* Email Input with Send Button */}
          <div className="flex gap-4">
            <div className="relative flex-1 group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourmail@image.com"
                required
                className="w-full px-6 py-5 bg-[#1A1A1A] border border-white/10 text-white placeholder:text-[#666666] focus:border-[#00FFFF] focus:outline-none transition-all duration-300"
              />
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent group-focus-within:border-[#00FFFF] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent group-focus-within:border-[#00FFFF] transition-colors duration-300" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-5 bg-white text-black font-mono text-sm uppercase tracking-[0.15em] hover:bg-[#00FFFF] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative group"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black/20" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black/20" />
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-16 text-center space-y-4">
          <div className="text-[#999999]">
            <span>Email us at </span>
            <a 
              href="mailto:hi@uihero.dev" 
              className="text-white hover:text-[#00FFFF] transition-colors duration-300"
            >
              hi@uihero.dev
            </a>
          </div>
          <div className="text-[#999999]">
            <span>Find us on </span>
            <a 
              href="https://twitter.com/uihero" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00FFFF] transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
