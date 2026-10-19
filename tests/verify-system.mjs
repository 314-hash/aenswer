import { inquirySchema } from '../lib/schemas.ts';
import { pricingPackages } from '../data/pricing.ts';
import { servicesData } from '../data/services.ts';
import { blogPosts } from '../data/blog.ts';

console.log('--- RUNNING AENSWER.PH AUTOMATED INTEGRITY TESTS ---');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failed++;
  }
}

// 1. Pricing Verification Tests
console.log('\n--- 1. Testing Pricing Data ---');
const landingPkg = pricingPackages.find((p) => p.id === 'landing-page');
assert(landingPkg && landingPkg.pricePHP === 7500 && landingPkg.priceUSD === 250, 'Business Landing Page price is ₱7,500 / $250');

const websitePkg = pricingPackages.find((p) => p.id === 'business-website');
assert(websitePkg && websitePkg.pricePHP === 15000 && websitePkg.priceUSD === 500, 'Full Business Website price is ₱15,000 / $500');

const aiPkg = pricingPackages.find((p) => p.id === 'ai-automation');
assert(aiPkg && aiPkg.pricePHP === 12000 && aiPkg.priceUSD === 350, 'Automation Starter price is ₱12,000 / $350');

const videoPkg = pricingPackages.find((p) => p.id === 'creative-ads');
assert(videoPkg && videoPkg.pricePHP === 4000 && videoPkg.priceUSD === 100, 'Video & Graphic Ads Package price is ₱4,000 / $100');

const blockchainPkg = pricingPackages.find((p) => p.id === 'blockchain-engineering');
assert(blockchainPkg && blockchainPkg.customQuote === true, 'Blockchain Engineering is Custom Quotation');

// 2. Services Verification Tests
console.log('\n--- 2. Testing Required Services URLs ---');
const requiredSlugs = [
  'web-design-philippines',
  'ai-automation',
  'digital-marketing',
  'video-graphic-design',
  'blockchain-development',
  'web3-development',
];

requiredSlugs.forEach((slug) => {
  const found = servicesData.some((s) => s.slug === slug);
  assert(found, `Service URL slug /${slug} exists and is configured`);
});

// 3. Blog Posts Verification
console.log('\n--- 3. Testing Blog Posts ---');
assert(blogPosts.length >= 4, `At least 4 educational articles exist (Found ${blogPosts.length})`);
blogPosts.forEach((post) => {
  assert(post.slug && post.title && post.content.length > 0, `Post "${post.title}" has valid slug and content`);
});

// 4. Portfolio Projects Verification
import { portfolioProjects } from '../data/portfolio.ts';
console.log('\n--- 4. Testing Portfolio Projects ---');
assert(portfolioProjects.length >= 12, `At least 12 portfolio items exist (Found ${portfolioProjects.length})`);

const expectedUrls = [
  'https://www.exjanai.com/',
  'https://bandiq-dapp.vercel.app/',
  'https://pisochain.com/',
  'https://pinoy-shop-style.vercel.app/',
  'https://web-rescue-ai.vercel.app/',
  'https://warehouse-management-system-wms.vercel.app/',
  'https://admin-blond-seven-66.vercel.app/',
  'https://ai-control-center-three.vercel.app/',
  'https://pinoy-global.vercel.app/',
  'https://finved.vercel.app/',
  'https://pms-enterprise.vercel.app/',
  'https://titos-pizza.vercel.app/'
];

expectedUrls.forEach((url) => {
  const match = portfolioProjects.find((p) => p.demoUrl === url);
  assert(match, `Portfolio includes requested live URL: ${url}`);
  if (match) {
    assert(!!match.imageUrl, `Project ${match.title} has an image preview configured`);
  }
});

const ytProject = portfolioProjects.find((p) => p.videoEmbedUrl?.includes('gLW_HatyeWQ'));
assert(ytProject, 'YouTube Short (gLW_HatyeWQ) is configured in portfolio');

// 5. Zod Inquiry Schema Tests
console.log('\n--- 5. Testing Inquiry Schema Validation ---');

// Valid inquiry
const validPayload = {
  fullName: 'Juan dela Cruz',
  businessName: 'Manila Tech Innovations',
  email: 'juan@manilatech.ph',
  country: 'Philippines',
  contactMethod: 'WhatsApp',
  serviceRequested: 'Web Design & Development',
  budgetRange: '₱10,000 – ₱25,000 ($200 – $500)',
  desiredTimeline: 'Standard (2 – 4 Weeks)',
  projectDescription: 'We need a high-converting website for our local consulting business with SEO and fast mobile load times.',
  referenceUrl: 'https://example.com',
  privacyConsent: true,
  websiteUrl: '', // Honeypot empty
};
const validResult = inquirySchema.safeParse(validPayload);
assert(validResult.success, 'Valid inquiry payload passes validation');

// Spam honeypot filled
const spamPayload = { ...validPayload, websiteUrl: 'http://spambot.xyz' };
const spamResult = inquirySchema.safeParse(spamPayload);
assert(!spamResult.success, 'Spam honeypot detection catches automated bots');

// Missing consent
const noConsentPayload = { ...validPayload, privacyConsent: false };
const noConsentResult = inquirySchema.safeParse(noConsentPayload);
assert(!noConsentResult.success, 'Privacy policy consent is strictly required');

// Too short description
const shortDescPayload = { ...validPayload, projectDescription: 'Too short' };
const shortDescResult = inquirySchema.safeParse(shortDescPayload);
assert(!shortDescResult.success, 'Reject inquiries with insufficient project description');

console.log(`\nTEST RESULTS: ${passed} PASSED, ${failed} FAILED.`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL INTEGRITY AUDITS PASSED SUCCESSFULLY!\n');
}
