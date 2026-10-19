import { z } from 'zod';

export const inquirySchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  businessName: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  country: z.string().min(2, 'Please specify your country'),
  contactMethod: z.enum(['Email', 'WhatsApp', 'Telegram', 'Phone'] as const),
  serviceRequested: z.string().min(2, 'Please select a service'),
  budgetRange: z.string().min(2, 'Please select a budget range'),
  desiredTimeline: z.string().min(2, 'Please select a desired timeline'),
  projectDescription: z.string().min(15, 'Please provide at least 15 characters describing your project'),
  referenceUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to the privacy policy to submit',
  }),
  // Honeypot anti-spam field: must be empty
  websiteUrl: z.string().max(0, 'Spam detected').optional().or(z.literal('')),
  // Timestamp check: human takes at least 3 seconds to fill
  formLoadedAt: z.number().optional(),
});
