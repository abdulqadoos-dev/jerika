import Image from 'next/image';

import AboutMain from "@/public/images/about-main.png";


import ManagedITServices from "@/app/components/ManagedITServices";
import WebServicesSection from '@/app/components/WebServicesSection';

export default function Services() {
   return (
      <>
         <section className="relative min-h-screen bg-header-background bg-no-repeat bg-cover">
            <div className="absolute inset-0 backdrop-blur bg-white/75" />
            <div className="container mx-auto lg:px-10 px-5 lg:py-32 py-28 relative z-10 ">
               <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 lg:gap-24 ">
                  {/* Left Column - Image and Stats */}
                  <div className="relative">
                     <div className="rounded-3xl overflow-hidden">
                        <Image
                           src={AboutMain}
                           alt="Professional woman with technology interface"
                           className="w-full h-auto"
                           priority
                        />
                     </div>

                     {/* Stats Overlay */}
                     <div className="absolute lg:-bottom-6 -bottom-5 left-0 lg:p-4 p-1 font-bold text-secondary">
                        <div className="lg:text-5xl text-2xl">50+</div>
                        <div className="lg:text-lg text-sm text-secondary/70">Active Exprets</div>
                     </div>

                     <div className="absolute lg:bottom-5 lg:right-5 lg:p-4 bottom-5 right-3 p-2 font-bold bg-white/30 backdrop-blur rounded-xl border-2 border-primary text-secondary">
                        <div className="lg:text-5xl text-2xl">27/7</div>
                        <div className="lg:text-lg text-sm text-secondary/70">IT Helpdesk</div>
                     </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="space-y-8 text-secondary">
                     <h1 className="text-4xl font-bold lg:text-8xl">
                        Choose Us <span className="italic">to</span>
                        <br />
                        <span className="text-3xl lg:text-6xl text-secondary">get the best</span>
                        <br />
                        IT Services.
                     </h1>


                     <div className="ml-5">
                        <ul className="list-disc pl-6 space-y-2 font-bold text-secondary">
                           <li className="">MANAGED IT SERVICES</li>
                           <li className="">CLOUD HOSTING</li>
                           <li className="">IT SECURITY SERVICES</li>
                           <li className="">DATA BACKUP RECOVERY</li>
                           <li className="">RECORDS MANAGEMENT</li>
                           <li className="">WEBSITE DESIGN</li>
                        </ul>
                     </div>

                     <p className="text-secondary/70">
                        At <b> Jerika Inc,</b> we leverage our extensive experience and talented resource pool to deliver top-notch IT services for businesses globally. Over the years, we have succeeded in keeping up the trust placed in us by our customers and established long-term relations.
                     </p>

                  </div>

               </div>
            </div>
         </section>


         <ManagedITServices />

         <WebServicesSection />



      </>
   )
}