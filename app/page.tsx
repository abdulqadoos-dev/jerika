import Image from 'next/image';
import heroWoman from "@/public/images/hero-woman.png";


export default function Home() {
  return (
    <>
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-header-background bg-cover bg-no-repeat bg-center blur" />

        <div className="container mx-auto px-4 lg:py-20 py-5 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-10 items-center">
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
              <div className="absolute lg:bottom-4 bottom-0 left-0 lg:p-4 p-1 font-bold">
                <div className="lg:text-5xl text-2xl ">20+</div>
                <div className="lg:text-lg text-sm">Happy Clients</div>
              </div>

              <div className="absolute lg:bottom-5 lg:right-5 lg:p-4 bottom-5 right-3 p-2 bg-white/30 backdrop-blur rounded-xl font-bold border-2 border-[#CDA15B]">
                <div className="lg:text-5xl text-2xl ">71K+</div>
                <div className="lg:text-lg text-sm">Clients Active</div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <h1 className="text-6xl font-bold">
                Choose Us <span className="italic">for</span>
                <br />
                <span className="text-5xl">Smarter & Faster</span>
                <br />
                Solutions.
              </h1>

              {/* CTA Box */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <a href="#contact" className="bg-[#D4AA70] text-white px-8 py-3 rounded-lg font-medium">
                    Contact Us
                  </a>
                  <div className="flex gap-12">
                    <div>
                      <div className="text-3xl font-bold">100,000+</div>
                      <div className="text-gray-600">Projects Done</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-gray-600">Active Experts</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Business with Jerika Inc.</h2>
                <p className="text-gray-700">
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