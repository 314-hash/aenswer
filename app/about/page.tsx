import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhilippineSunEmblem } from '@/components/PhilippineSunEmblem';
import { BrandLogo } from '@/components/BrandLogo';
import {
  ShieldCheck,
  Zap,
  Globe2,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Code2,
  Lock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Aenswer Digital Solutions | Filipino Creativity, Global Solutions',
  description:
    'Learn about Aenswer Digital Solutions, our Filipino engineering roots, transparent working principles, and our journey from a digital agency to a future digital services marketplace.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'Radical Transparency',
      desc: 'No hidden markup on third-party APIs or hosting. What we quote in milestones is exactly what you invest.',
    },
    {
      title: 'Full Code Ownership',
      desc: 'Upon final settlement, 100% of the repository, assets, and DNS keys belong to you. We never hold your business hostage.',
    },
    {
      title: 'Filipino Ingenuity (Diskarte + Rigor)',
      desc: 'We combine warm Filipino hospitality and creative resourcefulness with world-class engineering standards.',
    },
    {
      title: 'Practical Business Outcomes',
      desc: 'We do not build technology for the sake of buzzwords. If a simple static website or webhook workflow solves your problem, that is what we build.',
    },
  ];

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 transition-colors">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-navy-900 border border-gold/40 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-gold shadow-xs">
            <PhilippineSunEmblem size={16} />
            <span>Company Story & Mission</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
            Your Digital Partner.{' '}
            <span className="text-gradient-gold block">Your Answer.</span>
          </h1>

          <p className="text-lg font-bold text-techblue dark:text-techblue-300">
            Filipino Creativity. Global Solutions.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-mutedgray leading-relaxed">
            Aenswer.ph (Aenswer Digital Solutions) was founded in the Philippines to solve a pervasive problem: local businesses and entrepreneurs were forced to choose between slow, bloated freelance templates or overpriced corporate agency retainers.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-mutedgray leading-relaxed">
            We provide a modern answer: lean, high-performance web engineering, intelligent AI automations, scroll-stopping creative video advertising, and rigorous blockchain development delivered with complete transparency.
          </p>
        </div>

        {/* Right Visual Card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl bg-white dark:bg-navy-900 p-8 space-y-6">
            <BrandLogo size="lg" />

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-techblue dark:text-gold font-bold">
                Brand Core
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">Aenswer Digital Solutions</h3>
              <p className="text-xs text-slate-600 dark:text-mutedgray-light mt-2 leading-relaxed">
                “Aenswer” embodies the role of a dependable, competent technological partner that helps forward-thinking businesses find clear answers to their digital hurdles.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-navy-800 space-y-2 text-xs text-slate-600 dark:text-mutedgray">
              <div className="flex justify-between">
                <span>Headquarters:</span>
                <span className="font-semibold text-slate-900 dark:text-white">Philippines (Remote Operations)</span>
              </div>
              <div className="flex justify-between">
                <span>Serving:</span>
                <span className="font-semibold text-slate-900 dark:text-white">Philippine SMEs & Global Clients</span>
              </div>
              <div className="flex justify-between">
                <span>Core Stack:</span>
                <span className="font-mono text-techblue dark:text-gold font-bold">Next.js / TS / n8n / Solidity</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Values */}
      <div className="pt-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-techblue dark:text-gold">Our Code of Conduct</span>
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white mt-2">Principles That Guide Every Sprint</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-navy-800 hover:border-gold/40 transition-all shadow-sm hover:shadow-xl dark:shadow-xl"
            >
              <div className="text-xs font-mono font-bold text-techblue dark:text-gold mb-2">Principle 0{i + 1}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{v.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-mutedgray leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Marketplace Evolution Roadmap (Section 17 of Prompt) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-100 to-white dark:from-navy-900 dark:to-navy-950 border border-slate-200 dark:border-techblue/30 shadow-xl dark:shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-techblue/10 dark:bg-techblue/20 text-techblue dark:text-techblue-300 border border-techblue/30 text-xs font-bold uppercase tracking-wider">
            <Target className="w-4 h-4" />
            <span>Long-Term Horizon</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
            From Digital Agency to Verified Digital Services Marketplace
          </h2>

          <p className="text-sm text-slate-600 dark:text-mutedgray leading-relaxed">
            While Aenswer operates today as a dedicated project agency delivering websites, AI workflows, and smart contracts, our architecture is prepared for a larger vision: a decentralized digital services marketplace connecting Philippine businesses with verified digital service providers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 shadow-xs">
              <div className="font-bold text-amber-600 dark:text-gold mb-1">Phase 1: Agency Foundation</div>
              <div className="text-slate-600 dark:text-mutedgray">Direct client delivery, audited code standards, and proven customer workflows.</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 shadow-xs">
              <div className="font-bold text-techblue dark:text-techblue-300 mb-1">Phase 2: Provider Network</div>
              <div className="text-slate-600 dark:text-mutedgray">Onboarding verified Filipino developers, designers, and AI automation specialists.</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 shadow-xs">
              <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">Phase 3: Milestone Escrow</div>
              <div className="text-slate-600 dark:text-mutedgray">Safe milestone settlements protecting both client investment and provider labor.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to build */}
      <div className="text-center pt-8">
        <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">Want to Collaborate on Your Next Build?</h3>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-navy-950 bg-gold hover:bg-gold-400 transition-colors shadow-lg"
        >
          <span>Connect with Our Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
