import Image from 'next/image';
import Link from 'next/link';
import heroWoman from "@/public/images/hero-woman.png";
import Consultation from '@/app/components/Consultation';
import Button from "@/app/components/ui/Button";
import MissionSection from '@/app/components/MissionSection';
import ServicesGrid from '@/app/components/ServicesGrid';
import BrandsSlider from '@/app/components/BrandsSlider';

export default function Home() {
  return (
    <>
      <section className="relative  bg-header-background bg-no-repeat bg-cover">
        <div className="absolute inset-0 backdrop-blur-xl bg-white/15 " />
        <div className="container mx-auto lg:px-10 px-5 lg:py-32 py-28 relative z-10 ">
          <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 xl:gap-24 ">
            {/* Left Column - Image and Stats */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden p-0 md:p-3">
                <Image
                  src={heroWoman}
                  alt="Professional woman with technology interface"
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Stats Overlay */}
              <div className="absolute lg:bottom-4 bottom-0 left-0 lg:p-4 p-1 font-bold text-secondary">
                <div className="lg:text-5xl text-2xl ">30+</div>
                <div className="lg:text-lg text-sm text-secondary/70">Happy Clients</div>
              </div>

              <div className="absolute lg:bottom-12 lg:right-12 lg:p-4 bottom-5 right-5 p-2 bg-white/30 backdrop-blur rounded-xl font-bold border-2 border-primary text-secondary">
                <div className="lg:text-5xl text-2xl">20+</div>
                <div className="lg:text-lg text-sm text-secondary/70">Professionals</div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8 text-secondary">
              <h1 className="text-4xl font-bold xl:text-6xl">
                Jerika Inc.
                <br />
                <span className="text-sm lg:text-xl xl:text-2xl text-secondary/90 uppercase"> Simplifying IT, Empowering Businesses</span>
              </h1>

              {/* CTA Box */}
              <div className="bg-white/20 backdrop-blur rounded-2xl p-6 shadow-lg border-2 border-primary">
                <div className="flex items-center justify-between flex-col-reverse gap-5 lg:gap-3 xl:gap-5 lg:flex-row ">

                  <Link href="https://calendly.com/jerika-info/30min?background_color=1a1a1a&text_color=ffffff&primary_color=cda15b&month=2025-03" className='w-full md:w-auto'>
                    <Button variant="primary" size="lg" className="lg:w-auto w-full"> Schedule Meeting</Button>
                  </Link>

                  <div className="flex gap-12  lg:gap-2 xl:gap-10">
                    <div>
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-secondary/70">Projects Done</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">20+</div>
                      <div className="text-secondary/70">Active Experts</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Description */}
              <div className="text-secondary space-y-2">
                <h2 className="text-3xl font-bold">Business with Jerika Inc.</h2>
                <p className="text-secondary/70">
                  With a team of 20+ skilled engineers in your timezone, Jerika Inc. is dedicated to delivering innovative, tailored solutions for your business. We prioritize seamless integration, efficiency, and on-time execution to bring your vision to life. Whether you need IT infrastructure enhancements, brand management, or social media optimization, our experts are here to help. Let’s collaborate to drive your business forward with cutting-edge technology and strategic insights. At Jerika Inc., your success is our priority.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <BrandsSlider />

      <ServicesGrid />

      <MissionSection />

      <Consultation />

    </>
  );
}