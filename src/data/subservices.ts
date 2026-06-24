/**
 * subservices.ts — individual services offered under each core category (req #1, #2).
 *
 * Each sub-service belongs to ONE parent category (a slug from services.ts) and
 * drives two page tiers:
 *   - /services/[category]/[subservice]            (parent sub-service page)
 *   - /locations/[city]/[category]/[subservice]    (location sub-service page)
 *
 * Availability rule (req #9): a sub-service is offered in a city iff that city
 * offers its PARENT category (see locations.ts `services` + lib/links). So we
 * never store per-city sub-service flags — coverage is inherited from the
 * category, which keeps the model small and impossible to get inconsistent.
 *
 * Adding a row here automatically generates its pages and links — no new files.
 */
export interface SubService {
  slug: string;
  name: string;
  /** Parent category slug from services.ts (e.g. 'hvac'). */
  parent: string;
  /** One-line hero subhead. */
  tagline: string;
  /** Meta-description base (~150–160 chars). */
  description: string;
  /** Opening body paragraph. */
  intro: string;
  /** Bulleted "what's included" list. */
  features: string[];
}

export const subServices: SubService[] = [
  // ───────────────────────────── HVAC ─────────────────────────────
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    parent: 'hvac',
    tagline: 'Fast air conditioning repair when you need it most.',
    description:
      'Same-day AC repair for warm air, leaks, strange noises, and breakdowns. Licensed HVAC technicians, upfront pricing.',
    intro:
      'When your AC quits in the heat, every hour counts. We diagnose and repair all makes and models, usually the same day.',
    features: ['Refrigerant leak repair', 'Compressor & capacitor service', 'Thermostat troubleshooting', 'No-cool diagnostics'],
  },
  {
    slug: 'ac-installation',
    name: 'AC Installation',
    parent: 'hvac',
    tagline: 'New air conditioner installation done right.',
    description:
      'Professional AC installation and replacement, properly sized for your home with efficient, reliable equipment.',
    intro:
      'A correctly sized and installed AC runs cheaper and lasts longer. We help you choose the right system and install it cleanly.',
    features: ['Load calculation & sizing', 'High-efficiency systems', 'Old unit removal', 'Warranty-backed install'],
  },
  {
    slug: 'furnace-repair',
    name: 'Furnace Repair',
    parent: 'hvac',
    tagline: 'Heating repair to keep you warm.',
    description:
      'Furnace repair for no-heat calls, short cycling, pilot and ignition problems, and noisy operation.',
    intro:
      'A furnace that won’t keep up is more than uncomfortable. We find the fault fast and get your heat back on.',
    features: ['Ignition & pilot repair', 'Blower motor service', 'Short-cycle diagnosis', 'Safety inspection'],
  },
  {
    slug: 'furnace-installation',
    name: 'Furnace Installation',
    parent: 'hvac',
    tagline: 'Efficient furnace installation and replacement.',
    description:
      'Furnace installation and replacement with properly sized, energy-efficient units and a clean, code-compliant setup.',
    intro:
      'Replacing an aging furnace cuts energy bills and breakdowns. We size, install, and test it for safe, even heat.',
    features: ['Right-sized selection', 'High-efficiency models', 'Old furnace removal', 'Combustion safety testing'],
  },
  {
    slug: 'heat-pump-services',
    name: 'Heat Pump Services',
    parent: 'hvac',
    tagline: 'Heat pump repair, installation, and tune-ups.',
    description:
      'Heat pump services — repair, replacement, and maintenance for efficient year-round heating and cooling.',
    intro:
      'Heat pumps heat and cool in one efficient system. We install, repair, and maintain them for reliable performance.',
    features: ['Repair & replacement', 'Defrost cycle service', 'Refrigerant checks', 'Efficiency tune-ups'],
  },
  {
    slug: 'hvac-maintenance',
    name: 'HVAC Maintenance',
    parent: 'hvac',
    tagline: 'Tune-ups that prevent breakdowns.',
    description:
      'Seasonal HVAC maintenance and tune-ups to improve efficiency, extend equipment life, and avoid surprise failures.',
    intro:
      'Most breakdowns are preventable. Regular maintenance keeps your system efficient and catches small issues early.',
    features: ['Filter & coil cleaning', 'Refrigerant & airflow checks', 'Electrical inspection', 'Maintenance plans'],
  },

  // ─────────────────────────── Plumbing ───────────────────────────
  {
    slug: 'water-heater-repair',
    name: 'Water Heater Repair',
    parent: 'plumbing',
    tagline: 'Hot water back, fast.',
    description:
      'Water heater repair for no hot water, leaks, pilot problems, and discolored water — tank and tankless systems.',
    intro:
      'No hot water? We repair tank and tankless heaters, diagnosing the real cause instead of guessing.',
    features: ['No-hot-water diagnosis', 'Thermostat & element repair', 'Pilot & ignition fixes', 'Leak assessment'],
  },
  {
    slug: 'water-heater-installation',
    name: 'Water Heater Installation',
    parent: 'plumbing',
    tagline: 'New water heater installation and replacement.',
    description:
      'Water heater installation and replacement — tank and tankless — sized for your home and installed to code.',
    intro:
      'Whether you want a standard tank or an on-demand tankless unit, we size and install it for reliable hot water.',
    features: ['Tank & tankless options', 'Proper sizing', 'Old unit haul-away', 'Code-compliant install'],
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection',
    parent: 'plumbing',
    tagline: 'Find hidden leaks before they cause damage.',
    description:
      'Non-invasive leak detection to locate hidden water leaks in walls, slabs, and supply lines before they cause damage.',
    intro:
      'A hidden leak wastes water and rots your home from the inside. We pinpoint leaks without tearing up your house.',
    features: ['Slab leak location', 'Acoustic & camera tools', 'Pressure testing', 'Minimal-damage access'],
  },
  {
    slug: 'pipe-repair',
    name: 'Pipe Repair',
    parent: 'plumbing',
    tagline: 'Burst, leaking, and corroded pipe repair.',
    description:
      'Pipe repair and repiping for burst, leaking, corroded, or noisy pipes — copper, PEX, and galvanized.',
    intro:
      'From a single burst pipe to whole-home repiping, we make durable repairs that stop leaks for good.',
    features: ['Burst pipe repair', 'Repiping', 'Corrosion replacement', 'Water-pressure fixes'],
  },
  {
    slug: 'toilet-repair',
    name: 'Toilet Repair',
    parent: 'plumbing',
    tagline: 'Running, leaking, or clogged toilet repair.',
    description:
      'Toilet repair and replacement for running, leaking, weak-flushing, or constantly clogging toilets.',
    intro:
      'A running or leaking toilet wastes hundreds of gallons. We fix the cause and can replace worn units fast.',
    features: ['Running toilet fixes', 'Flapper & fill valves', 'Wax ring & leak repair', 'Toilet replacement'],
  },
  {
    slug: 'garbage-disposal-repair',
    name: 'Garbage Disposal Repair',
    parent: 'plumbing',
    tagline: 'Jammed or leaking disposal repair.',
    description:
      'Garbage disposal repair and replacement for jammed, humming, leaking, or dead units — most makes and models.',
    intro:
      'A humming or leaking disposal is usually a quick fix. We repair or replace it and check the drain connection.',
    features: ['Jam clearing', 'Motor & reset diagnosis', 'Leak repair', 'Full replacement'],
  },

  // ─────────────────────────── Electrical ─────────────────────────
  {
    slug: 'electrical-repair',
    name: 'Electrical Repair',
    parent: 'electrical',
    tagline: 'Safe repairs for any electrical problem.',
    description:
      'Electrical repair for dead outlets, tripping breakers, flickering lights, and faulty wiring by licensed electricians.',
    intro:
      'Electrical problems are safety problems. Our licensed electricians diagnose and repair faults to code.',
    features: ['Dead outlet & switch repair', 'Breaker tripping diagnosis', 'Flickering light fixes', 'Wiring faults'],
  },
  {
    slug: 'panel-upgrades',
    name: 'Panel Upgrades',
    parent: 'electrical',
    tagline: 'More capacity, safer power.',
    description:
      'Electrical panel upgrades and replacements to add capacity, replace unsafe panels, and support modern loads.',
    intro:
      'Older panels can’t handle today’s demands. We upgrade your service for safe, reliable capacity.',
    features: ['100A–200A upgrades', 'Unsafe panel replacement', 'Permit & inspection', 'Whole-home surge protection'],
  },
  {
    slug: 'outlet-installation',
    name: 'Outlet Installation',
    parent: 'electrical',
    tagline: 'New outlets where you need them.',
    description:
      'Outlet installation and replacement — GFCI, USB, and 240V outlets — installed safely and to code.',
    intro:
      'Add convenience and safety with new outlets, including GFCI protection for kitchens, baths, and garages.',
    features: ['GFCI & AFCI outlets', 'USB & smart outlets', '240V appliance outlets', 'Outdoor receptacles'],
  },
  {
    slug: 'lighting-installation',
    name: 'Lighting Installation',
    parent: 'electrical',
    tagline: 'Indoor and outdoor lighting installation.',
    description:
      'Lighting installation — recessed, fixtures, ceiling fans, and outdoor and landscape lighting.',
    intro:
      'The right lighting transforms a space. We install fixtures, recessed lights, fans, and outdoor lighting.',
    features: ['Recessed & can lights', 'Fixture & fan installation', 'Dimmers & smart switches', 'Outdoor lighting'],
  },
  {
    slug: 'ev-charger-installation',
    name: 'EV Charger Installation',
    parent: 'electrical',
    tagline: 'Charge at home with a Level 2 charger.',
    description:
      'EV charger installation — Level 2 home charging stations with the wiring and panel capacity they need.',
    intro:
      'Skip the public chargers. We install Level 2 home charging, including any panel or circuit work required.',
    features: ['Level 2 charger install', 'Dedicated circuit wiring', 'Load & panel assessment', 'Permit & inspection'],
  },
  {
    slug: 'electrical-inspections',
    name: 'Electrical Inspections',
    parent: 'electrical',
    tagline: 'Know your home’s wiring is safe.',
    description:
      'Electrical safety inspections for home purchases, older homes, and code compliance, with a clear written report.',
    intro:
      'Buying a home or own an older one? A full inspection finds hazards before they become emergencies.',
    features: ['Whole-home safety check', 'Code-compliance review', 'Panel & wiring assessment', 'Written report'],
  },

  // ───────────────────────────── Drains ───────────────────────────
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    parent: 'drains',
    tagline: 'Clear clogs in sinks, tubs, and showers.',
    description:
      'Professional drain cleaning for slow and clogged kitchen, bathroom, and laundry drains — fast and mess-free.',
    intro:
      'Slow or clogged drains rarely fix themselves. We clear the blockage and check why it happened.',
    features: ['Kitchen & bath drains', 'Snaking & augering', 'Grease & buildup removal', 'Recurring-clog diagnosis'],
  },
  {
    slug: 'sewer-line-repair',
    name: 'Sewer Line Repair',
    parent: 'drains',
    tagline: 'Fix broken and root-damaged sewer lines.',
    description:
      'Sewer line repair and replacement for breaks, root intrusion, bellies, and recurring backups.',
    intro:
      'A failing sewer line causes backups and yard damage. We locate the problem and repair or replace the line.',
    features: ['Root intrusion repair', 'Broken & collapsed lines', 'Trenchless options', 'Backup resolution'],
  },
  {
    slug: 'sewer-camera-inspection',
    name: 'Sewer Camera Inspection',
    parent: 'drains',
    tagline: 'See exactly what’s in your pipes.',
    description:
      'Sewer camera inspection to pinpoint clogs, cracks, root intrusion, and pipe condition before you buy or dig.',
    intro:
      'No more guessing. A camera inspection shows the exact location and cause of a problem inside your pipes.',
    features: ['Real-time video', 'Clog & damage location', 'Pre-purchase inspections', 'Condition assessment'],
  },
  {
    slug: 'hydro-jetting',
    name: 'Hydro Jetting',
    parent: 'drains',
    tagline: 'High-pressure cleaning for stubborn buildup.',
    description:
      'Hydro jetting blasts away grease, scale, and roots to fully clean drain and sewer lines, not just punch a hole.',
    intro:
      'When snaking isn’t enough, hydro jetting scours pipe walls clean with high-pressure water for a lasting fix.',
    features: ['Grease & scale removal', 'Root cutting', 'Full-diameter cleaning', 'Preventive maintenance'],
  },
  {
    slug: 'clogged-toilet',
    name: 'Clogged Toilet',
    parent: 'drains',
    tagline: 'Stubborn toilet clogs cleared fast.',
    description:
      'Clogged toilet service for blockages that won’t plunge, recurring clogs, and objects stuck in the trap or line.',
    intro:
      'Some toilet clogs need more than a plunger. We clear the blockage and check for deeper line issues.',
    features: ['Deep clog removal', 'Auger & snake service', 'Stuck-object retrieval', 'Recurring-clog diagnosis'],
  },
  {
    slug: 'main-line-cleaning',
    name: 'Main Line Cleaning',
    parent: 'drains',
    tagline: 'Clear the main line that serves your home.',
    description:
      'Main sewer line cleaning to clear whole-home backups caused by grease, roots, and debris in the main line.',
    intro:
      'When multiple drains back up at once, the main line is usually the culprit. We clear it and confirm flow.',
    features: ['Whole-home backup fixes', 'Main line snaking', 'Cleanout access', 'Camera verification'],
  },
];

export const getSubService = (parent: string, slug: string): SubService | undefined =>
  subServices.find((s) => s.parent === parent && s.slug === slug);
