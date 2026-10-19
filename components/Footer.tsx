import React from 'react';
import Link from 'next/link';
import { footerLinks } from '@/data/navigation';
import { BrandLogo } from './BrandLogo';
import { PhilippineSunEmblem } from './PhilippineSunEmblem';
import { ArrowUpRight, Mail, Globe, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-100 dark:bg-navy-950 border-t border-slate-200 dark:border-navy-800 text-slate-800 dark:text-white overflow-hidden transition-colors duration-300">
      {/* Decorative top ribbon */}
      <div className="w-full h-1 bg-gradient-to-r from-gold via-techblue to-accentred"></div>

      {/* Background glow & subtle sunburst in dark mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-40 bg-ph-sunburst pointer-events-none opacity-40 dark:opacity-40 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column with official /assets/aenswer-logo.jpg */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group" aria-label="Aenswer Digital Solutions Home">
              <BrandLogo size="lg" />
            </Link>
            <p className="text-sm text-slate-600 dark:text-mutedgray leading-relaxed max-w-sm">
              Your Digital Partner. Your Answer. We build high-performance business websites, AI automations, creative digital media, and blockchain engineering for Philippine businesses and international innovators.
            </p>
            <div className="flex items-center gap-2 text-xs text-techblue dark:text-gold/90 font-medium pt-1">
              <PhilippineSunEmblem size={16} />
              <span>Filipino Creativity. Global Solutions.</span>
            </div>

            {/* Quick Contact & Status */}
            <div className="pt-2 space-y-2 text-xs text-slate-500 dark:text-mutedgray-light">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-techblue shrink-0" />
                <span>Primary Market: Philippines | Secondary: Global Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href="mailto:inquiries@aenswer.ph" className="hover:text-techblue dark:hover:text-gold transition-colors">
                  inquiries@aenswer.ph
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Zero API lock-in, client code ownership guaranteed.</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-techblue dark:text-gold mb-4">
              Digital Solutions
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-mutedgray">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-slate-950 dark:hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-techblue dark:text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-techblue dark:text-gold mb-4">
              Company & Work
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-mutedgray">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-slate-950 dark:hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-techblue dark:text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Legal Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-techblue dark:text-gold mb-4">
              Connect & Legal
            </h3>
            <div className="space-y-4">
              <ul className="space-y-2 text-xs text-slate-600 dark:text-mutedgray">
                {footerLinks.socials.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-techblue dark:hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <span>{social.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-mutedgray-dark" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-slate-200 dark:border-navy-800">
                <div className="text-[11px] font-semibold text-slate-700 dark:text-mutedgray-light mb-2">Legal Notices</div>
                <div className="flex flex-col space-y-1.5 text-xs text-slate-600 dark:text-mutedgray">
                  {footerLinks.legal.map((item) => (
                    <Link key={item.href} href={item.href} className="hover:text-slate-950 dark:hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-mutedgray">
          <div>
            &copy; {new Date().getFullYear()} Aenswer Digital Solutions (Aenswer.ph). All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Designed for Philippine & Global Businesses</span>
            <span>&bull;</span>
            <span className="text-gold font-bold">No hidden fees</span>
            <span>&bull;</span>
            <span className="text-techblue font-bold">100% Code Ownership</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
