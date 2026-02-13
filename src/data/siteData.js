// ── Services ──────────────────────────────────────────────
export const services = [
  {
    id: 1,
    icon: '🏟️',
    title: 'Artificial Grass Turf',
    category: 'Flooring',
    description: 'Premium UV-resistant synthetic grass for football, cricket, and multi-sport fields. FIFA-grade specs with professional infill systems.',
    features: ['UV Resistant', 'All-Weather', 'FIFA Specs'],
  },
  {
    id: 2,
    icon: '🏋️',
    title: 'Gym & Fitness Flooring',
    category: 'Flooring',
    description: 'Heavy-duty rubber and foam flooring solutions for gyms, fitness centers, and indoor training facilities. Shock-absorbent and durable.',
    features: ['Anti-Slip', 'Shock Absorbent', 'Easy Clean'],
  },
  {
    id: 3,
    icon: '🎾',
    title: 'Tennis Courts',
    category: 'Outdoor Courts',
    description: 'Acrylic hard courts, cushioned surfaces, and clay court construction built to international ITF standards.',
    features: ['ITF Standard', 'Multi-Surface', 'Floodlit Option'],
  },
  {
    id: 4,
    icon: '🏀',
    title: 'Basketball Courts',
    category: 'Outdoor Courts',
    description: 'All-weather acrylic and indoor maple wood systems. Cushioned surfaces that reduce player fatigue and injury risk.',
    features: ['FIBA Specs', 'Weatherproof', 'Cushioned'],
  },
  {
    id: 5,
    icon: '⚽',
    title: 'Football Turfs',
    category: 'Outdoor Courts',
    description: 'High-density synthetic grass pitches in monofilament, fibrillated, and hybrid systems. Complete with goalpost installation.',
    features: ['FIFA Grade', 'Drainage System', 'Line Marking'],
  },
  {
    id: 6,
    icon: '🏏',
    title: 'Cricket Turf & Pitches',
    category: 'Outdoor Courts',
    description: 'Woven synthetic turf over concrete or crushed rock base. Consistent bounce in all weather — standard for recreational facilities.',
    features: ['Consistent Bounce', 'All-Weather', 'Practice Nets'],
  },
  {
    id: 7,
    icon: '🏓',
    title: 'Padel & Pickleball Courts',
    category: 'Specialty',
    description: 'Specialized synthetic surfaces balancing ball bounce, player traction, and long-term durability for racquet sports.',
    features: ['Certified Surface', 'Glass Walls Option', 'Low Maintenance'],
  },
  {
    id: 8,
    icon: '🛝',
    title: "Kids' Play Areas",
    category: 'Recreation',
    description: 'Safe, colorful EPDM rubber flooring and artificial grass for childrens play zones. Soft, resilient, and impact-absorbing.',
    features: ['Impact Safe', 'Vibrant Colors', 'Non-Toxic'],
  },
  {
    id: 9,
    icon: '💡',
    title: 'Floodlighting Systems',
    category: 'Infrastructure',
    description: 'Professional-grade LED lighting arrays for night play. Energy-efficient systems that meet international lux standards.',
    features: ['LED Efficient', 'Night Play', 'IoT Control'],
  },
];

// ── Projects ───────────────────────────────────────────────
export const projects = [
  { id: 1, title: 'DLF Sports Complex', location: 'Gurugram, Haryana', category: 'Football Turf', img: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80' },
  { id: 2, title: 'Sunshine Academy', location: 'Noida, UP', category: 'Basketball Court', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80' },
  { id: 3, title: 'Royal Palm Resort', location: 'Lonavala, Maharashtra', category: 'Artificial Grass', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80' },
  { id: 4, title: 'IIT Delhi Campus', location: 'New Delhi', category: 'Tennis Court', img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80' },
  { id: 5, title: 'Green Valley School', location: 'Pune, Maharashtra', category: 'Kids Play Area', img: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=600&q=80' },
  { id: 6, title: 'Marriott Sports Hub', location: 'Jaipur, Rajasthan', category: 'Gym Flooring', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80' },
  { id: 7, title: 'Birla Cricket Academy', location: 'Kolkata, WB', category: 'Cricket Turf', img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80' },
  { id: 8, title: 'Elite Fitness Center', location: 'Bengaluru, KA', category: 'Gym Flooring', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80' },
  { id: 9, title: 'Phoenix Padel Club', location: 'Hyderabad, TS', category: 'Padel Court', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&q=80' },
];

export const projectCategories = ['All', 'Football Turf', 'Basketball Court', 'Tennis Court', 'Artificial Grass', 'Cricket Turf', 'Gym Flooring', 'Kids Play Area', 'Padel Court'];

// ── Team ───────────────────────────────────────────────────
export const team = [
  { id: 1, name: 'Arjun Sharma', role: 'Founder & MD', bio: '20+ years in sports infrastructure across India and Southeast Asia.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { id: 2, name: 'Priya Nair', role: 'Head of Projects', bio: 'Civil engineer with expertise in court construction and surface science.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { id: 3, name: 'Rohan Mehta', role: 'Lead Designer', bio: 'Sports facility design specialist, UEFA-certified pitch consultant.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { id: 4, name: 'Kavya Reddy', role: 'Client Relations', bio: 'Ensures every client gets a seamless, end-to-end project experience.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
];

// ── Clients ────────────────────────────────────────────────
export const clients = [
  'Marriott Hotels', 'DLF Group', 'IIT Delhi', 'Birla Schools',
  'Prestige Group', 'Tata Housing', 'Reliance Foundation', 'BCCI',
];

// ── Stats ──────────────────────────────────────────────────
export const stats = [
  { value: '350+', label: 'Projects Completed' },
  { value: '18+', label: 'States Covered' },
  { value: '12', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];
