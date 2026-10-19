import { ServiceItem } from '@/lib/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-design-philippines',
    slug: 'web-design-philippines',
    title: 'Website Design & Development in the Philippines',
    subtitle: 'Lightning-fast, mobile-first business websites built to generate real inquiries.',
    shortDesc: 'Custom corporate websites, landing pages, and web apps engineered with modern performance, Filipino aesthetics, and global standards.',
    fullDesc: 'We build high-performance, conversion-oriented websites for Philippine enterprises, SMEs, professionals, and international brands. Unlike bloated generic templates, every Aenswer website is custom-crafted with clean modern code, sub-second load times, mobile-first responsiveness, and structured SEO markup to ensure your business stands out on Google.',
    category: 'web',
    icon: 'Code',
    benefits: [
      'Sub-second initial load speeds that retain mobile users',
      'Engineered specifically for Philippine internet conditions and mobile networks',
      'Built-in conversion funnels designed to turn visitors into inquiries',
      'Full ownership: no hostage code or hidden vendor lock-in',
      'Technical SEO foundation ready for Google search indexation'
    ],
    deliverables: [
      'Custom UI/UX responsive design (Desktop, Tablet, Mobile)',
      'Next.js / Static Site Architecture for maximum speed & security',
      'Interactive project inquiry forms with spam protection',
      'Google Analytics 4 & Meta Pixel setup',
      'XML sitemap, robots.txt, Open Graph social share cards',
      'Deployment to global CDN (Cloudflare Pages or Vercel)'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Cloudflare', 'Vercel'],
    startingPrice: {
      PHP: 7500,
      USD: 250
    },
    deliveryTime: '5 – 14 business days',
    idealFor: [
      'Philippine SMEs looking for a credible online presence',
      'Startups launching a new product or digital service',
      'Professionals (doctors, lawyers, consultants, real estate)',
      'E-commerce brands needing fast promotional landing pages'
    ]
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI Automation & Business Solutions',
    subtitle: 'Eliminate repetitive manual tasks and respond to customer inquiries 24/7.',
    shortDesc: 'Intelligent AI chatbots, automated lead routing, CRM synchronization, and custom workflows using open-source & modern AI tools.',
    fullDesc: 'Save dozens of staff hours every week. We design and integrate intelligent business workflows that automate lead capture, customer triage, spreadsheet synchronization, invoice reminders, and notifications across Facebook Messenger, Telegram, Discord, and Email. We disclose all third-party API costs transparently and prioritize self-hosted, sustainable automation stacks.',
    category: 'ai',
    icon: 'Bot',
    benefits: [
      '24/7 automated inquiry response for zero missed leads',
      'Drastically reduce manual data entry and human error',
      'Direct synchronization between inquiries and your CRM/Google Sheets',
      'Self-hosted automation options (n8n / Activepieces) with no expensive per-run markups',
      'Transparent disclosure of token costs with zero hidden fees'
    ],
    deliverables: [
      'Custom AI inquiry auto-responder or conversational chatbot',
      'Multi-channel webhook integration (Email, Messenger, Discord, Telegram)',
      'Automated spreadsheet and database record creation',
      'Error alert mechanism and fail-safe notification triggers',
      'Step-by-step SOP documentation & video handover'
    ],
    technologies: ['n8n', 'Activepieces', 'OpenAI API', 'Claude API', 'Webhooks', 'PostgreSQL'],
    startingPrice: {
      PHP: 12000,
      USD: 350
    },
    deliveryTime: '7 – 10 business days',
    idealFor: [
      'Customer support teams overwhelmed by repetitive FAQs',
      'Real estate brokers and sales teams tracking dozens of daily inquiries',
      'Clinics and service businesses scheduling appointments',
      'Digital agencies automating client onboarding'
    ]
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Conversion Solutions',
    subtitle: 'Strategic campaigns and data-backed marketing funnels that turn clicks into revenue.',
    shortDesc: 'Search Engine Optimization (SEO), conversion rate optimization (CRO), analytics architecture, and performance tracking.',
    fullDesc: 'Traffic is meaningless without conversion. Aenswer provides data-driven digital marketing infrastructure: comprehensive on-page and technical SEO, high-converting copywriting, Google Analytics 4 tracking architecture, and user behavior analytics. We do not make false promises of overnight viral growth; we build durable, honest systems that compound over time.',
    category: 'marketing',
    icon: 'TrendingUp',
    benefits: [
      'Clean analytics tracking so you know your exact customer acquisition cost',
      'Optimized landing page funnels that maximize conversion from ad spend',
      'Structured technical SEO that helps rank for high-intent local search queries',
      'Transparent reporting with actionable business recommendations',
      'Ethical, white-hat practices with zero risky black-hat shortcuts'
    ],
    deliverables: [
      'Technical SEO Audit & On-page optimization implementation',
      'Google Tag Manager & GA4 custom conversion event tracking',
      'High-converting sales copy and value proposition refinement',
      'Speed and user-experience optimization for lower ad bounce rates',
      'Monthly actionable performance insights report'
    ],
    technologies: ['Google Analytics 4', 'Google Tag Manager', 'Search Console', 'Meta Pixel', 'Schema.org'],
    startingPrice: {
      PHP: 8000,
      USD: 280
    },
    deliveryTime: 'Ongoing / 7-day initial audit & setup',
    idealFor: [
      'Businesses spending on ads but experiencing low conversion rates',
      'Local companies wanting to capture organic Google search traffic',
      'Brands requiring professional analytics & tracking implementation'
    ]
  },
  {
    id: 'video-graphic-design',
    slug: 'video-graphic-design',
    title: 'Video Advertisements & Graphic Design',
    subtitle: 'Captivating short-form video ads, motion graphics, and premium digital brand assets.',
    shortDesc: 'TikTok/Reels vertical ads, product launch videos, social media ad creatives, and contemporary visual identities with Filipino creative flair.',
    fullDesc: 'Capture attention in the first 2 seconds. We produce high-retention video advertisements, TikTok & Instagram Reels, YouTube promotional assets, and polished social media feed graphics. Combining modern motion design, punchy typography, and Filipino cultural resonance, our creatives are engineered to stop the scroll and drive engagement.',
    category: 'creative',
    icon: 'Video',
    benefits: [
      'High-retention video formats optimized for TikTok, FB Reels, and IG Reels',
      'Modern motion graphics and kinetic typography that hold viewer attention',
      'Cohesive visual identity across all digital marketing channels',
      'Source files and clean exports delivered in ready-to-run dimensions',
      'Fast turnaround times to match dynamic social marketing schedules'
    ],
    deliverables: [
      'Vertical 9:16 short-form video advertisements with dynamic captions',
      'High-resolution promotional feed graphics (1:1, 4:5, 16:9)',
      'Motion graphic logo stings and brand presentation animations',
      'Licensed royalty-free soundtrack selection and sound design',
      'Exported high-bitrate MP4 and PNG/WebP assets'
    ],
    technologies: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Figma', 'Blender'],
    startingPrice: {
      PHP: 4000,
      USD: 100
    },
    deliveryTime: '3 – 5 business days',
    idealFor: [
      'E-commerce brands running Facebook, Instagram, or TikTok Ads',
      'Restaurants, cafes, and hospitality businesses showcasing menus',
      'Product creators launching a new offering'
    ]
  },
  {
    id: 'blockchain-development',
    slug: 'blockchain-development',
    title: 'Blockchain Engineering & Smart Contracts',
    subtitle: 'Secure, audited smart contracts and decentralized protocols on EVM chains.',
    shortDesc: 'Solidity smart contract engineering, Foundry test suites, token architectures, and cryptographic verification systems.',
    fullDesc: 'We engineer secure, production-tested smart contracts and blockchain backend systems. From ERC-20 utility tokens and ERC-721/1155 NFT collections to custom staking protocols, escrow systems, and oracle integrations, we build with rigorous testing standards using Foundry and Hardhat. We explicitly define security boundaries and emphasize security audits before mainnet deployments.',
    category: 'blockchain',
    icon: 'ShieldCheck',
    benefits: [
      'Rigorous automated unit, fuzz, and invariant testing via Foundry',
      'Adherence to audited OpenZeppelin standard libraries',
      'Gas-optimized contract architectures for minimal user transaction fees',
      'Reentrancy protection, access controls, and emergency pause mechanisms',
      'Transparent documentation of trust boundaries and contract privileges'
    ],
    deliverables: [
      'Production-tested Solidity smart contracts',
      'Foundry / Hardhat test suites with high branch coverage',
      'Deployment scripts and multi-sig administration setup',
      'Contract verification on block explorers (Etherscan, Blockscout)',
      'Security architecture report & threat model documentation'
    ],
    technologies: ['Solidity', 'Foundry', 'Hardhat', 'OpenZeppelin', 'EVM Chains', 'Viem'],
    startingPrice: {
      PHP: 0,
      USD: 0,
      custom: true
    },
    deliveryTime: 'Scoped per technical specification',
    idealFor: [
      'Web3 startups developing novel DeFi or DePIN protocols',
      'Gaming and community projects implementing token utilities',
      'Enterprises exploring blockchain-backed provenance or verification'
    ]
  },
  {
    id: 'web3-development',
    slug: 'web3-development',
    title: 'Web3 Applications & Decentralized Systems',
    subtitle: 'User-friendly decentralized applications (dApps) connecting wallets to blockchain networks.',
    shortDesc: 'Full-stack dApp frontend development, Web3 wallet integrations (MetaMask, WalletConnect), blockchain explorers, and indexers.',
    fullDesc: 'Decentralized technology is only as good as its user experience. We build responsive, intuitive Web3 frontends that make wallet connection, transaction signing, and token interactions seamless for mainstream users. Using modern libraries like Wagmi and Viem, we eliminate confusing errors, display transparent gas fee estimates, and implement real-time event indexing.',
    category: 'web3',
    icon: 'Layers',
    benefits: [
      'Frictionless wallet connectivity across MetaMask, Coinbase, Rainbow, and WalletConnect',
      'User-friendly error messages that explain failed transactions clearly',
      'Real-time on-chain state updates and event listeners',
      'Responsive, mobile-optimized dApp interfaces that work on mobile wallet browsers',
      'Decentralized hosting readiness (IPFS / Arweave / Cloudflare)'
    ],
    deliverables: [
      'Modern React / Next.js dApp frontend with dark mode & brand aesthetic',
      'Wagmi / Viem Web3 provider integration',
      'Interactive contract dashboards (token balances, staking, claims)',
      'Transaction preview modals with transparent fee calculations',
      'Subgraphs or custom RPC indexers for fast historical queries'
    ],
    technologies: ['Wagmi', 'Viem', 'Next.js', 'TypeScript', 'The Graph', 'Tailwind CSS'],
    startingPrice: {
      PHP: 0,
      USD: 0,
      custom: true
    },
    deliveryTime: 'Scoped per technical specification',
    idealFor: [
      'DeFi protocols needing a sleek, secure trading or staking portal',
      'NFT projects requiring minting portals and collection explorers',
      'DAOs and DePIN networks building public transparency dashboards'
    ]
  }
];
