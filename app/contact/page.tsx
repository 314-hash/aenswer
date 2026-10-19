import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { InquiryForm } from '@/components/InquiryForm';
import { PhilippineSunEmblem } from '@/components/PhilippineSunEmblem';
import { Mail, MessageCircle, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Project Inquiries & Free Quotation | Aenswer.ph',
  description:
    'Start your project with Aenswer Digital Solutions. Submit your requirements for web design, AI automation, video ads, or blockchain engineering.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 transition-colors">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-navy-900 border border-gold/40 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-gold shadow-xs mb-4">
          <PhilippineSunEmblem size={16} />
          <span>Start a Project</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
          Let’s Discuss Your <span className="text-gradient-gold">Digital Objectives</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-mutedgray mt-4 leading-relaxed">
          Tell us about what your business wants to build. We review every brief thoroughly and reply with a transparent scope of work, milestone breakdown, and realistic timeline within 24 to 48 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct info & Guarantees */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 space-y-6 shadow-sm dark:shadow-xl">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">How We Handle Your Inquiry</h2>

            <div className="space-y-4 text-xs text-slate-600 dark:text-mutedgray-light">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-600 dark:text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white mb-0.5">Rapid Review Window</div>
                  <div>We typically analyze requirements and reply within 24 to 48 business hours.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-techblue shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white mb-0.5">Strict Confidentiality</div>
                  <div>Your business concepts and customer lists are kept strictly confidential. NDAs available upon request.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white mb-0.5">Direct Developer Communication</div>
                  <div>You speak directly with technical architects and designers, not commissioned account executives.</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-navy-800 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-mutedgray">
                Direct Electronic Mail:
              </div>
              <a
                href="mailto:inquiries@aenswer.ph"
                className="text-sm font-semibold text-techblue dark:text-gold hover:underline block"
              >
                inquiries@aenswer.ph
              </a>
              <div className="text-[11px] text-slate-500 dark:text-mutedgray">
                *For RFP documents, design Figma files, or formal corporate tender packages.
              </div>
            </div>
          </div>

          {/* Quick FAQ card */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-3 text-xs text-slate-600 dark:text-mutedgray shadow-xs">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-techblue dark:text-gold" />
              <span>Have questions before submitting?</span>
            </div>
            <p>
              Check our{' '}
              <Link href="/pricing" className="text-techblue dark:text-gold underline hover:text-slate-950 dark:hover:text-white">
                transparent pricing guide
              </Link>{' '}
              or browse our{' '}
              <Link href="/#faqs" className="text-techblue dark:text-gold underline hover:text-slate-950 dark:hover:text-white">
                frequently asked questions
              </Link>{' '}
              to see how we structure deposits, hosting fees, and deliverables.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form wrapped in Suspense for search params */}
        <div className="lg:col-span-7">
          <Suspense fallback={<div className="p-12 text-center text-slate-500 dark:text-mutedgray">Loading inquiry form...</div>}>
            <InquiryForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
