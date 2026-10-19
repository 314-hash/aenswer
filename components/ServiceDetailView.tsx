import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/lib/types';
import { PhilippineSunEmblem } from './PhilippineSunEmblem';
import {
  Code,
  Bot,
  Video,
  ShieldCheck,
  TrendingUp,
  Layers,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface ServiceDetailViewProps {
  service: ServiceItem;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ service }) => {
  const iconMap: Record<string, any> = {
    Code,
    Bot,
    TrendingUp,
    Video,
    ShieldCheck,
    Layers,
  };
  const Icon = iconMap[service.icon] || Code;

  const formattedPrice = service.startingPrice.custom
    ? 'Custom Milestone Quotation'
    : `Starting at ₱${service.startingPrice.PHP.toLocaleString()} PHP / $${service.startingPrice.USD} USD`;

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-mutedgray mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-slate-950 dark:hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/services" className="hover:text-slate-950 dark:hover:text-white transition-colors">
          Services
        </Link>
        <span>/</span>
        <span className="text-techblue dark:text-gold font-medium">{service.title}</span>
      </nav>

      {/* Header Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-navy-900 dark:via-navy-850 dark:to-navy-950 border border-slate-200 dark:border-gold/25 shadow-xl dark:shadow-2xl relative overflow-hidden mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-navy-950 border border-slate-200 dark:border-gold/30 text-xs font-bold uppercase tracking-wider text-techblue dark:text-gold shadow-xs">
            <Icon className="w-4 h-4" />
            <span>Dedicated Service Overview</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg font-semibold text-techblue dark:text-gold/90">
            {service.subtitle}
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-mutedgray leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-navy-950 bg-gold hover:bg-gold-400 transition-colors shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-mutedgray-light bg-white dark:bg-navy-950/80 px-4 py-3 rounded-xl border border-slate-200 dark:border-navy-800 shadow-xs">
              <Clock className="w-4 h-4 text-techblue" />
              <span>Delivery: {service.deliveryTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Deliverables & Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Deliverables */}
        <div className="p-8 rounded-3xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-navy-800 shadow-sm dark:shadow-xl space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-techblue dark:text-gold">
            Exact Scope of Work
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Included Deliverables</h2>
          <p className="text-xs text-slate-600 dark:text-mutedgray leading-relaxed">
            Every engagement includes complete documentation, source files, and milestone verification.
          </p>
          <ul className="space-y-3 pt-2 text-sm text-slate-700 dark:text-mutedgray-light">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-techblue dark:text-gold shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Benefits */}
        <div className="p-8 rounded-3xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-navy-800 shadow-sm dark:shadow-xl space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-techblue dark:text-techblue-300">
            Why This Matters
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Tangible Business Advantages</h2>
          <p className="text-xs text-slate-600 dark:text-mutedgray leading-relaxed">
            Engineered to provide immediate operational leverage, cost savings, and enhanced customer trust.
          </p>
          <ul className="space-y-3 pt-2 text-sm text-slate-700 dark:text-mutedgray-light">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ideal For & Technology Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 shadow-xs">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
            Who This Is Ideal For:
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-mutedgray-light">
            {service.idealFor.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-techblue dark:bg-gold"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 shadow-xs">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
            Underlying Technology Stack:
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-100 dark:bg-navy-900 text-slate-800 dark:text-gold border border-slate-200 dark:border-gold/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-mutedgray mt-3">
            *We strictly use industry-standard, well-maintained libraries with zero proprietary lock-in.
          </p>
        </div>
      </div>

      {/* Bottom Conversion Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-gold/30 text-center max-w-3xl mx-auto shadow-xl">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Ready to Start with {service.title}?</h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-mutedgray mb-6 max-w-xl mx-auto">
          {formattedPrice}. Submit your requirements to receive a formal quotation and milestone schedule within 24 to 48 hours.
        </p>
        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-gold via-gold-400 to-gold hover:shadow-xl hover:shadow-gold/20 transition-all"
        >
          <span>Get Free Proposal for {service.title.split(' ')[0]}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
