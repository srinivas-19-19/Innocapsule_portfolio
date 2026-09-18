import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Copy, Check, ArrowUpRight, Send, X, ExternalLink, Monitor } from 'lucide-react'

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const contactEmail = 'innocapsule@gmail.com'

  const emailSubject = encodeURIComponent('Innocapsule Project Inquiry')
  const emailBody = encodeURIComponent('Hi InnoCapsule Team,\n\nI would like to discuss a project with you.\n\nBest regards,')

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=${emailSubject}&body=${emailBody}`
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${contactEmail}&subject=${emailSubject}&body=${emailBody}`
  const mailtoUrl = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`

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
            {/* Primary Button: Send Email (Opens email client selector modal) */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FF4500] hover:bg-[#E03E00] text-white text-xs font-bold shadow-[0_4px_16px_rgba(255,69,0,0.35)] hover:shadow-[0_6px_24px_rgba(255,69,0,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Send Email</span>
            </button>

            {/* Direct Instant Action: Open in Gmail (Guaranteed to work in any browser) */}
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Open in Gmail</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Copy Address */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white dark:bg-white/[0.06] hover:bg-black/[0.05] dark:hover:bg-white/[0.1] text-neutral-800 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.1] text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
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

      {/* Interactive Email Client Selection Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-white dark:bg-[#0E131F] border border-black/[0.1] dark:border-white/[0.12] rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 overflow-hidden text-left"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/[0.08] hover:bg-neutral-200 dark:hover:bg-white/[0.15] text-neutral-600 dark:text-neutral-400 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FF4500]/10 text-[#FF4500] flex items-center justify-center border border-[#FF4500]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    Send Email to InnoCapsule
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Choose how you would like to compose your message
                  </p>
                </div>
              </div>

              {/* Address Quick Badge */}
              <div className="mt-4 p-3 rounded-xl bg-neutral-100 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                <span className="font-mono-tech text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-semibold select-all">
                  {contactEmail}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-md bg-white dark:bg-white/[0.1] hover:bg-[#FF4500] hover:text-white text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Options List */}
              <div className="mt-5 space-y-2.5">
                {/* 1. Gmail Web (Recommended) */}
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsModalOpen(false)}
                  className="group p-3.5 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] hover:bg-[#FF4500]/10 border border-black/[0.06] dark:border-white/[0.06] hover:border-[#FF4500]/40 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#EA4335]/10 text-[#EA4335] flex items-center justify-center font-bold text-xs">
                      G
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-[#FF4500] transition-colors">
                          Gmail (Web)
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-[#FF4500]/15 text-[#FF4500]">
                          Recommended
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        Opens Gmail composer in your browser with prefilled details
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#FF4500] transition-colors" />
                </a>

                {/* 2. Default System Mail App (mailto) */}
                <a
                  href={mailtoUrl}
                  onClick={() => setIsModalOpen(false)}
                  className="group p-3.5 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] hover:bg-[#FF4500]/10 border border-black/[0.06] dark:border-white/[0.06] hover:border-[#FF4500]/40 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FF4500]/10 text-[#FF4500] flex items-center justify-center">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-[#FF4500] transition-colors">
                        Default Mail App
                      </span>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        Launches your installed email software (Apple Mail, Outlook, etc.)
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FF4500] transition-colors" />
                </a>

                {/* 3. Outlook Web */}
                <a
                  href={outlookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsModalOpen(false)}
                  className="group p-3.5 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] hover:bg-[#FF4500]/10 border border-black/[0.06] dark:border-white/[0.06] hover:border-[#FF4500]/40 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0078D4]/10 text-[#0078D4] flex items-center justify-center font-bold text-xs">
                      O
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-[#FF4500] transition-colors">
                        Outlook (Web)
                      </span>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        Opens Outlook / Office 365 webmail in a new tab
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#FF4500] transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
