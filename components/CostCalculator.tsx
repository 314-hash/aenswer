'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Currency } from '@/lib/types';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';

export const CostCalculator: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>('PHP');
  const [projectType, setProjectType] = useState<'landing' | 'website' | 'automation' | 'video' | 'blockchain'>('website');
  const [speedOption, setSpeedOption] = useState<'standard' | 'express'>('standard');
  const [includeSEO, setIncludeSEO] = useState<boolean>(true);
  const [includeChatbot, setIncludeChatbot] = useState<boolean>(false);
  const [includeAnalytics, setIncludeAnalytics] = useState<boolean>(true);

  // Base pricing logic
  const basePrices: Record<string, { PHP: number; USD: number; days: string }> = {
    landing: { PHP: 7500, USD: 250, days: '5 – 7 days' },
    website: { PHP: 15000, USD: 500, days: '10 – 14 days' },
    automation: { PHP: 12000, USD: 350, days: '7 – 10 days' },
    video: { PHP: 4000, USD: 100, days: '3 – 5 days' },
    blockchain: { PHP: 35000, USD: 1200, days: '14 – 21 days' },
  };

  const selectedBase = basePrices[projectType];
  let totalPHP = selectedBase.PHP;
  let totalUSD = selectedBase.USD;

  if (includeSEO) {
    totalPHP += 2500;
    totalUSD += 75;
  }
  if (includeChatbot) {
    totalPHP += 5000;
    totalUSD += 150;
  }
  if (includeAnalytics) {
    totalPHP += 1500;
    totalUSD += 45;
  }
  if (speedOption === 'express') {
    totalPHP = Math.round(totalPHP * 1.3);
    totalUSD = Math.round(totalUSD * 1.3);
  }

  const formattedEstimate = currency === 'PHP'
    ? `₱${totalPHP.toLocaleString()}`
    : `$${totalUSD.toLocaleString()}`;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-gold/30 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-techblue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-navy-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-techblue dark:text-gold">
            <Calculator className="w-4 h-4" />
            <span>Interactive Project Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Calculate Your Estimated Investment
          </h3>
        </div>

        {/* Currency Toggle */}
        <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 shrink-0">
          <button
            type="button"
            onClick={() => setCurrency('PHP')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              currency === 'PHP'
                ? 'bg-gold text-navy-950 font-black shadow-xs'
                : 'text-slate-600 dark:text-mutedgray hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            ₱ PHP
          </button>
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              currency === 'USD'
                ? 'bg-techblue text-white font-black shadow-xs'
                : 'text-slate-600 dark:text-mutedgray hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            $ USD
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Options */}
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-2.5">
              1. Select Project Type
            </label>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'website', label: 'Full Business Website (Up to 5 Pages)', badge: 'Most Popular' },
                { id: 'landing', label: 'High-Converting Single Landing Page', badge: 'Fast Launch' },
                { id: 'automation', label: 'AI Workflow & Customer Auto-Responder', badge: '24/7 Leads' },
                { id: 'video', label: 'Video Ads & Social Media Graphics', badge: 'Short-Form' },
                { id: 'blockchain', label: 'Blockchain Smart Contract / Web3 dApp', badge: 'EVM Ready' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id as any)}
                  className={`flex items-center justify-between p-3 rounded-xl text-xs font-medium text-left transition-all border ${
                    projectType === item.id
                      ? 'bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border-techblue dark:border-gold shadow-xs font-bold'
                      : 'bg-slate-50 dark:bg-navy-950/60 text-slate-600 dark:text-mutedgray hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-navy-800'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    projectType === item.id
                      ? 'bg-gold text-navy-950'
                      : 'bg-slate-200 dark:bg-navy-800 text-slate-700 dark:text-mutedgray'
                  }`}>
                    {item.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-2.5">
              2. Optional Add-ons
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200 dark:border-navy-800 text-xs cursor-pointer hover:border-slate-300 dark:hover:border-navy-700 transition-colors">
                <span className="text-slate-900 dark:text-white font-medium">Structured Schema & On-Page SEO (+₱2,500 / $75)</span>
                <input
                  type="checkbox"
                  checked={includeSEO}
                  onChange={(e) => setIncludeSEO(e.target.checked)}
                  className="rounded text-gold focus:ring-gold bg-white dark:bg-navy-900 border-slate-300 dark:border-navy-700"
                />
              </label>
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200 dark:border-navy-800 text-xs cursor-pointer hover:border-slate-300 dark:hover:border-navy-700 transition-colors">
                <span className="text-slate-900 dark:text-white font-medium">AI Lead Inquiry Chatbot Integration (+₱5,000 / $150)</span>
                <input
                  type="checkbox"
                  checked={includeChatbot}
                  onChange={(e) => setIncludeChatbot(e.target.checked)}
                  className="rounded text-gold focus:ring-gold bg-white dark:bg-navy-900 border-slate-300 dark:border-navy-700"
                />
              </label>
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200 dark:border-navy-800 text-xs cursor-pointer hover:border-slate-300 dark:hover:border-navy-700 transition-colors">
                <span className="text-slate-900 dark:text-white font-medium">GA4 & Meta Conversion Tracking (+₱1,500 / $45)</span>
                <input
                  type="checkbox"
                  checked={includeAnalytics}
                  onChange={(e) => setIncludeAnalytics(e.target.checked)}
                  className="rounded text-gold focus:ring-gold bg-white dark:bg-navy-900 border-slate-300 dark:border-navy-700"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Instant Calculation & Output */}
        <div className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-50 dark:from-navy-950 dark:to-navy-900 border border-slate-200 dark:border-gold/20 shadow-xs">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-techblue dark:text-techblue-300">
              Estimated Project Total
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
                {formattedEstimate}
              </span>
              <span className="text-xs text-slate-500 dark:text-mutedgray">est. total</span>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-navy-800 space-y-1.5 text-xs text-slate-700 dark:text-mutedgray-light shadow-xs">
              <div className="flex justify-between">
                <span>Estimated Turnaround:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedBase.days}</span>
              </div>
              <div className="flex justify-between">
                <span>Code Ownership:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">100% Client Owned</span>
              </div>
              <div className="flex justify-between">
                <span>Revisions Included:</span>
                <span className="font-bold text-slate-900 dark:text-white">Up to 3 - 4 rounds</span>
              </div>
              <div className="flex justify-between">
                <span>Post-launch Support:</span>
                <span className="font-bold text-amber-600 dark:text-gold">14 – 30 Days Free</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-mutedgray mt-4 leading-relaxed">
              *Estimates are calculated based on standard scope requirements. You will receive an exact formal quotation with milestone guarantees upon submitting your project brief.
            </p>
          </div>

          <div className="mt-6">
            <Link
              href={`/contact?service=${projectType}&estimate=${encodeURIComponent(formattedEstimate)}`}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-gold via-gold-400 to-gold hover:shadow-lg hover:shadow-gold/20 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Lock In This Estimate & Start</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
