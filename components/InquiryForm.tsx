'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle, AlertCircle, Loader2, Sparkles, Shield, Lock } from 'lucide-react';

export const InquiryForm: React.FC = () => {
  const searchParams = useSearchParams();

  const [formLoadedAt] = useState<number>(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    country: 'Philippines',
    contactMethod: 'Email' as 'Email' | 'WhatsApp' | 'Telegram' | 'Phone',
    serviceRequested: 'Web Design & Development',
    budgetRange: '₱10,000 – ₱25,000 ($200 – $500)',
    desiredTimeline: 'Standard (2 – 4 Weeks)',
    projectDescription: '',
    referenceUrl: '',
    privacyConsent: false,
    websiteUrl: '', // Honeypot field
  });

  // Pre-fill from query params if available
  useEffect(() => {
    const pkg = searchParams.get('package');
    const service = searchParams.get('service');
    const estimate = searchParams.get('estimate');

    if (pkg) {
      setFormData((prev) => ({
        ...prev,
        serviceRequested: pkg,
        projectDescription: prev.projectDescription || `Inquiring about package: ${pkg}`,
      }));
    } else if (service) {
      setFormData((prev) => ({
        ...prev,
        serviceRequested: service,
        projectDescription: prev.projectDescription || (estimate ? `Estimated budget: ${estimate}` : ''),
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setFieldErrors({});

    // Client-side quick checks
    if (!formData.fullName.trim()) {
      setFieldErrors({ fullName: ['Full name is required'] });
      return;
    }
    if (!formData.email.trim()) {
      setFieldErrors({ email: ['Valid email address is required'] });
      return;
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.length < 15) {
      setFieldErrors({
        projectDescription: ['Please enter at least 15 characters describing your project goals'],
      });
      return;
    }
    if (!formData.privacyConsent) {
      setFieldErrors({ privacyConsent: ['Please agree to the privacy policy to proceed'] });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formLoadedAt,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionSuccess(true);
        setReferenceId(result.referenceId);
      } else {
        setErrorMessage(
          result.error || 'Failed to submit your project inquiry. Please try again.'
        );
        if (result.errors) {
          setFieldErrors(result.errors);
        }
      }
    } catch (err) {
      setErrorMessage(
        'A network error occurred while sending your inquiry. Please check your connection or email us directly at inquiries@aenswer.ph.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionSuccess) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-navy-900 border-2 border-gold/40 shadow-2xl text-center max-w-2xl mx-auto transition-colors">
        <div className="w-16 h-16 rounded-full bg-gold/20 text-gold-700 dark:text-gold border border-gold/40 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-techblue dark:text-gold">
          Inquiry Successfully Logged
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-3">
          Salamat! We Received Your Project Brief.
        </h3>
        <p className="text-sm text-slate-600 dark:text-mutedgray-light leading-relaxed max-w-md mx-auto">
          Our engineering and design leads will review your requirements and prepare a transparent proposal and milestone estimate.
        </p>

        {/* Reference Code Card */}
        <div className="mt-6 p-4 rounded-xl bg-slate-100 dark:bg-navy-950 border border-gold/30 inline-block text-left">
          <div className="text-[10px] font-semibold uppercase text-slate-500 dark:text-mutedgray">
            Your Tracking Reference ID:
          </div>
          <div className="text-lg font-mono font-bold text-techblue dark:text-gold tracking-wider mt-0.5">
            {referenceId}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-mutedgray mt-1">
            Keep this code for any direct correspondence via email or chat.
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-navy-800 text-xs text-slate-600 dark:text-mutedgray space-y-2">
          <p>
            Standard response window: <strong className="text-slate-900 dark:text-white">Within 24 to 48 business hours</strong>.
          </p>
          <p>
            Prefer direct instant messaging? Reach out to us at{' '}
            <a href="mailto:inquiries@aenswer.ph" className="text-techblue dark:text-gold hover:underline font-bold">
              inquiries@aenswer.ph
            </a>
          </p>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              setSubmissionSuccess(false);
              setFormData({
                fullName: '',
                businessName: '',
                email: '',
                country: 'Philippines',
                contactMethod: 'Email',
                serviceRequested: 'Web Design & Development',
                budgetRange: '₱10,000 – ₱25,000 ($200 – $500)',
                desiredTimeline: 'Standard (2 – 4 Weeks)',
                projectDescription: '',
                referenceUrl: '',
                privacyConsent: false,
                websiteUrl: '',
              });
            }}
            className="text-xs font-bold text-slate-700 dark:text-mutedgray-light hover:text-techblue dark:hover:text-white underline underline-offset-4"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-gold/25 shadow-xl dark:shadow-2xl relative transition-colors"
      noValidate
    >
      {/* Honeypot field (hidden from humans, filled by spam bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteUrl">Do not fill this</label>
        <input
          id="websiteUrl"
          type="text"
          name="websiteUrl"
          value={formData.websiteUrl}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-accentred/15 border border-accentred/40 flex items-start gap-3 text-xs text-accentred">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-1.5">
            Full Name <span className="text-accentred">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Juan dela Cruz"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-navy-600 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          />
          {fieldErrors.fullName && (
            <p className="text-[11px] text-accentred mt-1">{fieldErrors.fullName[0]}</p>
          )}
        </div>

        {/* Business Name */}
        <div>
          <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-1.5">
            Business or Organization
          </label>
          <input
            id="businessName"
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="e.g. Manila Tech Studio, SME Cafe"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-navy-600 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-1.5">
            Email Address <span className="text-accentred">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="juan@yourcompany.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-navy-600 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          />
          {fieldErrors.email && (
            <p className="text-[11px] text-accentred mt-1">{fieldErrors.email[0]}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-1.5">
            Country <span className="text-accentred">*</span>
          </label>
          <input
            id="country"
            type="text"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            placeholder="Philippines, USA, Singapore, etc."
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-navy-600 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          />
          {fieldErrors.country && (
            <p className="text-[11px] text-accentred mt-1">{fieldErrors.country[0]}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Preferred Contact Method */}
        <div>
          <label htmlFor="contactMethod" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-1.5">
            Preferred Contact Method <span className="text-accentred">*</span>
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          >
            <option value="Email">Email</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Telegram">Telegram</option>
            <option value="Phone">Phone Call</option>
          </select>
        </div>

        {/* Requested Service */}
        <div>
          <label htmlFor="serviceRequested" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-1.5">
            Requested Service <span className="text-accentred">*</span>
          </label>
          <select
            id="serviceRequested"
            name="serviceRequested"
            value={formData.serviceRequested}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          >
            <option value="Web Design & Development">Web Design & Development (Business Website)</option>
            <option value="Business Landing Page">High-Converting Landing Page</option>
            <option value="AI Automation & Business Solutions">AI Chatbot & Workflow Automation</option>
            <option value="Digital Marketing & SEO">Digital Marketing & SEO Funnels</option>
            <option value="Video Ads & Graphic Design">Video Advertisements & Social Creatives</option>
            <option value="Blockchain & Web3 Engineering">Blockchain Smart Contracts / Web3 dApp</option>
            <option value="Custom Consultation">Custom Digital Architecture Consultation</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Budget Range */}
        <div>
          <label htmlFor="budgetRange" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-1.5">
            Estimated Budget Range <span className="text-accentred">*</span>
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          >
            <option value="Under ₱10,000 ($200)">Under ₱10,000 ($200 USD)</option>
            <option value="₱10,000 – ₱25,000 ($200 – $500)">₱10,000 – ₱25,000 ($200 – $500 USD)</option>
            <option value="₱25,000 – ₱60,000 ($500 – $1,200)">₱25,000 – ₱60,000 ($500 – $1,200 USD)</option>
            <option value="₱60,000 – ₱150,000 ($1,200 – $3,000)">₱60,000 – ₱150,000 ($1,200 – $3,000 USD)</option>
            <option value="₱150,000+ ($3,000+)">₱150,000+ ($3,000+ USD) Enterprise / Custom</option>
          </select>
        </div>

        {/* Desired Timeline */}
        <div>
          <label htmlFor="desiredTimeline" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-1.5">
            Desired Timeline <span className="text-accentred">*</span>
          </label>
          <select
            id="desiredTimeline"
            name="desiredTimeline"
            value={formData.desiredTimeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
          >
            <option value="Urgent (1 – 2 Weeks)">Urgent (1 – 2 Weeks)</option>
            <option value="Standard (2 – 4 Weeks)">Standard (2 – 4 Weeks)</option>
            <option value="Flexible (1 – 2 Months)">Flexible (1 – 2 Months)</option>
            <option value="Consultation Only">Consultation / Planning Stage</option>
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-5">
        <label htmlFor="projectDescription" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-1.5">
          Project Goals & Description <span className="text-accentred">*</span>
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          required
          rows={4}
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Please describe what your business does, what problem you want to solve, and any specific feature requirements..."
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-navy-600 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
        ></textarea>
        {fieldErrors.projectDescription && (
          <p className="text-[11px] text-accentred mt-1">{fieldErrors.projectDescription[0]}</p>
        )}
      </div>

      {/* Optional Reference URL */}
      <div className="mb-6">
        <label htmlFor="referenceUrl" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-mutedgray-light mb-1.5">
          Reference URL or Existing Website (Optional)
        </label>
        <input
          id="referenceUrl"
          type="url"
          name="referenceUrl"
          value={formData.referenceUrl}
          onChange={handleChange}
          placeholder="https://yourbrand.com or competitor example"
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-navy-600 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
        />
        {fieldErrors.referenceUrl && (
          <p className="text-[11px] text-accentred mt-1">{fieldErrors.referenceUrl[0]}</p>
        )}
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacyConsent"
            checked={formData.privacyConsent}
            onChange={handleChange}
            className="mt-1 rounded text-gold focus:ring-gold bg-white dark:bg-navy-950 border-slate-300 dark:border-navy-700"
          />
          <span className="text-xs text-slate-600 dark:text-mutedgray leading-relaxed">
            I agree that Aenswer Digital Solutions may process my submitted project details in accordance with the{' '}
            <a href="/privacy" target="_blank" className="text-techblue dark:text-gold underline hover:text-slate-950 dark:hover:text-white">
              Privacy Policy
            </a>{' '}
            (Philippine Data Privacy Act RA 10173 compliant) to prepare a proposal and quotation.
          </span>
        </label>
        {fieldErrors.privacyConsent && (
          <p className="text-[11px] text-accentred mt-1">{fieldErrors.privacyConsent[0]}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-gold via-gold-400 to-gold hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Validating & Submitting Project Brief...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            <span>Send Project Inquiry & Get Quotation</span>
            <Send className="w-4 h-4 ml-1" />
          </>
        )}
      </button>

      {/* Security notice */}
      <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-mutedgray">
        <Lock className="w-3.5 h-3.5 text-techblue" />
        <span>Strict privacy guarantee: We never share or sell client contact details.</span>
      </div>
    </form>
  );
};
