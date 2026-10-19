import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { PhilippineSunEmblem } from '@/components/PhilippineSunEmblem';
import { BookOpen, Clock, ArrowRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Digital Solutions Knowledge Base | Aenswer.ph',
  description:
    'Insights, technical guides, and business analyses on web performance, AI workflow automation, digital marketing, and blockchain engineering for Philippine businesses.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogIndexPage() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-wider mb-4">
          <PhilippineSunEmblem size={16} />
          <span>Knowledge & Strategy</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Articles, Insights & <span className="text-gradient-gold">Practical Guides</span>
        </h1>
        <p className="text-sm sm:text-base text-mutedgray mt-4 leading-relaxed">
          Actionable technical breakdowns and strategic insights written by our engineering team to help Philippine business owners and digital leaders make smart technology decisions.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col justify-between p-8 rounded-3xl bg-navy-900/70 border border-navy-800 hover:border-gold/30 hover:bg-navy-900 transition-all duration-300 shadow-xl group"
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between text-xs text-mutedgray mb-4">
                <span className="px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider bg-navy-950 text-gold border border-gold/20">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-techblue" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gold transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-xs sm:text-sm text-mutedgray leading-relaxed mt-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-navy-800 flex items-center justify-between text-xs">
              <span className="text-mutedgray font-medium">{post.date}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="font-bold text-gold hover:text-white transition-colors flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
