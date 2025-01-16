import Image from 'next/image';
import heroWoman from "@/public/images/hero-woman.png";
import Header from "@/app/components/Header";


export default function Home() {
  return (
    <>
      <section className="relative min-h-screen bg-header-background  bg-no-repeat bg-cover">

        <Header />
          
        <div className="absolute inset-0 backdrop-blur " />

        <div className="container mx-auto px-4 relative z-10 ">
          <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 lg:gap-24 ">
            {/* Left Column - Image and Stats */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src={heroWoman}
                  alt="Professional woman with technology interface"
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Stats Overlay */}
              <div className="absolute lg:bottom-4 bottom-0 left-0 lg:p-4 p-1 font-bold text-secondary">
                <div className="lg:text-5xl text-2xl ">20+</div>
                <div className="lg:text-lg text-sm text-secondary/70">Happy Clients</div>
              </div>

              <div className="absolute lg:bottom-5 lg:right-5 lg:p-4 bottom-5 right-3 p-2 bg-white/30 backdrop-blur rounded-xl font-bold border-2 border-primary text-secondary">
                <div className="lg:text-5xl text-2xl ">71K+</div>
                <div className="lg:text-lg text-sm text-secondary/70">Clients Active</div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8 text-secondary">
              <h1 className="text-4xl font-bold lg:text-6xl">
                Choose Us <span className="italic">for</span>
                <br />
                <span className="text-3xl lg:text-5xl text-secondary">Smarter & Faster</span>
                <br />
                Solutions.
              </h1>

              {/* CTA Box */}

              <div className="bg-white/20 backdrop-blur rounded-2xl p-6 shadow-lg border-2 border-primary">
                <div className="flex items-center justify-between flex-col-reverse gap-5 lg:flex-row ">
                  <a href="" className="bg-primary text-secondary px-8 py-3 rounded-xl font-bold w-full text-center lg:w-auto">
                    Contact Us
                  </a>
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
                <h2 className="text-2xl font-bold">Business with Jerika Inc.</h2>
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

    </>
  );
}