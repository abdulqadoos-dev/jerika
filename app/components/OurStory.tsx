import React from 'react';
import Image from 'next/image';
import StoryImage from "@/public/images/our-story.png";

const OurStory = () => {
   return (
      <section className="bg-gradient-secondary-fade py-20">
         <div className="container mx-auto rounded-[50px] overflow-clip  relative bg-header-background bg-no-repeat md:bg-bottom bg-cover shadow-2xl">

            <div className="absolute inset-0 backdrop-blur-3xl bg-white/10" />

            <div className="grid md:grid-cols-5 gap-10 relative z-20 p-6 md:p-12">

               <div className="col-span-2"></div>
               <h1 className="text-4xl md:text-5xl font-bold text-secondary relative z-20 col-span-3 ">
                  Our <span className="italic">Story</span>
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
                     <p className="text-secondary/70 leading-relaxed">
                        <b>Jerika Inc </b>is founded on the principles of providing superior professional expertise and comprehensive solutions for our clients complete IT needs. We offer a full range of IT development, implementation and maintenance services; including a secure and proficient network design, successful systems integration, effective project management and installation of technologies, right through to pro-active and reactive desktop support. We specialize in IT services but also provide an excellent support for website designing, architecture, and data entry, as well as internal projects to support our own growing business.
                     </p>
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold mb-2 text-secondary">Reliability and Stability</h2>
                     <p className="text-secondary/70 leading-relaxed">
                        Only one thing is certain in IT: something will go wrong at some point. So, we design everything in our IT management architecture to combat that and eliminate single points of failure. For instance, our clients receive several methods of data backup, and our security tools offer anywhere from 5 to a dozen layers of protection. We will also ensure that the information confidentiality, integrity and availability is maintained by addressing all known and potential risk thru effective information system controls applied and continually improved to all projects, processes and activities. This can be done by ensuring compliance to applicable information security legal and statutory requirements of relevant parties.
                     </p>
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold mb-2 text-secondary">Quality Information Security Management System Policy</h2>
                     <p className="text-secondary/70 leading-relaxed">
                        The continuing Policy of Jerika Inc. is to provide a high quality, professional and efficient IT driven services to ensure the satisfaction of all of the requirements of our stakeholders. This achievement will result in securing efficiency, a strong customer focus and enhancement of long-term sustainability and profitability within the Organization.
                     </p>
                     <p className="text-secondary/70 leading-relaxed mt-3">
                        Through direction and support, each employee will have a proper understanding of the importance of the Quality System function, their responsibility to contribute to its effectiveness, and its direct relevance to the success of the Organisation. Equally, every employee is responsible for, and will be trained to perform the duties required by his or her specific role, as well as, become an advocate of the company brand by inspiring communities through its corporate social responsibility.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default OurStory;