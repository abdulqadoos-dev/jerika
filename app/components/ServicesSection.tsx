import React from 'react';
import Link from 'next/link';

const services = [
   { number: "01", title: "Managed IT Services", "slug": "jerika-inc-managed-it-services" },
   { number: "02", title: "Managed Security Services", "slug": "jerika-inc-managed-it-services" },
   { number: "03", title: "Data Backup + Disaster Recovery", "slug": "jerika-inc-managed-it-services" },
   { number: "04", title: "Web Development and Hosting", "slug": "jerika-inc-managed-it-services" },
   { number: "05", title: "Co-Managed IT Services", "slug": "jerika-inc-managed-it-services" },
   { number: "06", title: "Cloud Hosting Services", "slug": "jerika-inc-managed-it-services" },
   { number: "08", title: "Social Media Marketing and Branding", "slug": "jerika-inc-managed-it-services" },
]

const ServicesSection = () => {
   return (
      <div className="container mx-auto md:rounded-[50px] lg:px-10 overflow-clip px-5 lg:py-32 mb-20 py-8 relative bg-web-service bg-no-repeat md:bg-bottom bg-cover ">

         <div className="absolute inset-0 backdrop-blur-3xl bg-secondary/40" />

         <div className="max-w-7xl mx-auto relative z-20">

            <div className="grid md:grid-cols-4 gap-6">

               {services.map(service => (
                  <Link href={`services/${service.slug}`} key={service.number} className="bg-white/20 backdrop-blur rounded-3xl py-10 px-5 shadow-lg  h-96 flex flex-col justify-between">
                     <div className=" text-secondary">
                        <span className="bg-primary font-bold p-5 text-xl rounded-xl">{service.number}</span>
                     </div>
                     <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                     
                  </Link>
               ))}

            </div>
         </div>
      </div>
   );
};

export default ServicesSection;