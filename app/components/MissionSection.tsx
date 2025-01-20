import Image from 'next/image';

import MissionImage from "@/public/images/mission-image.png"

const MissionSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image Container with rounded corners */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-square w-full max-w-lg  mx-auto rounded-3xl overflow-hidden">
            <Image
              src={MissionImage}
              alt="3D holographic airplane visualization"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2 text-secondary font-bold">
            <p className="text-sm">Since 2010</p>
            <h2 className="text-4xl">Our Mission</h2>
          </div>
          
          <p className="text-secondary/70 leading-relaxed">
            Jerika Inc. is a customer-oriented IT integration and support company founded on the 
            principles of providing superior professional expertise and comprehensive solutions for 
            our clients complete IT needs. We offer a full range of IT services, IT development, 
            implementation and maintenance services, including secure and proficient network 
            design, successful systems integration, effective project management and installation of 
            technologies, right through to pro-active and reactive desktop support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;