import { PricingPackage } from '@/lib/types';

export const pricingPackages: PricingPackage[] = [
  {
    id: 'landing-page',
    name: 'Business Landing Page',
    category: 'Web Design',
    popular: false,
    tagline: 'High-conversion, single-page presentation for product launches or local campaigns.',
    pricePHP: 7500,
    priceUSD: 250,
    customQuote: false,
    deliveryTime: '5 – 7 business days',
    revisions: 'Up to 3 revision rounds',
    deliverables: [
      '1 Custom responsive landing page (Desktop, Tablet, Mobile)',
      'Hero section with strong value proposition & call-to-action',
      'Services / Features highlight grid',
      'Testimonials & Social proof section',
      'Interactive project inquiry or lead capture form',
      'Basic On-Page SEO setup (Meta tags, Open Graph, Sitemap)',
      'Integration with Google Analytics / Meta Pixel (upon request)',
      'High performance Core Web Vitals optimization'
    ],
    clientResponsibilities: [
      'Providing brand logos, color guides, and raw copy or product info',
      'Providing domain name access or DNS settings',
      'Timely review and milestone feedback within 48 hours'
    ],
    exclusions: [
      'Domain registration and third-party hosting subscription fees',
      'Paid third-party font or premium plugin licenses',
      'Complex multi-step backend database workflows'
    ],
    hostingAndFees: 'Deployed on zero-cost free-tier Cloudflare Pages or Vercel Hobby where eligible.',
    maintenanceNote: 'Includes 14 days of complimentary post-launch bug fixing.'
  },
  {
    id: 'business-website',
    name: 'Full Business Website',
    category: 'Web Design',
    popular: true,
    tagline: 'A comprehensive multi-page corporate website designed to establish authority and drive inquiries.',
    pricePHP: 15000,
    priceUSD: 500,
    customQuote: false,
    deliveryTime: '10 – 14 business days',
    revisions: 'Up to 4 revision rounds',
    deliverables: [
      'Up to 5 custom-designed responsive pages (Home, About, Services, Portfolio/Gallery, Contact)',
      'Mobile-first responsive layout with accessible navigation',
      'Interactive contact/inquiry form with server-side validation',
      'Blog or News architecture setup for SEO expansion',
      'Speed optimization & Google Core Web Vitals compliance',
      'Structured data (Schema.org JSON-LD) for Philippine businesses',
      'XML Sitemap, robots.txt, and canonical URLs',
      'Social media integration & WhatsApp / Messenger chat trigger'
    ],
    clientResponsibilities: [
      'Providing company information, staff photos, and service descriptions',
      'Designating a single primary point of contact for approvals',
      'Reviewing drafts and submitting consolidated feedback'
    ],
    exclusions: [
      'Custom complex e-commerce payment gateway integration (available as add-on)',
      'Ongoing weekly copywriting services',
      'Third-party domain fees'
    ],
    hostingAndFees: 'Free tier static hosting compatible; serverless backend deployed without recurring hosting charges.',
    maintenanceNote: 'Includes 30 days of complimentary technical support and guidance.'
  },
  {
    id: 'ai-automation',
    name: 'Automation Starter',
    category: 'AI & Automation',
    popular: false,
    tagline: 'Automate repetitive customer inquiries, lead routing, and business notifications.',
    pricePHP: 12000,
    priceUSD: 350,
    customQuote: false,
    deliveryTime: '7 – 10 business days',
    revisions: 'Up to 3 workflow revision cycles',
    deliverables: [
      'Up to 3 automated business workflows (e.g., Lead capture to Google Sheets + Telegram/Discord alert)',
      'Smart customer inquiry auto-responder or AI chatbot integration',
      'CRM or spreadsheet lead synchronization',
      'Email / SMS alert triggers for high-priority opportunities',
      'Self-hosted or cloud automation setup (n8n / Activepieces / Webhooks)',
      'Standard operating procedure (SOP) video walkthrough & documentation'
    ],
    clientResponsibilities: [
      'Providing account access or API keys for services being connected',
      'Defining exact trigger rules and decision tree for inquiries',
      'Testing mock inquiries during staging validation'
    ],
    exclusions: [
      'Third-party AI API usage costs (e.g., OpenAI or Anthropic token usage)',
      'Paid SMS gateway credits (e.g., Semaphore or Twilio)',
      'Custom proprietary machine learning model training'
    ],
    hostingAndFees: 'Transparent disclosure: client pays direct API providers at cost with zero markup.',
    maintenanceNote: 'Includes 30 days of workflow monitoring and error adjustments.'
  },
  {
    id: 'creative-ads',
    name: 'Video & Graphic Ads Package',
    category: 'Creative Media',
    popular: false,
    tagline: 'High-impact social media creatives, promotional reels, and brand assets for modern campaigns.',
    pricePHP: 4000,
    priceUSD: 100,
    customQuote: false,
    deliveryTime: '3 – 5 business days',
    revisions: 'Up to 2 revision rounds per asset',
    deliverables: [
      '2 Short-form promotional reels / video ads (9:16 vertical for TikTok, IG Reels, FB Reels)',
      '3 High-resolution social media banner / feed graphics (1:1 and 4:5)',
      'Engaging typography overlays and motion graphics',
      'Royalty-free audio track synchronization',
      'Exported in optimized formats ready for direct ad campaign publishing'
    ],
    clientResponsibilities: [
      'Providing raw product footage, photos, logos, and promotional offers',
      'Specifying brand tone and any forbidden imagery or claims',
      'Signing off on storyboard / outline concept before rendering'
    ],
    exclusions: [
      'On-site physical videography or studio product shoot',
      'Paid advertising budget / ad spend to Meta or TikTok',
      'Voiceover artist talent fees (AI voiceover available free)'
    ],
    hostingAndFees: 'Zero recurring fees. High-res source files delivered via secure cloud link.',
    maintenanceNote: 'Delivery-complete service; minor text corrections accommodated within 7 days.'
  },
  {
    id: 'blockchain-engineering',
    name: 'Blockchain & Web3 Engineering',
    category: 'Blockchain',
    popular: false,
    tagline: 'Secure smart contract development, EVM integrations, and custom decentralized applications.',
    pricePHP: null,
    priceUSD: null,
    customQuote: true,
    deliveryTime: 'Scoped per technical specification',
    revisions: 'Milestone-based test cycles',
    deliverables: [
      'Custom EVM Smart Contracts (ERC-20, ERC-721, Staking, Escrow, or Custom Logic)',
      'Comprehensive Foundry / Hardhat automated test suites with high branch coverage',
      'Web3 frontend dApp integration (Wagmi / Viem / ethers.js)',
      'Wallet connectivity (MetaMask, WalletConnect, Coinbase Wallet)',
      'Testnet deployment and verification on block explorers',
      'Detailed technical documentation, deployment scripts, and architecture security overview'
    ],
    clientResponsibilities: [
      'Providing precise tokenomics, authorization rules, and business requirements',
      'Funding testnet and mainnet gas fees for deployment',
      'Designating technical reviewer for security specification signoff'
    ],
    exclusions: [
      'External third-party formal audit fees (independent audits recommended before mainnet)',
      'Mainnet blockchain gas fees',
      'Legal and regulatory compliance certifications'
    ],
    hostingAndFees: 'Custom quotation based on system complexity, security boundaries, and audit scope.',
    maintenanceNote: 'Comprehensive testnet staging with formal transition documentation.'
  }
];
