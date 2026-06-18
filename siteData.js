import {
  FaCity,
  FaPlaneDeparture,
  FaPassport,
  FaBed,
  FaCar,
  FaFileShield,
  FaCalendarCheck,
  FaAward,
  FaBolt,
  FaShieldHalved,
  FaSackDollar,
  FaHeadset,
  FaUsers,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa6'

/* ── Brand / contact ───────────────────────────────────────────── */
export const brand = {
  name: 'RAS',
  full: 'RAS Tourism',
  legalName: 'RUKN AL SURAJ TOURISM TRIPS ORGANIZING L.L.C',
  tagline: 'Tourism',
  founded: 2014,
  whatsappNumber: '971526258581',
  whatsappDisplay: '+971 52 625 8581',
  phoneDisplay: '+971 52 625 8581',
  email: 'ruknalsurajtourism@gmail.com',
  address: 'Sharjah, United Arab Emirates',
  hours: 'Mon – Sat: 9:00 AM – 8:00 PM',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231375.4!2d55.4!3d25.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzAwLjAiTiA1NcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sae!4v0',
}

export const socials = [
  { label: 'WhatsApp', icon: FaWhatsapp, href: `https://wa.me/${brand.whatsappNumber}` },
  { label: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/ruknalsurajtourism?igsh=ZmcweTZxMWNsdzN1' },
  { label: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/share/1BUUrLwBFh/' },,
]

/* ── Primary navigation (in-page anchors on the Home route) ──────── */
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const mobileNavLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

/* ── Hero + About statistics ──────────────────────────────────── */
export const heroStats = [
  { value: 941218, suffix: '', label: 'License No.', noFormat: true },
  { value: 5000, suffix: '+', label: 'Happy Clients' },
  { value: 99, suffix: '%', label: 'Visa Success Rate' },
  { value: 24, suffix: '/7', label: 'Support' },
]

export const aboutStats = [
  { value: 941218, suffix: '', label: 'License No.', noFormat: true },
  { value: 5000, suffix: '+', label: 'Happy Clients' },
  { value: 99, suffix: '%', label: 'Visa Success Rate' },
  { value: 24, suffix: '/7', label: 'Support' },
]

/* ── Services ──────────────────────────────────────────────────── */
export const services = [
  {
    icon: FaCity,
    title: 'UAE Tourism Packages',
    description:
      'Curated city tours, desert safaris and luxury experiences across Dubai, Abu Dhabi and the wider Emirates.',
    tags: ['Dubai City Tours', 'Desert Safari', 'Abu Dhabi Tours', 'Luxury Experiences'],
    image: './Services_1.jpg',
    detail:
      'From iconic skylines to golden dunes, we design itineraries that show off the best of the Emirates. Every package is built around your pace, your budget and the experiences you actually want — not a one-size-fits-all bus tour.',
    included: [
      'Private & group city tours',
      'Desert safari with dune dinner',
      'Multi-emirate itineraries',
      'English & Arabic-speaking guides',
      'Custom luxury add-ons',
    ],
  },
  {
    icon: FaPlaneDeparture,
    title: 'Flight Tickets',
    description:
      'Best-fare international and domestic flights, sourced across airlines to fit your schedule and budget.',
    tags: ['International Flights', 'Domestic Flights', 'Best Fare Deals'],
    image: './Services_2.jpg',
    detail:
      'We compare fares across major and budget airlines so you don\u2019t have to. Whether it\u2019s a same-day domestic hop or a multi-stop international itinerary, our team finds the route that fits your schedule and your wallet.',
    included: [
      'International & domestic routes',
      'Multi-city itinerary planning',
      'Fare comparison across airlines',
      'Date-change & rebooking support',
      'E-ticket within minutes of payment',
    ],
  },
  {
    icon: FaPassport,
    title: 'Tourist Visas',
    description:
      'UAE tourist and visit visa assistance, handled end to end with fast processing and high approval rates.',
    tags: ['UAE Tourist Visa', 'Visit Visa Assistance', 'Fast Processing'],
    image: './Services_3.jpg',
    detail:
      'Visa paperwork is the part nobody enjoys — so we handle it for you. From document checks to submission and status tracking, our team keeps your application moving and answers every question along the way.',
    included: [
      '30 & 60-day tourist visas',
      'Multiple-entry visit visas',
      'Document review & preparation',
      'Status tracking & updates',
      'Express processing options',
    ],
  },
  {
    icon: FaBed,
    title: 'Hotel Bookings',
    description:
      'Hand-picked stays from budget-friendly hotels to five-star resorts, matched to your taste and itinerary.',
    tags: ['Luxury Hotels', 'Budget Hotels', 'Resort Packages'],
    image: './Services_4.jpg',
    detail:
      'We book hotels in Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Ajman, ranging from budget-friendly stays to five-star resorts and serviced apartments — matched to your itinerary, group size and budget.',
    included: [
      'Budget to five-star options',
      'Resort & serviced apartments',
      'Group & family bookings',
      'Best-rate matching',
      'Free cancellation on select stays',
    ],
  },
  {
    icon: FaCar,
    title: 'Airport Pickup & Drop',
    description:
      'Reliable, comfortable transfers — including VIP and private transportation — to and from every UAE airport.',
    tags: ['Airport Transfers', 'VIP Transfers', 'Private Transportation'],
    image: './Services_5.jpg',
    detail:
      'Flight delayed? Landing at midnight? Our drivers track your flight and wait for you — no extra charge, no stress. Available at every airport across the Emirates, from economy sedans to VIP fleets.',
    included: [
      'Meet & greet at arrivals',
      'Flight tracking for delays',
      'VIP & private vehicle options',
      'Group & family transfers',
      'Available 24/7, all UAE airports',
    ],
  },
  {
    icon: FaFileShield,
    title: 'Schengen Visa Application',
    description:
      'Complete documentation, expert guidance and submission support for Schengen-zone visa applications.',
    tags: ['Complete Documentation', 'Visa Guidance', 'Application Submission'],
    image: './Services_6.jpg',
    detail:
      'Schengen applications are detail-heavy and unforgiving of small mistakes. We walk you through every required document, review your file before submission, and help you avoid the errors that cause delays or rejections.',
    included: [
      'Document checklist & review',
      'Cover letter & itinerary support',
      'Travel & medical insurance guidance',
      'Application form assistance',
      'Submission to the correct consulate',
    ],
  },
  {
    icon: FaCalendarCheck,
    title: 'Schengen Visa Appointment',
    description:
      'Appointment booking, pre-submission consultation and tracking assistance for your Schengen application.',
    tags: ['Appointment Booking', 'Consultation', 'Tracking Assistance'],
    image: './Services_7.jpg',
    detail:
      'Getting a visa centre slot can take weeks if you\u2019re booking alone. We secure your appointment, prep you for what to expect on the day, and keep tracking your application after it\u2019s submitted.',
    included: [
      'Visa centre appointment booking',
      'Pre-submission consultation',
      'Biometrics day preparation',
      'Application status tracking',
      'Follow-up support after submission',
    ],
  },
]

/* ── Why choose us ────────────────────────────────────────────── */
export const whyUs = [
  { icon: FaAward, title: 'Professional Service', description: 'A licensed agency with certified travel consultants behind every itinerary.' },
  { icon: FaBolt, title: 'Fast Processing', description: 'Streamlined paperwork and visa workflows that save you time at every step.' },
  { icon: FaShieldHalved, title: 'Trusted Agency', description: 'Recognised by UAE tourism authorities, with thousands of satisfied travellers.' },
  { icon: FaSackDollar, title: 'Affordable Pricing', description: 'Transparent, competitive rates — premium service without hidden costs.' },
  { icon: FaHeadset, title: '24/7 Support', description: 'Real humans on WhatsApp and phone, around the clock, wherever you are.' },
  { icon: FaUsers, title: 'Experienced Team', description: 'Multilingual consultants fluent in UAE regulations and global travel routes.' },
]

export const whyUsNumbers = [
  { value: '99%', label: 'Visa Approval Rate' },
  { value: '24/7', label: 'Customer Support' },
  { value: '5★', label: 'Average Client Rating' },
  { value: '10+', label: 'Years of Expertise' },
]

/* ── Destinations ─────────────────────────────────────────────── */
export const destinations = [
  { id: 'dubai', name: 'Dubai', region: 'United Arab Emirates', tag: 'Most Popular', glyph: 'dubai' },
  { id: 'abudhabi', name: 'Abu Dhabi', region: 'UAE Capital', tag: null, glyph: 'abudhabi' },
  { id: 'sharjah', name: 'Sharjah', region: 'Cultural Capital', tag: null, glyph: 'sharjah' },
  { id: 'rak', name: 'Ras Al Khaimah', region: 'Adventure Capital', tag: null, glyph: 'rak' },
  { id: 'uaq', name: 'Umm Al Quwain', region: 'Hidden Gem of UAE', tag: null, glyph: 'uaq' },
  { id: 'europe', name: 'Europe', region: 'Schengen Zone', tag: 'Schengen Visa', glyph: 'europe' },
  { id: 'france', name: 'France', region: 'Paris & Beyond', tag: null, glyph: 'france' },
  { id: 'germany', name: 'Germany', region: 'Central Europe', tag: null, glyph: 'germany' },
  { id: 'italy', name: 'Italy', region: 'Rome · Venice · Milan', tag: null, glyph: 'italy' },
  { id: 'switzerland', name: 'Switzerland', region: 'Alps & Lakes', tag: null, glyph: 'switzerland' },
]

/* ── Process ──────────────────────────────────────────────────── */
export const processSteps = [
  { title: 'Contact Us', description: 'Reach out on WhatsApp, by phone, or through our contact form to start the conversation.' },
  { title: 'Consultation', description: 'A dedicated travel expert listens to your needs and shapes a plan around them.' },
  { title: 'Documentation', description: 'We tell you exactly what is required and check every document before submission.' },
  { title: 'Processing', description: 'We manage submissions, follow-ups and confirmations on your behalf, start to finish.' },
  { title: 'Travel Ready', description: 'Tickets, visas, hotels and transfers — all confirmed, all in one place, ready to go.' },
]

/* ── Testimonials ─────────────────────────────────────────────── */
export const testimonials = [
  {
    name: 'Ahmed M.',
    origin: 'Dubai, UAE',
    rating: 5,
    quote: 'RAS Tourism handled our Schengen visa without a single hiccup. Responsive team, and our appointment came through faster than we expected.',
  },
  {
    name: 'Sana R.',
    origin: 'Sharjah, UAE',
    rating: 5,
    quote: 'Our family Dubai tour was beautifully organised — desert safari, city tour, everything timed perfectly. We will be booking again.',
  },
  {
    name: 'Khalid P.',
    origin: 'Abu Dhabi, UAE',
    rating: 5,
    quote: 'The airport transfer driver was on time to the minute, and the hotel was exactly as described. Excellent value from start to finish.',
  },
  {
    name: 'Fatima H.',
    origin: 'Dubai, UAE',
    rating: 5,
    quote: 'My France visa was approved in just ten days. I was nervous about the paperwork, but the team made the whole process feel simple.',
  },
  {
    name: 'Mohammed J.',
    origin: 'Dubai, UAE',
    rating: 5,
    quote: 'They found a far better flight and hotel deal for our Switzerland trip than anything I could find browsing on my own.',
  },
  {
    name: 'Riya L.',
    origin: 'Mumbai, India',
    rating: 5,
    quote: 'Support on WhatsApp at almost any hour, and our UAE tourist visa was ready within three days. Couldn\u2019t ask for more.',
  },
]

/* ── FAQ ──────────────────────────────────────────────────────── */
export const faqs = [
  {
    category: 'UAE Visa',
    question: 'How long does a UAE tourist visa take to process?',
    answer:
      'Standard processing usually takes 3–5 business days. We also offer express handling for urgent cases, often completed within 24–48 hours, with our team managing every document along the way.',
  },
  {
    category: 'Schengen Visa',
    question: 'What documents are needed for a Schengen visa?',
    answer:
      'You\u2019ll typically need a passport valid for at least six months, travel insurance, a flight itinerary, hotel bookings, three months of bank statements and an employment letter. We walk you through the exact checklist for your destination country.',
  },
  {
    category: 'Airport Transfers',
    question: 'Do you offer airport transfers for group bookings?',
    answer:
      'Yes — private and group transfers in sedans, SUVs or minibuses, with professional drivers familiar with DXB, DWC and AUH airports.',
  },
  {
    category: 'Hotel Bookings',
    question: 'Can you book hotels across all the Emirates?',
    answer:
      'We book hotels in Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah and Ajman, ranging from budget-friendly stays to five-star resorts and serviced apartments.',
  },
  {
    category: 'Flight Tickets',
    question: 'How do I get the best flight ticket deals?',
    answer:
      'Our consultants compare fares across airlines and booking channels. Share your travel dates and destination and we\u2019ll come back with the strongest options we can find.',
  },
  {
    category: 'Privacy',
    question: 'Is my personal information kept secure?',
    answer:
      'Always. Passport copies, financial documents and personal details are used strictly for your visa and travel applications, and are never shared with third parties without your explicit consent.',
  },
]

/* ── Contact form service options ───────────────────────────── */
export const serviceOptions = [
  'UAE Tourist Visa',
  'Schengen Visa Application',
  'Schengen Visa Appointment',
  'UAE Tourism Package',
  'Flight Tickets',
  'Hotel Booking',
  'Airport Transfer',
  'Custom Travel Plan',
]

export const contactPoints = [
  { icon: FaPhone, label: 'Phone', value: brand.phoneDisplay, href: `tel:${brand.phoneDisplay.replace(/\s/g, '')}` },
  { icon: FaEnvelope, label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
  { icon: FaLocationDot, label: 'Office', value: brand.address, href: null },
  { icon: FaClock, label: 'Working Hours', value: brand.hours, href: null },
]

/* ── Footer links ─────────────────────────────────────────────── */
export const footerQuickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'How It Works', href: '#process' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const footerServiceLinks = [
  'UAE Tourism Packages',
  'Flight Tickets',
  'Tourist Visas',
  'Hotel Bookings',
  'Airport Transfers',
  'Schengen Visa',
]