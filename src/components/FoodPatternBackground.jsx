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

// Yellow star / sparkle
const Star = ({ left, top, size, opacity }) => (
  <Box
    sx={{
      position: 'absolute',
      left: `${left}%`,
      top: `${top}%`,
      width: size || 16,
      height: size || 16,
      opacity: opacity ?? 0.35,
      pointerEvents: 'none',
      '& svg': { width: '100%', height: '100%', display: 'block' },
    }}
  >
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#ffeb3b" d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
    </svg>
  </Box>
)

// Leaf – HD visible: larger default size, higher opacity, crisp rendering
const Leaf = ({ left, top, size, opacity, rot }) => (
  <Box
    sx={{
      position: 'absolute',
      left: `${left}%`,
      top: `${top}%`,
      width: size || 36,
      height: size || 36,
      opacity: opacity ?? 0.65,
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

// Pastel candy-like circle (pink, orange, light blue)
const PastelBlob = ({ left, top, size, color, opacity }) => (
  <Box
    sx={{
      position: 'absolute',
      left: `${left}%`,
      top: `${top}%`,
      width: size || 14,
      height: size || 14,
      borderRadius: '50%',
      backgroundColor: color,
      opacity: opacity ?? 0.28,
      pointerEvents: 'none',
    }}
  />
)

// Floating food item – HD visible: larger size, higher opacity, crisp SVG rendering
const FloatingFood = ({ left, top, size, opacity, rot, children }) => (
  <Box
    sx={{
      position: 'absolute',
      left: `${left}%`,
      top: `${top}%`,
      width: size || 44,
      height: size || 44,
      minWidth: size || 44,
      minHeight: size || 44,
      opacity: opacity ?? 0.72,
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

// Scatter positions – HD visible: larger sizes (44–56px), fruits, vegetables, snacks, pizzas, leaves
const FRUITS_VEG_SNACKS = [
  { left: 6, top: 18, size: 48, rot: -12, type: 'apple' },
  { left: 92, top: 25, size: 44, rot: 18, type: 'strawberry' },
  { left: 22, top: 72, size: 46, rot: 8, type: 'orange' },
  { left: 82, top: 68, size: 52, rot: -20, type: 'banana' },
  { left: 48, top: 12, size: 44, rot: 5, type: 'grapes' },
  { left: 12, top: 52, size: 46, rot: -8, type: 'carrot' },
  { left: 88, top: 42, size: 44, rot: 15, type: 'tomato' },
  { left: 38, top: 78, size: 48, rot: -5, type: 'broccoli' },
  { left: 72, top: 18, size: 44, rot: 10, type: 'cookie' },
  { left: 28, top: 38, size: 42, rot: -15, type: 'candy' },
  { left: 55, top: 55, size: 50, rot: 12, type: 'pizza' },
  { left: 58, top: 62, size: 46, rot: 12, type: 'apple' },
  { left: 8, top: 82, size: 44, rot: -18, type: 'orange' },
  { left: 95, top: 8, size: 44, rot: 22, type: 'strawberry' },
  { left: 42, top: 48, size: 48, rot: -10, type: 'leaf2' },
  { left: 68, top: 82, size: 46, rot: 8, type: 'leaf3' },
  { left: 85, top: 58, size: 48, rot: -12, type: 'pizza' },
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

// Scatter positions for clouds, stars, leaves, blobs (kept subtle so content is 100% visible)
const CLOUDS = [
  { left: 5, top: 8, width: 120, opacity: 0.45 },
  { left: 45, top: 18, width: 160, opacity: 0.4 },
  { left: 78, top: 6, width: 100, opacity: 0.5 },
  { left: 15, top: 72, width: 130, opacity: 0.38 },
  { left: 70, top: 78, width: 110, opacity: 0.42 },
]
const STARS = [
  { left: 12, top: 14 },
  { left: 88, top: 22 },
  { left: 25, top: 65 },
  { left: 92, top: 58 },
  { left: 50, top: 35 },
  { left: 6, top: 48 },
  { left: 94, top: 85 },
]
const LEAVES = [
  { left: 8, top: 28, rot: -15 },
  { left: 85, top: 12, rot: 20 },
  { left: 18, top: 82, rot: 10 },
  { left: 75, top: 70, rot: -25 },
  { left: 42, top: 8, rot: 5 },
  { left: 55, top: 88, rot: -10 },
]
const BLOBS = [
  { left: 20, top: 40, color: '#f8bbd0', size: 12 },
  { left: 80, top: 30, color: '#ffccbc', size: 10 },
  { left: 35, top: 75, color: '#b3e5fc', size: 14 },
  { left: 65, top: 15, color: '#c5e1a5', size: 11 },
  { left: 10, top: 60, color: '#ffecb3', size: 9 },
  { left: 90, top: 65, color: '#e1bee7', size: 13 },
]

export default function FoodPatternBackground({ children }) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: SKY_GRADIENT,
        overflow: 'hidden',
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
          <Star key={`star-${i}`} left={s.left} top={s.top} size={14 + (i % 3) * 4} opacity={0.32} />
        ))}
        {LEAVES.map((l, i) => (
          <Leaf key={`leaf-${i}`} left={l.left} top={l.top} size={38} opacity={0.65} rot={l.rot} />
        ))}
        {BLOBS.map((b, i) => (
          <PastelBlob key={`blob-${i}`} left={b.left} top={b.top} size={b.size} color={b.color} opacity={0.26} />
        ))}
        {/* Floating fruits, vegetables, snacks and leaves */}
        {FRUITS_VEG_SNACKS.map((f, i) => (
          <FloatingFood
            key={`food-${i}`}
            left={f.left}
            top={f.top}
            size={f.size}
            opacity={0.72}
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
