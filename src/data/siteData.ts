import {
  Home,
  Building2,
  FileCheck,
  HardHat,
  PaintBucket,
  LayoutGrid,
  ClipboardCheck,
  Eye,
  ShieldCheck,
  Gem,
  Leaf,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

/* ───── Navigation ───── */

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Sectors", href: "/sectors" },
  { label: "Quality & Safety", href: "/quality-safety" },
  { label: "Contact", href: "/contact" },
];

/* ───── Homepage capability strip ───── */

export const capabilities = [
  {
    icon: Home,
    title: "Residential Works",
    description: "Villa renovation, apartment refurbishment, and finishing coordination.",
  },
  {
    icon: Building2,
    title: "Commercial Fit-Outs",
    description: "Office, retail, and workspace fit-out planning and execution.",
  },
  {
    icon: FileCheck,
    title: "Approval Support",
    description: "Drawing coordination, documentation, and authority approval flow.",
  },
  {
    icon: HardHat,
    title: "Site Supervision",
    description: "Progress tracking, quality checks, and handover coordination.",
  },
];

/* ───── About features ───── */

export const aboutFeatures = [
  {
    icon: ClipboardCheck,
    title: "Scope Clarity",
    description: "Every project begins with a structured scope covering phases, deliverables, and expectations.",
  },
  {
    icon: PaintBucket,
    title: "Material Awareness",
    description: "Organized selection and tracking of materials, finishes, and specifications throughout the project.",
  },
  {
    icon: Eye,
    title: "Site Coordination",
    description: "Regular reporting and visual updates to keep all stakeholders informed at every stage.",
  },
  {
    icon: ShieldCheck,
    title: "Handover Focus",
    description: "Structured final review, snag resolution, and complete handover documentation.",
  },
];

/* ───── Services ───── */

export const services = [
  {
    icon: Home,
    slug: "villa-renovation",
    title: "Villa Renovation",
    description: "Layout improvements, finishing upgrades, and coordinated renovation planning for modern villa spaces.",
    scopeTags: ["Layout", "Finishing", "Coordination"],
    includes: [
      "Space planning and layout reconfiguration",
      "Interior finishing: flooring, walls, ceilings",
      "Kitchen and bathroom renovation coordination",
      "Electrical and plumbing layout updates",
      "Material selection and procurement support",
      "Snag list and handover review",
    ],
    bestFor: "Villa owners planning full or partial renovations across Dubai and Sharjah.",
  },
  {
    icon: LayoutGrid,
    slug: "apartment-refurbishment",
    title: "Apartment Refurbishment",
    description: "Practical interior upgrades, space planning, and finish refreshes for apartments and residential units.",
    scopeTags: ["Interior", "Space Planning", "Upgrades"],
    includes: [
      "Interior layout refinement",
      "Flooring and wall finish replacement",
      "Lighting and fixture upgrades",
      "Storage and built-in furniture coordination",
      "Painting and decorative finishes",
      "Final walkthrough and handover",
    ],
    bestFor: "Apartment owners and landlords upgrading units for personal use or tenancy.",
  },
  {
    icon: Building2,
    slug: "commercial-fit-out",
    title: "Commercial Fit-Out",
    description: "Office, retail, and commercial space fit-out focused on function, presentation, and handover readiness.",
    scopeTags: ["Office", "Retail", "Handover"],
    includes: [
      "Workspace layout and space planning",
      "Partition walls and glass systems",
      "Ceiling, flooring, and MEP coordination",
      "Reception and common area finishing",
      "Signage and branding element coordination",
      "Authority approval and handover documentation",
    ],
    bestFor: "Businesses setting up or refreshing office, retail, or F&B spaces.",
  },
  {
    icon: PaintBucket,
    slug: "office-partitions-interiors",
    title: "Office Partitions & Interiors",
    description: "Workspace zoning, glass partitions, ceiling, flooring, lighting, and interior coordination.",
    scopeTags: ["Partitions", "Ceiling", "Flooring"],
    includes: [
      "Glass and gypsum partition installation",
      "Acoustic ceiling and raised flooring",
      "Workstation layout coordination",
      "Lighting and power point planning",
      "Meeting room and breakout area build-out",
      "IT and AV rough-in coordination",
    ],
    bestFor: "Companies needing modular or open-plan office interior solutions.",
  },
  {
    icon: FileCheck,
    slug: "approval-support",
    title: "Approval Support",
    description: "Authority approval support, drawing coordination, and documentation flow for UAE projects.",
    scopeTags: ["Drawings", "Documentation", "Authority"],
    includes: [
      "As-built drawing preparation",
      "Municipality and civil defence submissions",
      "NOC coordination with building management",
      "MEP drawing review and coordination",
      "Permit application tracking",
      "Documentation for project closeout",
    ],
    bestFor: "Property owners and tenants navigating UAE authority approval requirements.",
  },
  {
    icon: HardHat,
    slug: "project-supervision",
    title: "Project Supervision",
    description: "Site coordination, progress updates, quality checks, and handover-focused tracking for active works.",
    scopeTags: ["Progress", "Quality", "Handover"],
    includes: [
      "Daily and weekly site progress tracking",
      "Subcontractor coordination and scheduling",
      "Quality inspection at key milestones",
      "Material delivery and storage oversight",
      "Health and safety compliance monitoring",
      "Snag resolution and handover coordination",
    ],
    bestFor: "Project owners who need professional site oversight without a full PMC.",
  },
];

/* ───── Projects ───── */

export const projects = [
  {
    slug: "jumeirah-villa-renovation",
    title: "Jumeirah Villa Renovation",
    location: "Dubai, UAE",
    type: "Concept Project",
    sector: "Residential",
    sampleScale: "320 sqm",
    scope: "Layout refinement, interior upgrades, finishing coordination",
    description: "A residential renovation scope focused on layout refinement, finish upgrades, and coordinated handover planning.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    scopeOverview: "Full villa interior renovation covering ground and first floor living spaces, kitchen, bathrooms, and external landscaping interface. The scope addresses layout reconfiguration, material upgrades, and finishing coordination across all trades.",
    requirements: [
      "Reconfigure ground floor open-plan layout",
      "Upgrade kitchen cabinetry, countertops, and appliances",
      "Renovate three bathrooms with new tiling and fixtures",
      "Replace flooring throughout with porcelain and engineered wood",
      "New lighting design with dimming controls",
      "Repaint all interior walls and ceilings",
    ],
    deliveryNotes: "Phased delivery across two stages — ground floor first, then upper floor — to minimize disruption. Weekly progress reports with photo documentation. Final walkthrough and snag resolution before handover.",
    finishNotes: "Premium Italian porcelain tiling, engineered oak flooring in living areas, quartz kitchen countertops, and matte black ironmongery throughout.",
  },
  {
    slug: "business-bay-office-fit-out",
    title: "Business Bay Office Fit-Out",
    location: "Dubai, UAE",
    type: "Concept Project",
    sector: "Commercial",
    sampleScale: "480 sqm",
    scope: "Workspace planning, partitions, lighting, finishes",
    description: "A commercial fit-out scope for a modern office space with structured workspace planning and coordinated handover.",
    image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800",
    scopeOverview: "Category A to Category B fit-out for a mid-size office floor in a Business Bay tower. The scope covers workspace planning, partition installation, MEP coordination, and authority approvals through to handover.",
    requirements: [
      "Open-plan workspace layout for 40 workstations",
      "Four enclosed meeting rooms with glass partitions",
      "Reception area with feature wall and signage",
      "Pantry and breakout zone build-out",
      "Server room with raised flooring and cooling",
      "DEWA and civil defence approval coordination",
    ],
    deliveryNotes: "Single-phase delivery over 10 weeks. Coordination with building management for access, deliveries, and hot works permits. Staged inspections at MEP rough-in, ceiling closure, and final completion.",
    finishNotes: "Carpet tiles in workspace areas, porcelain in reception and pantry, suspended acoustic ceiling with integrated lighting, and frameless glass partitions for meeting rooms.",
  },
  {
    slug: "al-quoz-warehouse-upgrade",
    title: "Al Quoz Warehouse Upgrade",
    location: "Dubai, UAE",
    type: "Concept Project",
    sector: "Industrial",
    sampleScale: "750 sqm",
    scope: "Utility planning, surface upgrades, supervision",
    description: "A light industrial upgrade scope covering utility improvements, surface works, and supervised delivery.",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
    scopeOverview: "Warehouse interior upgrade in an Al Quoz industrial unit. The scope focuses on floor resurfacing, lighting replacement, office mezzanine build-out, and utility upgrades to support a small logistics operation.",
    requirements: [
      "Epoxy floor coating for main warehouse area",
      "LED high-bay lighting replacement",
      "Mezzanine office build-out with AC split units",
      "Loading dock area repairs and line marking",
      "Electrical panel upgrade and new power distribution",
      "Fire safety compliance review and upgrades",
    ],
    deliveryNotes: "Delivery planned around operational hours to avoid disruption. Heavy works scheduled during off-peak periods. Safety barriers and signage throughout active work zones.",
    finishNotes: "Industrial epoxy flooring in grey, painted steel mezzanine structure, vinyl tile flooring in mezzanine office, and commercial-grade LED lighting throughout.",
  },
];

/* ───── Sectors ───── */

export const sectors = [
  {
    slug: "residential-villas",
    title: "Residential Villas",
    description: "Renovation, extension, and finishing works for private residential villas.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
    needs: ["Full and partial villa renovations", "Kitchen and bathroom upgrades", "Extension and addition works", "Garden and landscape interface"],
    relevantServices: ["Villa Renovation", "Approval Support", "Project Supervision"],
    exampleScope: "A three-bedroom villa renovation covering layout changes, new finishes, and MEP upgrades across 280–400 sqm.",
  },
  {
    slug: "apartments",
    title: "Apartments",
    description: "Interior refurbishment, space planning, and upgrade solutions for apartment units.",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    needs: ["Interior refreshes for owner-occupiers", "Landlord upgrade packages", "Studio to penthouse refurbishment", "Building management coordination"],
    relevantServices: ["Apartment Refurbishment", "Approval Support"],
    exampleScope: "A two-bedroom apartment refresh including new flooring, kitchen upgrades, bathroom retiling, and full repaint.",
  },
  {
    slug: "offices-workplaces",
    title: "Offices & Workplaces",
    description: "Fit-out, partitioning, and interior coordination for modern office environments.",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
    needs: ["Cat A to Cat B fit-out", "Workspace reconfiguration", "Meeting room and common area build-out", "Authority approval and handover"],
    relevantServices: ["Commercial Fit-Out", "Office Partitions & Interiors", "Approval Support"],
    exampleScope: "A 400 sqm office fit-out with open-plan workspace, glass meeting rooms, reception, and pantry.",
  },
  {
    slug: "warehouses-industrial",
    title: "Warehouses & Light Industrial",
    description: "Practical upgrades, surface works, and utility coordination for warehouse and industrial spaces.",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=600",
    needs: ["Floor resurfacing and coatings", "Lighting and electrical upgrades", "Mezzanine and office build-outs", "Safety and compliance improvements"],
    relevantServices: ["Project Supervision", "Approval Support"],
    exampleScope: "A 600 sqm warehouse upgrade with epoxy flooring, LED lighting, mezzanine office, and utility panel replacement.",
  },
];

/* ───── Quality & Safety ───── */

export const qualityItems = [
  {
    icon: ShieldCheck,
    title: "Safety-Aware Site Coordination",
    description: "Safety-aware coordination helps align site activity, access, updates, and handover expectations from the start.",
    detail: "Every project includes a safety-first approach to site coordination. This covers access control, PPE requirements, hot works management, and clear communication protocols between trades. Regular safety briefings ensure all site personnel understand their responsibilities.",
  },
  {
    icon: Gem,
    title: "Quality Checks Before Handover",
    description: "Structured review and snag-list processes ensure thorough quality assurance before project handover.",
    detail: "Quality is verified at multiple stages — MEP rough-in, ceiling closure, finishing completion, and final walkthrough. A formal snag list is compiled, tracked, and resolved before handover. Photographic records document the condition of all completed works.",
  },
  {
    icon: Leaf,
    title: "Material-Conscious Planning",
    description: "Thoughtful material selection balances quality, durability, and waste reduction throughout the project.",
    detail: "Material planning considers lifecycle cost, availability, and environmental impact. Accurate quantity surveying reduces waste, and supplier coordination ensures materials arrive on schedule. Samples and mock-ups are reviewed before bulk procurement.",
  },
];

/* ───── Process ───── */

export const processSteps = [
  {
    step: 1,
    title: "Initial Enquiry",
    description: "Collect project type, location, timeline, and basic requirements.",
  },
  {
    step: 2,
    title: "Site Review",
    description: "Understand the space, constraints, and technical considerations.",
  },
  {
    step: 3,
    title: "Scope & Proposal",
    description: "Prepare a structured scope with phases, deliverables, and timeline.",
  },
  {
    step: 4,
    title: "Coordination & Updates",
    description: "Keep the project organized with clear communication and progress updates.",
  },
  {
    step: 5,
    title: "Final Review",
    description: "Review completed works, check details, and prepare handover.",
  },
];

/* ───── Contact ───── */

export const projectTypes = [
  "Villa Renovation",
  "Apartment Refurbishment",
  "Office Fit-Out",
  "Commercial Fit-Out",
  "Approval Support",
  "Site Supervision",
  "Other",
];

export const contactInfo = [
  { icon: Phone, label: "WhatsApp", value: "+971 00 000 0000" },
  { icon: Mail, label: "Email", value: "enquiries@nurabuild-demo.com" },
  { icon: MapPin, label: "Coverage", value: "Dubai & Sharjah, UAE" },
  { icon: Clock, label: "Response", value: "Within 24 hours" },
];

export const contactFaq = [
  {
    q: "Is NuraBuild a real company?",
    a: "No. NuraBuild Contracting is a fictional website concept created for portfolio demonstration purposes. No real company or client is represented.",
  },
  {
    q: "Can this form send real emails?",
    a: "This is a frontend-only demo. In a real project, the form would connect to email, WhatsApp, or a CRM system.",
  },
  {
    q: "Are the project cards real projects?",
    a: "No. All projects shown are fictional concept scopes created to demonstrate how a contractor can present project information clearly.",
  },
  {
    q: "Who built this demo?",
    a: "This website was designed and built by Yogesh Vadivel as a portfolio demonstration piece.",
  },
];

/* ───── Footer ───── */

export const footerLinks = {
  services: [
    { label: "Villa Renovation", href: "/services" },
    { label: "Commercial Fit-Out", href: "/services" },
    { label: "Approval Support", href: "/services" },
    { label: "Site Supervision", href: "/services" },
  ],
  projects: [
    { label: "Jumeirah Villa Concept", href: "/projects/jumeirah-villa-renovation" },
    { label: "Business Bay Office Concept", href: "/projects/business-bay-office-fit-out" },
    { label: "Al Quoz Warehouse Concept", href: "/projects/al-quoz-warehouse-upgrade" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Quality & Safety", href: "/quality-safety" },
    { label: "Contact", href: "/contact" },
  ],
};

/* ───── Coverage Routes ───── */

export interface CoverageRoute {
  id: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  type: string;
  focus: string[];
  primary?: boolean;
  showOnMap: boolean;
  note: string;
}

export const coverageRoutes: CoverageRoute[] = [
  {
    id: "dubai",
    city: "Dubai",
    country: "UAE",
    lat: 25.2048,
    lng: 55.2708,
    type: "Primary enquiry base",
    focus: ["Villa renovation", "Commercial fit-out", "Supervision"],
    primary: true,
    showOnMap: true,
    note: "Fictional demo route",
  },
  {
    id: "riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    lat: 24.7136,
    lng: 46.6753,
    type: "GCC enquiry route",
    focus: ["Commercial fit-out", "Contractor coordination"],
    showOnMap: true,
    note: "Fictional demo route",
  },
  {
    id: "doha",
    city: "Doha",
    country: "Qatar",
    lat: 25.2854,
    lng: 51.531,
    type: "GCC enquiry route",
    focus: ["Office fit-out", "Retail fit-out enquiries"],
    showOnMap: true,
    note: "Fictional demo route",
  },
  {
    id: "cairo",
    city: "Cairo",
    country: "Egypt",
    lat: 30.0444,
    lng: 31.2357,
    type: "MENA enquiry route",
    focus: ["Regional contracting", "Documentation enquiries"],
    showOnMap: true,
    note: "Fictional demo route",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    country: "India",
    lat: 19.076,
    lng: 72.8777,
    type: "Supplier / design coordination route",
    focus: ["Materials", "Drawings", "Procurement"],
    showOnMap: true,
    note: "Fictional demo route",
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    lat: 51.5074,
    lng: -0.1278,
    type: "International client enquiry route",
    focus: ["Overseas owner enquiries", "UAE property projects"],
    showOnMap: true,
    note: "Fictional demo route",
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    type: "Asia coordination route",
    focus: ["Supplier discussions", "Project documentation"],
    showOnMap: true,
    note: "Fictional demo route",
  },
  {
    id: "sydney",
    city: "Sydney",
    country: "Australia",
    lat: -33.8688,
    lng: 151.2093,
    type: "Overseas client enquiry route",
    focus: ["UAE property owner enquiries"],
    showOnMap: true,
    note: "Fictional demo route",
  },
];

/* ───── Images ───── */

export const heroImage = "https://images.pexels.com/photos/6285158/pexels-photo-6285158.jpeg?auto=compress&cs=tinysrgb&w=1260";
export const aboutImage = "https://images.pexels.com/photos/6615095/pexels-photo-6615095.jpeg?auto=compress&cs=tinysrgb&w=800";
