import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react'

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const contactEmail = 'innocapsule@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 border-t border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#070A0F] overflow-hidden transition-colors"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-[#FF4500]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span className="text-xs font-mono-tech text-[#FF4500] uppercase tracking-widest font-semibold">
              // 05 // CONTACT
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight"
          >
            Let's Build Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal leading-relaxed mt-1"
          >
            Have an ambitious product idea, technical requirements, or want to collaborate with our team? Reach out directly via email.
          </motion.p>
        </div>

        {/* Minimal High-Impact Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-neutral-50/80 dark:bg-[#090D15] border border-black/[0.08] dark:border-white/[0.08] p-8 sm:p-12 shadow-[0_16px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)] flex flex-col items-center relative overflow-hidden"
        >
          {/* Subtle tech grid pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none rounded-3xl" />

          {/* Mail Icon Avatar */}
          <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#FF4500]/10 text-[#FF4500] flex items-center justify-center mb-5 border border-[#FF4500]/20 shadow-sm">
            <Mail className="w-6 h-6" />
          </div>

          <div className="relative z-10 text-xs font-mono-tech text-neutral-400 uppercase tracking-wider mb-2">
            Direct Email Transmission
          </div>

          {/* Email Address */}
          <div className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono-tech text-neutral-900 dark:text-white tracking-tight mb-8 select-all">
            {contactEmail}
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a
              href={`mailto:${contactEmail}?subject=Innocapsule%20Project%20Inquiry`}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#FF4500] hover:bg-[#E03E00] text-white text-xs font-bold shadow-[0_4px_16px_rgba(255,69,0,0.35)] hover:shadow-[0_6px_24px_rgba(255,69,0,0.5)] transition-all flex items-center justify-center gap-2"
            >
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white dark:bg-white/[0.06] hover:bg-black/[0.05] dark:hover:bg-white/[0.1] text-neutral-800 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.1] text-xs font-semibold transition-all flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-500" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
