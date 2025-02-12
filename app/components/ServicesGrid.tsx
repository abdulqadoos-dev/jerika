'use client';


import Link from "next/link";

const ServicesGrid = () => {


  const services = [
    { number: "01", title: "Managed IT Services", "slug": "jerika-inc-managed-it-services" },
    { number: "02", title: "Managed Security Services", "slug": "managed-security-services" },
    { number: "03", title: "Data Backup + Disaster Recovery", "slug": "data-backup-disaster-recovery" },
    { number: "04", title: "Web Development and Hosting", "slug": "web-development-hosting" },
    { number: "05", title: "Co-Managed IT Services", "slug": "co-managed-it-services" },
    { number: "06", title: "Cloud Hosting Services", "slug": "cloud-hosting-services" },
    { number: "08", title: "Social Media Marketing and Branding", "slug": "social-media-marketing-branding" },
 ]


  return (
    <section className="bg-black py-20 relative overflow-hidden">

     {/* Background gradient overlay */}
     <div className="absolute inset-0 bg-gradient-radial from-white/10 to-secondary z-10" />

      <div className="container mx-auto px-4 relative z-20">
        {/* Header */}
    


        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get our Professional Services
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Jerika Inc gives the most Professional Tech Services with over 2000+ Experienced Software Engineers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-11 gap-4 min-h-[60vh] p-4 relative">
          
          <Link href={`services/jerika-inc-managed-it-services`} 
            className="sm:col-span-1 lg:col-span-2 xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-5 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-fade-in">
            <h2 className="text-xl font-bold mb-2">Managed IT Services</h2>
          </Link>

          <Link href={`services/managed-security-services`} 
            className="sm:col-span-1 lg:col-span-2 xl:col-start-1 xl:col-end-3 xl:row-start-5 xl:row-end-7 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-slide-in-up delay-200">
            <h2 className="text-xl font-bold mb-2">Managed Security Services</h2>
          </Link>

          <Link href={`services/data-backup-disaster-recovery`} 
            className="sm:col-span-1 lg:col-span-2 xl:col-start-3 xl:col-end-6 xl:row-start-1 xl:row-end-3 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-scale-in delay-300">
            <h2 className="text-xl font-bold mb-2">Data Backup + Disaster Recovery</h2>
          </Link>

          <Link href={`services/co-managed-it-services`} 
            className="sm:col-span-1 lg:col-span-2 xl:col-start-6 xl:col-end-10 xl:row-start-1 xl:row-end-3 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-slide-in-right delay-400">
            <h2 className="text-xl font-bold mb-2">Co-Managed IT Services</h2>
          </Link>

          <Link href={`services/web-development-hosting`} 
            className="sm:col-span-2 lg:col-span-4 xl:col-start-3 xl:col-end-10 xl:row-start-3 xl:row-end-7 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-8 animate-fade-in delay-500">
            <h2 className="text-2xl font-bold mb-2">Web Development and Hosting</h2>
          </Link>

          <Link href={`services/cloud-hosting-services`} 
            className="sm:col-span-1 lg:col-span-2 xl:col-start-10 xl:col-end-12 xl:row-start-1 xl:row-end-3 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-rotate-in delay-600">
            <h2 className="text-xl font-bold mb-2">Cloud Hosting Services</h2>
          </Link>

          <Link href={`services/social-media-marketing-branding`} 
            className="sm:col-span-1 lg:col-span-2 xl:col-start-10 xl:col-end-12 xl:row-start-3 xl:row-end-7 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-slide-in-left delay-700">
            <h2 className="text-xl font-bold mb-2">Social Media Marketing and Branding</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;