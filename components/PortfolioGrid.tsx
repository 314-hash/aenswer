'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioProjects } from '@/data/portfolio';
import { ExternalLink, Code, CheckCircle, Sparkles, Play, Globe } from 'lucide-react';

export const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Web Design', label: 'Web Design' },
    { id: 'Automation', label: 'AI & Automation' },
    { id: 'Creative Media', label: 'Creative Media & Video Ads' },
    { id: 'Blockchain', label: 'Blockchain & Web3' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-gold text-navy-950 shadow-lg shadow-gold/25 scale-105 ring-2 ring-gold/50'
                  : 'bg-white dark:bg-navy-900/90 text-slate-700 dark:text-mutedgray hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-navy-700/60 shadow-xs'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`px-2 py-0.5 rounded-md text-[10px] ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-3xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-navy-800 hover:border-gold/50 transition-all duration-300 overflow-hidden group shadow-md hover:shadow-2xl dark:shadow-2xl"
          >
            {/* Visual Image / Video Preview Frame */}
            <div className="relative w-full bg-slate-900 border-b border-slate-200 dark:border-navy-800">
              {/* Browser-style Top Bar */}
              <div className="px-4 py-2.5 bg-slate-100 dark:bg-navy-950 flex items-center justify-between border-b border-slate-200 dark:border-navy-800/80 text-[11px] text-slate-500 dark:text-mutedgray">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1 px-3 py-0.5 rounded-full bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-[10px] font-mono text-slate-600 dark:text-mutedgray-light truncate max-w-[200px] sm:max-w-[280px]">
                  <Globe className="w-2.5 h-2.5 shrink-0 text-slate-400" />
                  <span className="truncate">{project.demoUrl ? project.demoUrl.replace(/^https?:\/\//, '') : 'aenswer.ph'}</span>
                </div>
                <div className="w-8"></div>
              </div>

              {/* Preview Image or Video Embed */}
              {project.videoEmbedUrl ? (
                <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
                  <iframe
                    src={project.videoEmbedUrl}
                    title={project.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-navy-950">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} preview screenshot`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <span>No preview available</span>
                    </div>
                  )}

                  {/* Hover Overlay with Live Demo Button */}
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 backdrop-blur-[2px]">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold text-navy-950 font-bold text-xs shadow-xl hover:bg-gold-light hover:scale-105 transition-all"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-1">
              {/* Category & Status Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-navy-800 text-techblue dark:text-techblue-300 border border-slate-200 dark:border-navy-700">
                  {project.category}
                </span>

                {project.isConceptOrDemo ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/15 text-amber-700 dark:text-gold border border-amber-500/30">
                    <Sparkles className="w-3 h-3" />
                    Concept Prototype
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    <CheckCircle className="w-3 h-3" />
                    Verified Live Production
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-techblue dark:group-hover:text-gold transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-mutedgray mt-1 font-medium">{project.tagline}</p>

              {/* Summary */}
              <p className="text-xs text-slate-600 dark:text-mutedgray-light mt-3 leading-relaxed">
                {project.summary}
              </p>

              {/* Challenge / Solution / Outcome block */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200 dark:border-navy-800 space-y-2.5 text-xs">
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

              {/* Tech Stack Pills */}
              <div className="mt-5 flex flex-wrap gap-1.5 items-center">
                <Code className="w-3.5 h-3.5 text-slate-400 dark:text-mutedgray mr-1 shrink-0" />
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-mutedgray-light border border-slate-200 dark:border-navy-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-navy-800 flex items-center justify-between mt-auto">
                <span className="text-[11px] text-slate-500 dark:text-mutedgray font-medium">
                  Client: {project.client}
                </span>

                {project.demoUrl && project.demoUrl !== '#' ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-techblue dark:text-gold hover:underline transition-colors inline-flex items-center gap-1"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-techblue dark:text-gold hover:underline transition-colors inline-flex items-center gap-1"
                  >
                    <span>Request Similar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
