// Generates public/og-image.png — the Open Graph / Twitter Card / LinkedIn
// link-preview image. Run manually whenever the brand or headline copy
// changes: `node scripts/generate-og-image.mjs`. Not part of the regular
// build — this is a one-off asset, not something that needs regenerating
// on every deploy.
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontDir = path.join(__dirname, "og-fonts");

function toBase64(file) {
  return readFileSync(path.join(fontDir, file)).toString("base64");
}

const kanitExtraBold = toBase64("Kanit-ExtraBold.ttf");
const kanitBold = toBase64("Kanit-Bold.ttf");
const mono = toBase64("JetBrainsMono-Medium.ttf");

const W = 1200;
const H = 630;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face { font-family: 'Kanit ExtraBold'; src: url(data:font/ttf;base64,${kanitExtraBold}) format('truetype'); }
      @font-face { font-family: 'Kanit Bold'; src: url(data:font/ttf;base64,${kanitBold}) format('truetype'); }
      @font-face { font-family: 'Mono'; src: url(data:font/ttf;base64,${mono}) format('truetype'); }
    </style>
    <linearGradient id="heading" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8A909B"/>
      <stop offset="100%" stop-color="#EAF1F5"/>
    </linearGradient>
    <radialGradient id="glow" cx="30%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#34D399" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#34D399" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D7E2EA" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="#0A0F1D"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- dotted rail -->
  <line x1="64" y1="120" x2="64" y2="510" stroke="#D7E2EA" stroke-opacity="0.14" stroke-width="1"/>
  <circle cx="64" cy="120" r="5" fill="#34D399"/>
  <circle cx="64" cy="230" r="4" fill="#D7E2EA" fill-opacity="0.35"/>
  <circle cx="64" cy="400" r="4" fill="#D7E2EA" fill-opacity="0.35"/>
  <circle cx="64" cy="510" r="4" fill="#D7E2EA" fill-opacity="0.35"/>

  <!-- status badge -->
  <rect x="110" y="96" width="430" height="44" rx="22" fill="#D7E2EA" fill-opacity="0.035" stroke="#D7E2EA" stroke-opacity="0.14"/>
  <circle cx="136" cy="118" r="4.5" fill="#34D399"/>
  <text x="152" y="123" font-family="Mono" font-size="15" letter-spacing="1.5" fill="#B7C2CC">HOUSTON, TX &#183; OPEN TO FULL-TIME SWE</text>

  <!-- name -->
  <text x="108" y="270" font-family="Kanit ExtraBold" font-size="92" letter-spacing="-1" fill="url(#heading)">Dhruviben Patel</text>

  <!-- role -->
  <text x="110" y="325" font-family="Kanit Bold" font-size="34" letter-spacing="1" fill="#34D399">FULL-STACK SOFTWARE ENGINEER</text>

  <!-- description -->
  <text x="110" y="380" font-family="Mono" font-size="19" fill="#9AA6B2">React &#183; TypeScript &#183; Node.js &#183; ASP.NET Core &#183; SQL Server</text>

  <!-- stat row -->
  <text x="110" y="470" font-family="Kanit Bold" font-size="30" fill="#EAF1F5">05</text>
  <text x="110" y="494" font-family="Mono" font-size="13" letter-spacing="1" fill="#7C8894">PROJECTS</text>

  <text x="230" y="470" font-family="Kanit Bold" font-size="30" fill="#EAF1F5">03</text>
  <text x="230" y="494" font-family="Mono" font-size="13" letter-spacing="1" fill="#7C8894">CERTIFICATIONS</text>

  <text x="410" y="470" font-family="Kanit Bold" font-size="30" fill="#EAF1F5">03</text>
  <text x="410" y="494" font-family="Mono" font-size="13" letter-spacing="1" fill="#7C8894">ROLES HELD</text>

  <!-- url -->
  <text x="110" y="560" font-family="Mono" font-size="17" letter-spacing="1" fill="#5C6773">dhruvibenpatel.com</text>
</svg>
`;

const outPath = path.join(__dirname, "..", "public", "og-image.png");
await sharp(Buffer.from(svg)).png({ quality: 92 }).toFile(outPath);
console.log(`[og-image] wrote ${outPath}`);
