import Image from 'next/image';

import AboutMain from "@/public/images/about-main.png";

import Consultation from '@/app/components/Consultation';
import OurStory from '@/app/components/OurStory';
import CeoSection from '@/app/components/CeoSection';
import BlogSection from '@/app/components/BlogSection';

import BlogOne from "@/public/images/blog-1.png";
import BlogTwo from "@/public/images/blog-2.png";
import BlogThree from "@/public/images/blog-3.png";



const blogPosts = [
   {
     id: 1,
     title: "Explore New Era of Automation with Jerika Inc",
     image: BlogOne,
     date: "25 Dec 2024",
     likes: "40.7k",
     comments: "15.2k",
     description: "From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly..."
   },
   {
     id: 2,
     title: "Revolutionize Your Business with Jerika Inc.",
     image: BlogTwo,
     date: "25 Dec 2024",
     likes: "40.7k",
     comments: "15.2k",
     description: "From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly..."
   },
   {
     id: 3,
     title: "Step into the World of Smart Technology",
     image: BlogThree,
     date: "25 Dec 2024",
     likes: "40.7k",
     comments: "15.2k",
     description: "From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly..."
   }
 ];

export default function About() {
   return (
      <>
         <section className="relative min-h-screen bg-secondary bg-no-repeat bg-cover">

            <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

            <div className="container mx-auto lg:px-10 px-5 lg:py-32 py-28 relative z-10 ">
               <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 lg:gap-24 ">

                  <div className="space-y-8 text-white text-right">
                     <h1 className="text-4xl font-bold lg:text-6xl">
                        Step   <span className="italic">into the</span>
                        <br />
                        <span className="text-3xl lg:text-6xl text-white">Digital Revolution</span>
                        <br />
                        <span className="italic">with </span> <span className="font-bold text-primary">Jerika Inc.</span>
                     </h1>


                     <div>
                        <p>Step into the future with</p>
                        <span className="font-bold text-primary text-4xl">Jerika Inc.</span>
                     </div>


                     <div>
                        <p className="italic">NEW ERA OF</p>
                        <p className="font-bold uppercase">technologies</p>
                     </div>

                     <p className="text-white/70">
                        At <b> Jerika Inc,</b> we leverage our extensive experience and talented resource pool to deliver top-notch IT services for businesses globally. Over the years, we have succeeded in keeping up the trust placed in us by our customers and established long-term relations.
                     </p>

                  </div>


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
                     <div className="absolute lg:-bottom-6 -bottom-5 left-0 lg:p-4 p-1 font-bold text-white">
                        <div className="lg:text-5xl text-2xl">50+</div>
                        <div className="lg:text-lg text-sm text-white/70">Active Exprets</div>
                     </div>

                     <div className="absolute lg:bottom-5 lg:right-5 lg:p-4 bottom-5 right-3 p-2 font-bold bg-white/30 backdrop-blur rounded-xl border-2 border-primary text-secondary">
                        <div className="lg:text-5xl text-2xl">27/7</div>
                        <div className="lg:text-lg text-sm text-secondary/70">IT Helpdesk</div>
                     </div>
                  </div>

                  {/* Right Column - Content */}

               </div>
            </div>
         </section>



         <OurStory />

         <CeoSection />

         <BlogSection blogPosts={blogPosts} />
         
         <Consultation />

 

 


      </>
   )
}