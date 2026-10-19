import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aenswer.ph';
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticPages = [
    '',
    '/services',
    '/web-design-philippines',
    '/ai-automation',
    '/digital-marketing',
    '/video-graphic-design',
    '/blockchain-development',
    '/web3-development',
    '/portfolio',
    '/pricing',
    '/about',
    '/contact',
    '/blog',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services') || route.startsWith('/web-design') ? 0.9 : 0.8,
  }));

  // Blog dynamic posts
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogUrls];
}
