'use client'

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(0);

  const faqs = [
    {
      question: "What is managed IT services?",
      answer: "Managed IT services allows you to proactively manage the IT function so that your people and your goals are no longer hindered but enabled by technology. The results show up in improved business outcomes, and IT costs are controlled."
    },
    {
      question: "What are the benefits of managed IT services?",
      answer: "There are many benefits to managed IT services, including improved productivity, reduced downtime, and predictable IT costs. By outsourcing your IT management, you can free up your internal resources to focus on your core business."
    },
    {
      question: "How much do managed IT services cost?",
      answer: "The cost of managed IT services varies depending on the size and complexity of your organization. We offer a variety of plans to fit your specific needs and budget. Contact us today for a free consultation."
    },
    {
      question: "What is cloud computing?",
      answer: "Cloud computing is the on-demand delivery of IT resources—everything from applications to data centers—over the Internet. Instead of keeping files on a proprietary hard drive or local storage network, cloud-based storage makes it possible to save them to a remote database."
    },
    {
      question: "What are the benefits of cloud computing?",
      answer: "There are many benefits to cloud computing, including scalability, cost savings, and increased flexibility. Cloud computing allows you to access your data and applications from anywhere with an internet connection."
    },
    {
      question: "What is cybersecurity?",
      answer: "Cybersecurity is the protection of computer systems and networks from theft, damage, or unauthorized access to the data they hold. The practice includes physical security to protect hardware and the use of techniques such as ensuring data integrity."
    },
    {
      question: "What are the different types of cybersecurity threats?",
      answer: "There are many different types of cybersecurity threats, including malware, phishing, and ransomware. These threats can come from a variety of sources, including hackers, disgruntled employees, and even nation-states."
    },
    {
      question: "How can I protect my business from cybersecurity threats?",
      answer: "There are many steps you can take to protect your business from cybersecurity threats, including implementing strong passwords, using antivirus software, and educating your employees about cybersecurity best practices.  Contact us for a more thorough security assessment."
    },
    {
      question: "What is business continuity?",
      answer: "Business continuity is the process of planning for and mitigating the impact of unexpected events that disrupt normal business operations. This could include natural disasters, cyberattacks, or even a global pandemic."
    },
    {
      question: "Why is business continuity important?",
      answer: "Business continuity is important because it helps ensure that your business can continue to operate in the event of a disruption. This can help you minimize financial losses, maintain customer relationships, and protect your reputation."
    },
    {
      question: "What is IT support?",
      answer: "IT support is the process of providing assistance to users with their computer and software problems. This can include troubleshooting technical issues, answering questions about software, and providing training on new technologies."
    },
    {
      question: "How can I get IT support?",
      answer: "Jerika offers a variety of IT support options, including phone, email, and remote support. We also have a team of experienced technicians who can come to your office to provide on-site support."
    },
    {
      question: "What is vCIO?",
      answer: "A vCIO (Virtual Chief Information Officer) provides strategic IT guidance and leadership to businesses that may not have the resources to hire a full-time CIO.  A vCIO helps align technology with business goals, develops IT strategies, and oversees IT operations."
    },
    {
      question: "What are the benefits of having a vCIO?",
      answer: "A vCIO brings enterprise-level IT expertise to your business, helping you make informed technology decisions, optimize IT investments, and improve overall IT performance.  This leads to better business outcomes and a stronger competitive advantage."
    },
    {
      question: "What industries do you serve?",
      answer: "Jerika serves a wide range of industries, including healthcare, finance, manufacturing, and retail. We have experience working with businesses of all sizes, from small startups to large enterprises."
    },
    {
      question: "What is your approach to customer service?",
      answer: "At Jerika, we are committed to providing our clients with the highest level of customer service. We believe in building long-term relationships with our clients and are always available to answer your questions and provide support."
    },
    {
      question: "How do I get started with Jerika?",
      answer: "Getting started with Jerika is easy! Simply contact us today for a free consultation. We will discuss your specific needs and develop a customized solution for your business."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 min-h-screen flex flex-col justify-center ">
      <h2 className="text-3xl font-bold text-center mb-2 text-secondary">
        Frequently Asked Questions
      </h2>
      <p className="text-center mb-8 text-secondary/70">
        There are tons of reasons why you should choose Jerika Inc.Here's some of
        the answers people commonly ask us.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-xl overflow-clip">
            <button
              className="w-full p-4 flex justify-between items-center bg-secondary text-white"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-bold ">{faq.question}</span>
              <Plus
                className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'
                  }`}
              />
            </button>
            <div className={`transition-all duration-300 ease-in-out shadow-lg ${openIndex === index ? 'max-h-40' : 'max-h-0'}`} >
              <div className="p-4 bg-white rounded-b-xl  text-secondary/70">
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