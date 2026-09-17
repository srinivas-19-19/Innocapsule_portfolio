import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { Button } from '../ui/Button'
import { BrandMark } from '../ui/BrandMark'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-50 bg-[#06070B]/95 backdrop-blur-2xl flex flex-col px-6 py-6 lg:hidden"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center">
              <BrandMark size={28} withText={true} />
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-5 my-auto py-8">
            {siteConfig.navItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx, duration: 0.3 }}
                className="text-2xl font-medium text-neutral-300 hover:text-[#00F0FF] transition-colors py-1 flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono-tech text-neutral-600 group-hover:text-[#00F0FF]/60 transition-colors">
                  0{idx + 1}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Footer CTA & meta in menu */}
          <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center"
              href={siteConfig.cta.contactLink}
              onClick={onClose}
            >
              {siteConfig.cta.secondary}
            </Button>
            <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-500 pt-2">
              <span>{siteConfig.meta.status}</span>
              <span>{siteConfig.meta.version}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
