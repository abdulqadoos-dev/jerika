'use client';

import React from 'react';

interface Section {
  heading: string | null;
  content: string | null; 
  list_items?: string[]; 
}

interface Article {
  title: string;
  slug: string;
  sections: Section[];
}

const ServiceDetails: React.FC<{ article: Article }> = ({ article }) => {
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <article className="relative min-h-screen bg-secondary bg-no-repeat bg-cover py-36">
      <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

      <div className="container mx-auto relative z-20">
        <h2 className="text-white md:text-7xl text-3xl my-8 mx-10 font-bold">
          {article.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="bg-black text-white md:col-span-2 space-y-10 p-10 rounded-xl">
            {article.sections.map((section, index) => (
              <div className="space-y-5" key={index}>
                {section.heading && <h2 className="text-4xl">{section.heading}</h2>}
                {section.content && <p>{section.content}</p>}
                {section.list_items && (
                  <ul className="list-disc pl-6 space-y-2"> 
                    {section.list_items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="bg-black text-white space-y-10 p-10 rounded-xl"></div>
        </div>
      </div>
    </article>
  );
};

export default ServiceDetails;