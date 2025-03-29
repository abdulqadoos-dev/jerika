'use client';

import React from 'react';


import ContactForm from '@/app/components/ContactForm';

interface Section {
   heading: string | null;
   content: string | null;
   list_items?: string[];
}

interface Article {
   title: string;
   slug: string;
   image?: string;
   sections: Section[];
}

const ServiceDetails: React.FC<{ article: Article }> = ({ article }) => {
   if (!article) {
      return <div>Loading...</div>;
   }

   return (
      <article className="relative  bg-secondary bg-no-repeat bg-cover md:py-36 py-28 ">
         <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

         <div className="container mx-auto relative z-20">

            <h2 className="text-white md:text-6xl text-3xl md:my-8 my-0 mx-10 font-bold">
               {article.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-10 items-start">
               <div className="bg-black text-white md:col-span-2 space-y-10 p-10 rounded-xl">
                  {article.image && <img src={article.image} className='w-full object-cover rounded' />}
                  {article.sections.map((section, index) => (
                     <div className="space-y-5" key={index}>
                        {section.heading && <h2 className="lg:text-4xl text-2xl">{section.heading}</h2>}
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

               <div className="bg-black text-white space-y-10 p-10 rounded-xl">

                  <p className="text-lg text-white/80 font-bold">
                     Get in touch
                  </p>
                  <ContactForm title='' />
                  <div className="container mx-auto px-4 flex flex-col justify-between  gap-10">

                     <div className="flex flex-col gap-2">
                        <span className="text-5xl text-white/50 font-bold">01</span>
                        <a href="mailto:constact@softdevai.com" className="text-xl font-bold text-white/80">
                           info@jerika.ca
                        </a>

                     </div>

                     <div className="flex flex-col gap-2">
                        <span className="text-5xl text-white/50 font-bold">02</span>
                        <a href="" className="text-xl font-bold text-white/80">
                           (647) 270-6400
                        </a>
                     </div>

                     <div className="flex flex-col gap-2">
                        <span className="text-5xl text-white/50 font-bold">03</span>
                        <p className="text-xl font-bold text-white/80 ">1 King Street West, Toronto, ON M5H 1A1</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
};

export default ServiceDetails;