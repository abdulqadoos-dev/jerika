import Image from 'next/image';

import MissionImage from "@/public/images/mission-image.png"

const MissionSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-48">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
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
            <p className="text-sm">Since 2020</p>
            <h2 className="text-4xl">Our Mission</h2>
          </div>

          <p className="text-secondary/70 leading-relaxed">
            {`Jerika Inc. is a client-focused IT integration and support firm, established on the foundation of delivering exceptional professional expertise and comprehensive solutions to meet our clients' complete IT needs. We provide a full spectrum of IT services, encompassing development, implementation, and maintenance. Our offerings include secure and efficient network design, successful systems integration, effective project management, technology installation, as well as proactive and reactive desktop support. With a decade of experience under our belt, we at Jerika Inc. pride ourselves on building lasting relationships with our clients, ensuring their technology infrastructure is not only robust but also adaptive to the ever-changing landscape of the digital world. Our mission is to empower businesses by delivering tailored IT solutions that drive efficiency, security, and growth.
            Our team of dedicated professionals works tirelessly to stay at the forefront of technological advancements, ensuring that our clients benefit from cutting-edge solutions that are both innovative and reliable. Whether you are a small business looking to establish a strong IT foundation or a large enterprise seeking to optimize your existing systems, Jerika Inc. is here to guide you every step of the way.
            We believe in a proactive approach to IT management, anticipating potential issues before they arise and implementing strategies to mitigate risks. Our comprehensive suite of services is designed to address every aspect of your IT needs, from strategic planning and systems integration to continuous support and improvement.
            At Jerika Inc., we understand that technology is a critical component of any successful business strategy. That's why we are committed to providing exceptional service and expertise, helping our clients achieve their goals and thrive in a competitive environment. Let us be your trusted partner in navigating the complexities of the IT world, so you can focus on what you do best: running your business.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;