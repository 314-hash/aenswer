'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavItems } from '@/data/navigation';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-slate-200 dark:border-gold/15 shadow-lg shadow-slate-900/5 dark:shadow-navy-950/60 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with official /assets/aenswer-logo.jpg */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xl transition-transform hover:scale-105 group"
            aria-label="Aenswer Digital Solutions Home"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {mainNavItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || (item.children && pathname.startsWith(item.href));

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                        isActive
                          ? 'text-techblue dark:text-gold bg-techblue/10 dark:bg-navy-800/80 border border-techblue/20 dark:border-gold/25 font-bold'
                          : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-mutedgray-light dark:hover:text-white dark:hover:bg-navy-800/50'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-techblue dark:text-gold' : ''
                        }`}
                      />
                    </button>

                    {/* Services Dropdown Panel */}
                    <div
                      className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 transform ${
                        servicesDropdownOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="p-3 bg-white dark:bg-navy-900 border border-slate-200 dark:border-gold/20 rounded-2xl shadow-2xl backdrop-blur-xl">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-techblue dark:text-gold px-3 py-1 border-b border-slate-100 dark:border-navy-700/60 mb-1">
                          Our Core Capabilities
                        </div>
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block p-2.5 rounded-xl text-xs transition-all ${
                                pathname === child.href
                                  ? 'bg-techblue/10 dark:bg-techblue/20 text-techblue dark:text-gold border-l-2 border-techblue dark:border-gold font-semibold'
                                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50 dark:text-mutedgray-light dark:hover:text-white dark:hover:bg-navy-800'
                              }`}
                            >
                              <div className="font-semibold text-slate-900 dark:text-white">{child.label}</div>
                              {child.desc && (
                                <div className="text-[11px] text-slate-500 dark:text-mutedgray mt-0.5 line-clamp-1">
                                  {child.desc}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100 dark:border-navy-700/60">
                          <Link
                            href="/services"
                            className="flex items-center justify-between text-xs font-semibold text-techblue dark:text-gold hover:underline px-2 py-1 transition-colors"
                          >
                            <span>View All Services</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    isActive
                      ? 'text-techblue dark:text-gold bg-techblue/10 dark:bg-navy-800/80 border border-techblue/20 dark:border-gold/25 font-bold'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-mutedgray-light dark:hover:text-white dark:hover:bg-navy-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right: Theme Toggle & Primary CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-navy-950 bg-gradient-to-r from-gold via-gold-400 to-gold rounded-xl shadow-md hover:shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold"
            >
              <Sparkles className="w-4 h-4 text-navy-900" />
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-navy-900" />
            </Link>
          </div>

          {/* Mobile Right: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-slate-900 dark:text-mutedgray dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1 bg-white/95 dark:bg-navy-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-gold/20 shadow-2xl">
          {mainNavItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className={`block px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-techblue dark:text-gold bg-slate-100 dark:bg-navy-800 font-bold border-l-4 border-techblue dark:border-gold'
                    : 'text-slate-700 dark:text-mutedgray-light hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-navy-900'
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 py-1 space-y-1 border-l border-slate-200 dark:border-navy-800 ml-3 mt-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-3 py-1.5 rounded-lg text-xs transition-colors ${
                        pathname === child.href
                          ? 'text-techblue dark:text-gold font-semibold'
                          : 'text-slate-600 dark:text-mutedgray hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 mt-2 border-t border-slate-200 dark:border-navy-800 flex flex-col gap-2.5">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-3 text-center text-sm font-bold text-navy-950 bg-gold rounded-xl shadow-lg hover:bg-gold-400 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start a Project</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
