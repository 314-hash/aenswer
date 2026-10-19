import React from 'react';
import { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { ServiceDetailView } from '@/components/ServiceDetailView';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'AI Automation & Business Solutions | Aenswer.ph',
  description:
    'Save 20+ hours a week. Intelligent AI inquiry auto-responders, CRM sync, n8n workflows, and self-hosted automation for Philippine businesses.',
  alternates: {
    canonical: '/ai-automation',
  },
};

export default function AIAutomationPage() {
  const service = servicesData.find((s) => s.slug === 'ai-automation');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
