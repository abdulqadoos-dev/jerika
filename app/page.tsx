import Image from 'next/image';
import heroWoman from "@/public/images/hero-woman.png";
export default function Home() {
  return (
    <>

      <section className="relative min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Image and Stats */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={heroWoman}
                  alt="Professional woman with technology interface"
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 bg-black/20 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-4xl font-bold">7000 +</div>
                <div className="text-lg">Happy Clients</div>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-4xl font-bold">71K+</div>
                <div className="text-lg">Clients Active</div>
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