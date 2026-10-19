import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhilippineSunEmblem } from '@/components/PhilippineSunEmblem';
import { PricingGrid } from '@/components/PricingGrid';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { CostCalculator } from '@/components/CostCalculator';
import { FAQAccordion } from '@/components/FAQAccordion';
import { servicesData } from '@/data/services';
import {
  Code,
  Bot,
  Video,
  ShieldCheck,
  TrendingUp,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Rocket,
  Headphones,
  Users,
  Lock,
  Globe2,
  Zap,
} from 'lucide-react';

export default function HomePage() {
  const capabilityIcons: Record<string, any> = {
    Code,
    Bot,
    TrendingUp,
    Video,
    ShieldCheck,
    Layers,
  };

  const steps = [
    {
      num: '01',
      title: 'Submit Requirements',
      desc: 'Tell us about your business goals, target audience, and required digital capabilities.',
    },
    {
      num: '02',
      title: 'Quotation & Proposal',
      desc: 'Receive a transparent scope of work, timeline, and exact milestone pricing with zero hidden fees.',
    },
    {
      num: '03',
      title: 'Approve Milestones',
      desc: 'Lock in deliverables and activate development with standard initial deposit terms.',
    },
    {
      num: '04',
      title: 'Collaborative Build',
      desc: 'Real-time staging previews and iterative feedback throughout the development sprint.',
    },
    {
      num: '05',
      title: 'Review & Launch',
      desc: 'Final quality assurance, performance testing, security verification, and global domain launch.',
    },
    {
      num: '06',
      title: 'Code Handover & Support',
      desc: 'Receive 100% full source code ownership, documentation, and complimentary post-launch support.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Sub-Second Speeds',
      desc: 'Modern Next.js and static edge architecture optimized specifically for Philippine mobile connections.',
    },
    {
      icon: Lock,
      title: '100% Code Ownership',
      desc: 'Zero proprietary lock-in. Full intellectual property, repository, and DNS control belong to your business.',
    },
    {
      icon: PhilippineSunEmblem,
      title: 'Filipino-Friendly Pricing',
      desc: 'Accessible Philippine Peso (PHP) tiers for local SMEs and transparent USD invoicing for international clients.',
    },
    {
      icon: Bot,
      title: 'Practical AI & Automation',
      desc: 'Real business utility that cuts manual work by dozens of hours, not speculative gimmicks.',
    },
    {
      icon: ShieldCheck,
      title: 'Security-First Architecture',
      desc: 'Form validation, rate limiting, audited smart contract standards, and privacy-conscious data practices.',
    },
    {
      icon: Globe2,
      title: 'Global Delivery Standards',
      desc: 'Clean codebases, typed TypeScript architectures, and automated testing suitable for global tech markets.',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* ========================================================
          HERO SECTION
      ======================================================== */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 ph-pattern-bg">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-techblue/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold/30 text-xs font-bold text-gold tracking-wide shadow-lg mx-auto lg:mx-0">
                <PhilippineSunEmblem size={18} className="animate-spin-slow" />
                <span className="uppercase tracking-wider">Digital Solutions for Modern Businesses</span>
              </div>

              {/* Tagline Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Your Digital Partner.{' '}
                <span className="text-gradient-gold block sm:inline">Your Answer.</span>
              </h1>

              {/* Tagalog Hook from Brand Artwork */}
              <p className="text-lg sm:text-xl font-bold text-techblue-300 italic">
                “May Problema sa Digital? May Aenswer.”
              </p>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base text-mutedgray leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From high-performance business websites and intelligent automation to creative video advertising and blockchain engineering, Aenswer helps businesses build, innovate, and grow in the modern digital world.
              </p>

              {/* Trust Badges Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-mutedgray-light">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span>Reliable</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-techblue" />
                  <span>Innovative</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span>Filipino-Focused</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Global Ready</span>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-gold via-gold-400 to-gold hover:shadow-xl hover:shadow-gold/25 hover:scale-105 active:scale-95 transition-all duration-200 border border-gold-300"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 border border-navy-700 hover:border-gold/40 transition-all duration-200"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Column (Official Banner Artwork & Interactive Floating Cards) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold/30 shadow-2xl bg-navy-900 group">
                {/* Official Cover Image */}
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/assets/aenswer-banner.png"
                    alt="Aenswer.ph official brand banner - Mayon skyline with Philippine Sun motif and digital capabilities"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30"></div>
                </div>

                {/* Floating Metric Card 1 */}
                <div className="p-4 bg-navy-950/90 backdrop-blur-md border-t border-navy-800">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="font-bold text-white">Accepting Q4 Projects</span>
                    </div>
                    <span className="text-[11px] text-gold font-mono">PHP & USD Invoicing</span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Feature Pill */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 p-4 rounded-2xl bg-navy-900/95 border border-gold/40 shadow-2xl backdrop-blur-xl">
                <div className="p-2.5 rounded-xl bg-gold/15 text-gold">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Next.js Edge Architecture</div>
                  <div className="text-[11px] text-mutedgray">Sub-second load times on mobile 4G</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CORE CAPABILITIES SECTION (Section 3)
      ======================================================== */}
      <section className="py-20 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Four Core Pillars of Digital Excellence
            </h2>
            <p className="text-sm text-mutedgray mt-3">
              Comprehensive capabilities designed to take your business from manual operations to modern market leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Web Design & Development',
                desc: 'Fast, responsive corporate websites, high-converting landing pages, and web applications built with Next.js.',
                href: '/web-design-philippines',
                icon: Code,
                badge: 'Mobile-First',
              },
              {
                title: 'AI Automation & Solutions',
                desc: '24/7 intelligent customer triage, automated lead workflows, CRM syncing, and self-hosted n8n pipelines.',
                href: '/ai-automation',
                icon: Bot,
                badge: 'Save 20+ hrs/wk',
              },
              {
                title: 'Creative Media & Video Ads',
                desc: 'Scroll-stopping short-form video ads (TikTok/Reels), motion graphics, and premium digital brand assets.',
                href: '/video-graphic-design',
                icon: Video,
                badge: 'High-Retention',
              },
              {
                title: 'Blockchain & Web3 Engineering',
                desc: 'Audited Solidity smart contracts, EVM integrations, and Web3 frontends with verified testing pipelines.',
                href: '/blockchain-development',
                icon: ShieldCheck,
                badge: 'EVM Rigor',
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.title}
                  href={pillar.href}
                  className="flex flex-col justify-between p-7 rounded-2xl bg-navy-900/60 border border-navy-800 hover:border-gold/40 hover:bg-navy-900 transition-all duration-300 group shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-navy-800 text-gold group-hover:bg-gold group-hover:text-navy-950 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-techblue-300 px-2 py-0.5 rounded bg-navy-800/80 border border-navy-700">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-mutedgray mt-2 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-navy-800 flex items-center text-xs font-semibold text-gold gap-1">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICES CATALOG WITH DELIVERABLES (Section 4)
      ======================================================== */}
      <section className="py-24 bg-navy-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                Engineered Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                Tailored Services for Every Business Need
              </h2>
              <p className="text-sm text-mutedgray mt-2 max-w-xl">
                Every solution comes with clear deliverables, transparent starting rates, and guaranteed client code ownership.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-white transition-colors"
            >
              <span>View Full Service Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const Icon = capabilityIcons[service.icon] || Code;
              const formattedPrice = service.startingPrice.custom
                ? 'Custom Quote'
                : `From ₱${service.startingPrice.PHP.toLocaleString()} / $${service.startingPrice.USD}`;

              return (
                <div
                  key={service.id}
                  className="flex flex-col justify-between p-7 rounded-2xl bg-navy-900 border border-navy-800 hover:border-gold/30 transition-all duration-300 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 text-gold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-gold bg-navy-950 px-2.5 py-1 rounded-md border border-gold/20">
                        {formattedPrice}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-xs text-mutedgray leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-mutedgray-light">
                        Key Deliverables:
                      </div>
                      <ul className="space-y-1.5 text-xs text-mutedgray">
                        {service.deliverables.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-techblue shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
                    <Link
                      href={`/${service.slug}`}
                      className="text-xs font-semibold text-white hover:text-gold transition-colors"
                    >
                      Details & Tech Stack &rarr;
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="text-xs font-bold text-gold hover:text-white"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          PORTFOLIO SECTION (Section 5)
      ======================================================== */}
      <section className="py-24 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              Proven Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Featured Work & Case Studies
            </h2>
            <p className="text-sm text-mutedgray mt-3">
              Explore our production implementations and technical architecture demonstrations. All projects are honestly labeled.
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* ========================================================
          INTERACTIVE COST CALCULATOR (Value-add Conversion)
      ======================================================== */}
      <section className="py-20 bg-navy-900/50 border-y border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostCalculator />
        </div>
      </section>

      {/* ========================================================
          FILIPINO-FRIENDLY PRICING (Section 6 & 7)
      ======================================================== */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              Transparent Investment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Premium Digital Services. Accessible Pricing.
            </h2>
            <p className="text-sm text-mutedgray mt-3">
              Locally tailored rates for Philippine SMEs and independent businesses, with separate USD invoicing for our global partners.
            </p>
          </div>

          <PricingGrid />
        </div>
      </section>

      {/* ========================================================
          HOW IT WORKS (Section 7)
      ======================================================== */}
      <section className="py-24 bg-navy-900/30 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              How We Work Together
            </h2>
            <p className="text-sm text-mutedgray mt-3">
              A transparent, 6-step collaborative journey from project brief to live deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-7 rounded-2xl bg-navy-900 border border-navy-800 hover:border-gold/30 transition-all duration-300 relative group"
              >
                <div className="text-3xl font-black text-gold/30 font-mono mb-2 group-hover:text-gold transition-colors">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-mutedgray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY CHOOSE AENSWER? (Section 8)
      ======================================================== */}
      <section className="py-24 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              The Aenswer Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Why Forward-Thinking Businesses Choose Aenswer
            </h2>
            <p className="text-sm text-mutedgray mt-3">
              No bloated retainers, no withheld passwords, no generic templates. Just reliable engineering and transparent communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-navy-900/60 border border-navy-800 hover:border-gold/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center text-gold mb-5">
                    <Icon size={24} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-mutedgray leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          FREQUENTLY ASKED QUESTIONS (Section 9)
      ======================================================== */}
      <section className="py-24 bg-navy-900/40 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              Answers & Clarity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-mutedgray mt-3">
              Clear answers to common questions about our services, pricing, technology, and project workflows.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* ========================================================
          FINAL CALL TO ACTION (Section 10)
      ======================================================== */}
      <section className="py-24 bg-gradient-to-b from-navy-900 to-navy-950 border-t border-gold/25 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-ph-sunburst pointer-events-none opacity-40"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Ready to Elevate Your Digital Presence?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Let’s Build Something Better.
          </h2>

          <p className="text-base sm:text-lg text-mutedgray max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us what your business needs. We will help you identify a practical, affordable digital solution tailored to your goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl text-base font-bold text-navy-950 bg-gradient-to-r from-gold via-gold-400 to-gold hover:shadow-2xl hover:shadow-gold/30 hover:scale-105 active:scale-95 transition-all duration-200 border border-gold-300"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-navy-900 hover:bg-navy-800 border border-navy-700 hover:border-gold/40 transition-all duration-200"
            >
              <span>View Packages & Pricing</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
