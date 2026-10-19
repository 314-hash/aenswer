'use client';

import React, { useState } from 'react';
import { faqsData } from '@/data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3.5">
      {faqsData.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-2xl transition-all duration-200 border ${
              isOpen
                ? 'bg-amber-50/50 dark:bg-navy-900 border-gold/60 dark:border-gold/40 shadow-md dark:shadow-lg'
                : 'bg-white dark:bg-navy-900/60 border-slate-200 dark:border-navy-800 hover:border-slate-300 dark:hover:border-navy-700 hover:bg-slate-50 dark:hover:bg-navy-900/80 shadow-xs'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-2xl"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${
                  isOpen ? 'text-amber-600 dark:text-gold' : 'text-techblue'
                }`} />
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 dark:text-mutedgray shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-amber-600 dark:text-gold' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-mutedgray-light leading-relaxed border-t border-slate-200 dark:border-navy-800/80 mt-1">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
