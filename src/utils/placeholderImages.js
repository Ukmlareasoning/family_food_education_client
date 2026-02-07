/**
 * Inline SVG placeholder images (data URIs) so they work without external requests.
 * Replace these with your real image URLs when ready.
 */

function svgDataUri(width, height, bgColor, textColor, text) {
  const fontSize = Math.min(width, height) / 6
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect fill="${bgColor}" width="${width}" height="${height}"/><text x="${width / 2}" y="${height / 2}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${fontSize}" font-family="Arial,sans-serif">${text}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

// Colorful circular logo (orange, blue, green, yellow) to match design
const logoColorfulSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#ff9500"/><path d="M20 2 L20 20 L38 20 Z" fill="#42a5f5"/><path d="M20 20 L2 20 L20 38 Z" fill="#66bb6a"/><path d="M2 20 L20 2 L20 20 Z" fill="#ffeb3b"/><circle cx="20" cy="20" r="6" fill="white"/></svg>`
const logoColorfulUri = `data:image/svg+xml,${encodeURIComponent(logoColorfulSvg)}`

export const placeholders = {
  logo: logoColorfulUri,

  characterBoy: svgDataUri(150, 150, '#ff9500', '#ffffff', 'Boy'),
  characterGirl: svgDataUri(150, 150, '#ff6b9d', '#ffffff', 'Girl'),

  dashboardPreview: svgDataUri(500, 400, '#667eea', '#ffffff', 'Dashboard'),
  scanScreen: svgDataUri(300, 500, '#667eea', '#ffffff', 'Scan'),
  nutritionInfo: svgDataUri(300, 500, '#4CAF50', '#ffffff', 'Nutrition'),
  progressTracker: svgDataUri(300, 500, '#ff9500', '#ffffff', 'Progress'),
  phoneAppPreview: svgDataUri(400, 600, '#667eea', '#ffffff', 'App'),
  dashboardInsights: svgDataUri(600, 400, '#667eea', '#ffffff', 'Insights'),
}
