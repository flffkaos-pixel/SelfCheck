const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const W = 1200, H = 630;
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00408b"/>
      <stop offset="100%" stop-color="#0d5bbc"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#adc7ff"/>
      <stop offset="100%" stop-color="#d8e2ff"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="1000" cy="100" r="300" fill="#ffffff" opacity="0.03"/>
  <circle cx="200" cy="500" r="200" fill="#ffffff" opacity="0.03"/>
  <circle cx="1100" cy="400" r="150" fill="#ffffff" opacity="0.05"/>
  <text x="600" y="220" text-anchor="middle" font-family="sans-serif" font-size="36" fill="#adc7ff" font-weight="600" letter-spacing="6">🏥 SYMPTOM CHECKER</text>
  <text x="600" y="310" text-anchor="middle" font-family="sans-serif" font-size="96" fill="#ffffff" font-weight="800" letter-spacing="2">HealSense</text>
  <rect x="450" y="340" width="300" height="4" rx="2" fill="url(#accent)"/>
  <text x="600" y="400" text-anchor="middle" font-family="sans-serif" font-size="40" fill="#d8e2ff" font-weight="500">건강 자가진단 플랫폼</text>
  <text x="600" y="480" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#abc7ff">감기부터 암까지 170여 가지 질환 분석</text>
  <rect x="440" y="520" width="320" height="50" rx="25" fill="#ffffff" opacity="0.15"/>
  <text x="600" y="554" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#ffffff" font-weight="600">symptomcheck.pages.dev</text>
</svg>`;

const outDir = path.resolve(__dirname, '..');
sharp(Buffer.from(svg))
  .resize(W, H)
  .png()
  .toFile(path.join(outDir, 'og-image.png'))
  .then(() => console.log('og-image.png generated'))
  .catch(err => console.error(err));
