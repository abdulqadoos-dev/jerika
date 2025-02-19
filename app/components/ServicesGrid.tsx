'use client';


import Link from "next/link";

const ServicesGrid = () => {


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


        <div className="flex w-full overflow-x-auto sm:overflow-hidden flex-col md:flex-row md:h-[60vh] gap-5">
          {/* Column 1 */}

          <div className="hover:md:w-3/4 w-full md:w-1/3 lg:w-1/6 xl:w-1/6 flex flex-col gap-5 transition-all">

            <Link href={`services/jerika-inc-managed-it-services`}
              className="md:hover:h-5/6 md:h-2/3 h-52 hover:h-[50vh] transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4 ">
              <h2 className="text-xl font-bold mb-2 text-white">Managed IT Services</h2>
            </Link>

            <Link href={`services/managed-security-services`}
              className="md:hover:h-5/6 md:h-1/3 h-52 hover:h-[50vh] transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4">
              <h2 className="text-xl font-bold mb-2 text-white">Managed Security Services</h2>
            </Link>

          </div>


          {/* Column 2 */}
          <div className="md:hover:w-11/12 w-full md:w-1/3 lg:w-2/3 xl:w-2/3 flex flex-col gap-5 transition-all">
            {/* Row for Sub Column 1 and Sub Column 2 */}
            <div className="hover:h-4/5 flex flex-col gap-5 lg:flex-row lg:h-1/3 h-1/2">

              <Link href={`services/data-backup-disaster-recovery`}
                className="hover:h-5/6 lg:hover:w-11/12 md:hover:h-full w-full lg:w-1/2 lg:h-full md:h-1/2 h-52 transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4">
                <h2 className="text-xl font-bold mb-2 text-white">Data Backup + Disaster Recovery</h2>
              </Link>

              <Link href={`services/co-managed-it-services`}
                className="hover:h-5/6 lg:hover:w-11/12 md:hover:h-full w-full lg:w-1/2 lg:h-full md:h-1/2 h-52 transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4">
                <h2 className="text-xl font-bold mb-2 text-white">Co-Managed IT Services</h2>
              </Link>

            </div>
            {/* Sub Column 3 */}
            <Link href={`services/web-development-hosting`}
              className="hover:h-4/5 lg:h-2/3 md:h-1/2 h-52 w-full transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4">
              <h2 className="text-2xl font-bold mb-2 text-white">Web Development and Hosting</h2>
            </Link>

          </div>
          {/* Column 3 */}
          <div className="hover:md:w-3/4 w-full md:w-1/3 lg:w-1/6 xl:w-1/6 flex flex-col gap-5 transition-all">
            <Link href={`services/cloud-hosting-services`}
              className="md:hover:h-5/6 md:h-1/3 h-52 hover:h-[50vh] transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4">
              <h2 className="text-xl font-bold mb-2 text-white">Cloud Hosting Services</h2>
            </Link>
            <Link href={`services/social-media-marketing-branding`}
              className="md:hover:h-5/6 md:h-2/3 h-52 hover:h-[50vh] transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4">
              <h2 className="text-xl font-bold mb-2  text-white">Social Media Marketing and Branding</h2>
            </Link>
          </div>
        </div>

        {/* 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-11 gap-5 min-h-[60vh] p-4 relative">

          <Link href={`services/jerika-inc-managed-it-services`}
            className="sm:col-span-1 lg:col-span-2 xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-5 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 ">
            <h2 className="text-xl font-bold mb-2">Managed IT Services</h2>
          </Link>
          <Link href={`services/managed-security-services`}
            className="sm:col-span-1 lg:col-span-2 xl:col-start-1 xl:col-end-3 xl:row-start-5 xl:row-end-7 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 ">
            <h2 className="text-xl font-bold mb-2">Managed Security Services</h2>
          </Link>

          <Link href={`services/data-backup-disaster-recovery`}
            className="sm:col-span-1 lg:col-span-2 xl:col-start-3 xl:col-end-6 xl:row-start-1 xl:row-end-3 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 ">
            <h2 className="text-xl font-bold mb-2">Data Backup + Disaster Recovery</h2>
          </Link>

          <Link href={`services/co-managed-it-services`}
            className="sm:col-span-1 lg:col-span-2 xl:col-start-6 xl:col-end-10 xl:row-start-1 xl:row-end-3 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 ">
            <h2 className="text-xl font-bold mb-2">Co-Managed IT Services</h2>
          </Link>

          <Link href={`services/web-development-hosting`}
            className="sm:col-span-2 lg:col-span-4 xl:col-start-3 xl:col-end-10 xl:row-start-3 xl:row-end-7 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-8 ">
            <h2 className="text-2xl font-bold mb-2">Web Development and Hosting</h2>
          </Link>

          <Link href={`services/cloud-hosting-services`}
            className="sm:col-span-1 lg:col-span-2 xl:col-start-10 xl:col-end-12 xl:row-start-1 xl:row-end-3 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 ">
            <h2 className="text-xl font-bold mb-2">Cloud Hosting Services</h2>
          </Link>

          <Link href={`services/social-media-marketing-branding`}
            className="sm:col-span-1 lg:col-span-2 xl:col-start-10 xl:col-end-12 xl:row-start-3 xl:row-end-7 bg-white/5 rounded-3xl flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-xl font-bold mb-2">Social Media Marketing and Branding</h2>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesGrid;