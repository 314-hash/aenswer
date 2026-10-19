import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { PhilippineSunEmblem } from '@/components/PhilippineSunEmblem';
import { Code, Bot, Video, ShieldCheck, TrendingUp, Layers, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Digital Services & Capabilities',
  description:
    'Explore Aenswer’s full spectrum of digital solutions: Web Design, AI Business Automation, Digital Marketing, Short-Form Video Ads, and Blockchain Engineering.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  const iconMap: Record<string, any> = {
    Code,
    Bot,
    TrendingUp,
    Video,
    ShieldCheck,
    Layers,
  };

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-wider mb-4">
          <PhilippineSunEmblem size={16} />
          <span>Full-Spectrum Digital Capabilities</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Services Engineered for <span className="text-gradient-gold">Real Business Results</span>
        </h1>
        <p className="text-base text-mutedgray mt-4 leading-relaxed">
          Whether you need a high-converting website, an AI workflow that cuts manual hours, or a secure smart contract on EVM chains, we deliver with clear milestones and full source code ownership.
        </p>
      </div>

      {/* Services Detailed List */}
      <div className="space-y-16">
        {servicesData.map((service, index) => {
          const Icon = iconMap[service.icon] || Code;
          const isEven = index % 2 === 0;
          const formattedPrice = service.startingPrice.custom
            ? 'Custom Quotation'
            : `Starting from ₱${service.startingPrice.PHP.toLocaleString()} / $${service.startingPrice.USD} USD`;

          return (
            <div
              key={service.id}
              id={service.slug}
              className={`p-8 sm:p-10 rounded-3xl bg-navy-900/80 border border-navy-800 hover:border-gold/30 transition-all duration-300 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                !isEven ? 'lg:bg-navy-900/40' : ''
              }`}
            >
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 text-gold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-techblue-300">
                      Capability 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mt-0.5">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm font-semibold text-gold/90">{service.subtitle}</p>
                <p className="text-sm text-mutedgray leading-relaxed">{service.fullDesc}</p>

                {/* Benefits */}
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                    Business Benefits:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-mutedgray-light">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-mutedgray font-semibold">Technologies:</span>
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-navy-950 text-gold border border-navy-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Summary Box */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-navy-950 border border-navy-800 space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-mutedgray font-bold">
                    Investment Baseline
                  </div>
                  <div className="text-xl font-bold text-white mt-1">{formattedPrice}</div>
                </div>

                <div className="text-xs text-mutedgray">
                  <span className="font-semibold text-white">Estimated Delivery:</span>{' '}
                  {service.deliveryTime}
                </div>

                <div className="pt-3 border-t border-navy-800">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-mutedgray-light mb-2">
                    Included Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-mutedgray">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-gold font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-col gap-2.5">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-navy-950 bg-gold hover:bg-gold-400 transition-colors shadow-md"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Inquire for {service.title.split(' ')[0]}</span>
                  </Link>

                  <Link
                    href={`/${service.slug}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-mutedgray-light hover:text-white bg-navy-900 hover:bg-navy-800 border border-navy-800 transition-colors"
                  >
                    <span>Read Full Service Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold/30 text-center max-w-4xl mx-auto shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Need a Custom Multi-Service Scope?
        </h3>
        <p className="text-sm text-mutedgray max-w-xl mx-auto mb-6">
          We combine web design, AI chat automation, and social media ad packages into unified milestone agreements with volume pricing.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-navy-950 bg-gold hover:bg-gold-400 transition-colors shadow-lg"
        >
          <span>Request Custom Scope & Quotation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
