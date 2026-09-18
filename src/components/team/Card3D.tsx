import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { TeamMember } from '../../data/team'
import { BrandMark } from '../ui/BrandMark'
import { Wifi, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react'

interface Card3DProps {
  member: TeamMember
  onOpenDeveloper?: (id: 'founder' | 'co-founder') => void
}

export const Card3D: React.FC<Card3DProps> = ({ member, onOpenDeveloper }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  // Motion values for free dragging
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)

  // Smooth springs for fluid inertia
  const smoothX = useSpring(dragX, { stiffness: 220, damping: 20 })
  const smoothY = useSpring(dragY, { stiffness: 220, damping: 20 })

  // 3D tilt transformations calculated dynamically from drag displacement
  const rotateX = useTransform(smoothY, [-160, 160], [22, -22])
  const rotateY = useTransform(smoothX, [-160, 160], [-22, 22])
  const rotateZ = useTransform(smoothX, [-160, 160], [-6, 6])

  // Holographic light sheen position
  const sheenX = useTransform(smoothX, [-160, 160], ['120%', '-20%'])
  const sheenY = useTransform(smoothY, [-160, 160], ['120%', '-20%'])

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center py-6 select-none"
      style={{ perspective: 1200 }}
    >
      {/* Top Anchor Pin for Lanyard Cord */}
      <div className="absolute top-0 z-20 flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-[#101726] border-2 border-white/20 shadow-[0_0_12px_rgba(255,69,0,0.4)] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#FF4500]" />
        </div>
      </div>

      {/* SVG Lanyard Strap */}
      <svg
        className="absolute top-2 w-[300px] h-[90px] pointer-events-none z-10 overflow-visible"
        aria-hidden="true"
      >
        <line
          x1="150"
          y1="0"
          x2="150"
          y2="55"
          stroke="rgba(255, 69, 0, 0.55)"
          strokeWidth="3"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />
        {/* Metal Carabiner Clip */}
        <rect
          x="143"
          y="48"
          width="14"
          height="12"
          rx="3"
          fill="#1E293B"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1.5"
        />
      </svg>

      {/* 3D Draggable ID Card Chassis */}
      <motion.div
        drag
        dragConstraints={{ left: -140, right: 140, top: -110, bottom: 110 }}
        dragElastic={0.2}
        dragSnapToOrigin={true}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false)
          dragX.set(0)
          dragY.set(0)
        }}
        style={{
          x: smoothX,
          y: smoothY,
          rotateX,
          rotateY,
          rotateZ,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative w-[300px] sm:w-[320px] rounded-2xl bg-gradient-to-b from-[#141A24]/95 via-[#0F131A]/95 to-[#090B0E]/95 border border-white/15 p-6 backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing transition-shadow duration-300 mt-12 overflow-hidden ${
          isDragging
            ? 'shadow-[0_30px_70px_rgba(255,69,0,0.3)] border-[#FF4500]/50 ring-1 ring-[#FF4500]/40'
            : 'hover:border-white/25'
        }`}
      >
        {/* Holographic Specular Sheen Overlay */}
        <motion.div
          className="absolute -inset-full pointer-events-none opacity-40 mix-blend-overlay z-30"
          style={{
            background:
              'linear-gradient(115deg, transparent 25%, rgba(255,69,0,0.25) 45%, rgba(255,255,255,0.6) 50%, rgba(255,69,0,0.25) 55%, transparent 75%)',
            x: sheenX,
            y: sheenY,
          }}
        />

        {/* Lanyard Top Punch Hole Slot */}
        <div className="mx-auto w-14 h-2.5 rounded-full bg-[#06070B] border border-white/15 mb-4 shadow-inner flex items-center justify-center">
          <div className="w-10 h-1 rounded-full bg-black/80" />
        </div>

        {/* Header Row: Logo & Security Hardware */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
          <BrandMark size={20} withText={true} animate={false} />

          {/* Holographic Security Chip & Contactless Icon */}
          <div className="flex items-center gap-2">
            <Wifi className="w-3.5 h-3.5 text-[#FF4500] rotate-90 opacity-90" />
            {/* EMV Microchip */}
            <div className="w-7 h-5 rounded bg-gradient-to-tr from-amber-600/90 via-amber-400 to-amber-300 border border-amber-300/50 relative overflow-hidden shadow-sm flex items-center justify-center">
              <div className="w-full h-[1px] bg-amber-900/60 absolute top-1.5" />
              <div className="w-full h-[1px] bg-amber-900/60 absolute bottom-1.5" />
              <div className="h-full w-[1px] bg-amber-900/60 absolute left-2" />
              <div className="h-full w-[1px] bg-amber-900/60 absolute right-2" />
            </div>
          </div>
        </div>

        {/* Portrait Photo Container */}
        <div className="relative w-full aspect-[4/4.2] rounded-xl overflow-hidden border border-white/15 bg-[#06070B] shadow-inner mb-4 group">
          <img
            src={member.image}
            alt={`${member.role} of Innocapsule`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            draggable={false}
          />

          {/* Gradient Vignette overlay on photo bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F131A] via-transparent to-transparent opacity-85" />

          {/* Active Security Hologram Stamp */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#06070B]/80 border border-[#FF4500]/40 backdrop-blur-md text-[9px] font-mono-tech text-[#FF4500]">
            <ShieldCheck className="w-3 h-3 text-[#FF4500]" />
            <span>VERIFIED</span>
          </div>

          {/* Member ID Tag Pill */}
          <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 border border-white/10 text-[10px] font-mono-tech text-neutral-300">
            {member.badgeId}
          </div>
        </div>

        {/* Member Details */}
        <div className="flex flex-col gap-2 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono-tech text-[#FF4500] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] animate-pulse" />
              {member.role}
            </span>
            <span className="text-[10px] font-mono-tech text-neutral-500">
              {member.clearance}
            </span>
          </div>

          <h3 className="text-xl font-extrabold text-white tracking-tight">
            {member.subtitle}
          </h3>

          <p className="text-xs text-neutral-400 leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Focus Pillars */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {member.focus.map((f) => (
            <span
              key={f}
              className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.08]"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Direct Link to Developer Showcase */}
        {onOpenDeveloper && (
          <button
            onClick={() => onOpenDeveloper(member.id as 'founder' | 'co-founder')}
            type="button"
            className="w-full py-2 px-3 rounded-xl bg-[#FF4500]/15 hover:bg-[#FF4500] text-[#FF4500] hover:text-white border border-[#FF4500]/30 hover:border-transparent text-xs font-semibold flex items-center justify-center gap-1.5 transition-all mb-3 cursor-pointer"
          >
            <span>Open Developer Profile</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}

        {/* Bottom Barcode Security Foil */}
        <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {/* Simulated Barcode */}
            <div className="flex items-center gap-[2px] h-5 opacity-70">
              <div className="w-[1.5px] h-full bg-white" />
              <div className="w-[3px] h-full bg-white" />
              <div className="w-[1px] h-full bg-white" />
              <div className="w-[2.5px] h-full bg-white" />
              <div className="w-[1.5px] h-full bg-white" />
              <div className="w-[3.5px] h-full bg-white" />
              <div className="w-[1px] h-full bg-white" />
              <div className="w-[2px] h-full bg-white" />
              <div className="w-[3px] h-full bg-white" />
              <div className="w-[1px] h-full bg-white" />
            </div>
            <span className="text-[9px] font-mono-tech text-neutral-500">
              INNOCAPSULE // AUTH-ID
            </span>
          </div>

          <div className="text-[9px] font-mono-tech text-[#FF4500]/90 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            <span>DRAG TO TILT</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
