import { Box } from '@mui/material'
import React from 'react'

// Soft sky blue base – matches reference: light blue sky, content stays 100% visible
const SKY_GRADIENT = 'linear-gradient(180deg, #e1f5fe 0%, #b3e5fc 22%, #81d4fa 45%, #b3e5fc 70%, #e1f5fe 100%)'

// Fluffy cloud SVG (white with soft blue outline)
const Cloud = ({ left, top, width, opacity }) => (
  <Box
    sx={{
      position: 'absolute',
      left: `${left}%`,
      top: `${top}%`,
      width: width || 140,
      height: (width || 140) * 0.5,
      opacity: opacity ?? 0.5,
      pointerEvents: 'none',
      '& svg': { width: '100%', height: '100%', display: 'block' },
    }}
  >
    <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="35" rx="24" ry="14" fill="rgba(255,255,255,0.85)" stroke="rgba(144,202,249,0.5)" strokeWidth="1.5" />
      <ellipse cx="55" cy="30" rx="28" ry="16" fill="rgba(255,255,255,0.8)" stroke="rgba(144,202,249,0.45)" strokeWidth="1.5" />
      <ellipse cx="88" cy="36" rx="22" ry="12" fill="rgba(255,255,255,0.75)" stroke="rgba(144,202,249,0.4)" strokeWidth="1.5" />
    </svg>
  </Box>
)

// Yellow star / sparkle – smaller
const Star = ({ left, top, size, opacity }) => (
  <Box
    sx={{
      position: 'absolute',
      left: `${left}%`,
      top: `${top}%`,
      width: size || 10,
      height: size || 10,
      opacity: opacity ?? 0.28,
      pointerEvents: 'none',
      '& svg': { width: '100%', height: '100%', display: 'block' },
    }}
  >
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#ffeb3b" d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
    </svg>
  </Box>
)

// Leaf – smaller default size
const Leaf = ({ left, top, size, opacity, rot }) => (
  <Box
    sx={{
      position: 'absolute',
      left: `${left}%`,
      top: `${top}%`,
      width: size || 24,
      height: size || 24,
      opacity: opacity ?? 0.5,
      transform: `rotate(${rot ?? 0}deg)`,
      pointerEvents: 'none',
      '& svg': { width: '100%', height: '100%', display: 'block', shapeRendering: 'geometricPrecision' },
    }}
  >
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
      <path fill="#81c784" stroke="#66bb6a" strokeWidth="0.6" d="M17 8C8 10 6 16 4 21l2 1c.5-.5 1-1 1.5-1.5l1-2 2 1 1-2 2 1 2-3-3-1 2-2-2.5-.5z" />
    </svg>
  </Box>
)

// Pastel candy-like circle – smaller
const PastelBlob = ({ left, top, size, color, opacity }) => (
  <Box
    sx={{
      position: 'absolute',
      left: `${left}%`,
      top: `${top}%`,
      width: size || 10,
      height: size || 10,
      borderRadius: '50%',
      backgroundColor: color,
      opacity: opacity ?? 0.28,
      pointerEvents: 'none',
    }}
  />
)

// Floating food item – smaller size for subtle background
const FloatingFood = ({ left, top, size, opacity, rot, children }) => (
  <Box
    sx={{
      position: 'absolute',
      left: `${left}%`,
      top: `${top}%`,
      width: size || 26,
      height: size || 26,
      minWidth: size || 26,
      minHeight: size || 26,
      opacity: opacity ?? 0.55,
      transform: `rotate(${rot ?? 0}deg)`,
      pointerEvents: 'none',
      '& svg': {
        width: '100%',
        height: '100%',
        display: 'block',
        shapeRendering: 'geometricPrecision',
      },
    }}
  >
    {children}
  </Box>
)

// Simple fruit/veg/snack SVG icons (friendly, cartoon style)
const APPLE_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <path fill="#e53935" stroke="#c62828" strokeWidth="1.2" d="M16 4c-2 4-6 6-6 12 0 5 3 8 6 8s6-3 6-8c0-6-4-8-6-12z" />
    <path fill="#2e7d32" stroke="#1b5e20" strokeWidth="0.8" d="M15 4h2v4h-2z" />
  </svg>
)
const STRAWBERRY_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <path fill="#e53935" stroke="#c62828" strokeWidth="1" d="M16 28c-8 0-12-12-12-18 0-4 4-6 8-6 2 0 4 1 4 4 0-3 2-4 4-4 4 0 8 2 8 6 0 6-4 18-12 18z" />
    <path fill="#2e7d32" stroke="#1b5e20" strokeWidth="0.6" d="M8 10h2v2H8zm6 0h2v2h-2zm4 4h2v2h-2zm-8 0h2v2H8z" />
  </svg>
)
const ORANGE_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <circle fill="#ff9800" stroke="#f57c00" strokeWidth="1" cx="16" cy="16" r="12" />
    <circle fill="#ffb74d" cx="16" cy="14" r="3" opacity="0.6" />
  </svg>
)
const BANANA_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <path fill="#fdd835" stroke="#f9a825" strokeWidth="1" d="M8 24c0 0 4-6 8-8 4-2 10 0 12 4 2 4-2 8-6 8-6 0-10-2-14-4z" />
  </svg>
)
const GRAPES_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <circle fill="#7b1fa2" stroke="#4a148c" strokeWidth="0.8" cx="10" cy="12" r="5" />
    <circle fill="#7b1fa2" stroke="#4a148c" strokeWidth="0.8" cx="22" cy="12" r="5" />
    <circle fill="#7b1fa2" stroke="#4a148c" strokeWidth="0.8" cx="16" cy="20" r="5" />
    <path fill="#558b2f" stroke="#33691e" strokeWidth="0.6" d="M16 26v4" />
  </svg>
)
const CARROT_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <path fill="#ff9800" stroke="#ef6c00" strokeWidth="0.8" d="M16 28L8 12c0 0 4-4 8-4s8 4 8 4L16 28z" />
    <path fill="#2e7d32" stroke="#1b5e20" strokeWidth="0.6" d="M14 8h4v6h-4z" />
  </svg>
)
const TOMATO_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <circle fill="#e53935" stroke="#c62828" strokeWidth="0.8" cx="16" cy="16" r="10" />
    <path fill="#2e7d32" stroke="#1b5e20" strokeWidth="0.6" d="M14 6h4v4h-4z" />
  </svg>
)
const BROCCOLI_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <path fill="#43a047" stroke="#2e7d32" strokeWidth="0.8" d="M16 4v10c0 4 3 6 6 8-2 2-4 4-6 6-2-2-4-4-6-6 3-2 6-4 6-8V4z" />
    <circle fill="#66bb6a" cx="10" cy="14" r="3" />
    <circle fill="#66bb6a" cx="22" cy="14" r="3" />
    <circle fill="#66bb6a" cx="16" cy="10" r="3" />
  </svg>
)
const COOKIE_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <circle fill="#8d6e63" stroke="#5d4037" strokeWidth="0.8" cx="16" cy="16" r="10" />
    <circle fill="#5d4037" cx="11" cy="14" r="1.2" />
    <circle fill="#5d4037" cx="20" cy="12" r="1" />
    <circle fill="#5d4037" cx="15" cy="20" r="1.2" />
  </svg>
)
const CANDY_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <path fill="#ec407a" stroke="#c2185b" strokeWidth="0.8" d="M8 12h16v8H8v-8z" />
    <path fill="#f8bbd0" d="M10 14h4v4h-4v-4zm8 0h4v4h-4v-4z" />
  </svg>
)
const LEAF2_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <path fill="#66bb6a" stroke="#43a047" strokeWidth="0.8" d="M6 28C10 16 16 6 26 4c-4 8-6 16-4 24H6z" />
  </svg>
)
const LEAF3_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <path fill="#81c784" stroke="#66bb6a" strokeWidth="0.8" d="M20 6c-6 4-8 12-4 18 2-4 2-10-2-14z" />
    <path fill="#a5d6a7" d="M12 8c4 2 6 8 4 14-2-4-2-10 2-12z" />
  </svg>
)
const PIZZA_SVG = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
    <path fill="#ff9800" stroke="#ef6c00" strokeWidth="0.8" d="M16 4L4 28h24L16 4z" />
    <circle fill="#e53935" cx="12" cy="16" r="2.5" />
    <circle fill="#e53935" cx="20" cy="14" r="2.5" />
    <circle fill="#e53935" cx="16" cy="22" r="2.5" />
  </svg>
)

// Fewer, smaller SVG icons (reduced count and size)
const FRUITS_VEG_SNACKS = [
  { left: 8, top: 22, size: 26, rot: -12, type: 'apple' },
  { left: 88, top: 28, size: 24, rot: 18, type: 'strawberry' },
  { left: 25, top: 70, size: 26, rot: 8, type: 'orange' },
  { left: 78, top: 65, size: 28, rot: -20, type: 'banana' },
  { left: 15, top: 55, size: 24, rot: -8, type: 'carrot' },
  { left: 72, top: 45, size: 24, rot: 15, type: 'tomato' },
]

const FOOD_SVG_MAP = {
  apple: APPLE_SVG,
  strawberry: STRAWBERRY_SVG,
  orange: ORANGE_SVG,
  banana: BANANA_SVG,
  grapes: GRAPES_SVG,
  carrot: CARROT_SVG,
  tomato: TOMATO_SVG,
  broccoli: BROCCOLI_SVG,
  cookie: COOKIE_SVG,
  candy: CANDY_SVG,
  pizza: PIZZA_SVG,
  leaf2: LEAF2_SVG,
  leaf3: LEAF3_SVG,
}

// Lots of clouds, fewer stars/leaves/blobs
const CLOUDS = [
  { left: 2, top: 5, width: 140, opacity: 0.5 },
  { left: 25, top: 10, width: 120, opacity: 0.45 },
  { left: 48, top: 6, width: 160, opacity: 0.42 },
  { left: 72, top: 12, width: 110, opacity: 0.48 },
  { left: 88, top: 4, width: 100, opacity: 0.45 },
  { left: 5, top: 28, width: 130, opacity: 0.4 },
  { left: 35, top: 22, width: 150, opacity: 0.38 },
  { left: 65, top: 26, width: 120, opacity: 0.44 },
  { left: 92, top: 32, width: 100, opacity: 0.46 },
  { left: 8, top: 52, width: 140, opacity: 0.4 },
  { left: 42, top: 48, width: 130, opacity: 0.38 },
  { left: 78, top: 54, width: 115, opacity: 0.42 },
  { left: 12, top: 72, width: 125, opacity: 0.45 },
  { left: 55, top: 70, width: 145, opacity: 0.4 },
  { left: 85, top: 76, width: 110, opacity: 0.43 },
  { left: 28, top: 85, width: 120, opacity: 0.4 },
  { left: 68, top: 88, width: 135, opacity: 0.38 },
]
const STARS = [
  { left: 15, top: 18 },
  { left: 82, top: 25 },
  { left: 48, top: 40 },
]
const LEAVES = [
  { left: 10, top: 35, rot: -15 },
  { left: 80, top: 60, rot: 20 },
]
const BLOBS = [
  { left: 30, top: 50, color: '#f8bbd0', size: 10 },
  { left: 70, top: 35, color: '#b3e5fc', size: 9 },
]

export default function FoodPatternBackground({ children }) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: SKY_GRADIENT,
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      {/* Green rolling hill – middle section, soft wavy band */}
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: '32%',
          height: '42%',
          zIndex: 0,
          pointerEvents: 'none',
          background: 'linear-gradient(180deg, transparent 0%, rgba(129,199,132,0.35) 15%, rgba(165,214,167,0.45) 50%, rgba(129,199,132,0.35) 85%, transparent 100%)',
          borderRadius: '50% 50% 0 0 / 30% 30% 0 0',
          transform: 'scale(1.2)',
        }}
      />

      {/* Decorative layer – clouds, stars, leaves, pastel blobs (low opacity for clarity) */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {CLOUDS.map((c, i) => (
          <Cloud key={`cloud-${i}`} left={c.left} top={c.top} width={c.width} opacity={c.opacity} />
        ))}
        {STARS.map((s, i) => (
          <Star key={`star-${i}`} left={s.left} top={s.top} size={10} opacity={0.28} />
        ))}
        {LEAVES.map((l, i) => (
          <Leaf key={`leaf-${i}`} left={l.left} top={l.top} size={24} opacity={0.5} rot={l.rot} />
        ))}
        {BLOBS.map((b, i) => (
          <PastelBlob key={`blob-${i}`} left={b.left} top={b.top} size={b.size} color={b.color} opacity={0.22} />
        ))}
        {/* Fewer, smaller floating food icons */}
        {FRUITS_VEG_SNACKS.map((f, i) => (
          <FloatingFood
            key={`food-${i}`}
            left={f.left}
            top={f.top}
            size={f.size}
            opacity={0.55}
            rot={f.rot}
          >
            {FOOD_SVG_MAP[f.type]}
          </FloatingFood>
        ))}
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1 }}>{children}</Box>
    </Box>
  )
}
