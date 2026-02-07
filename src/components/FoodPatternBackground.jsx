import { Box } from '@mui/material'
import React from 'react'

// Crystal-clear HD SVG icons (vector – sharp at any size). Vibrant colors, distinct outlines.
const SVG_ICONS = [
  <svg viewBox="0 0 32 32" fill="none" stroke="#2e7d32" strokeWidth="0.8"><path fill="#e53935" stroke="#b71c1c" strokeWidth="0.6" d="M16 4c-2 4-6 6-6 12 0 5 3 8 6 8s6-3 6-8c0-6-4-8-6-12z"/><path fill="#2e7d32" d="M15 4h2v4h-2z"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><path fill="#e53935" stroke="#b71c1c" strokeWidth="0.6" d="M16 28c-8 0-12-12-12-18 0-4 4-6 8-6 2 0 4 1 4 4 0-3 2-4 4-4 4 0 8 2 8 6 0 6-4 18-12 18z"/><path fill="#2e7d32" d="M8 10h2v2H8zm6 0h2v2h-2zm4 4h2v2h-2zm-8 0h2v2H8z"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><circle fill="#7b1fa2" stroke="#4a148c" strokeWidth="0.5" cx="10" cy="12" r="5"/><circle fill="#7b1fa2" stroke="#4a148c" strokeWidth="0.5" cx="22" cy="12" r="5"/><circle fill="#7b1fa2" stroke="#4a148c" strokeWidth="0.5" cx="16" cy="20" r="5"/><path fill="#558b2f" d="M16 26v4"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><ellipse fill="#fdd835" stroke="#f9a825" strokeWidth="0.6" cx="16" cy="16" rx="10" ry="12" transform="rotate(-25 16 16)"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><path fill="#43a047" stroke="#2e7d32" strokeWidth="0.5" d="M16 4v10c0 4 3 6 6 8-2 2-4 4-6 6-2-2-4-4-6-6 3-2 6-4 6-8V4z"/><circle fill="#66bb6a" cx="10" cy="14" r="3"/><circle fill="#66bb6a" cx="22" cy="14" r="3"/><circle fill="#66bb6a" cx="16" cy="10" r="3"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><path fill="#ef6c00" stroke="#e65100" strokeWidth="0.5" d="M16 28L8 12c0 0 4-4 8-4s8 4 8 4L16 28z"/><path fill="#2e7d32" d="M14 8h4v6h-4z"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><path fill="#66bb6a" stroke="#43a047" strokeWidth="0.5" d="M6 28C10 16 16 6 26 4c-4 8-6 16-4 24H6z"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><circle fill="#8d6e63" stroke="#5d4037" strokeWidth="0.5" cx="16" cy="16" r="10"/><circle fill="none" stroke="#e3f2fd" strokeWidth="4" cx="16" cy="16" r="6"/><circle fill="#ec407a" cx="16" cy="10" r="2"/><circle fill="#ffeb3b" cx="20" cy="16" r="1.2"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><path fill="#ff9800" stroke="#e65100" strokeWidth="0.5" d="M16 4L4 28h24L16 4z"/><circle fill="#795548" cx="12" cy="16" r="1.5"/><circle fill="#795548" cx="20" cy="14" r="1.5"/><circle fill="#795548" cx="16" cy="22" r="1.5"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><path fill="#ffccbc" stroke="#ff8a65" strokeWidth="0.5" d="M8 28h16v-8H8v8z"/><path fill="#d7ccc8" d="M6 20h20v4H6z"/><path fill="#ec407a" stroke="#c2185b" strokeWidth="0.4" d="M12 12c0-4 4-8 8-8s4 4 4 8H12z"/><circle fill="#ffeb3b" cx="16" cy="10" r="1.5"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><path fill="#ffeb3b" stroke="#f9a825" strokeWidth="0.5" d="M16 2l4 10 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1 4-10z"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><circle fill="#f8bbd0" stroke="#f48fb1" strokeWidth="0.5" cx="16" cy="16" r="4"/><circle fill="#ffeb3b" cx="16" cy="16" r="2"/><path fill="#81c784" stroke="#66bb6a" strokeWidth="0.4" d="M16 22v6"/><ellipse fill="#c8e6c9" cx="16" cy="12" rx="3" ry="5"/><ellipse fill="#c8e6c9" cx="16" cy="20" rx="3" ry="5" transform="rotate(180 16 20)"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><circle fill="#8d6e63" stroke="#5d4037" strokeWidth="0.5" cx="16" cy="16" r="10"/><circle fill="#5d4037" cx="11" cy="14" r="1.2"/><circle fill="#5d4037" cx="20" cy="12" r="1"/><circle fill="#5d4037" cx="15" cy="20" r="1.2"/></svg>,
  <svg viewBox="0 0 32 32" fill="none" stroke="#6d4c41" strokeWidth="1.2" strokeLinecap="round"><path fill="none" d="M16 6c-6 0-10 4-10 10 0 4 2 6 6 6 2 0 4-1 4-4 0 3 2 4 4 4s4-1 4-4c0 3 2 4 4 4 4 0 6-2 6-6 0-6-4-10-10-10z"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><circle fill="#ff9800" stroke="#ef6c00" strokeWidth="0.5" cx="16" cy="16" r="10"/><path fill="#ffb74d" d="M16 8c-2 2-2 6 0 8 2-2 2-6 0-8z"/></svg>,
  <svg viewBox="0 0 32 32" fill="none"><path fill="#81c784" stroke="#66bb6a" strokeWidth="0.4" d="M20 6c-6 4-8 12-4 18 2-4 2-10-2-14z"/><path fill="#a5d6a7" stroke="#81c784" strokeWidth="0.4" d="M12 8c4 2 6 8 4 14-2-4-2-10 2-12z"/></svg>,
]

// More positions for full-page scatter
const POSITIONS = [
  [2, 5], [8, 12], [15, 3], [22, 18], [28, 8], [35, 22], [42, 6], [48, 15], [55, 25], [62, 10], [68, 20], [75, 5], [82, 14], [88, 28], [94, 8],
  [5, 28], [12, 35], [18, 42], [25, 38], [32, 48], [38, 52], [45, 45], [52, 55], [58, 42], [65, 50], [72, 58], [78, 48], [85, 52], [92, 45],
  [3, 55], [10, 62], [16, 68], [24, 72], [30, 65], [36, 78], [44, 70], [50, 75], [56, 82], [64, 68], [70, 78], [76, 72], [84, 65], [90, 70],
  [6, 82], [14, 88], [20, 92], [26, 85], [34, 95], [40, 88], [46, 92], [54, 85], [60, 90], [66, 95], [74, 88], [80, 92], [86, 85], [96, 90],
  [7, 42], [19, 28], [33, 35], [47, 18], [61, 32], [73, 38], [89, 22], [11, 58], [37, 62], [59, 48], [81, 55], [93, 42],
  [4, 15], [17, 8], [41, 12], [69, 6], [87, 18], [13, 48], [51, 52], [77, 42], [9, 72], [63, 78], [31, 88],
]

export default function FoodPatternBackground({ children }) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* HD pattern – larger sizes, crisp vector rendering */}
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
        {POSITIONS.map(([x, y], i) => {
          const icon = SVG_ICONS[i % SVG_ICONS.length]
          const size = [18, 22, 26, 30][i % 4]
          const rot = (i % 5) * 15 - 30
          return (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
                opacity: 0.38,
                transform: `rotate(${rot}deg) translateZ(0)`,
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.06))',
                '& svg': {
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  shapeRendering: 'geometricPrecision',
                },
              }}
            >
              {React.cloneElement(icon, {
                width: '100%',
                height: '100%',
                shapeRendering: 'geometricPrecision',
              })}
            </Box>
          )
        })}
      </Box>
      <Box sx={{ position: 'relative', zIndex: 1 }}>{children}</Box>
    </Box>
  )
}
