import React from 'react';
import { Metadata } from 'next';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { PhilippineSunEmblem } from '@/components/PhilippineSunEmblem';
import { ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio & Verified Case Studies | Aenswer.ph',
  description:
    'Explore our verified production work and technical concept architectures across Web Design, AI Business Automation, Creative Media, and Blockchain Engineering.',
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-navy-900 border border-gold/40 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-gold shadow-xs mb-4">
          <PhilippineSunEmblem size={16} />
          <span>Our Digital Craft</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
          Portfolio & <span className="text-gradient-gold">Case Studies</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-mutedgray mt-4 leading-relaxed">
          We pride ourselves on transparent, honest engineering. Every project below details the real business challenge, the technical solution, the stack used, and truthful outcomes. Experimental architectures are clearly labeled as concept demonstrations.
        </p>

        {/* Ethical disclaimer badge */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-xs text-slate-600 dark:text-mutedgray shadow-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>No fabricated customer testimonials, vanity metrics, or fake reviews.</span>
        </div>
      </div>

      {/* Filterable Portfolio Grid */}
      <PortfolioGrid />
    </div>
  );
}
