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
      <section className="relative min-h-screen bg-header-background bg-no-repeat bg-cover">
        <div className="absolute inset-0 backdrop-blur-xl bg-white/15 " />
        <div className="container mx-auto lg:px-10 px-5 lg:py-32 py-28 relative z-10 ">
          <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 lg:gap-24 ">
            {/* Left Column - Image and Stats */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden p-5">
                <Image
                  src={heroWoman}
                  alt="Professional woman with technology interface"
                  className="w-full h-auto "
                  priority
                />
              </div>

              {/* Stats Overlay */}
              <div className="absolute lg:bottom-4 bottom-0 left-0 lg:p-4 p-1 font-bold text-secondary">
                <div className="lg:text-5xl text-2xl ">30+</div>
                <div className="lg:text-lg text-sm text-secondary/70">Happy Clients</div>
              </div>

              <div className="absolute lg:bottom-12 lg:right-12 lg:p-4 bottom-5 right-3 p-2 bg-white/30 backdrop-blur rounded-xl font-bold border-2 border-primary text-secondary">
                <div className="lg:text-5xl text-2xl ">10+</div>
                <div className="lg:text-lg text-sm text-secondary/70">Professionals</div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8 text-secondary">
              <h1 className="text-4xl font-bold lg:text-7xl">
                Jerika Inc.
                <br />
                <span className="text-3xl lg:text-4xl text-secondary"> Simplifying IT, Empowering Business</span>
              </h1>

              {/* CTA Box */}

              <div className="bg-white/20 backdrop-blur rounded-2xl p-6 shadow-lg border-2 border-primary">
                <div className="flex items-center justify-between flex-col-reverse gap-5 lg:flex-row ">

                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="lg:w-auto w-full">Contact Us</Button>
                  </Link>

                  <div className="flex gap-12">
                    <div>
                      <div className="text-3xl font-bold">400+</div>
                      <div className="text-secondary/70">Projects Done</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-secondary/70">Active Experts</div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Business Description */}
              <div className="text-secondary space-y-2">
                <h2 className="text-3xl font-bold">Business with Jerika Inc.</h2>
                <p className="text-secondary/70">
                  With over 2000+ passionate and experienced software engineers with professional
                  skillsets in 100+ technologies, in your timezone. With over 2000+ passionate and
                  experienced software engineers with professional skillsets in 100+ technologies, in
                  your timezone.
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