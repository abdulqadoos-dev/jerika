'use client';

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

        <div className="grid grid-cols-11 grid-rows-6 gap-4 h-[60vh] p-4 relative">

          <div className=" col-start-1 col-end-3 row-start-1 row-end-5 bg-white/5  rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-fade-in ">
            <h2 className="text-xl font-bold mb-2">Managed IT Services</h2>
          </div>

          <div className=" col-start-1 col-end-3 row-start-5 row-end-7 bg-white/5  rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-slide-in-up delay-200 ">
            <h2 className="text-xl font-bold mb-2">Managed Security Services</h2>
          </div>

          <div className=" col-start-3 col-end-6 row-start-1 row-end-3 bg-white/5  rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-scale-in delay-300 ">
            <h2 className="text-xl font-bold mb-2">Data Backup + Disaster Recovery</h2>
          </div>

          <div className=" col-start-6 col-end-10 row-start-1 row-end-3 bg-white/5  rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-slide-in-right delay-400 ">
            <h2 className="text-xl font-bold mb-2">Co-Managed IT Services</h2>
          </div>

          <div className=" col-start-3 col-end-10 row-start-3 row-end-7 bg-white/5  rounded-3xl flex flex-col items-center justify-center text-white text-center p-8 animate-fade-in delay-500 ">
            <h2 className="text-2xl font-bold mb-2">Web Development and Hosting</h2>
          </div>

          <div className=" col-start-10 col-end-12 row-start-1 row-end-3 bg-white/5  rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-rotate-in delay-600 ">
            <h2 className="text-xl font-bold mb-2">Cloud Hosting Services</h2>
          </div>

          <div className=" col-start-10 col-end-12 row-start-3 row-end-7 bg-white/5  rounded-3xl flex flex-col items-center justify-center text-white text-center p-4 animate-slide-in-left delay-700 ">
            <h2 className="text-xl font-bold mb-2">Social Media Marketing and Branding</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;