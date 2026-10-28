const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'public/assets/generated');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapSvg(title, category, subtitle, content) {
  const safeCat = escapeXml(category);
  const safeTitle = escapeXml(title);
  const safeSub = escapeXml(subtitle);

  return `
<svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0D10"/>
      <stop offset="100%" stop-color="#141820"/>
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <linearGradient id="slateGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#64768B"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  
  <!-- Subtle Architectural Grid -->
  <g stroke="#1F2530" stroke-width="0.75" opacity="0.6">
    <line x1="0" y1="180" x2="1600" y2="180"/>
    <line x1="0" y1="360" x2="1600" y2="360"/>
    <line x1="0" y1="540" x2="1600" y2="540"/>
    <line x1="0" y1="720" x2="1600" y2="720"/>
    <line x1="266" y1="0" x2="266" y2="900"/>
    <line x1="533" y1="0" x2="533" y2="900"/>
    <line x1="800" y1="0" x2="800" y2="900"/>
    <line x1="1066" y1="0" x2="1066" y2="900"/>
    <line x1="1333" y1="0" x2="1333" y2="900"/>
  </g>

  <!-- Studio Header Tag -->
  <text x="100" y="75" fill="#64768B" font-family="monospace" font-size="13" letter-spacing="4">ARAVEX TECH STUDIO // ${safeCat}</text>
  <text x="100" y="118" fill="#F7F7F5" font-family="sans-serif" font-size="28" font-weight="bold">${safeTitle}</text>
  <text x="100" y="148" fill="#94A3B8" font-family="sans-serif" font-size="15">${safeSub}</text>

  <!-- Interactive Mockup Surface -->
  ${content}
</svg>
  `;
}

// ==========================================
// 1. PRODUCTS
// ==========================================

const schoolContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#11161F" stroke="#252D3C" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#161C27"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">CAMPUS MANAGEMENT SUITE // OXFORD GRAMMAR CAMPUS #01</text>
  
  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="315" height="95" rx="10" fill="#181E29" stroke="#2A3444" stroke-width="1.5"/>
    <text x="20" y="32" fill="#94A3B8" font-family="sans-serif" font-size="12">ENROLLED STUDENTS</text>
    <text x="20" y="68" fill="#F7F7F5" font-family="sans-serif" font-size="26" font-weight="bold">1,842</text>
    <text x="20" y="87" fill="#10B981" font-family="monospace" font-size="11">Grade 1 to A-Levels</text>

    <rect x="340" y="0" width="315" height="95" rx="10" fill="#181E29" stroke="#2A3444" stroke-width="1.5"/>
    <text x="360" y="32" fill="#94A3B8" font-family="sans-serif" font-size="12">FEE RECOVERY RATE</text>
    <text x="360" y="68" fill="#10B981" font-family="sans-serif" font-size="26" font-weight="bold">98.4%</text>
    <text x="360" y="87" fill="#64768B" font-family="monospace" font-size="11">Auto Challan Webhooks</text>

    <rect x="680" y="0" width="315" height="95" rx="10" fill="#181E29" stroke="#2A3444" stroke-width="1.5"/>
    <text x="700" y="32" fill="#94A3B8" font-family="sans-serif" font-size="12">DAILY ATTENDANCE</text>
    <text x="700" y="68" fill="#38BDF8" font-family="sans-serif" font-size="26" font-weight="bold">96.8%</text>
    <text x="700" y="87" fill="#38BDF8" font-family="monospace" font-size="11">RFID Gate Sync</text>

    <rect x="1020" y="0" width="310" height="95" rx="10" fill="#181E29" stroke="#2A3444" stroke-width="1.5"/>
    <text x="1040" y="32" fill="#94A3B8" font-family="sans-serif" font-size="12">FACULTY MEMBERS</text>
    <text x="1040" y="68" fill="#F59E0B" font-family="sans-serif" font-size="26" font-weight="bold">94 Staff</text>
    <text x="1040" y="87" fill="#F59E0B" font-family="monospace" font-size="11">Biometric Verified</text>
  </g>

  <g transform="translate(135, 385)">
    <rect x="0" y="0" width="1330" height="415" rx="12" fill="#141923" stroke="#232B39" stroke-width="1"/>
    <text x="25" y="32" fill="#F7F7F5" font-family="sans-serif" font-size="15" font-weight="bold">Recent Student Fee Challans &amp; Grade Progress</text>
    
    <rect x="25" y="55" width="1280" height="58" rx="8" fill="#1B222E"/>
    <text x="45" y="90" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Hamza Tariq (Roll #0849) • Grade 10-A</text>
    <text x="600" y="90" fill="#10B981" font-family="monospace" font-size="13">PKR 18,500 (Paid via 1Link)</text>
    <text x="960" y="90" fill="#38BDF8" font-family="sans-serif" font-size="13">GPA: 3.92 (Top 5%)</text>
    <text x="1270" y="90" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">CLEARED</text>

    <rect x="25" y="125" width="1280" height="58" rx="8" fill="#181E29"/>
    <text x="45" y="160" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Ayesha Siddiqui (Roll #0921) • Grade 8-B</text>
    <text x="600" y="160" fill="#10B981" font-family="monospace" font-size="13">PKR 14,000 (Paid via Kuickpay)</text>
    <text x="960" y="160" fill="#38BDF8" font-family="sans-serif" font-size="13">GPA: 3.85</text>
    <text x="1270" y="160" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">CLEARED</text>

    <rect x="25" y="195" width="1280" height="58" rx="8" fill="#181E29"/>
    <text x="45" y="230" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Daniyal Farooq (Roll #1024) • Grade 11-Pre-Med</text>
    <text x="600" y="230" fill="#F59E0B" font-family="monospace" font-size="13">PKR 22,000 (Due: Oct 28)</text>
    <text x="960" y="230" fill="#38BDF8" font-family="sans-serif" font-size="13">GPA: 3.78</text>
    <text x="1270" y="230" fill="#F59E0B" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">PENDING</text>

    <rect x="25" y="275" width="600" height="45" rx="8" fill="#10B981" opacity="0.12" stroke="#10B981" stroke-width="1"/>
    <text x="45" y="304" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold">WhatsApp Fee Reminder Broadcast: Active (98.2% Delivery)</text>
  </g>
`;

const lmsContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#10141C" stroke="#242B38" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#151A23"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX LEARNING ENGINE // STUDENT LMS PORTAL</text>
  
  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="840" height="540" rx="12" fill="#0D0F13" stroke="#222834" stroke-width="1.5"/>
    <rect x="30" y="30" width="780" height="410" rx="10" fill="#151922"/>
    <circle cx="420" cy="235" r="36" fill="#10B981" opacity="0.9"/>
    <polygon points="412,222 434,235 412,248" fill="#FFFFFF"/>
    <text x="50" y="475" fill="#F7F7F5" font-family="sans-serif" font-size="15" font-weight="bold">Lesson 08: Distributed Microservices &amp; Idempotent Queues</text>
    <text x="50" y="502" fill="#94A3B8" font-family="monospace" font-size="12">Duration: 42m 18s • Ultra HD 4K Streaming</text>
  </g>

  <g transform="translate(1005, 260)">
    <rect x="0" y="0" width="460" height="540" rx="12" fill="#131720" stroke="#222834" stroke-width="1.5"/>
    <text x="25" y="35" fill="#F7F7F5" font-family="sans-serif" font-size="15" font-weight="bold">Curriculum Progress (68%)</text>
    
    <rect x="20" y="60" width="420" height="60" rx="8" fill="#1B222E" stroke="#10B981" stroke-width="1"/>
    <text x="35" y="87" fill="#10B981" font-family="sans-serif" font-size="13" font-weight="bold">Module 1: Next.js 15 Server Actions</text>
    <text x="35" y="107" fill="#94A3B8" font-family="monospace" font-size="11">✓ Completed (100% Score)</text>

    <rect x="20" y="130" width="420" height="60" rx="8" fill="#1B222E" stroke="#38BDF8" stroke-width="1"/>
    <text x="35" y="157" fill="#38BDF8" font-family="sans-serif" font-size="13" font-weight="bold">Module 2: Redis Atomic Locking</text>
    <text x="35" y="177" fill="#94A3B8" font-family="monospace" font-size="11">In Progress (Lesson 8 of 12)</text>

    <rect x="20" y="200" width="420" height="60" rx="8" fill="#161B24"/>
    <text x="35" y="227" fill="#94A3B8" font-family="sans-serif" font-size="13" font-weight="bold">Module 3: PostgreSQL Schema Sharding</text>
    <text x="35" y="247" fill="#64768B" font-family="monospace" font-size="11">Locked (Unlocks on Module 2 Quiz)</text>

    <rect x="20" y="280" width="420" height="230" rx="8" fill="#0D1015" stroke="#242B36" stroke-width="1"/>
    <text x="35" y="310" fill="#64768B" font-family="monospace" font-size="11">// In-Browser Coding Sandbox</text>
    <text x="35" y="338" fill="#38BDF8" font-family="monospace" font-size="12">const lock = await redis.set(</text>
    <text x="50" y="362" fill="#F7F7F5" font-family="monospace" font-size="12">  "cart:8942", "locked", "NX", "EX", 10</text>
    <text x="35" y="386" fill="#38BDF8" font-family="monospace" font-size="12">);</text>
    <text x="35" y="418" fill="#10B981" font-family="monospace" font-size="11">✓ Test Passed: 0 Race Conditions</text>
    <text x="35" y="445" fill="#94A3B8" font-family="monospace" font-size="11">Latency: 1.4ms • Memory: 18MB</text>
  </g>
`;

const attendanceContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#10141B" stroke="#232C3A" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#151A23"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX BIOMETRIC // REAL-TIME HARDWARE EDGE ATTENDANCE</text>

  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="580" height="540" rx="12" fill="#141822" stroke="#252F3E" stroke-width="1.5"/>
    <rect x="40" y="40" width="500" height="270" rx="10" fill="#0D1016"/>
    <rect x="175" y="65" width="230" height="220" rx="14" fill="none" stroke="#10B981" stroke-width="2.5" stroke-dasharray="8 6"/>
    <circle cx="290" cy="175" r="45" fill="#10B981" opacity="0.15"/>
    <text x="290" y="180" fill="#10B981" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">FACE MATCH: 99.8%</text>
    <text x="290" y="255" fill="#F7F7F5" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Muhammad Uzair (ID: #002)</text>

    <rect x="40" y="340" width="500" height="160" rx="10" fill="#171C26" stroke="#262F3E" stroke-width="1"/>
    <text x="60" y="375" fill="#94A3B8" font-family="sans-serif" font-size="13">OPTICAL FINGERPRINT SENSOR (ZKTECO / ANVIZ)</text>
    <text x="60" y="405" fill="#10B981" font-family="monospace" font-size="13">Live Sensor Mode: Dual Biometric Verified</text>
    <text x="60" y="435" fill="#64768B" font-family="monospace" font-size="11">Edge Buffer: 4,000 Records Saved Offline</text>
    <text x="60" y="465" fill="#38BDF8" font-family="monospace" font-size="11">Cloud Sync: Instant WebSocket Push</text>
  </g>

  <g transform="translate(745, 260)">
    <rect x="0" y="0" width="720" height="540" rx="12" fill="#141822" stroke="#252F3E" stroke-width="1.5"/>
    <text x="30" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Live Check-in &amp; Shift Logs (Gate #01)</text>

    <rect x="25" y="65" width="670" height="65" rx="8" fill="#1A212D"/>
    <text x="45" y="95" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Muhammad Uzair • Executive Director</text>
    <text x="45" y="115" fill="#94A3B8" font-family="monospace" font-size="11">Punch Time: 08:58:12 AM (On Time)</text>
    <text x="670" y="105" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">FACE ID ✓</text>

    <rect x="25" y="140" width="670" height="65" rx="8" fill="#181F2A"/>
    <text x="45" y="170" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Aqsa Wadood • Director of Operations</text>
    <text x="45" y="190" fill="#94A3B8" font-family="monospace" font-size="11">Punch Time: 08:59:40 AM (On Time)</text>
    <text x="670" y="180" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">FACE ID ✓</text>

    <rect x="25" y="215" width="670" height="65" rx="8" fill="#181F2A"/>
    <text x="45" y="245" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Muhammad Rayyan • Principal Architect</text>
    <text x="45" y="265" fill="#94A3B8" font-family="monospace" font-size="11">Punch Time: 09:00:04 AM (On Time)</text>
    <text x="670" y="255" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">FINGERPRINT ✓</text>

    <rect x="25" y="290" width="670" height="65" rx="8" fill="#181F2A"/>
    <text x="45" y="320" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Hassan Abbas • Senior Frontend Engineer</text>
    <text x="45" y="340" fill="#94A3B8" font-family="monospace" font-size="11">Punch Time: 09:04:12 AM (Grace Period)</text>
    <text x="670" y="330" fill="#38BDF8" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">RFID CARD ✓</text>

    <rect x="25" y="385" width="670" height="110" rx="10" fill="#10B981" opacity="0.1" stroke="#10B981" stroke-width="1"/>
    <text x="45" y="425" fill="#10B981" font-family="sans-serif" font-size="14" font-weight="bold">Automated Payroll Calculation Ready</text>
    <text x="45" y="455" fill="#94A3B8" font-family="sans-serif" font-size="12">Late deductions, overtime multipliers, and leave balances calculated automatically.</text>
  </g>
`;

const restaurantContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#12151B" stroke="#262D38" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#171C23"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX RESTAURANT ENGINE // LIVE KITCHEN DISPLAY &amp; FLOOR PLAN</text>

  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="580" height="540" rx="12" fill="#151A22" stroke="#252D3A" stroke-width="1.5"/>
    <text x="30" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Main Dining Floor (18 Tables)</text>

    <rect x="30" y="65" width="115" height="100" rx="10" fill="#10B981" opacity="0.2" stroke="#10B981" stroke-width="1.5"/>
    <text x="87" y="110" fill="#10B981" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Table 01</text>
    <text x="87" y="135" fill="#F7F7F5" font-family="monospace" font-size="11" text-anchor="middle">4 Guests (PKR 6.4k)</text>

    <rect x="165" y="65" width="115" height="100" rx="10" fill="#EF4444" opacity="0.2" stroke="#EF4444" stroke-width="1.5"/>
    <text x="222" y="110" fill="#EF4444" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Table 02</text>
    <text x="222" y="135" fill="#F7F7F5" font-family="monospace" font-size="11" text-anchor="middle">KOT Sent (12m)</text>

    <rect x="300" y="65" width="115" height="100" rx="10" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" stroke-width="1.5"/>
    <text x="357" y="110" fill="#38BDF8" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Table 03</text>
    <text x="357" y="135" fill="#F7F7F5" font-family="monospace" font-size="11" text-anchor="middle">Bill Printed</text>

    <rect x="435" y="65" width="115" height="100" rx="10" fill="#1E2430" stroke="#2C3544" stroke-width="1"/>
    <text x="492" y="110" fill="#94A3B8" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Table 04</text>
    <text x="492" y="135" fill="#64768B" font-family="monospace" font-size="11" text-anchor="middle">Vacant</text>

    <rect x="30" y="195" width="520" height="310" rx="10" fill="#1A202A"/>
    <text x="50" y="235" fill="#F7F7F5" font-family="sans-serif" font-size="15" font-weight="bold">Quick Food Item Billing Hotkeys</text>
    <rect x="50" y="260" width="150" height="50" rx="6" fill="#252E3C"/>
    <text x="125" y="290" fill="#F7F7F5" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Mutton Karahi 1kg</text>
    <rect x="220" y="260" width="150" height="50" rx="6" fill="#252E3C"/>
    <text x="295" y="290" fill="#F7F7F5" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Chicken Biryani</text>
    <rect x="390" y="260" width="150" height="50" rx="6" fill="#252E3C"/>
    <text x="465" y="290" fill="#F7F7F5" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Garlic Naan (4x)</text>
  </g>

  <g transform="translate(745, 260)">
    <rect x="0" y="0" width="720" height="540" rx="12" fill="#151A22" stroke="#252D3A" stroke-width="1.5"/>
    <text x="30" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Kitchen Display Screen (KDS Queue)</text>

    <rect x="25" y="65" width="670" height="120" rx="10" fill="#1F2633" stroke="#EF4444" stroke-width="2"/>
    <text x="45" y="95" fill="#EF4444" font-family="sans-serif" font-size="15" font-weight="bold">Order #142 • Table 02 (Timer: 12m 40s)</text>
    <text x="45" y="125" fill="#F7F7F5" font-family="sans-serif" font-size="13">• 1x Mutton Shinwari Handi (Less Spicy)</text>
    <text x="45" y="150" fill="#F7F7F5" font-family="sans-serif" font-size="13">• 4x Roghani Naan • 1x Mint Raita</text>
    <rect x="570" y="80" width="110" height="35" rx="6" fill="#EF4444"/>
    <text x="625" y="103" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">COOKING</text>

    <rect x="25" y="200" width="670" height="120" rx="10" fill="#1A212C" stroke="#10B981" stroke-width="1.5"/>
    <text x="45" y="230" fill="#10B981" font-family="sans-serif" font-size="15" font-weight="bold">Order #143 • Table 08 (Timer: 03m 15s)</text>
    <text x="45" y="260" fill="#F7F7F5" font-family="sans-serif" font-size="13">• 2x Chicken Tikka Boti</text>
    <text x="45" y="285" fill="#F7F7F5" font-family="sans-serif" font-size="13">• 2x Puri Paratha • 2x Soft Drinks</text>
    <rect x="570" y="215" width="110" height="35" rx="6" fill="#10B981"/>
    <text x="625" y="238" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">READY</text>
  </g>
`;

const libraryContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#12161E" stroke="#252D3C" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#161C27"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX LIBRARY MIS // DIGITAL RFID CATALOG &amp; CIRCULATION</text>

  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="1330" height="100" rx="10" fill="#181E29" stroke="#2A3444" stroke-width="1.5"/>
    <text x="30" y="35" fill="#94A3B8" font-family="sans-serif" font-size="12">CATALOG SEARCH</text>
    <rect x="30" y="45" width="1000" height="42" rx="6" fill="#0E1218" stroke="#2D3748" stroke-width="1"/>
    <text x="50" y="72" fill="#F7F7F5" font-family="monospace" font-size="14">Design Patterns: Elements of Reusable Object-Oriented Software [Gang of Four]</text>
    <rect x="1060" y="45" width="230" height="42" rx="6" fill="#10B981"/>
    <text x="1175" y="71" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Search 45,000+ Titles</text>
  </g>

  <g transform="translate(135, 385)">
    <rect x="0" y="0" width="1330" height="415" rx="12" fill="#141923" stroke="#232B39" stroke-width="1"/>
    <text x="25" y="32" fill="#F7F7F5" font-family="sans-serif" font-size="15" font-weight="bold">Active Circulation &amp; Overdue Fines</text>

    <rect x="25" y="55" width="1280" height="60" rx="8" fill="#1B222E"/>
    <text x="45" y="90" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Book: Clean Architecture (Robert C. Martin) • Barcode: #LIB-9842</text>
    <text x="750" y="90" fill="#38BDF8" font-family="sans-serif" font-size="13">Issued to: Zain Malik (Card #482)</text>
    <text x="1270" y="90" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">RETURN DUE: NOV 04</text>

    <rect x="25" y="125" width="1280" height="60" rx="8" fill="#181E29"/>
    <text x="45" y="160" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Book: Designing Data-Intensive Applications (Martin Kleppmann)</text>
    <text x="750" y="160" fill="#38BDF8" font-family="sans-serif" font-size="13">Issued to: Sara Tariq (Card #119)</text>
    <text x="1270" y="160" fill="#EF4444" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">OVERDUE (FINE: PKR 400)</text>

    <rect x="25" y="195" width="1280" height="60" rx="8" fill="#181E29"/>
    <text x="45" y="230" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Book: Computer Networks (Andrew S. Tanenbaum) • Barcode: #LIB-3108</text>
    <text x="750" y="230" fill="#38BDF8" font-family="sans-serif" font-size="13">Issued to: Bilal Ahmed (Card #733)</text>
    <text x="1270" y="230" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">RETURN DUE: OCT 31</text>
  </g>
`;

const officeContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#11161F" stroke="#252D3C" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#161C27"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX ENTERPRISE HRMIS // OFFICE WORKFLOW &amp; ASSET AUDIT</text>

  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="315" height="95" rx="10" fill="#181E29" stroke="#2A3444" stroke-width="1.5"/>
    <text x="20" y="32" fill="#94A3B8" font-family="sans-serif" font-size="12">ACTIVE EMPLOYEES</text>
    <text x="20" y="68" fill="#F7F7F5" font-family="sans-serif" font-size="26" font-weight="bold">142</text>
    <text x="20" y="87" fill="#10B981" font-family="monospace" font-size="11">Engineering &amp; Ops</text>

    <rect x="340" y="0" width="315" height="95" rx="10" fill="#181E29" stroke="#2A3444" stroke-width="1.5"/>
    <text x="360" y="32" fill="#94A3B8" font-family="sans-serif" font-size="12">LEAVE REQUESTS</text>
    <text x="360" y="68" fill="#38BDF8" font-family="sans-serif" font-size="26" font-weight="bold">3 Pending</text>
    <text x="360" y="87" fill="#38BDF8" font-family="monospace" font-size="11">1-Click Approval</text>

    <rect x="680" y="0" width="315" height="95" rx="10" fill="#181E29" stroke="#2A3444" stroke-width="1.5"/>
    <text x="700" y="32" fill="#94A3B8" font-family="sans-serif" font-size="12">COMPANY ASSETS</text>
    <text x="700" y="68" fill="#F59E0B" font-family="sans-serif" font-size="26" font-weight="bold">310 Tagged</text>
    <text x="700" y="87" fill="#F59E0B" font-family="monospace" font-size="11">MacBooks &amp; Dell Rigs</text>

    <rect x="1020" y="0" width="310" height="95" rx="10" fill="#181E29" stroke="#2A3444" stroke-width="1.5"/>
    <text x="1040" y="32" fill="#94A3B8" font-family="sans-serif" font-size="12">PAYROLL DISPATCH</text>
    <text x="1040" y="68" fill="#10B981" font-family="sans-serif" font-size="26" font-weight="bold">100% Ready</text>
    <text x="1040" y="87" fill="#10B981" font-family="monospace" font-size="11">Automated Tax Deductions</text>
  </g>

  <g transform="translate(135, 385)">
    <rect x="0" y="0" width="1330" height="415" rx="12" fill="#141923" stroke="#232B39" stroke-width="1"/>
    <text x="25" y="32" fill="#F7F7F5" font-family="sans-serif" font-size="15" font-weight="bold">Recent Employee Onboarding &amp; Hardware Custody</text>

    <rect x="25" y="55" width="1280" height="60" rx="8" fill="#1B222E"/>
    <text x="45" y="90" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Hassan Abbas • Senior Frontend Developer</text>
    <text x="600" y="90" fill="#94A3B8" font-family="monospace" font-size="13">Assigned: MacBook Pro M3 Max (Asset #MB-104)</text>
    <text x="1270" y="90" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">CUSTODY SIGNED</text>

    <rect x="25" y="125" width="1280" height="60" rx="8" fill="#181E29"/>
    <text x="45" y="160" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Fatima Noor • UI/UX Product Designer</text>
    <text x="600" y="160" fill="#94A3B8" font-family="monospace" font-size="13">Assigned: Dell UltraSharp 32-inch 4K Monitor</text>
    <text x="1270" y="160" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">CUSTODY SIGNED</text>
  </g>
`;

const billingContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#11161F" stroke="#252D3C" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#161C27"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX BILLING &amp; INVOICING // FBR DIGITAL POS INTEGRATED</text>

  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="1330" height="540" rx="12" fill="#141923" stroke="#232B39" stroke-width="1"/>
    
    <g transform="translate(30, 30)">
      <text x="0" y="25" fill="#F7F7F5" font-family="sans-serif" font-size="18" font-weight="bold">Invoice #ARV-2026-0894</text>
      <text x="0" y="50" fill="#94A3B8" font-family="sans-serif" font-size="13">Billed To: Allied Horizon International FZE</text>
      <text x="0" y="70" fill="#64768B" font-family="monospace" font-size="11">NTN: 8492014-9 • Sales Tax Reg: 17-00-8492-014-99</text>
      
      <rect x="900" y="0" width="370" height="70" rx="8" fill="#10B981" opacity="0.15" stroke="#10B981" stroke-width="1.5"/>
      <text x="920" y="32" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold">FBR INVOICE VERIFICATION CODE</text>
      <text x="920" y="55" fill="#F7F7F5" font-family="monospace" font-size="15" font-weight="bold">0942-8492-1084-FBR-PK</text>
    </g>

    <g transform="translate(30, 140)">
      <rect x="0" y="0" width="1270" height="40" rx="6" fill="#1C2330"/>
      <text x="20" y="25" fill="#94A3B8" font-family="sans-serif" font-size="12" font-weight="bold">DESCRIPTION</text>
      <text x="700" y="25" fill="#94A3B8" font-family="sans-serif" font-size="12" font-weight="bold">QTY</text>
      <text x="900" y="25" fill="#94A3B8" font-family="sans-serif" font-size="12" font-weight="bold">RATE (PKR)</text>
      <text x="1250" y="25" fill="#94A3B8" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="end">TOTAL (PKR)</text>

      <rect x="0" y="50" width="1270" height="50" rx="6" fill="#181F2A"/>
      <text x="20" y="80" fill="#F7F7F5" font-family="sans-serif" font-size="13">Enterprise Cloud Infrastructure Setup &amp; ECS Cluster</text>
      <text x="700" y="80" fill="#F7F7F5" font-family="monospace" font-size="13">1</text>
      <text x="900" y="80" fill="#F7F7F5" font-family="monospace" font-size="13">450,000</text>
      <text x="1250" y="80" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold" text-anchor="end">450,000</text>

      <rect x="0" y="110" width="1270" height="50" rx="6" fill="#181F2A"/>
      <text x="20" y="140" fill="#F7F7F5" font-family="sans-serif" font-size="13">Biometric Attendance Hardware Bridge API (ZKTeco)</text>
      <text x="700" y="140" fill="#F7F7F5" font-family="monospace" font-size="13">2</text>
      <text x="900" y="140" fill="#F7F7F5" font-family="monospace" font-size="13">125,000</text>
      <text x="1250" y="140" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold" text-anchor="end">250,000</text>

      <rect x="0" y="170" width="1270" height="50" rx="6" fill="#181F2A"/>
      <text x="20" y="200" fill="#F7F7F5" font-family="sans-serif" font-size="13">WhatsApp Business Cloud API Dedicated Gateway</text>
      <text x="700" y="200" fill="#F7F7F5" font-family="monospace" font-size="13">1</text>
      <text x="900" y="200" fill="#F7F7F5" font-family="monospace" font-size="13">180,000</text>
      <text x="1250" y="200" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold" text-anchor="end">180,000</text>

      <rect x="850" y="240" width="420" height="110" rx="8" fill="#1E2634" stroke="#2F3A4C" stroke-width="1"/>
      <text x="870" y="270" fill="#94A3B8" font-family="sans-serif" font-size="13">Subtotal: PKR 880,000</text>
      <text x="870" y="295" fill="#94A3B8" font-family="sans-serif" font-size="13">PRA / FBR Tax (16%): PKR 140,800</text>
      <text x="870" y="330" fill="#10B981" font-family="sans-serif" font-size="16" font-weight="bold">Total Due: PKR 1,020,800</text>
    </g>
  </g>
`;

// ==========================================
// 2. STUDIO SERVICES
// ==========================================

const whatsappContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#0C1412" stroke="#18362B" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#10251E"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX ENTERPRISE // WHATSAPP BUSINESS CLOUD API ENGINE</text>

  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="540" height="540" rx="18" fill="#0E1715" stroke="#1D382F" stroke-width="2"/>
    <rect x="0" y="0" width="540" height="60" rx="18" fill="#075E54"/>
    <circle cx="40" cy="30" r="18" fill="#25D366"/>
    <text x="70" y="28" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">Aravex Official Business Desk</text>
    <text x="70" y="48" fill="#D1FAE5" font-family="sans-serif" font-size="11">Verified Meta Business Account ✓</text>

    <rect x="30" y="85" width="380" height="80" rx="12" fill="#1F2C34"/>
    <text x="50" y="115" fill="#E9EDEF" font-family="sans-serif" font-size="13">Assalam-o-Alaikum! Your order #8492</text>
    <text x="50" y="140" fill="#E9EDEF" font-family="sans-serif" font-size="13">has been dispatched from Lahore Hub.</text>

    <rect x="130" y="185" width="380" height="60" rx="12" fill="#005C4B"/>
    <text x="150" y="215" fill="#E9EDEF" font-family="sans-serif" font-size="13">Can I track live rider location?</text>
    <text x="470" y="235" fill="#34B7F1" font-family="monospace" font-size="10">✓✓</text>

    <rect x="30" y="265" width="440" height="140" rx="12" fill="#1F2C34"/>
    <text x="50" y="295" fill="#E9EDEF" font-family="sans-serif" font-size="13">Yes! Tap below for live GPS telemetry:</text>
    <rect x="50" y="315" width="400" height="36" rx="6" fill="#075E54"/>
    <text x="250" y="338" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">📍 Live Courier Tracking</text>
    <rect x="50" y="358" width="400" height="36" rx="6" fill="#233138"/>
    <text x="250" y="381" fill="#25D366" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">📄 Download Tax Invoice (PDF)</text>
  </g>

  <g transform="translate(710, 260)">
    <rect x="0" y="0" width="755" height="540" rx="12" fill="#0F1B18" stroke="#1D382F" stroke-width="1.5"/>
    <text x="30" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Automated Notification Pipeline &amp; Throughput</text>

    <rect x="30" y="70" width="695" height="90" rx="10" fill="#142621"/>
    <text x="50" y="105" fill="#94A3B8" font-family="sans-serif" font-size="12">META GRAPH API STATUS</text>
    <text x="50" y="138" fill="#10B981" font-family="sans-serif" font-size="22" font-weight="bold">Cloud API v20.0 — 0s Queue Backlog</text>
    <text x="695" y="125" fill="#10B981" font-family="monospace" font-size="13" font-weight="bold" text-anchor="end">99.99% DELIVERABILITY</text>

    <rect x="30" y="180" width="695" height="90" rx="10" fill="#142621"/>
    <text x="50" y="215" fill="#94A3B8" font-family="sans-serif" font-size="12">BROADCAST THROUGHPUT</text>
    <text x="50" y="248" fill="#38BDF8" font-family="sans-serif" font-size="22" font-weight="bold">120 Messages / Second</text>
    <text x="695" y="235" fill="#38BDF8" font-family="monospace" font-size="13" font-weight="bold" text-anchor="end">TIER 3 SCALE</text>

    <rect x="30" y="290" width="695" height="210" rx="10" fill="#101F1B" stroke="#1F3F34" stroke-width="1"/>
    <text x="50" y="325" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Automated Trigger Events Supported:</text>
    <text x="50" y="355" fill="#94A3B8" font-family="monospace" font-size="12">• POS Receipt Generation -&gt; Instant PDF dispatched</text>
    <text x="50" y="385" fill="#94A3B8" font-family="monospace" font-size="12">• Clinic Appointment Booked -&gt; 24h &amp; 2h WhatsApp reminders</text>
    <text x="50" y="415" fill="#94A3B8" font-family="monospace" font-size="12">• Student Fee Challan Generated -&gt; 1-click payment link sent</text>
    <text x="50" y="445" fill="#94A3B8" font-family="monospace" font-size="12">• Abandoned Cart Recovery -&gt; Automated personalized recovery discount</text>
  </g>
`;

const webDevContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#11151D" stroke="#252D3C" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#161B26"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX WEB ENGINEERING // NEXT.JS 15 APP ROUTER &amp; EDGE WORKERS</text>

  <g transform="translate(135, 260)">
    <!-- Code Editor Window -->
    <rect x="0" y="0" width="800" height="540" rx="12" fill="#0D1016" stroke="#242B38" stroke-width="1.5"/>
    <rect x="0" y="0" width="800" height="40" rx="12" fill="#161B24"/>
    <circle cx="25" cy="20" r="5" fill="#EF4444"/>
    <circle cx="45" cy="20" r="5" fill="#F59E0B"/>
    <circle cx="65" cy="20" r="5" fill="#10B981"/>
    <text x="100" y="25" fill="#94A3B8" font-family="monospace" font-size="12">app/actions/checkout.ts — Edge Runtime</text>

    <g transform="translate(30, 65)">
      <text x="0" y="20" fill="#64768B" font-family="monospace" font-size="12">'use server';</text>
      <text x="0" y="45" fill="#F43F5E" font-family="monospace" font-size="12">import <text fill="#F7F7F5">{ redis } from </text><text fill="#10B981">'@/lib/redis'</text>;</text>
      <text x="0" y="70" fill="#F43F5E" font-family="monospace" font-size="12">import <text fill="#F7F7F5">{ db } from </text><text fill="#10B981">'@/lib/database'</text>;</text>
      
      <text x="0" y="115" fill="#38BDF8" font-family="monospace" font-size="12">export async function <text fill="#FCD34D">processOrder</text>(payload: OrderPayload) {</text>
      <text x="25" y="140" fill="#64768B" font-family="monospace" font-size="12">// Atomic lock prevents race-condition inventory exhaustion</text>
      <text x="25" y="165" fill="#38BDF8" font-family="monospace" font-size="12">const lock = await redis.set(&apos;lock:order:&apos; + payload.id, &apos;held&apos;, &apos;NX&apos;, &apos;EX&apos;, 5);</text>
      <text x="25" y="190" fill="#F43F5E" font-family="monospace" font-size="12">if (!lock) throw new Error('Concurrent order conflict');</text>
      <text x="25" y="225" fill="#64768B" font-family="monospace" font-size="12">// Zero-latency Edge mutation</text>
      <text x="25" y="250" fill="#38BDF8" font-family="monospace" font-size="12">const record = await db.transaction(async (tx) => {</text>
      <text x="50" y="275" fill="#F7F7F5" font-family="monospace" font-size="12">return await tx.insert(orders).values(payload);</text>
      <text x="25" y="300" fill="#38BDF8" font-family="monospace" font-size="12">});</text>
      <text x="25" y="335" fill="#10B981" font-family="monospace" font-size="12">return { success: true, orderId: record.id, latency: '12ms' };</text>
      <text x="0" y="365" fill="#38BDF8" font-family="monospace" font-size="12">}</text>
    </g>
  </g>

  <g transform="translate(965, 260)">
    <!-- Web Vitals Telemetry -->
    <rect x="0" y="0" width="500" height="540" rx="12" fill="#131722" stroke="#242B38" stroke-width="1.5"/>
    <text x="30" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Core Web Vitals &amp; Edge Performance</text>

    <rect x="30" y="70" width="440" height="95" rx="10" fill="#1A212E"/>
    <text x="50" y="105" fill="#94A3B8" font-family="sans-serif" font-size="12">LARGEST CONTENTFUL PAINT (LCP)</text>
    <text x="50" y="142" fill="#10B981" font-family="sans-serif" font-size="28" font-weight="bold">0.68s</text>
    <text x="440" y="135" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">TOP 1% GLOBALLY</text>

    <rect x="30" y="185" width="440" height="95" rx="10" fill="#1A212E"/>
    <text x="50" y="220" fill="#94A3B8" font-family="sans-serif" font-size="12">CUMULATIVE LAYOUT SHIFT (CLS)</text>
    <text x="50" y="257" fill="#10B981" font-family="sans-serif" font-size="28" font-weight="bold">0.000</text>
    <text x="440" y="250" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">ZERO FLICKER</text>

    <rect x="30" y="300" width="440" height="95" rx="10" fill="#1A212E"/>
    <text x="50" y="335" fill="#94A3B8" font-family="sans-serif" font-size="12">INTERACTION TO NEXT PAINT (INP)</text>
    <text x="50" y="372" fill="#38BDF8" font-family="sans-serif" font-size="28" font-weight="bold">24ms</text>
    <text x="440" y="365" fill="#38BDF8" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">INSTANT RESPONSE</text>
  </g>
`;

const mobileAppContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#10131A" stroke="#222936" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#151922"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX MOBILE ENGINEERING // REACT NATIVE &amp; FLUTTER ARCHITECTURE</text>

  <g transform="translate(180, 260)">
    <!-- Smartphone Mockup 1 -->
    <rect x="0" y="0" width="280" height="540" rx="36" fill="#0D0F14" stroke="#333D4F" stroke-width="4"/>
    <rect x="80" y="12" width="120" height="18" rx="9" fill="#1F2633"/>
    
    <g transform="translate(20, 50)">
      <rect x="0" y="0" width="240" height="80" rx="12" fill="#1C2330"/>
      <text x="15" y="30" fill="#94A3B8" font-family="sans-serif" font-size="11">TOTAL BALANCE</text>
      <text x="15" y="60" fill="#F7F7F5" font-family="sans-serif" font-size="20" font-weight="bold">$48,290.40</text>
      
      <rect x="0" y="95" width="240" height="50" rx="8" fill="#10B981" opacity="0.15" stroke="#10B981" stroke-width="1"/>
      <text x="15" y="125" fill="#10B981" font-family="sans-serif" font-size="11" font-weight="bold">Biometric FaceID Unlocked ✓</text>

      <rect x="0" y="160" width="240" height="150" rx="10" fill="#161B24"/>
      <text x="15" y="185" fill="#F7F7F5" font-family="sans-serif" font-size="12" font-weight="bold">Recent Transactions</text>
      <text x="15" y="215" fill="#94A3B8" font-family="sans-serif" font-size="11">• Apple Store Munich</text>
      <text x="15" y="240" fill="#94A3B8" font-family="sans-serif" font-size="11">• AWS Cloud Infrastructure</text>
      <text x="15" y="265" fill="#94A3B8" font-family="sans-serif" font-size="11">• Stripe Transfer</text>
    </g>
  </g>

  <g transform="translate(510, 260)">
    <!-- Smartphone Mockup 2 (iOS / Android Multiplatform) -->
    <rect x="0" y="0" width="280" height="540" rx="36" fill="#0D0F14" stroke="#333D4F" stroke-width="4"/>
    <rect x="80" y="12" width="120" height="18" rx="9" fill="#1F2633"/>
    
    <g transform="translate(20, 50)">
      <text x="0" y="25" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Real-Time Delivery Fleet</text>
      <rect x="0" y="40" width="240" height="200" rx="12" fill="#19202B"/>
      <!-- Map Graphic Simulation -->
      <line x1="20" y1="60" x2="220" y2="180" stroke="#38BDF8" stroke-width="3" stroke-dasharray="4 4"/>
      <circle cx="20" cy="60" r="6" fill="#10B981"/>
      <circle cx="220" cy="180" r="6" fill="#EF4444"/>
      <rect x="70" y="110" width="100" height="30" rx="6" fill="#111827"/>
      <text x="120" y="130" fill="#F7F7F5" font-family="monospace" font-size="10" text-anchor="middle">ETA: 4 Mins</text>
    </g>
  </g>

  <g transform="translate(840, 260)">
    <rect x="0" y="0" width="625" height="540" rx="12" fill="#141822" stroke="#252F3E" stroke-width="1.5"/>
    <text x="30" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Native Performance Benchmarks</text>

    <rect x="30" y="70" width="565" height="100" rx="10" fill="#1A212D"/>
    <text x="50" y="105" fill="#94A3B8" font-family="sans-serif" font-size="12">FRAME RATE STABILITY</text>
    <text x="50" y="142" fill="#10B981" font-family="sans-serif" font-size="28" font-weight="bold">120 FPS Fluid</text>
    <text x="545" y="135" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">ProMotion 120Hz</text>

    <rect x="30" y="190" width="565" height="100" rx="10" fill="#1A212D"/>
    <text x="50" y="225" fill="#94A3B8" font-family="sans-serif" font-size="12">COLD APP START TIME</text>
    <text x="50" y="262" fill="#38BDF8" font-family="sans-serif" font-size="28" font-weight="bold">380 ms</text>
    <text x="545" y="255" fill="#38BDF8" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">Instant Boot</text>

    <rect x="30" y="310" width="565" height="190" rx="10" fill="#101820" stroke="#1F2F3F" stroke-width="1"/>
    <text x="50" y="345" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Core Capabilities Included:</text>
    <text x="50" y="375" fill="#94A3B8" font-family="monospace" font-size="12">• Offline-first SQLite &amp; WatermelonDB synchronization</text>
    <text x="50" y="405" fill="#94A3B8" font-family="monospace" font-size="12">• Background GPS location telemetry &amp; geofencing</text>
    <text x="50" y="435" fill="#94A3B8" font-family="monospace" font-size="12">• Direct thermal Bluetooth &amp; USB printer integration</text>
    <text x="50" y="465" fill="#94A3B8" font-family="monospace" font-size="12">• Apple Pay, Google Pay &amp; 1Link payment gateways</text>
  </g>
`;

const desktopContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#11161F" stroke="#252D3C" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#161C27"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX DESKTOP ENGINEERING // ELECTRON, C++ &amp; NATIVE HARDWARE DRIVERS</text>

  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="1330" height="540" rx="12" fill="#141923" stroke="#232B39" stroke-width="1"/>
    
    <g transform="translate(30, 30)">
      <rect x="0" y="0" width="600" height="480" rx="10" fill="#181E29" stroke="#2A3444" stroke-width="1.5"/>
      <text x="25" y="35" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Connected Hardware Peripherals</text>
      
      <rect x="25" y="60" width="550" height="70" rx="8" fill="#10B981" opacity="0.12" stroke="#10B981" stroke-width="1"/>
      <text x="45" y="90" fill="#10B981" font-family="sans-serif" font-size="14" font-weight="bold">Epson TM-T88VI Thermal Receipt Printer</text>
      <text x="45" y="112" fill="#94A3B8" font-family="monospace" font-size="11">COM3 @ 9600 baud • ESC/POS Native Driver Linked</text>

      <rect x="25" y="145" width="550" height="70" rx="8" fill="#10B981" opacity="0.12" stroke="#10B981" stroke-width="1"/>
      <text x="45" y="175" fill="#10B981" font-family="sans-serif" font-size="14" font-weight="bold">Honeywell Voyager 1400g 2D Barcode Scanner</text>
      <text x="45" y="197" fill="#94A3B8" font-family="monospace" font-size="11">USB HID Keyboard Emulation • 0.04s Lookup Latency</text>

      <rect x="25" y="230" width="550" height="70" rx="8" fill="#38BDF8" opacity="0.12" stroke="#38BDF8" stroke-width="1"/>
      <text x="45" y="260" fill="#38BDF8" font-family="sans-serif" font-size="14" font-weight="bold">APG Cash Drawer (24V Solenoid Trigger)</text>
      <text x="45" y="282" fill="#94A3B8" font-family="monospace" font-size="11">Direct RJ12 Kickout Pulse on Transaction Finalize</text>

      <rect x="25" y="315" width="550" height="70" rx="8" fill="#10B981" opacity="0.12" stroke="#10B981" stroke-width="1"/>
      <text x="45" y="345" fill="#10B981" font-family="sans-serif" font-size="14" font-weight="bold">ZKTeco Face &amp; Fingerprint Biometric Bridge</text>
      <text x="45" y="367" fill="#94A3B8" font-family="monospace" font-size="11">TCP/IP Port 4370 • Automated Staff Clock-in Daemon</text>
    </g>

    <g transform="translate(670, 30)">
      <rect x="0" y="0" width="630" height="480" rx="10" fill="#181E29" stroke="#2A3444" stroke-width="1.5"/>
      <text x="25" y="35" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Air-Gapped Local Database Engine</text>

      <rect x="25" y="60" width="580" height="180" rx="8" fill="#0D1016" stroke="#242B38" stroke-width="1"/>
      <text x="40" y="90" fill="#64768B" font-family="monospace" font-size="11">// SQLite WAL Mode Real-time Persistence</text>
      <text x="40" y="115" fill="#38BDF8" font-family="monospace" font-size="12">PRAGMA journal_mode = WAL;</text>
      <text x="40" y="140" fill="#38BDF8" font-family="monospace" font-size="12">PRAGMA synchronous = NORMAL;</text>
      <text x="40" y="170" fill="#10B981" font-family="monospace" font-size="12">INSERT INTO transactions (id, total, status)</text>
      <text x="40" y="195" fill="#F7F7F5" font-family="monospace" font-size="12">VALUES ('TX-9482', 18450.00, 'CONFIRMED');</text>
      <text x="40" y="225" fill="#10B981" font-family="monospace" font-size="11">✓ Written to Disk in 0.82ms (Offline Resilient)</text>

      <rect x="25" y="260" width="580" height="180" rx="8" fill="#161C27"/>
      <text x="45" y="295" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Platform Binaries Compiled For:</text>
      <text x="45" y="325" fill="#94A3B8" font-family="monospace" font-size="12">• Windows 10/11 x64 &amp; ARM64 (.exe, .msi)</text>
      <text x="45" y="355" fill="#94A3B8" font-family="monospace" font-size="12">• macOS Apple Silicon (M1/M2/M3/M4) &amp; Intel (.dmg)</text>
      <text x="45" y="385" fill="#94A3B8" font-family="monospace" font-size="12">• Ubuntu / Debian Linux POS Kiosks (.deb, AppImage)</text>
    </g>
  </g>
`;

const aiAgentsContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#0E1219" stroke="#212836" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#131722"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX AI ENGINEERING // MULTI-AGENT SWARMS &amp; DETERMINISTIC TOOL EXECUTION</text>

  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="1330" height="540" rx="12" fill="#141822" stroke="#252F3E" stroke-width="1.5"/>
    <text x="35" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Autonomous Agent Orchestration Graph (LangGraph / FastAPI)</text>

    <!-- Node 1: Supervisor -->
    <rect x="60" y="180" width="220" height="110" rx="12" fill="#1B2230" stroke="#38BDF8" stroke-width="2"/>
    <text x="170" y="215" fill="#38BDF8" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">SUPERVISOR AGENT</text>
    <text x="170" y="240" fill="#F7F7F5" font-family="sans-serif" font-size="11" text-anchor="middle">Intent &amp; Routing</text>
    <text x="170" y="265" fill="#94A3B8" font-family="monospace" font-size="10" text-anchor="middle">Confidence: 99.4%</text>

    <!-- Connectors -->
    <line x1="280" y1="235" x2="420" y2="120" stroke="#64768B" stroke-width="2" stroke-dasharray="4 4"/>
    <line x1="280" y1="235" x2="420" y2="235" stroke="#64768B" stroke-width="2"/>
    <line x1="280" y1="235" x2="420" y2="350" stroke="#64768B" stroke-width="2" stroke-dasharray="4 4"/>

    <!-- Node 2: SQL Agent -->
    <rect x="420" y="70" width="240" height="100" rx="12" fill="#1B2230" stroke="#10B981" stroke-width="1.5"/>
    <text x="540" y="105" fill="#10B981" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">DATABASE QUERY AGENT</text>
    <text x="540" y="130" fill="#F7F7F5" font-family="sans-serif" font-size="11" text-anchor="middle">pgvector &amp; Text-to-SQL</text>
    <text x="540" y="152" fill="#94A3B8" font-family="monospace" font-size="10" text-anchor="middle">Schema-Constrained</text>

    <!-- Node 3: Policy Agent -->
    <rect x="420" y="185" width="240" height="100" rx="12" fill="#1B2230" stroke="#F59E0B" stroke-width="1.5"/>
    <text x="540" y="220" fill="#F59E0B" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">POLICY &amp; REFUND AGENT</text>
    <text x="540" y="245" fill="#F7F7F5" font-family="sans-serif" font-size="11" text-anchor="middle">SLA Verification</text>
    <text x="540" y="267" fill="#94A3B8" font-family="monospace" font-size="10" text-anchor="middle">Deterministic Guardrail</text>

    <!-- Node 4: WhatsApp Dispatcher -->
    <rect x="420" y="300" width="240" height="100" rx="12" fill="#1B2230" stroke="#38BDF8" stroke-width="1.5"/>
    <text x="540" y="335" fill="#38BDF8" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">COMMUNICATION AGENT</text>
    <text x="540" y="360" fill="#F7F7F5" font-family="sans-serif" font-size="11" text-anchor="middle">Meta WhatsApp Cloud API</text>
    <text x="540" y="382" fill="#94A3B8" font-family="monospace" font-size="10" text-anchor="middle">Multilingual Urdu/Eng</text>

    <!-- Human in the Loop Gate -->
    <line x1="660" y1="235" x2="800" y2="235" stroke="#10B981" stroke-width="2"/>
    <rect x="800" y="160" width="220" height="150" rx="12" fill="#16221D" stroke="#10B981" stroke-width="2"/>
    <text x="910" y="195" fill="#10B981" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">SAFETY &amp; APPROVAL</text>
    <text x="910" y="225" fill="#F7F7F5" font-family="sans-serif" font-size="11" text-anchor="middle">Human in the Loop</text>
    <text x="910" y="250" fill="#94A3B8" font-family="monospace" font-size="10" text-anchor="middle">Auto-passed for &lt;$50</text>
    <rect x="830" y="265" width="160" height="30" rx="6" fill="#10B981"/>
    <text x="910" y="285" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">✓ SAFE EXECUTION</text>

    <!-- Live Execution Telemetry -->
    <rect x="1060" y="70" width="240" height="430" rx="12" fill="#10141D" stroke="#222A38" stroke-width="1"/>
    <text x="1080" y="105" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">Agent Telemetry</text>
    <text x="1080" y="145" fill="#94A3B8" font-family="monospace" font-size="11">Total Tokens: 1,420</text>
    <text x="1080" y="175" fill="#94A3B8" font-family="monospace" font-size="11">Execution: 480ms</text>
    <text x="1080" y="205" fill="#94A3B8" font-family="monospace" font-size="11">Hallucination Risk: 0.0%</text>
    <text x="1080" y="235" fill="#10B981" font-family="monospace" font-size="11">Output Status: VERIFIED</text>
  </g>
`;

const cloudAwsContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#0D1117" stroke="#202734" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#121721"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX CLOUD ARCHITECTURE // AWS MULTI-REGION TERRAFORM INFRASTRUCTURE</text>

  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="1330" height="540" rx="12" fill="#131822" stroke="#242F40" stroke-width="1.5"/>
    
    <!-- AWS Cloud VPC -->
    <rect x="40" y="40" width="800" height="460" rx="12" fill="#0F141C" stroke="#FF9900" stroke-width="1.5"/>
    <text x="65" y="75" fill="#FF9900" font-family="sans-serif" font-size="14" font-weight="bold">AWS Cloud VPC (eu-west-1 &amp; ap-south-1)</text>

    <!-- Public Subnet / CloudFront -->
    <rect x="70" y="100" width="740" height="100" rx="8" fill="#18202D"/>
    <text x="90" y="130" fill="#38BDF8" font-family="sans-serif" font-size="13" font-weight="bold">Edge Tier: Amazon CloudFront CDN + AWS WAF</text>
    <text x="90" y="155" fill="#94A3B8" font-family="monospace" font-size="11">DDoS Mitigation • Geo-Routing • TLS 1.3 Termination • Global Anycast</text>
    <text x="90" y="178" fill="#10B981" font-family="monospace" font-size="11">✓ Zero Blocked Traffic Under 150 Gbps Volumetric Spike</text>

    <!-- ECS Fargate Cluster -->
    <rect x="70" y="220" width="740" height="120" rx="8" fill="#18202D"/>
    <text x="90" y="250" fill="#10B981" font-family="sans-serif" font-size="13" font-weight="bold">Compute Tier: AWS ECS Fargate Cluster (Automated Blue/Green)</text>
    <text x="90" y="275" fill="#94A3B8" font-family="monospace" font-size="11">Auto-Scaling 2 to 32 Tasks • Sub-second Health Probes • 0s Downtime</text>
    <text x="90" y="300" fill="#38BDF8" font-family="monospace" font-size="11">CPU Threshold: 70% Cutover Trigger • Multi-AZ Resilience</text>

    <!-- Database Tier: RDS Aurora Multi-AZ -->
    <rect x="70" y="360" width="740" height="120" rx="8" fill="#18202D"/>
    <text x="90" y="390" fill="#38BDF8" font-family="sans-serif" font-size="13" font-weight="bold">Data Tier: Amazon Aurora PostgreSQL Multi-AZ Cluster</text>
    <text x="90" y="415" fill="#94A3B8" font-family="monospace" font-size="11">Automated Read Replicas • Point-in-Time Recovery • KMS AES-256 Encryption</text>
    <text x="90" y="440" fill="#10B981" font-family="monospace" font-size="11">RPO: &lt;1 second • RTO: &lt;30 seconds Disaster Failover</text>

    <!-- Metrics Column -->
    <g transform="translate(870, 40)">
      <rect x="0" y="0" width="420" height="460" rx="12" fill="#10151E" stroke="#222C3D" stroke-width="1"/>
      <text x="30" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">SLA &amp; Uptime Telemetry</text>

      <rect x="25" y="70" width="370" height="95" rx="10" fill="#171E2A"/>
      <text x="45" y="105" fill="#94A3B8" font-family="sans-serif" font-size="12">GUARANTEED UPTIME</text>
      <text x="45" y="142" fill="#10B981" font-family="sans-serif" font-size="28" font-weight="bold">99.99%</text>
      <text x="375" y="135" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">&lt;4.3m / yr</text>

      <rect x="25" y="185" width="370" height="95" rx="10" fill="#171E2A"/>
      <text x="45" y="220" fill="#94A3B8" font-family="sans-serif" font-size="12">TERRAFORM COVERAGE</text>
      <text x="45" y="257" fill="#38BDF8" font-family="sans-serif" font-size="28" font-weight="bold">100% IaC</text>
      <text x="375" y="250" fill="#38BDF8" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">No ClickOps</text>
    </g>
  </g>
`;

const uiuxContent = `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#11151D" stroke="#242B38" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#151A24"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX DESIGN SYSTEM // ARCHITECTURAL FIGMA TOKS, AUTO-LAYOUT &amp; MICRO-INTERACTIONS</text>

  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="1330" height="540" rx="12" fill="#141822" stroke="#242D3A" stroke-width="1.5"/>
    
    <!-- Color Tokens Column -->
    <g transform="translate(40, 40)">
      <text x="0" y="25" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Official Token Architecture</text>
      
      <rect x="0" y="50" width="100" height="70" rx="8" fill="#0F1114" stroke="#333D4E" stroke-width="1"/>
      <text x="120" y="80" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">Charcoal #0F1114</text>
      <text x="120" y="100" fill="#94A3B8" font-family="sans-serif" font-size="11">Primary Dark Background</text>

      <rect x="0" y="135" width="100" height="70" rx="8" fill="#2A2F36" stroke="#4B5563" stroke-width="1"/>
      <text x="120" y="165" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">Deep Graphite #2A2F36</text>
      <text x="120" y="185" fill="#94A3B8" font-family="sans-serif" font-size="11">Card Border &amp; Elev 1</text>

      <rect x="0" y="220" width="100" height="70" rx="8" fill="#64768B"/>
      <text x="120" y="250" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">Slate Blue #64768B</text>
      <text x="120" y="270" fill="#94A3B8" font-family="sans-serif" font-size="11">Precision Secondary Accent</text>

      <rect x="0" y="305" width="100" height="70" rx="8" fill="#F7F7F5"/>
      <text x="120" y="335" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">Warm White #F7F7F5</text>
      <text x="120" y="355" fill="#94A3B8" font-family="sans-serif" font-size="11">Primary Typography Header</text>
    </g>

    <!-- Component States Preview -->
    <g transform="translate(560, 40)">
      <text x="0" y="25" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Interactive Component Library</text>

      <rect x="0" y="50" width="340" height="55" rx="8" fill="#F7F7F5"/>
      <text x="170" y="85" fill="#0F1114" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Button.Primary (Default)</text>

      <rect x="0" y="120" width="340" height="55" rx="8" fill="#10B981"/>
      <text x="170" y="155" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Button.Success (Confirmed)</text>

      <rect x="0" y="190" width="340" height="55" rx="8" fill="#1C2330" stroke="#38BDF8" stroke-width="1.5"/>
      <text x="170" y="225" fill="#38BDF8" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Button.Outline (Magnetic Hover)</text>

      <rect x="0" y="260" width="340" height="85" rx="10" fill="#12161F" stroke="#252F3F" stroke-width="1"/>
      <text x="20" y="295" fill="#94A3B8" font-family="sans-serif" font-size="12">Interactive Switch</text>
      <rect x="250" y="280" width="60" height="30" rx="15" fill="#10B981"/>
      <circle cx="295" cy="295" r="11" fill="#FFFFFF"/>
    </g>

    <!-- Typography Scale -->
    <g transform="translate(970, 40)">
      <text x="0" y="25" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Fluid Typography Scale</text>
      <text x="0" y="70" fill="#F7F7F5" font-family="sans-serif" font-size="28" font-weight="bold">Display 1 (64px)</text>
      <text x="0" y="110" fill="#F7F7F5" font-family="sans-serif" font-size="22" font-weight="bold">Heading 2 (36px)</text>
      <text x="0" y="145" fill="#F7F7F5" font-family="sans-serif" font-size="16">Body Large (18px / 1.6)</text>
      <text x="0" y="175" fill="#94A3B8" font-family="monospace" font-size="13">Monospace Caption (13px)</text>
      
      <rect x="0" y="220" width="320" height="120" rx="10" fill="#121721" stroke="#232C3C" stroke-width="1"/>
      <text x="20" y="255" fill="#10B981" font-family="sans-serif" font-size="13" font-weight="bold">WCAG 2.2 AAA Contrast</text>
      <text x="20" y="285" fill="#94A3B8" font-family="sans-serif" font-size="11">Minimum 7:1 ratio verified across</text>
      <text x="20" y="305" fill="#94A3B8" font-family="sans-serif" font-size="11">every dark and light theme variant.</text>
    </g>
  </g>
`;

// ==========================================
// 3. ACADEMY COURSES
// ==========================================

function makeCourseGraphic(courseCode, title, weeks, tools, topics) {
  return `
  <rect x="100" y="185" width="1400" height="645" rx="16" fill="#10141C" stroke="#242B38" stroke-width="1.5"/>
  <rect x="100" y="185" width="1400" height="50" rx="16" fill="#151A23"/>
  <text x="135" y="217" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">ARAVEX ACADEMY // SYLLABUS &amp; HANDS-ON LAB SPECIFICATION</text>

  <g transform="translate(135, 260)">
    <rect x="0" y="0" width="800" height="540" rx="12" fill="#131720" stroke="#222834" stroke-width="1.5"/>
    <text x="35" y="45" fill="#38BDF8" font-family="monospace" font-size="13" font-weight="bold">${escapeXml(courseCode)} // ${weeks} INTENSIVE BOOTCAMP</text>
    <text x="35" y="85" fill="#F7F7F5" font-family="sans-serif" font-size="24" font-weight="bold">${escapeXml(title)}</text>
    
    <rect x="35" y="115" width="730" height="75" rx="8" fill="#1A212D"/>
    <text x="55" y="145" fill="#94A3B8" font-family="sans-serif" font-size="12">CORE PRODUCTION TOOLCHAIN</text>
    <text x="55" y="170" fill="#10B981" font-family="monospace" font-size="13" font-weight="bold">${escapeXml(tools)}</text>

    <!-- Curriculum Modules -->
    <g transform="translate(35, 215)">
      ${topics.map((t, i) => `
        <rect x="0" y="${i * 70}" width="730" height="58" rx="8" fill="#161C26" stroke="#252D3C" stroke-width="1"/>
        <text x="25" y="${i * 70 + 35}" fill="#F7F7F5" font-family="sans-serif" font-size="13" font-weight="bold">${escapeXml(t.title)}</text>
        <text x="705" y="${i * 70 + 35}" fill="#38BDF8" font-family="monospace" font-size="11" text-anchor="end">${escapeXml(t.badge)}</text>
      `).join('')}
    </g>
  </g>

  <g transform="translate(965, 260)">
    <rect x="0" y="0" width="500" height="540" rx="12" fill="#131720" stroke="#222834" stroke-width="1.5"/>
    <text x="30" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Course Metrics &amp; Career Impact</text>

    <rect x="30" y="70" width="440" height="95" rx="10" fill="#1A212E"/>
    <text x="50" y="105" fill="#94A3B8" font-family="sans-serif" font-size="12">PRACTICAL HANDS-ON LABS</text>
    <text x="50" y="142" fill="#10B981" font-family="sans-serif" font-size="28" font-weight="bold">100% Code-First</text>
    <text x="440" y="135" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">No Slides Only</text>

    <rect x="30" y="185" width="440" height="95" rx="10" fill="#1A212E"/>
    <text x="50" y="220" fill="#94A3B8" font-family="sans-serif" font-size="12">CAPSTONE PRODUCTION PROJECT</text>
    <text x="50" y="257" fill="#38BDF8" font-family="sans-serif" font-size="28" font-weight="bold">Live Deploy</text>
    <text x="440" y="250" fill="#38BDF8" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">Public URL</text>

    <rect x="30" y="300" width="440" height="200" rx="10" fill="#101822" stroke="#1E2838" stroke-width="1"/>
    <text x="50" y="335" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">What You Will Graduate With:</text>
    <text x="50" y="365" fill="#94A3B8" font-family="monospace" font-size="12">• Production portfolio deployed on AWS / Vercel</text>
    <text x="50" y="395" fill="#94A3B8" font-family="monospace" font-size="12">• Git commit history demonstrating code reviews</text>
    <text x="50" y="425" fill="#94A3B8" font-family="monospace" font-size="12">• Aravex Studio Verified Industry Certificate</text>
    <text x="50" y="455" fill="#10B981" font-family="monospace" font-size="12">• Priority fast-track interview for Studio Internships</text>
  </g>
  `;
}

// ==========================================
// RUN BATCH GENERATION
// ==========================================

async function run() {
  const assets = [
    // Products
    { file: 'product-school.png', title: 'School Management & Fee Ledger Suite', cat: 'COMMERCIAL PRODUCTS', sub: 'Student Gradebooks • Attendance RFID • Challan Webhooks', content: schoolContent },
    { file: 'product-lms.png', title: 'Interactive Learning Management System (LMS)', cat: 'COMMERCIAL PRODUCTS', sub: 'Video Courses • Coding Sandboxes • Progress Certification', content: lmsContent },
    { file: 'product-attendance.png', title: 'Biometric Attendance & Facial Recognition System', cat: 'COMMERCIAL PRODUCTS', sub: 'Edge Hardware Sync • ZKTeco • Cloud Payroll Calculations', content: attendanceContent },
    { file: 'product-restaurant.png', title: 'Restaurant POS & Kitchen Display System (KDS)', cat: 'COMMERCIAL PRODUCTS', sub: 'Floor Plans • Table Billing • Kitchen Order Tickets (KOT)', content: restaurantContent },
    { file: 'product-library.png', title: 'Digital Library MIS & RFID Circulation Engine', cat: 'COMMERCIAL PRODUCTS', sub: 'Catalog Search • Barcode Issues • Automated Overdue Fines', content: libraryContent },
    { file: 'product-office.png', title: 'Enterprise Office HRMIS & Asset Ledger', cat: 'COMMERCIAL PRODUCTS', sub: 'Leave Approvals • Equipment Tracking • Payroll Dispatch', content: officeContent },
    { file: 'product-billing.png', title: 'FBR Digital POS Invoicing & Tax Ledger', cat: 'COMMERCIAL PRODUCTS', sub: 'Instant FBR Verification QR • Multi-Tax Schedules • PDF Receipts', content: billingContent },

    // Services
    { file: 'service-whatsapp.png', title: 'WhatsApp Business API & Customer Automation', cat: 'STUDIO CAPABILITIES', sub: 'Official Meta Graph API • Broadcasts • Webhooks', content: whatsappContent },
    { file: 'service-web-dev.png', title: 'Full-Stack Next.js 15 Web Engineering', cat: 'STUDIO CAPABILITIES', sub: 'Server Actions • React 19 • Edge Computing • Redis Caching', content: webDevContent },
    { file: 'service-mobile-app.png', title: 'Cross-Platform React Native & Flutter Mobile Apps', cat: 'STUDIO CAPABILITIES', sub: '120 FPS Native Fluidity • Biometric Auth • Offline Storage', content: mobileAppContent },
    { file: 'service-desktop.png', title: 'Enterprise Desktop Software & Native Hardware Integration', cat: 'STUDIO CAPABILITIES', sub: 'Electron & C++ • ESC/POS Thermal Printers • Barcode Scanners', content: desktopContent },
    { file: 'service-ai-agents.png', title: 'Autonomous AI Agents & Multi-Agent Swarms', cat: 'STUDIO CAPABILITIES', sub: 'LangGraph Workflows • Schema Tool Calling • Zero Hallucinations', content: aiAgentsContent },
    { file: 'service-ai-chatbots.png', title: 'RAG Enterprise LLM Knowledge Engine & Support Bots', cat: 'STUDIO CAPABILITIES', sub: 'pgvector Embeddings • Hybrid Search • 24/7 Multi-Channel Support', content: aiAgentsContent },
    { file: 'service-cloud-aws.png', title: 'AWS Cloud Architecture & Terraform IaC', cat: 'STUDIO CAPABILITIES', sub: 'Multi-AZ Aurora • ECS Fargate Blue/Green • Zero Downtime', content: cloudAwsContent },
    { file: 'service-uiux.png', title: 'Architectural UI/UX Design & Scalable Design Systems', cat: 'STUDIO CAPABILITIES', sub: 'Figma Auto-Layout • WCAG 2.2 AAA Contrast • Micro-Interactions', content: uiuxContent },
    { file: 'service-social.png', title: 'Technical Brand Growth & Omnichannel Digital Marketing', cat: 'STUDIO CAPABILITIES', sub: 'High-Intent Developer Acquisition • Conversion Funnels • Analytics', content: uiuxContent },
    { file: 'service-seo-geo.png', title: 'Programmatic Technical SEO & Generative Engine Optimization', cat: 'STUDIO CAPABILITIES', sub: 'Schema.org JSON-LD • Core Web Vitals • Perplexity & SearchGPT Visibility', content: webDevContent },
    { file: 'service-automation.png', title: 'Enterprise Business Workflow Automation & API Orchestration', cat: 'STUDIO CAPABILITIES', sub: 'Idempotent Queues • Webhook Pipelines • CRM & ERP Integration', content: whatsappContent },

    // Courses
    { 
      file: 'course-ai.png', 
      title: 'Generative AI & Autonomous Agent Architectures', 
      cat: 'ACADEMY COURSE', 
      sub: 'LLMs • LangGraph • RAG • Vector Databases • Prompt Engineering',
      content: makeCourseGraphic('AI-801', 'Generative AI & Agent Architectures', '12 Weeks', 'Python, LangChain, FastAPI, pgvector, Ollama', [
        { title: 'Module 1: Transformer Foundations & Attention Mechanisms', badge: 'Week 1-3' },
        { title: 'Module 2: RAG Pipeline Engineering with pgvector & Hybrid Search', badge: 'Week 4-6' },
        { title: 'Module 3: Multi-Agent Systems & Deterministic Tool Execution', badge: 'Week 7-9' },
        { title: 'Module 4: Fine-Tuning & Quantization for Edge Hardware', badge: 'Week 10-12' },
      ])
    },
    { 
      file: 'course-web.png', 
      title: 'Full-Stack Next.js 15 & Cloud Native Engineering', 
      cat: 'ACADEMY COURSE', 
      sub: 'Server Components • App Router • TypeScript • Tailwind • PostgreSQL',
      content: makeCourseGraphic('WEB-401', 'Full-Stack Next.js 15 & Cloud Native', '10 Weeks', 'Next.js 15, TypeScript, Tailwind, Drizzle, Redis', [
        { title: 'Module 1: React 19 Compiler, Server Actions & Streaming', badge: 'Week 1-2' },
        { title: 'Module 2: High-Performance Database Design with PostgreSQL & Drizzle', badge: 'Week 3-5' },
        { title: 'Module 3: Redis In-Memory Caching & Distributed Job Queues', badge: 'Week 6-8' },
        { title: 'Module 4: Production Deployment on AWS ECS & CloudFront', badge: 'Week 9-10' },
      ])
    },
    { 
      file: 'course-mobile.png', 
      title: 'Production iOS & Android Mobile Engineering', 
      cat: 'ACADEMY COURSE', 
      sub: 'React Native • Flutter • Native Modules • Offline Sync • Push Notifications',
      content: makeCourseGraphic('MOB-301', 'Production iOS & Android Engineering', '10 Weeks', 'React Native, Expo EAS, WatermelonDB, Swift Bridge', [
        { title: 'Module 1: React Native Core & Reanimated 3 Gestures', badge: 'Week 1-3' },
        { title: 'Module 2: Offline-First Architecture with SQLite & WatermelonDB', badge: 'Week 4-6' },
        { title: 'Module 3: Native Hardware Drivers: Bluetooth Printers & Biometrics', badge: 'Week 7-8' },
        { title: 'Module 4: App Store & Google Play Automated CI/CD Pipelines', badge: 'Week 9-10' },
      ])
    },
    { 
      file: 'course-devops.png', 
      title: 'Docker, Kubernetes & GitOps Automated Delivery', 
      cat: 'ACADEMY COURSE', 
      sub: 'Containerization • K8s Clusters • ArgoCD • Helm • Security Hardening',
      content: makeCourseGraphic('OPS-501', 'Kubernetes & GitOps Automated Delivery', '8 Weeks', 'Docker, Kubernetes, Helm, ArgoCD, Prometheus', [
        { title: 'Module 1: Multi-Stage Minimal Dockerfile Optimization', badge: 'Week 1-2' },
        { title: 'Module 2: Kubernetes Manifests, Ingress Controllers & Storage', badge: 'Week 3-4' },
        { title: 'Module 3: GitOps Declarative Deployments with ArgoCD', badge: 'Week 5-6' },
        { title: 'Module 4: Prometheus & Grafana Observability Dashboards', badge: 'Week 7-8' },
      ])
    },
    { 
      file: 'course-cloud.png', 
      title: 'AWS Certified Solutions Architect & Terraform IaC', 
      cat: 'ACADEMY COURSE', 
      sub: 'VPC • ECS Fargate • Aurora PostgreSQL • S3 • IAM Least Privilege',
      content: makeCourseGraphic('CLD-601', 'AWS Solutions Architecture & Terraform', '10 Weeks', 'AWS, Terraform, LocalStack, IAM, CloudWatch', [
        { title: 'Module 1: Enterprise Multi-AZ VPC Architecture & Routing', badge: 'Week 1-3' },
        { title: 'Module 2: Serverless & Containerized Compute on ECS Fargate', badge: 'Week 4-6' },
        { title: 'Module 3: Infrastructure as Code (IaC) with Terraform & Terragrunt', badge: 'Week 7-8' },
        { title: 'Module 4: Disaster Recovery, Backups & Cost Optimization', badge: 'Week 9-10' },
      ])
    },
    { 
      file: 'course-linux.png', 
      title: 'Enterprise Linux Hardening, Bash & Kernel Tuning', 
      cat: 'ACADEMY COURSE', 
      sub: 'Ubuntu Server • Systemd • SSH Hardening • I/O Tuning • Firewalls',
      content: makeCourseGraphic('LNX-201', 'Enterprise Linux & System Hardening', '6 Weeks', 'Ubuntu 24.04 LTS, Bash, Systemd, UFW, Fail2ban', [
        { title: 'Module 1: Linux Filesystem Hierarchy & Permissions Mastery', badge: 'Week 1-2' },
        { title: 'Module 2: Systemd Service Units, Timers & Process Signals', badge: 'Week 3-4' },
        { title: 'Module 3: Security Hardening: SSH Keys, UFW & Kernel Sysctl', badge: 'Week 5-6' },
      ])
    },
    { 
      file: 'course-networking.png', 
      title: 'TCP/IP, DNS, BGP Routing & Zero-Trust Networks', 
      cat: 'ACADEMY COURSE', 
      sub: 'OSI Model • WireGuard VPN • SSL/TLS Handshakes • Packet Inspection',
      content: makeCourseGraphic('NET-301', 'TCP/IP & Zero-Trust Architecture', '6 Weeks', 'Wireshark, WireGuard, Nginx, BIND9, iptables', [
        { title: 'Module 1: Deep Packet Inspection with Wireshark & TCP Handshakes', badge: 'Week 1-2' },
        { title: 'Module 2: DNS Resolution, BGP Anycast & CDN Edge Routing', badge: 'Week 3-4' },
        { title: 'Module 3: WireGuard Mesh Networks & Zero-Trust Perimeter Defense', badge: 'Week 5-6' },
      ])
    },
    { 
      file: 'course-git.png', 
      title: 'Advanced Git Internals, Monorepos & Trunk-Based Dev', 
      cat: 'ACADEMY COURSE', 
      sub: 'Interactive Rebase • Bisect • Worktrees • Monorepo CI • Hooks',
      content: makeCourseGraphic('GIT-101', 'Advanced Git Internals & Monorepos', '4 Weeks', 'Git CLI, Turborepo, GitHub Actions, Husky', [
        { title: 'Module 1: Git Object Model (Blobs, Trees, Commits, Tags)', badge: 'Week 1' },
        { title: 'Module 2: Interactive Rebasing, Cherry-Picking & Bisect Debugging', badge: 'Week 2' },
        { title: 'Module 3: Monorepo Workspaces & Turborepo Caching', badge: 'Week 3' },
        { title: 'Module 4: Pre-Commit Hooks & Automated GitHub Actions CI', badge: 'Week 4' },
      ])
    },
    { 
      file: 'course-management.png', 
      title: 'Agile Technical Product Leadership & Sprint Execution', 
      cat: 'ACADEMY COURSE', 
      sub: 'Scrum • PRDs • Sprint Estimation • Technical Debt • Velocity Metrics',
      content: makeCourseGraphic('MGT-401', 'Technical Product Leadership', '6 Weeks', 'Linear, Jira, Notion, Figma, GitHub Projects', [
        { title: 'Module 1: Writing Technical PRDs & Architecture Decision Records', badge: 'Week 1-2' },
        { title: 'Module 2: Scrum Sprints, Story Point Poker & Capacity Planning', badge: 'Week 3-4' },
        { title: 'Module 3: Managing Technical Debt vs Product Velocity', badge: 'Week 5-6' },
      ])
    },
  ];

  console.log(`Starting generation of ${assets.length} unique website image assets...`);
  for (const item of assets) {
    const svg = wrapSvg(item.title, item.cat, item.sub, item.content);
    const dest = path.join(outDir, item.file);
    await sharp(Buffer.from(svg)).png().toFile(dest);
    console.log(`✓ Generated: ${item.file}`);
  }
  console.log(`\n🎉 Successfully generated all ${assets.length} visual assets!`);
}

run().catch((err) => {
  console.error('Fatal generation error:', err);
  process.exit(1);
});
