import React from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../../data/site'
import { Button } from '../ui/Button'
import { Terminal } from 'lucide-react'

export const HeroCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full max-w-md"
    >
      <Button
        variant="primary"
        size="lg"
        icon
        href={siteConfig.cta.workLink}
        className="w-full sm:w-auto text-sm sm:text-base justify-center"
      >
        {siteConfig.cta.primary}
      </Button>

      <Button
        variant="secondary"
        size="lg"
        href={siteConfig.cta.contactLink}
        className="w-full sm:w-auto text-sm sm:text-base justify-center"
      >
        <span className="flex items-center justify-center gap-2">
          <Terminal className="w-4 h-4 text-neutral-400 group-hover:text-[#FF4500] transition-colors" />
          {siteConfig.cta.secondary}
        </span>
      </Button>
    </motion.div>
  )
}
