import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service & Project Engagement Policies | Aenswer.ph',
  description:
    'Aenswer Digital Solutions terms of service outlining milestone engagements, intellectual property handover, client responsibilities, and payment policies.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      <header className="space-y-4 border-b border-navy-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-wider">
          <FileText className="w-4 h-4" />
          <span>Client Engagement Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-mutedgray">
          Effective Date: October 19, 2026 | Last Updated: October 2026
        </p>
      </header>

      <div className="space-y-8 text-sm text-mutedgray-light leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing <strong className="text-white">aenswer.ph</strong>, submitting an inquiry, or commissioning project services with Aenswer Digital Solutions (“Aenswer”, “we”, “our”), you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Scope of Services & Milestone Engagements</h2>
          <p>
            All professional engagements (Web Design, AI Automation, Creative Media, and Blockchain Engineering) are governed by a mutually agreed Scope of Work (SOW) or written project proposal.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
            <li><strong className="text-white">Milestone Structure:</strong> Standard project development is divided into distinct tranches: typically a 50% commencement deposit and a 50% completion payment upon review approval prior to production handover.</li>
            <li><strong className="text-white">Scope Changes:</strong> Work requested outside the agreed written deliverables is quoted separately as an add-on or deferred to a subsequent milestone.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. 100% Client Intellectual Property & Code Ownership</h2>
          <p>
            We believe businesses should own their digital tools. Upon full and final settlement of agreed project fees:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Full ownership of custom source code, repository commits, and project assets transfers unconditionally to the client.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>All production DNS configurations, cloud hosting accounts, and administrative credentials belong exclusively to the client.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Aenswer retains only the right to display the completed work in our agency portfolio for marketing purposes, unless a mutual NDA specifies otherwise.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Third-Party Expenses & Infrastructure Disclosures</h2>
          <p>
            To keep development costs minimal and prevent vendor lock-in:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
            <li>We prioritize zero-cost, high-performance static hosting tiers (e.g. Cloudflare Pages or Vercel Hobby) whenever appropriate.</li>
            <li>Clients are directly responsible for third-party domain registration fees and paid third-party API consumptions (e.g. OpenAI/Anthropic token balances, Twilio/Semaphore SMS credits). Aenswer does not apply hidden markups to third-party billing.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Warranties & Disclaimers</h2>
          <p>
            We warrant that custom code delivered meets the specifications outlined in the project agreement. We provide 14 to 30 days of complimentary post-launch bug fixing for all deliverable items.
          </p>
          <p>
            We do <strong className="text-white">not</strong> guarantee specific commercial outcomes, advertising return on investment (ROI), sales volumes, or cryptocurrency token appreciation. The client assumes responsibility for business marketing and commercial decisions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">6. Governing Law</h2>
          <p>
            These Terms shall be interpreted and governed in accordance with the laws of the Republic of the Philippines. Any disputes arising under these terms shall be subject to amicable resolution or the jurisdiction of competent courts in the Philippines.
          </p>
        </section>
      </div>
    </div>
  );
}
