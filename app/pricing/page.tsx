import React from 'react';
import { Metadata } from 'next';
import { PricingGrid } from '@/components/PricingGrid';
import { CostCalculator } from '@/components/CostCalculator';
import { PhilippineSunEmblem } from '@/components/PhilippineSunEmblem';
import { ShieldCheck, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Transparent Pricing & Packages | Aenswer.ph',
  description:
    'Honest, milestone-based digital agency pricing for Philippine and international businesses. Websites from ₱7,500 ($250 USD). Zero hidden fees.',
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingPage() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 transition-colors">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-navy-900 border border-gold/40 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-gold shadow-xs mb-4">
          <PhilippineSunEmblem size={16} />
          <span>Radical Price Transparency</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
          Clear Packages. <span className="text-gradient-gold">Zero Hidden Surprises.</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-mutedgray mt-4 leading-relaxed">
          We believe high-caliber digital engineering should be accessible to local Philippine entrepreneurs and fairly priced for international innovators. Toggle between Philippine Peso (PHP) and US Dollar (USD) below.
        </p>
      </div>

      {/* Main Pricing Grid */}
      <PricingGrid showAllDetails={true} />

      {/* Interactive Project Cost Calculator */}
      <div className="pt-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
            Need a Quick Customized Estimate?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-mutedgray mt-2">
            Use our interactive estimator to calculate pricing with your desired add-ons and delivery speed before booking a consultation.
          </p>
        </div>
        <CostCalculator />
      </div>

      {/* FAQ Link Section */}
      <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-center max-w-3xl mx-auto shadow-sm dark:shadow-xl">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Have Questions About Our Billing?</h3>
        <p className="text-xs text-slate-600 dark:text-mutedgray mb-5">
          Read our frequently asked questions regarding payment milestones (50/50), GCash/Bank transfers, hosting costs, and code handover.
        </p>
        <Link
          href="/#faqs"
          className="text-xs font-bold text-techblue dark:text-gold hover:underline underline-offset-4"
        >
          View All Billing FAQs &rarr;
        </Link>
      </div>
    </div>
  );
}
