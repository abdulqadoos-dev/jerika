'use client';

import React from 'react';

interface Section {
   heading: string | null;
   content: string;
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

      <article className="relative min-h-screen bg-secondary bg-no-repeat bg-cover  h-screen flex items-center">

         <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

         <div className="container mx-auto relative z-20">

            <h2 className="text-white text-7xl my-8 text-center font-bold">{article.title}  </h2>

            {article.sections.map((section, index) => (
            <div key={index}>
               {section.heading && <h2>{section.heading}</h2>}
               <p>{section.content}</p>
            </div>
         ))}

         </div>

         <h1></h1>

         
      </article>
   );
};

export default ServiceDetails;