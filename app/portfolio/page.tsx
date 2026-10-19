import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { PhilippineSunEmblem } from '@/components/PhilippineSunEmblem';
import { ShieldCheck, Video, Sparkles, ArrowRight, Play, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio & Verified Case Studies | Aenswer.ph',
  description:
    'Explore our verified production work and live client deployments across Web Design, AI Business Automation, Creative Video Ads, and Blockchain Engineering.',
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-navy-900 border border-gold/40 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-gold shadow-xs mb-4">
          <PhilippineSunEmblem size={16} />
          <span>Our Verified Digital Craft</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
          Portfolio & <span className="text-gradient-gold">Case Studies</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-mutedgray mt-4 leading-relaxed">
          Explore our live client applications, enterprise platforms, and verified prototypes. Every entry features real business context, production tech stacks, and live links with high-fidelity visual previews.
        </p>

        {/* Ethical disclaimer badge */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-xs text-slate-600 dark:text-mutedgray shadow-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Verified production deployments & live public URLs. No vanity metrics or fake reviews.</span>
        </div>
      </div>

      {/* ========================================================
          FEATURED VIDEO REEL SPOTLIGHT: YouTube Short Embed
      ======================================================== */}
      <div className="mb-20 rounded-3xl bg-linear-to-br from-slate-900 via-navy-950 to-slate-900 text-white border border-gold/30 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text / Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-wider">
              <Video className="w-3.5 h-3.5" />
              <span>Featured Creative Showreel</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              1 Prompt Unlimited Ideas — <span className="text-gold">Janus AI Video Ads</span>
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Watch our commercial creative production in action. We combine cutting-edge generative AI video models (Runway Gen-3, Kling AI, Midjourney) with kinetic motion design, professional audio mastering, and conversion-focused storytelling for Facebook, TikTok, and YouTube video ads.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-gold font-bold">48-Hour Turnaround</span>
                <span className="text-slate-400 text-[11px]">Rapid ad iteration</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-gold font-bold">High CTR Formats</span>
                <span className="text-slate-400 text-[11px]">Vertical 9:16 & 16:9</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <span className="block text-gold font-bold">Starting at ₱4,000</span>
                <span className="text-slate-400 text-[11px]">$100 USD flat package</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/video-graphic-design"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold text-navy-950 font-bold text-xs shadow-lg hover:bg-gold-light transition-all"
              >
                <span>View Video Ads Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://youtube.com/shorts/gLW_HatyeWQ?si=QKNsYKL1f0lWtmhX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-all"
              >
                <span>Open in YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Embedded Player */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-gold/40 shadow-2xl bg-black relative">
              <iframe
                src="https://www.youtube.com/embed/gLW_HatyeWQ"
                title="Janus AI Video Ads - 1 Prompt Unlimited Ideas"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filterable Portfolio Grid */}
      <PortfolioGrid />
    </div>
  );
}
