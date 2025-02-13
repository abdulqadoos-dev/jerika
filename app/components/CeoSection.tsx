import Image from 'next/image';
import CEOImage from "@/public/images/ceo.png";

const CeoSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image Container with rounded corners */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src={CEOImage}
                alt="CEO Manprit Nijjar"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4 text-secondary">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
                Meet Our{' '}
                <span className="font-bold">
                  C.E.O 
                  <br />
                  Co-Founder
                </span>
              </h2>
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                Manprit Nijjar.
              </h1> */}
            </div>
            
            <p className="text-secondary/70 text-lg leading-relaxed">
              Manprit has a bachelor's degree in Commerce from Concordia University, Montreal. Previously, she has worked in Montreal and Toronto's Financial District. She brings a wealth of expertise in the areas of metrics, reporting, mergers and acquisitions, capital markets, investor relations, forecasting, planning, and analysis. Her experience combines strategic vision with the discipline of controller-ship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;