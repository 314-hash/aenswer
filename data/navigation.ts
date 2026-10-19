export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Website Design & Dev',
        href: '/web-design-philippines',
        desc: 'Fast, mobile-first business websites engineered for conversion',
      },
      {
        label: 'AI & Business Automation',
        href: '/ai-automation',
        desc: 'Eliminate manual tasks with 24/7 AI chat and workflow automation',
      },
      {
        label: 'Digital Marketing & SEO',
        href: '/digital-marketing',
        desc: 'On-page SEO, analytics tracking, and data-backed marketing funnels',
      },
      {
        label: 'Video Ads & Graphic Design',
        href: '/video-graphic-design',
        desc: 'High-retention short-form video ads, motion graphics, and social creatives',
      },
      {
        label: 'Blockchain Engineering',
        href: '/blockchain-development',
        desc: 'Audited smart contracts, token architectures, and security testing',
      },
      {
        label: 'Web3 & dApp Development',
        href: '/web3-development',
        desc: 'Seamless decentralized frontends, wallet integration, and explorers',
      },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];

export const footerLinks = {
  services: [
    { label: 'Web Design Philippines', href: '/web-design-philippines' },
    { label: 'AI Automation Solutions', href: '/ai-automation' },
    { label: 'Digital Marketing & SEO', href: '/digital-marketing' },
    { label: 'Video & Graphic Design', href: '/video-graphic-design' },
    { label: 'Blockchain Engineering', href: '/blockchain-development' },
    { label: 'Web3 & dApp Integration', href: '/web3-development' },
  ],
  company: [
    { label: 'About Aenswer', href: '/about' },
    { label: 'Portfolio & Case Studies', href: '/portfolio' },
    { label: 'Transparent Pricing', href: '/pricing' },
    { label: 'Blog & Articles', href: '/blog' },
    { label: 'Contact & Inquiries', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security & Consent', href: '/privacy#security' },
  ],
  socials: [
    { label: 'X (Twitter)', href: 'https://x.com/aenswerph', handle: '@aenswerph' },
    { label: 'Facebook', href: 'https://facebook.com/aenswerph', handle: 'Aenswer Digital Solutions' },
    { label: 'GitHub', href: 'https://github.com/aenswer', handle: 'Aenswer Open Source' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/aenswerph', handle: 'Aenswer Digital Solutions' },
  ],
};
