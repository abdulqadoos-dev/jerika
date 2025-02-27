import React from 'react';
import Link from 'next/link';

const services = [
   { number: "01", title: "Managed IT Services", "slug": "jerika-inc-managed-it-services", background: "url('/images/services/it-services.png')" },
   { number: "02", title: "Managed Security Services", "slug": "managed-security-services", background: "url('/images/services/it-security.png')" },
   { number: "03", title: "Data Backup + Disaster Recovery", "slug": "data-backup-disaster-recovery", background: "url('/images/services/data-backup.jpg')" },
   { number: "04", title: "Web Development and Hosting", "slug": "web-development-hosting", background: "url('/images/services/web-development.jpg')" },
   { number: "05", title: "Co-Managed IT Services", "slug": "co-managed-it-services", background: "url('/images/services/manage-service.png')" },
   { number: "06", title: "Cloud Hosting Services", "slug": "cloud-hosting-services", background: "url('/images/services/cloud-hosting.jpg')" },
   { number: "08", title: "Social Media Marketing and Branding", "slug": "social-media-marketing-branding", background: "url('/images/services/social-media.jpg')" },
]

const ServicesSection = () => {
   return (
      <div className="container mx-auto md:rounded-[50px] lg:px-10 overflow-clip px-5 lg:py-32 mb-20 py-8 relative bg-web-service bg-no-repeat md:bg-bottom bg-cover ">

         <div className="absolute inset-0 backdrop-blur-3xl bg-secondary/40" />

         <div className="max-w-7xl mx-auto relative z-20">

            <div className="grid md:grid-cols-4 gap-6">

               {services.map(service => (
                  <Link
                     href={`services/${service.slug}`}
                     key={service.number}
                     className="relative bg-black rounded-3xl overflow-clip py-10 px-5 group shadow-lg h-96 transform transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                     {/* Background Image */}
                     <div
                        className="absolute inset-0 bg-cover  bg-center opacity-50 group-hover:scale-110 transition-all duration-300"
                        style={{ backgroundImage: service.background }}
                     ></div>

                     {/* Content */}
                     <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="text-white">
                           <span className="bg-primary/0 font-bold p-5 text-4xl rounded-xl">{service.number}</span>
                        </div>
                        <h2 className="text-3xl transition-all font-bold text-white/80 group-hover:text-white mt-4">{service.title}</h2>
                     </div>
                  </Link>
               ))}

            </div>
         </div>
      </div>
   );
};

export default ServicesSection;