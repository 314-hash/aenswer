export type Currency = 'PHP' | 'USD';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  category: 'web' | 'ai' | 'marketing' | 'creative' | 'blockchain' | 'web3';
  icon: string;
  benefits: string[];
  deliverables: string[];
  technologies: string[];
  startingPrice: {
    PHP: number;
    USD: number;
    custom?: boolean;
  };
  deliveryTime: string;
  idealFor: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  category: string;
  popular?: boolean;
  tagline: string;
  pricePHP: number | null;
  priceUSD: number | null;
  customQuote?: boolean;
  deliveryTime: string;
  revisions: string;
  deliverables: string[];
  clientResponsibilities: string[];
  exclusions: string[];
  hostingAndFees: string;
  maintenanceNote: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'Web Design' | 'Automation' | 'Creative Media' | 'Blockchain';
  categorySlug: 'web' | 'ai' | 'creative' | 'blockchain';
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  techStack: string[];
  isConceptOrDemo: boolean;
  demoUrl?: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: string[];
}
