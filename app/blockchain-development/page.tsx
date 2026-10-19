import React from 'react';
import { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { ServiceDetailView } from '@/components/ServiceDetailView';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Blockchain Engineering & Smart Contracts | Aenswer.ph',
  description:
    'Audited Solidity smart contracts, ERC-20/721 token engineering, Foundry invariant test suites, and EVM protocol architectures.',
  alternates: {
    canonical: '/blockchain-development',
  },
};

export default function BlockchainDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === 'blockchain-development');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
