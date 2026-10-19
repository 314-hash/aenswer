import React from 'react';
import { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { ServiceDetailView } from '@/components/ServiceDetailView';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Video Advertisements & Graphic Design | Aenswer.ph',
  description:
    'Short-form vertical video ads for TikTok, Reels, and YouTube Shorts, kinetic typography, and premium social media graphics with Filipino creative flair.',
  alternates: {
    canonical: '/video-graphic-design',
  },
};

export default function VideoGraphicDesignPage() {
  const service = servicesData.find((s) => s.slug === 'video-graphic-design');
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
