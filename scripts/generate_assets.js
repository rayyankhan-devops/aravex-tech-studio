const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function buildAssets() {
  const assetsDir = path.join(process.cwd(), 'public/assets/generated');
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

  // 1. Inventory Warehouse MIS
  const svgInv = `
<svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D0F13"/>
      <stop offset="100%" stop-color="#161920"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <text x="100" y="100" fill="#64768B" font-family="monospace" font-size="14" letter-spacing="4">ARAVEX ENTERPRISE MIS // MULTI-WAREHOUSE</text>
  <text x="100" y="140" fill="#F7F7F5" font-family="sans-serif" font-size="32" font-weight="bold">Centralized Inventory &amp; Warehouse Distribution Intelligence</text>
  <text x="100" y="175" fill="#94A3B8" font-family="sans-serif" font-size="16">Batch &amp; Expiry Tracking • Automated Reorder Limits • Multi-Branch Reconciliation</text>

  <rect x="100" y="220" width="1400" height="600" rx="20" fill="#12151B" stroke="#262C38" stroke-width="2"/>
  <rect x="100" y="220" width="1400" height="55" rx="20" fill="#171B23"/>
  <text x="140" y="255" fill="#F7F7F5" font-family="monospace" font-size="14" font-weight="bold">WAREHOUSE CLUSTER // LAHORE CENTRAL (WH-01) + KARACHI HUB (WH-02)</text>

  <g transform="translate(140, 310)">
    <rect x="0" y="0" width="310" height="110" rx="12" fill="#191D26" stroke="#2D3545" stroke-width="1.5"/>
    <text x="24" y="36" fill="#94A3B8" font-family="sans-serif" font-size="13">TOTAL ACTIVE SKUS</text>
    <text x="24" y="80" fill="#F7F7F5" font-family="sans-serif" font-size="32" font-weight="bold">18,490</text>
    <text x="24" y="100" fill="#10B981" font-family="monospace" font-size="11">100% Barcode Indexed</text>

    <rect x="340" y="0" width="310" height="110" rx="12" fill="#191D26" stroke="#2D3545" stroke-width="1.5"/>
    <text x="364" y="36" fill="#94A3B8" font-family="sans-serif" font-size="13">TOTAL STOCK VALUE</text>
    <text x="364" y="80" fill="#10B981" font-family="sans-serif" font-size="32" font-weight="bold">PKR 142.8M</text>
    <text x="364" y="100" fill="#64768B" font-family="monospace" font-size="11">FIFO Valuation Method</text>

    <rect x="680" y="0" width="310" height="110" rx="12" fill="#191D26" stroke="#2D3545" stroke-width="1.5"/>
    <text x="704" y="36" fill="#94A3B8" font-family="sans-serif" font-size="13">PENDING DISPATCHES</text>
    <text x="704" y="80" fill="#38BDF8" font-family="sans-serif" font-size="32" font-weight="bold">24 Truckloads</text>
    <text x="704" y="100" fill="#38BDF8" font-family="monospace" font-size="11">RFID Gate Scanning</text>

    <rect x="1020" y="0" width="300" height="110" rx="12" fill="#191D26" stroke="#2D3545" stroke-width="1.5"/>
    <text x="1044" y="36" fill="#94A3B8" font-family="sans-serif" font-size="13">REORDER ALERTS</text>
    <text x="1044" y="80" fill="#F59E0B" font-family="sans-serif" font-size="32" font-weight="bold">3 Critical</text>
    <text x="1044" y="100" fill="#F59E0B" font-family="monospace" font-size="11">PO Auto-Drafted</text>
  </g>

  <g transform="translate(140, 460)">
    <rect x="0" y="0" width="1320" height="320" rx="14" fill="#161A22" stroke="#252C3B" stroke-width="1"/>
    <text x="30" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Live Warehouse Bin Utilization &amp; Dispatch Volume</text>
    
    <rect x="60" y="180" width="70" height="90" rx="6" fill="#3B82F6" opacity="0.8"/>
    <text x="95" y="295" fill="#94A3B8" font-family="monospace" font-size="11" text-anchor="middle">Aisle 1</text>
    
    <rect x="170" y="120" width="70" height="150" rx="6" fill="#10B981" opacity="0.8"/>
    <text x="205" y="295" fill="#94A3B8" font-family="monospace" font-size="11" text-anchor="middle">Aisle 2</text>
    
    <rect x="280" y="90" width="70" height="180" rx="6" fill="#10B981"/>
    <text x="315" y="295" fill="#94A3B8" font-family="monospace" font-size="11" text-anchor="middle">Aisle 3</text>
    
    <rect x="390" y="140" width="70" height="130" rx="6" fill="#3B82F6" opacity="0.8"/>
    <text x="425" y="295" fill="#94A3B8" font-family="monospace" font-size="11" text-anchor="middle">Aisle 4</text>
    
    <rect x="500" y="70" width="70" height="200" rx="6" fill="#10B981"/>
    <text x="535" y="295" fill="#94A3B8" font-family="monospace" font-size="11" text-anchor="middle">Cold Store</text>

    <line x1="620" y1="20" x2="620" y2="300" stroke="#262C3A" stroke-width="1"/>
    <text x="660" y="60" fill="#94A3B8" font-family="monospace" font-size="13">FAST-MOVING INVENTORY</text>
    <text x="660" y="100" fill="#F7F7F5" font-family="sans-serif" font-size="14">[SKU-10294] Tapal Tea 950g — 4,200 Units (Turnover: 3.2 days)</text>
    <text x="660" y="140" fill="#F7F7F5" font-family="sans-serif" font-size="14">[SKU-84920] Olpers Milk 1L — 8,400 Units (Turnover: 1.8 days)</text>
    <text x="660" y="180" fill="#F7F7F5" font-family="sans-serif" font-size="14">[SKU-59218] National Basmati Rice 5kg — 1,900 Units (Turnover: 4.1 days)</text>
    <text x="660" y="220" fill="#F7F7F5" font-family="sans-serif" font-size="14">[SKU-39481] Dawn Bread Large — 3,100 Units (Turnover: 0.9 days)</text>
    <rect x="660" y="250" width="240" height="35" rx="8" fill="#10B981" opacity="0.15" stroke="#10B981" stroke-width="1"/>
    <text x="780" y="273" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">REAL-TIME AUDIT SYNC</text>
  </g>
</svg>
`;

  // 2. Clinic Healthcare EMR
  const svgClinic = `
<svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgClinic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0C1015"/>
      <stop offset="100%" stop-color="#141922"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bgClinic)"/>
  <text x="100" y="100" fill="#64768B" font-family="monospace" font-size="14" letter-spacing="4">ARAVEX HEALTHCARE // EMR &amp; SCHEDULING</text>
  <text x="100" y="140" fill="#F7F7F5" font-family="sans-serif" font-size="32" font-weight="bold">MediFlow Clinical Management &amp; Electronic Health Records</text>
  <text x="100" y="175" fill="#94A3B8" font-family="sans-serif" font-size="16">Digital Prescriptions • WhatsApp Appointment Reminders • Patient Medical History</text>

  <rect x="100" y="220" width="1400" height="600" rx="20" fill="#10151C" stroke="#263040" stroke-width="2"/>
  <rect x="100" y="220" width="1400" height="55" rx="20" fill="#161D27"/>
  <text x="140" y="255" fill="#F7F7F5" font-family="monospace" font-size="14" font-weight="bold">MEDIFLOW SPECIALTY CLINIC // DR. FATIMA ZAHRA (OPD ROOM #3)</text>
  
  <g transform="translate(140, 310)">
    <rect x="0" y="0" width="640" height="470" rx="14" fill="#151C26" stroke="#2A364A" stroke-width="1.5"/>
    <text x="30" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Today's Patient Consultations (14 Scheduled)</text>
    
    <rect x="20" y="70" width="600" height="65" rx="8" fill="#1E2736" stroke="#10B981" stroke-width="1.5"/>
    <circle cx="50" cy="102" r="16" fill="#10B981" opacity="0.2"/>
    <text x="50" y="108" fill="#10B981" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">✓</text>
    <text x="85" y="95" fill="#F7F7F5" font-family="sans-serif" font-size="15" font-weight="bold">Tariq Mehmood (Token #08)</text>
    <text x="85" y="118" fill="#94A3B8" font-family="monospace" font-size="12">Follow-up Consultation • In Room</text>
    <text x="590" y="108" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">ACTIVE</text>

    <rect x="20" y="150" width="600" height="65" rx="8" fill="#18202C"/>
    <text x="85" y="175" fill="#F7F7F5" font-family="sans-serif" font-size="15" font-weight="bold">Zainab Siddiqui (Token #09)</text>
    <text x="85" y="198" fill="#94A3B8" font-family="monospace" font-size="12">General Checkup • Waiting (Wait Time: 4m)</text>
    <text x="590" y="188" fill="#38BDF8" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">NEXT</text>

    <rect x="20" y="230" width="600" height="65" rx="8" fill="#18202C"/>
    <text x="85" y="255" fill="#F7F7F5" font-family="sans-serif" font-size="15" font-weight="bold">Bilal Ahmed Khan (Token #10)</text>
    <text x="85" y="278" fill="#94A3B8" font-family="monospace" font-size="12">Lab Report Review • WhatsApp Confirmed</text>
    <text x="590" y="268" fill="#64768B" font-family="monospace" font-size="12" font-weight="bold" text-anchor="end">11:30 AM</text>
  </g>

  <g transform="translate(820, 310)">
    <rect x="0" y="0" width="640" height="470" rx="14" fill="#151C26" stroke="#2A364A" stroke-width="1.5"/>
    <text x="30" y="40" fill="#F7F7F5" font-family="sans-serif" font-size="16" font-weight="bold">Digital E-Prescription &amp; Vitals</text>

    <rect x="30" y="65" width="580" height="80" rx="10" fill="#1B2330" stroke="#2A374A" stroke-width="1"/>
    <text x="50" y="95" fill="#94A3B8" font-family="monospace" font-size="11">BLOOD PRESSURE</text>
    <text x="50" y="128" fill="#10B981" font-family="sans-serif" font-size="22" font-weight="bold">120 / 78 mmHg</text>
    <text x="240" y="95" fill="#94A3B8" font-family="monospace" font-size="11">PULSE RATE</text>
    <text x="240" y="128" fill="#38BDF8" font-family="sans-serif" font-size="22" font-weight="bold">72 bpm</text>
    <text x="420" y="95" fill="#94A3B8" font-family="monospace" font-size="11">OXYGEN SAT</text>
    <text x="420" y="128" fill="#F7F7F5" font-family="sans-serif" font-size="22" font-weight="bold">99% SpO2</text>

    <text x="30" y="180" fill="#94A3B8" font-family="monospace" font-size="12">PRESCRIBED MEDICATIONS (2):</text>
    <rect x="30" y="195" width="580" height="55" rx="8" fill="#1A222E"/>
    <text x="50" y="228" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">1. Augmentin 625mg — 1 Tab BID x 5 Days</text>
    
    <rect x="30" y="260" width="580" height="55" rx="8" fill="#1A222E"/>
    <text x="50" y="293" fill="#F7F7F5" font-family="sans-serif" font-size="14" font-weight="bold">2. Panadol Extra 500mg — 1 Tab PRN for Fever/Pain</text>

    <rect x="30" y="340" width="580" height="90" rx="10" fill="#10B981" opacity="0.12" stroke="#10B981" stroke-width="1.5"/>
    <text x="50" y="375" fill="#10B981" font-family="sans-serif" font-size="16" font-weight="bold">WhatsApp E-Prescription Dispatch</text>
    <text x="50" y="405" fill="#94A3B8" font-family="sans-serif" font-size="13">PDF copy auto-sent to patient registered mobile: +92 300 892***</text>
  </g>
</svg>
`;

  // 3. Internship Accelerator Studio
  const svgInternship = `
<svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgIntern" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0E12"/>
      <stop offset="100%" stop-color="#181D26"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bgIntern)"/>
  <text x="100" y="100" fill="#64768B" font-family="monospace" font-size="14" letter-spacing="4">ARAVEX TALENT ACCELERATOR // COHORT 2026</text>
  <text x="100" y="140" fill="#F7F7F5" font-family="sans-serif" font-size="32" font-weight="bold">Hands-on Engineering &amp; Creative Internship Tracks</text>
  <text x="100" y="175" fill="#94A3B8" font-family="sans-serif" font-size="16">Work on Real Production Codebases • 1-on-1 Mentorship • Performance Stipend</text>

  <g transform="translate(100, 220)">
    <rect x="0" y="0" width="1400" height="600" rx="20" fill="#12161E" stroke="#252C3B" stroke-width="2"/>

    <!-- Track 1: Full-Stack Code Window -->
    <rect x="40" y="40" width="410" height="520" rx="14" fill="#161B24" stroke="#293243" stroke-width="1.5"/>
    <rect x="40" y="40" width="410" height="45" rx="14" fill="#1A212D"/>
    <text x="65" y="68" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">FULL-STACK &amp; CLOUD TRACK</text>
    <text x="65" y="120" fill="#64768B" font-family="monospace" font-size="12">// Production Next.js 15 App</text>
    <text x="65" y="150" fill="#38BDF8" font-family="monospace" font-size="13">export async function GET()</text>
    <text x="85" y="180" fill="#F7F7F5" font-family="monospace" font-size="13">  const telemetry = await db();</text>
    <text x="85" y="210" fill="#10B981" font-family="monospace" font-size="13">  return Response.json(telemetry);</text>
    <rect x="65" y="320" width="360" height="60" rx="8" fill="#10B981" opacity="0.1" stroke="#10B981" stroke-width="1"/>
    <text x="80" y="355" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold">Mentor: Muhammad Rayyan</text>
    <text x="65" y="420" fill="#94A3B8" font-family="sans-serif" font-size="13">Skills: Next.js 15, TypeScript, Docker, AWS ECS</text>
  </g>

  <!-- Track 2: AI Agents -->
  <g transform="translate(570, 260)">
    <rect x="0" y="0" width="410" height="520" rx="14" fill="#161B24" stroke="#293243" stroke-width="1.5"/>
    <rect x="0" y="0" width="410" height="45" rx="14" fill="#1A212D"/>
    <text x="25" y="28" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">AI &amp; AUTOMATION TRACK</text>
    <text x="25" y="80" fill="#64768B" font-family="monospace" font-size="12">// Multi-Agent DAG Engine</text>
    <text x="25" y="110" fill="#F59E0B" font-family="monospace" font-size="13">@agent.tool(schema=PosSchema)</text>
    <text x="25" y="140" fill="#38BDF8" font-family="monospace" font-size="13">def execute_cash_drawer():</text>
    <text x="45" y="170" fill="#10B981" font-family="monospace" font-size="13">  return { status: "ready" }</text>
    <rect x="25" y="280" width="360" height="60" rx="8" fill="#38BDF8" opacity="0.1" stroke="#38BDF8" stroke-width="1"/>
    <text x="40" y="315" fill="#38BDF8" font-family="monospace" font-size="12" font-weight="bold">Mentor: Muhammad Uzair</text>
    <text x="25" y="380" fill="#94A3B8" font-family="sans-serif" font-size="13">Skills: LangGraph, FastAPI, Tool Calling, Vector DB</text>
  </g>

  <!-- Track 3: UI/UX & Operations -->
  <g transform="translate(1010, 260)">
    <rect x="0" y="0" width="450" height="520" rx="14" fill="#161B24" stroke="#293243" stroke-width="1.5"/>
    <rect x="0" y="0" width="450" height="45" rx="14" fill="#1A212D"/>
    <text x="25" y="28" fill="#F7F7F5" font-family="monospace" font-size="13" font-weight="bold">DESIGN &amp; OPERATIONS TRACK</text>
    <text x="25" y="80" fill="#64768B" font-family="monospace" font-size="12">// Architectural Systems</text>
    <rect x="25" y="105" width="180" height="120" rx="10" fill="#1E2533" stroke="#64768B" stroke-width="1"/>
    <text x="45" y="150" fill="#F7F7F5" font-family="sans-serif" font-size="12" font-weight="bold">Figma Wireframe</text>
    <text x="45" y="180" fill="#10B981" font-family="monospace" font-size="11">Pixel Perfect Grid</text>
    <rect x="220" y="105" width="180" height="120" rx="10" fill="#1E2533" stroke="#10B981" stroke-width="1"/>
    <text x="240" y="150" fill="#10B981" font-family="sans-serif" font-size="12" font-weight="bold">Production Live</text>
    <text x="240" y="180" fill="#94A3B8" font-family="monospace" font-size="11">100% Mobile Sync</text>
    <rect x="25" y="280" width="400" height="60" rx="8" fill="#A855F7" opacity="0.1" stroke="#A855F7" stroke-width="1"/>
    <text x="40" y="315" fill="#A855F7" font-family="monospace" font-size="12" font-weight="bold">Mentor: Aqsa Wadood</text>
    <text x="25" y="380" fill="#94A3B8" font-family="sans-serif" font-size="13">Skills: Figma, Design Systems, Agile Management</text>
  </g>
</svg>
`;

  await sharp(Buffer.from(svgInv)).png().toFile('public/assets/generated/inventory-warehouse.png');
  console.log('✓ Generated inventory-warehouse.png');

  await sharp(Buffer.from(svgClinic)).png().toFile('public/assets/generated/clinic-emr.png');
  console.log('✓ Generated clinic-emr.png');

  await sharp(Buffer.from(svgInternship)).png().toFile('public/assets/generated/internship-studio.png');
  console.log('✓ Generated internship-studio.png');
}

buildAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
