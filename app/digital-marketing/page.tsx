import React from 'react';
import { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { ServiceDetailView } from '@/components/ServiceDetailView';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Digital Marketing & Conversion Funnels | Aenswer.ph',
  description:
    'Technical SEO, GA4 analytics architecture, landing page optimization, and high-converting marketing funnels for Philippine and global businesses.',
  alternates: {
    canonical: '/digital-marketing',
  },
};

export default function DigitalMarketingPage() {
  const service = servicesData.find((s) => s.slug === 'digital-marketing');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
