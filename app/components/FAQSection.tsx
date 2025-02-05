'use client'

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const faqs = [
    {
      question: "What is managed IT services?",
      answer: "Managed IT services allows you to proactively manage the IT function so that your people and your goals are no longer hindered but enabled by technology. The results show up in improved business outcomes, and IT costs are controlled."
    },
    {
      question: "What is managed IT services?",
      answer: "Managed IT services allows you to proactively manage the IT function so that your people and your goals are no longer hindered but enabled by technology. The results show up in improved business outcomes, and IT costs are controlled."
    },
    {
      question: "What is managed IT services?",
      answer: "Managed IT services allows you to proactively manage the IT function so that your people and your goals are no longer hindered but enabled by technology. The results show up in improved business outcomes, and IT costs are controlled."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2 text-secondary">
        Frequently Asked Questions
      </h2>
      <p className="text-center mb-8 text-secondary/70">
        There are tons of reasons why you should choose Jerika Inc.Here's some of
        the answers people commonly ask us.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-transparent rounded-xl overflow-clip">
            <button
              className="w-full p-4 flex justify-between items-center bg-secondary text-white"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium ">{faq.question}</span>
              <Plus
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : 'rotate-0'
                }`}
              />
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="p-4 bg-white border rounded-b-xl border-secondary/20 text-secondary/70">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;