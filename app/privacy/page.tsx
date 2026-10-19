import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Philippine Data Privacy Act Compliant',
  description:
    'Aenswer Digital Solutions privacy policy outlining our strict data protection principles compliant with the Philippine Data Privacy Act of 2012 (RA 10173).',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      <header className="space-y-4 border-b border-navy-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>RA 10173 & Global Privacy Standards</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-mutedgray">
          Effective Date: October 19, 2026 | Last Updated: October 2026
        </p>
      </header>

      <div className="space-y-8 text-sm text-mutedgray-light leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Commitment to Privacy</h2>
          <p>
            Aenswer Digital Solutions (“Aenswer”, “we”, “our”, or “us”) respects your fundamental right to privacy. We operate in strict compliance with Republic Act No. 10173, otherwise known as the Data Privacy Act of 2012 (DPA) of the Philippines, as well as applicable international privacy standards.
          </p>
          <p>
            This Privacy Policy explains how we collect, process, protect, and handle personal and business information submitted through <strong className="text-white">aenswer.ph</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
          <p>
            We strictly collect information that you voluntarily provide to us when submitting a project brief or requesting a proposal:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
            <li><strong className="text-white">Contact Information:</strong> Full name, business or organization name, email address, country of residence, and chosen contact platform (Email, WhatsApp, Telegram, or Phone).</li>
            <li><strong className="text-white">Project Scope Details:</strong> Selected services, estimated budget range, delivery timeline, project description, and optional reference website URLs.</li>
            <li><strong className="text-white">Technical Metadata:</strong> IP address, browser user-agent, and submission timestamp, utilized exclusively for automated rate limiting and bot defense.</li>
          </ul>
        </section>

        <section className="p-5 rounded-2xl bg-accentred/10 border border-accentred/30 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-accentred font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Critical Security Notice</span>
          </div>
          <p className="text-red-100">
            Aenswer will <strong className="underline">never</strong> ask you to submit cryptocurrency wallet private keys, seed phrases, banking passwords, or credit card numbers through public forms or unverified email channels. Any request for such credentials is fraudulent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Purpose and Use of Collected Data</h2>
          <p>The information submitted is processed solely for legitimate business purposes:</p>
          <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
            <li>Reviewing your business requirements and preparing accurate milestone quotations.</li>
            <li>Communicating via your preferred contact channel regarding project scope, scheduling, and staging demonstrations.</li>
            <li>Protecting our infrastructure against automated spam, denial-of-service, and malicious submissions.</li>
          </ul>
          <p>
            We <strong className="text-white">never sell, rent, monetize, or trade</strong> client information to third-party advertisers, data brokers, or marketing lists.
          </p>
        </section>

        <section className="space-y-3" id="security">
          <h2 className="text-xl font-bold text-white">4. Technical Security Measures</h2>
          <p>We implement industry-grade technical and organizational safeguards:</p>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Transport Layer Security (TLS 1.3) encryption for all in-transit web traffic.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Honeypot form traps and submission velocity checks to detect automated scraping bots.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>IP rate-limiting to prevent brute force submission floods.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Server-side data validation via Zod schemas to block code injection payloads.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Your Rights as a Data Subject</h2>
          <p>Under the Philippine Data Privacy Act and global privacy frameworks, you retain full rights to:</p>
          <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm">
            <li>Request a copy of any personal data we hold about your inquiries.</li>
            <li>Request immediate rectification of any inaccurate information.</li>
            <li>Request the complete deletion and erasure of your inquiry records from our logs.</li>
          </ul>
          <p>
            To exercise your rights, email our designated privacy team at{' '}
            <a href="mailto:privacy@aenswer.ph" className="text-gold underline hover:text-white">
              privacy@aenswer.ph
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
