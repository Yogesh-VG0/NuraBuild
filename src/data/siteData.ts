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

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Sectors", href: "#sectors" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

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

export const aboutFeatures = [
  {
    icon: ClipboardCheck,
    title: "Clear Scope Definition",
    description: "Every project begins with a structured scope covering phases, deliverables, and expectations.",
  },
  {
    icon: PaintBucket,
    title: "Material & Finish Coordination",
    description: "Organized selection and tracking of materials, finishes, and specifications throughout the project.",
  },
  {
    icon: Eye,
    title: "Site Progress Updates",
    description: "Regular reporting and visual updates to keep all stakeholders informed at every stage.",
  },
  {
    icon: ShieldCheck,
    title: "Handover-Focused Delivery",
    description: "Structured final review, snag resolution, and complete handover documentation.",
  },
];

export const services = [
  {
    icon: Home,
    title: "Villa Renovation",
    description: "Layout improvements, finishing upgrades, and coordinated renovation planning for modern villa spaces.",
  },
  {
    icon: LayoutGrid,
    title: "Apartment Refurbishment",
    description: "Practical interior upgrades, space planning, and finish refreshes for apartments and residential units.",
  },
  {
    icon: Building2,
    title: "Commercial Fit-Out",
    description: "Office, retail, and commercial space fit-out concepts focused on function, presentation, and handover readiness.",
  },
  {
    icon: PaintBucket,
    title: "Office Partitions & Interiors",
    description: "Workspace zoning, glass partitions, ceiling, flooring, lighting, and interior coordination concepts.",
  },
  {
    icon: FileCheck,
    title: "Approval Support",
    description: "A structured way to present authority approval support, drawing coordination, and documentation flow for UAE projects.",
  },
  {
    icon: HardHat,
    title: "Project Supervision",
    description: "Site coordination, progress updates, quality checks, and handover-focused tracking for active works.",
  },
];

export const projects = [
  {
    title: "Jumeirah Villa Renovation",
    location: "Dubai, UAE",
    type: "Concept Project",
    scope: "Layout refinement, interior upgrades, finishing coordination",
    description: "A residential renovation concept showing how scope, finish quality, and project flow can be presented clearly.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Business Bay Office Fit-Out",
    location: "Dubai, UAE",
    type: "Concept Project",
    scope: "Workspace planning, partitions, lighting, finishes",
    description: "A commercial fit-out concept for a modern office space with structured service presentation and enquiry flow.",
    image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Al Quoz Warehouse Upgrade",
    location: "Dubai, UAE",
    type: "Concept Project",
    scope: "Utility planning, surface upgrades, supervision",
    description: "A light industrial upgrade concept showing how practical project details can be presented professionally.",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const sectors = [
  {
    title: "Residential Villas",
    description: "Renovation, extension, and finishing works for private residential villas.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Apartments",
    description: "Interior refurbishment, space planning, and upgrade solutions for apartment units.",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Offices & Workplaces",
    description: "Fit-out, partitioning, and interior coordination for modern office environments.",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Warehouses & Light Industrial",
    description: "Practical upgrades, surface works, and utility coordination for warehouse and industrial spaces.",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const qualityItems = [
  {
    icon: ShieldCheck,
    title: "Safety-Aware Site Coordination",
    description: "Concept-level safety planning integrated into site coordination workflows, demonstrating how contractor websites can present safety commitment clearly.",
  },
  {
    icon: Gem,
    title: "Quality Checks Before Handover",
    description: "Structured review and snag-list processes designed to demonstrate thorough quality assurance as part of the project delivery concept.",
  },
  {
    icon: Leaf,
    title: "Material-Conscious Planning",
    description: "Thoughtful material selection and waste-reduction concepts that show how sustainability awareness can be woven into project planning.",
  },
];

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
  { icon: Clock, label: "Response", value: "Demo enquiry flow" },
];

export const footerLinks = {
  services: [
    { label: "Villa Renovation", href: "#services" },
    { label: "Commercial Fit-Out", href: "#services" },
    { label: "Approval Support", href: "#services" },
    { label: "Site Supervision", href: "#services" },
  ],
  projects: [
    { label: "Jumeirah Villa Concept", href: "#projects" },
    { label: "Business Bay Office Concept", href: "#projects" },
    { label: "Al Quoz Warehouse Concept", href: "#projects" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Quality & Safety", href: "#quality" },
    { label: "Contact", href: "#contact" },
  ],
  contact: [
    { label: "+971 00 000 0000", href: "tel:+97100000000" },
    { label: "enquiries@nurabuild-demo.com", href: "mailto:enquiries@nurabuild-demo.com" },
    { label: "Dubai & Sharjah, UAE", href: "#contact" },
  ],
};

export const heroImage = "https://images.pexels.com/photos/6285158/pexels-photo-6285158.jpeg?auto=compress&cs=tinysrgb&w=1260";
export const aboutImage = "https://images.pexels.com/photos/6615095/pexels-photo-6615095.jpeg?auto=compress&cs=tinysrgb&w=800";
