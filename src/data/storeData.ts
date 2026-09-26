export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  highlights: string[];
  idealFor: string;
  condition: 'Brand New' | 'Verified Pre-Owned' | 'Available in Both';
  image: string;
  inquiryMessage: string;
}

export interface CategoryInfo {
  id: string;
  title: string;
  shortDesc: string;
  availableTypes: string[];
}

export const STORE_INFO = {
  name: 'Absolute Gaming PC & Laptops',
  shortName: 'Absolute Gaming',
  city: 'Quetta',
  state: 'Balochistan',
  country: 'Pakistan',
  postalCode: '87550',
  address: 'Fatah Muhammad Road, Quetta, Balochistan, Pakistan',
  phoneDisplay: '+92 348 2675388',
  phoneRaw: '+923482675388',
  phoneAltDisplay: '0308 3871744',
  whatsappNumber: '923482675388',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Absolute+Gaming+PC+Laptops+Fatah+Muhammad+Road+Quetta+Balochistan',
  hours: 'Open 6 Days / Contact Anytime on WhatsApp',
  warrantyNote: '100% Genuine Guarantee on all new & verified pre-owned systems',
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'pcs',
    title: 'Gaming PCs',
    shortDesc: 'Custom-assembled desktop rigs engineered for high FPS and balanced thermals.',
    availableTypes: ['Custom Builds', 'Pre-Configured Rigs', 'Upgrade Packages'],
  },
  {
    id: 'laptops',
    title: 'Gaming Laptops',
    shortDesc: 'High-refresh-rate portable powerhouses from top international gaming lines.',
    availableTypes: ['Brand New Sealed', 'Verified Pre-Owned', 'Slim Portables'],
  },
  {
    id: 'gpus',
    title: 'Graphics Cards',
    shortDesc: 'Dedicated desktop and external GPUs for uncompromised ray tracing & high framerates.',
    availableTypes: ['1080p Esports', '1440p High Refresh', '4K Flagships'],
  },
  {
    id: 'monitors',
    title: 'Monitors & Displays',
    shortDesc: 'Fast IPS, curved, and ultra-high refresh panels (144Hz - 240Hz+).',
    availableTypes: ['144Hz - 240Hz Gaming', 'Color-Accurate IPS', 'Portable Screens'],
  },
  {
    id: 'keyboards',
    title: 'Keyboards',
    shortDesc: 'Mechanical switches, rapid-trigger responsiveness, and custom keycap setups.',
    availableTypes: ['Mechanical', 'Hot-Swappable', 'Compact 60% / TKL'],
  },
  {
    id: 'mice',
    title: 'Gaming Mice',
    shortDesc: 'Ultra-lightweight chassis, flawless optical sensors, and ultra-low click latency.',
    availableTypes: ['Wireless Ultralight', 'Ergonomic Wired', 'High-DPI Optical'],
  },
  {
    id: 'audio',
    title: 'Headsets & Audio',
    shortDesc: 'Precise directional audio, noise-isolating earcups, and studio-grade microphones.',
    availableTypes: ['Spatial Audio', 'Wireless Headsets', 'External Soundcards'],
  },
  {
    id: 'components',
    title: 'PC Components',
    shortDesc: 'Processors, motherboards, high-frequency RAM, and certified power supplies.',
    availableTypes: ['CPUs & Coolers', 'Motherboards', 'Power Supplies (PSUs)'],
  },
  {
    id: 'storage',
    title: 'Fast Storage',
    shortDesc: 'Gen4 NVMe M.2 solid-state drives for near-instant boot and game loading.',
    availableTypes: ['PCIe 4.0 NVMe', 'High-Capacity SATA', 'External SSDs'],
  },
  {
    id: 'accessories',
    title: 'Accessories & Desk Gear',
    shortDesc: 'Extended mouse mats, cooling pads, cable organizers, and controller gear.',
    availableTypes: ['Desk Mats', 'Laptop Coolers', 'Display Cables & Adapters'],
  },
];

export const DESKTOP_SYSTEMS: ProductItem[] = [
  {
    id: 'performance-tier',
    name: 'Performance Tier Build',
    category: 'Gaming PCs',
    tagline: 'Precision-tuned for competitive 1080p and high-framerate 1440p gameplay.',
    highlights: [
      'Balanced CPU & GPU pairing for zero thermal throttling',
      'Optimized airflow configuration suited for Quetta conditions',
      'High-speed dual-channel memory & rapid Gen4 NVMe storage',
      'Reliable 80-Plus certified power supply integration'
    ],
    idealFor: 'CS2, Valorant, Warzone, Apex Legends & Fortnite at high refresh rates.',
    condition: 'Available in Both',
    image: '/images/showcase_performance_rig.jpg',
    inquiryMessage: 'Assalam o Alaikum, I would like to inquire about the Performance Tier Gaming PC setup and current configuration options in Quetta.',
  },
  {
    id: 'gaming-production-tier',
    name: 'Gaming & Production Tier',
    category: 'Gaming PCs',
    tagline: 'High core counts and heavy GPU horsepower for AAA gaming and rendering workflows.',
    highlights: [
      'Heavy multi-threading headroom for simultaneous streaming and gaming',
      'High VRAM graphics capability for ultra texture packs and 1440p/4K',
      'Premium liquid or high-mass twin tower air thermal architecture',
      'Clean cable routing with dark tempered glass presentation'
    ],
    idealFor: 'Cyberpunk 2077, GTA V mods, Blender rendering, and video editing.',
    condition: 'Available in Both',
    image: '/images/hero_gaming_hardware.jpg',
    inquiryMessage: 'Assalam o Alaikum, I would like to ask about the Gaming & Production Tier PC setup at Absolute Gaming PC & Laptops.',
  },
  {
    id: 'enthusiast-flagship-tier',
    name: 'Enthusiast Flagship Tier',
    category: 'Gaming PCs',
    tagline: 'The uncompromising summit of desktop compute, thermal silence, and industrial design.',
    highlights: [
      'Maximum graphics horsepower for maximum FPS on ultra-wide / 4K',
      'High-grade power delivery with dedicated surge & transient safety',
      'Top-tier motherboard chipsets with multi-slot Gen4/Gen5 expandability',
      'Bespoke acoustic tuning with silent PWM magnetic-bearing fans'
    ],
    idealFor: 'Simulators, competitive esports professionals, and maximum visual fidelity.',
    condition: 'Brand New',
    image: '/images/showcase_cooling_power.jpg',
    inquiryMessage: 'Assalam o Alaikum, I am looking for a custom flagship enthusiast gaming PC build. What are the current premium configurations available?',
  }
];

export const LAPTOP_SYSTEMS: ProductItem[] = [
  {
    id: 'stealth-flagship-laptop',
    name: 'Stealth High-Performance Laptop',
    category: 'Gaming Laptops',
    tagline: 'Desktop-grade graphical silicon enclosed in an architectural slim metal chassis.',
    highlights: [
      'High-refresh gaming displays with low response times',
      'Advanced multi-heatpipe vapor cooling chambers',
      'Backlit tactile keyboard engineered for rapid-fire inputs',
      'Comprehensive port selection (Thunderbolt/Type-C, HDMI, high-speed USB)'
    ],
    idealFor: 'Competitive mobile gaming, university campus engineering, and high-performance portability.',
    condition: 'Available in Both',
    image: '/images/showcase_stealth_laptop.jpg',
    inquiryMessage: 'Assalam o Alaikum, I would like to inquire about available high-performance gaming laptops in stock at your Quetta shop.',
  },
  {
    id: 'portable-creator-gaming',
    name: 'Hybrid Gaming & Creator Notebooks',
    category: 'Gaming Laptops',
    tagline: 'Wide color gamut panels paired with high-TGP graphics for creators who game.',
    highlights: [
      'Factory color-calibrated high resolution displays',
      'High-capacity battery endurance for mixed daily workflows',
      'Expandable dual-channel DDR5 RAM & secondary NVMe slots',
      'Precision CNC aluminum top deck with anti-fingerprint coating'
    ],
    idealFor: 'Graphic designers, architectural 3D visualizers, video editors & gamers.',
    condition: 'Available in Both',
    image: '/images/showcase_stealth_laptop.jpg',
    inquiryMessage: 'Assalam o Alaikum, please share details and available models for creator/gaming laptops at Absolute Gaming Quetta.',
  }
];

export const PERIPHERAL_HIGHLIGHTS = [
  {
    title: 'Mechanical Keyboards',
    subtitle: 'Tactile, Linear & Optical',
    desc: 'Rapid input response, hot-swap PCB sockets, and durable keycaps designed for rigorous competitive sessions.',
    type: 'Keyboards'
  },
  {
    title: 'Ultralight Gaming Mice',
    subtitle: 'High DPI & Zero Drag',
    desc: 'Flawless optical sensors with adjustable polling rates and low-friction virgin PTFE feet for pinpoint flick-shots.',
    type: 'Mice'
  },
  {
    title: 'Acoustic Headsets',
    subtitle: 'Directional Spatial Audio',
    desc: 'Hear enemy footsteps and positional audio cues with crystal-clear high fidelity and noise-reducing mics.',
    type: 'Audio'
  },
  {
    title: 'High-Refresh Monitors',
    subtitle: '144Hz to 240Hz+ IPS',
    desc: 'Fluid motion clarity, minimal ghosting, and vibrant color accuracy for both gaming and daily productivity.',
    type: 'Monitors'
  },
  {
    title: 'High-Speed NVMe Storage',
    subtitle: 'Gen3 & Gen4 Solid State',
    desc: 'Eliminate loading screens with blistering multi-gigabyte sequential read and write speeds.',
    type: 'Storage'
  },
  {
    title: 'Desk Mats & Accessories',
    subtitle: 'Precision Surface Gear',
    desc: 'Extended micro-woven cloth surfaces, cooling stands, and premium braided cables for a clean battle station.',
    type: 'Accessories'
  },
];

export const TRUST_PILLARS = [
  {
    title: 'Dedicated Gaming Focus',
    description: 'We specialize specifically in modern gaming systems, high-refresh hardware, and dedicated graphics — not generic office equipment.',
  },
  {
    title: 'New & Verified Pre-Owned',
    description: 'We stock both brand new sealed units and thoroughly tested, verified pre-owned systems with 100% genuine component guarantees.',
  },
  {
    title: 'Local Quetta Availability',
    description: 'Located directly on Fatah Muhammad Road, Quetta. Inspect hardware in person or request direct delivery across the city.',
  },
  {
    title: 'Direct WhatsApp Consultations',
    description: 'Connect directly with someone who understands hardware. Get honest recommendations based on your actual target games and budget.',
  },
];

export const createWhatsAppUrl = (message: string) => {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`;
};
