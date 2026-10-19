'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { pricingPackages } from '@/data/pricing';
import { Currency } from '@/lib/types';
import { Check, Info, Sparkles, ArrowRight, ShieldCheck, Clock, RefreshCw } from 'lucide-react';

interface PricingGridProps {
  showAllDetails?: boolean;
}

export const PricingGrid: React.FC<PricingGridProps> = ({ showAllDetails = true }) => {
  const [currency, setCurrency] = useState<Currency>('PHP');

  return (
    <div className="w-full">
      {/* Currency Switcher Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-gold/20 mb-10 max-w-2xl mx-auto shadow-md dark:shadow-xl transition-colors">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light">
            Select Billing Region:
          </span>
        </div>
        <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-700">
          <button
            type="button"
            onClick={() => setCurrency('PHP')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              currency === 'PHP'
                ? 'bg-gradient-to-r from-gold to-gold-400 text-navy-950 shadow-md'
                : 'text-slate-600 dark:text-mutedgray hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            🇵🇭 Philippines (PHP ₱)
          </button>
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              currency === 'USD'
                ? 'bg-gradient-to-r from-techblue to-techblue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-mutedgray hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            🌐 International (USD $)
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPackages.map((pkg) => {
          const formattedPrice = pkg.customQuote
            ? 'Custom Quote'
            : currency === 'PHP'
            ? `₱${pkg.pricePHP?.toLocaleString()}`
            : `$${pkg.priceUSD?.toLocaleString()}`;

          return (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-amber-50/50 to-white dark:from-navy-800 dark:to-navy-900 border-2 border-gold shadow-xl shadow-gold/10'
                  : 'bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-navy-700/80 hover:border-gold/40 hover:bg-slate-50 dark:hover:bg-navy-900 shadow-sm'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gold text-navy-950 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Popular for SMEs
                </div>
              )}

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-techblue dark:text-techblue-300">
                    {pkg.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{pkg.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-mutedgray mt-1.5 leading-relaxed min-h-[36px]">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-slate-200 dark:border-navy-800 my-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {formattedPrice}
                    </span>
                    {!pkg.customQuote && (
                      <span className="text-xs text-slate-500 dark:text-mutedgray">
                        {currency === 'PHP' ? 'one-time investment' : 'one-time'}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-[11px] text-slate-600 dark:text-mutedgray-light">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-600 dark:text-gold" />
                      <span>{pkg.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <RefreshCw className="w-3.5 h-3.5 text-techblue" />
                      <span>{pkg.revisions}</span>
                    </div>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="mt-4 flex-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-techblue dark:text-gold mb-3">
                    What You Get:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-mutedgray-light">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-techblue dark:text-gold shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {showAllDetails && (
                    <>
                      {/* Hosting & Fees Disclosures */}
                      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-navy-800">
                        <div className="flex items-start gap-2 p-2 rounded-lg bg-slate-100 dark:bg-navy-950/70 border border-slate-200 dark:border-navy-800 text-[11px] text-slate-600 dark:text-mutedgray">
                          <Info className="w-3.5 h-3.5 text-techblue shrink-0 mt-0.5" />
                          <span>{pkg.hostingAndFees}</span>
                        </div>
                      </div>

                      {/* Exclusions */}
                      <div className="mt-3 text-[11px] text-slate-500 dark:text-mutedgray">
                        <span className="font-semibold text-slate-700 dark:text-mutedgray-light">Note:</span>{' '}
                        {pkg.exclusions[0]}
                      </div>
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-navy-800">
                  <Link
                    href={`/contact?package=${encodeURIComponent(pkg.name)}&currency=${currency}`}
                    className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                      pkg.popular
                        ? 'bg-gold hover:bg-gold-400 text-navy-950 shadow-md hover:shadow-gold/20'
                        : 'bg-techblue hover:bg-techblue-600 text-white shadow-sm'
                    }`}
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Transparent Pricing Guarantees */}
      <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-navy-900/40 border border-slate-200 dark:border-navy-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 dark:text-mutedgray shadow-sm">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-gold-600 dark:text-gold shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white mb-1">Zero Hidden Markups</div>
            <div>We never bill secret maintenance fees or markup third-party APIs. You pay direct provider prices at cost.</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-techblue shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white mb-1">100% Client Code Ownership</div>
            <div>Full source code, DNS records, and intellectual property handed over upon milestone sign-off.</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white mb-1">Local & Global Invoicing</div>
            <div>Philippine businesses can pay via GCash, Maya, or bank transfer (BDO/BPI/UnionBank). International clients invoice in USD.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
