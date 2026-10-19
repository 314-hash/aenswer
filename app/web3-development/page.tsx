import React from 'react';
import { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { ServiceDetailView } from '@/components/ServiceDetailView';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Web3 Applications & dApp Development | Aenswer.ph',
  description:
    'Full-stack Web3 dApps, wallet connectivity with Wagmi & Viem, on-chain analytics dashboards, and responsive decentralized applications.',
  alternates: {
    canonical: '/web3-development',
  },
};

export default function Web3DevelopmentPage() {
  const service = servicesData.find((s) => s.slug === 'web3-development');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
