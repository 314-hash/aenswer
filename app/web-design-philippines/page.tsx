import React from 'react';
import { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { ServiceDetailView } from '@/components/ServiceDetailView';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Website Design & Development in the Philippines | Aenswer.ph',
  description:
    'Custom corporate websites, high-converting landing pages, and responsive web applications built for Philippine SMEs, entrepreneurs, and global brands.',
  alternates: {
    canonical: '/web-design-philippines',
  },
};

export default function WebDesignPage() {
  const service = servicesData.find((s) => s.slug === 'web-design-philippines');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
