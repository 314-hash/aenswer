'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { portfolioProjects } from '@/data/portfolio';
import { ExternalLink, Tag, Code, CheckCircle, Sparkles, Filter } from 'lucide-react';

export const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Web Design', label: 'Web Design' },
    { id: 'Automation', label: 'AI & Automation' },
    { id: 'Creative Media', label: 'Creative Media' },
    { id: 'Blockchain', label: 'Blockchain & Web3' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const count = cat.id === 'all'
            ? portfolioProjects.length
            : portfolioProjects.filter((p) => p.category === cat.id).length;

          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-gold text-navy-950 shadow-md shadow-gold/20 scale-105'
                  : 'bg-white dark:bg-navy-900/90 text-slate-700 dark:text-mutedgray hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-navy-700/60 shadow-xs'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                  isActive ? 'bg-navy-950/20 text-navy-950 font-black' : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-mutedgray'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-navy-800 hover:border-gold/40 hover:bg-slate-50 dark:hover:bg-navy-900 transition-all duration-300 p-6 sm:p-7 group shadow-sm hover:shadow-xl dark:shadow-xl"
          >
            {/* Top Meta */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-navy-800 text-techblue dark:text-techblue-300 border border-slate-200 dark:border-navy-700">
                {project.category}
              </span>
              {project.isConceptOrDemo ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/15 text-amber-700 dark:text-gold border border-amber-500/30">
                  <Sparkles className="w-3 h-3" />
                  Concept / Architecture Prototype
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <CheckCircle className="w-3 h-3" />
                  Verified Production Delivery
                </span>
              )}
            </div>

            {/* Title & Client */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-techblue dark:group-hover:text-gold transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-mutedgray mt-1 font-medium">{project.tagline}</p>

            {/* Summary */}
            <p className="text-xs text-slate-600 dark:text-mutedgray-light mt-3 leading-relaxed">
              {project.summary}
            </p>

            {/* Challenge & Solution Block */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200 dark:border-navy-800 space-y-2 text-xs">
              <div>
                <span className="font-bold text-amber-600 dark:text-gold">Challenge:</span>{' '}
                <span className="text-slate-600 dark:text-mutedgray">{project.challenge}</span>
              </div>
              <div>
                <span className="font-bold text-techblue dark:text-techblue-300">Solution:</span>{' '}
                <span className="text-slate-700 dark:text-mutedgray-light">{project.solution}</span>
              </div>
              <div>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Outcome:</span>{' '}
                <span className="text-slate-700 dark:text-mutedgray-light">{project.outcome}</span>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="mt-5 flex flex-wrap gap-1.5 items-center">
              <Code className="w-3.5 h-3.5 text-slate-400 dark:text-mutedgray mr-1 shrink-0" />
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-mutedgray-light border border-slate-200 dark:border-navy-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Footer action */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-navy-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 dark:text-mutedgray">Client: {project.client}</span>
              <Link
                href="/contact"
                className="text-xs font-semibold text-techblue dark:text-gold hover:underline transition-colors flex items-center gap-1"
              >
                <span>Request Similar Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
