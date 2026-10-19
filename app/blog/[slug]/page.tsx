import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import { PhilippineSunEmblem } from '@/components/PhilippineSunEmblem';
import { Clock, ArrowLeft, ArrowRight, Sparkles, Share2 } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | Aenswer.ph`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <article className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-colors">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-mutedgray hover:text-slate-900 dark:hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Articles</span>
      </Link>

      {/* Header */}
      <header className="space-y-4 mb-12">
        <div className="flex items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-md font-bold uppercase tracking-wider bg-slate-100 dark:bg-navy-900 text-techblue dark:text-gold border border-slate-200 dark:border-gold/30">
            {post.category}
          </span>
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-mutedgray">
            <Clock className="w-3.5 h-3.5 text-techblue" />
            <span>{post.readTime}</span>
          </div>
          <span className="text-slate-400 dark:text-mutedgray">•</span>
          <span className="text-slate-500 dark:text-mutedgray">{post.date}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="pt-2 flex items-center gap-3 text-xs text-slate-700 dark:text-mutedgray-light border-y border-slate-200 dark:border-navy-800 py-4">
          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-slate-900 dark:text-gold font-bold">
            A
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-white">{post.author}</div>
            <div className="text-[11px] text-slate-500 dark:text-mutedgray">Aenswer.ph Editorial & Research</div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none space-y-6 text-sm sm:text-base text-slate-700 dark:text-mutedgray-light leading-relaxed">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Conversion Banner within post */}
      <div className="mt-16 p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-gold/30 shadow-xl dark:shadow-2xl text-center space-y-4">
        <div className="w-10 h-10 rounded-full bg-gold/20 text-gold-700 dark:text-gold flex items-center justify-center mx-auto">
          <Sparkles className="w-5 h-5" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Ready to Solve Your Business’s Digital Challenges?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-mutedgray max-w-lg mx-auto">
          Aenswer builds high-performance web platforms, AI workflow automations, and custom blockchain integrations with guaranteed code ownership.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs font-bold text-navy-950 bg-gold hover:bg-gold-400 transition-colors shadow-md"
        >
          <span>Start Your Project Brief</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
