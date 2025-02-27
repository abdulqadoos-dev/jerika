import React from 'react';
import Image from 'next/image';
import StoryImage from "@/public/images/our-story.png";

const OurStory = () => {
   return (
      <section className="bg-gradient-secondary-fade py-20">
         <div className="container mx-auto rounded-[50px] overflow-clip  relative bg-header-background bg-no-repeat md:bg-bottom bg-cover shadow-2xl">

            <div className="absolute inset-0 backdrop-blur-3xl bg-white/10" />

            <div className="grid md:grid-cols-5 gap-10 relative z-20 p-6 md:p-12">

               <div className="md:col-span-2"></div>
               <h1 className="text-4xl md:text-5xl font-bold text-secondary relative z-20 md:col-span-3 col-span-5 md:text-left text-center">
                  Our <span className="italic font-light">Story</span>
               </h1>

               {/* Left side - Image */}
               <div className="md:col-span-2 col-span-5">
                  <Image
                     src={StoryImage}
                     alt="IT Professional working"
                     className="w-full"
                     priority
                  />
               </div>

               {/* Right side - Content */}

               <div className="space-y-4 md:col-span-3 col-span-5">
                  <div>
                  <h2 className="text-2xl font-bold mb-2 text-secondary">Jerika Inc.
                  </h2>
                     <p className="text-secondary/70 leading-relaxed">
                     Jerika Inc. is founded on the principles of delivering exceptional professional expertise and comprehensive solutions to meet our clients' complete IT needs. We offer a full spectrum of IT development, implementation, and maintenance services, including secure and efficient network design, successful systems integration, effective project management, and technology installation, as well as proactive and reactive desktop support. While our primary focus is on IT services, we also excel in website design, architecture, data entry, and internal projects that support our own business growth.
                     </p>
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold mb-2 text-secondary">Reliability and Stability</h2>
                     <p className="text-secondary/70 leading-relaxed">
                     In the realm of IT, one certainty exists: challenges will arise. Therefore, we construct our IT management architecture to mitigate these issues and eliminate single points of failure. For instance, our clients benefit from multiple data backup methods, and our security measures incorporate five to a dozen layers of protection. We are committed to maintaining the confidentiality, integrity, and availability of information by addressing all known and potential risks through effective information system controls that are continually refined across all projects, processes, and activities. This commitment includes ensuring compliance with applicable legal and statutory requirements related to information security.
                     </p>
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold mb-2 text-secondary">Quality Information Security Management System Policy</h2>
                     <p className="text-secondary/70 leading-relaxed">
                     Jerika Inc. is dedicated to providing high-quality, professional, and efficient IT-driven services to meet the needs of all stakeholders. Our efforts aim to enhance efficiency, foster a strong customer focus, and promote long-term sustainability and profitability within the organization.
                     </p>
                     <p className="text-secondary/70 leading-relaxed mt-3">
                     Through clear direction and support, each employee will gain a thorough understanding of the importance of our Quality System, their responsibilities in contributing to its effectiveness, and its direct impact on the organization's success. Furthermore, every employee is accountable for their specific roles and will receive training to perform their duties effectively. They will also be encouraged to advocate for the company brand by engaging with communities through our corporate social responsibility initiatives.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default OurStory;