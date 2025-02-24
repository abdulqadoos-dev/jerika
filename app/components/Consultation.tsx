'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from "@/app/components/ui/Button";

const images = [
  '/images/consultation-1.png',
  '/images/consultation-2.png',
  '/images/consultation-3.png',
  '/images/consultation-4.png'
];

const Consultation = () => {
  return (
    <section className="relative bg-secondary overflow-hidden md:pt-28 pt-10 p-5">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

      <div className="flex flex-col md:justify-between md:gap-40 gap-10 relative z-20  ">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Schedule Consultation
            <span className="block">with one of our Experts.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Take the first step towards a brighter future and supercharge your business with
            cutting-edge technologies, expert guidance, and unparalleled support.
          </p>
          <Button variant="primary" size="lg" className="lg:w-auto w-full">
            <Link href="https://jerika.screenconnect.com/" target='_blank'> Schedule Meeting</Link>
            </Button>
        </div>

        <div className="flex md:flex-row flex-col mx-auto text-center w-full ">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full transform transition-transform duration-300`}
              style={{ transform: `rotate(${index % 2 === 0 ? '10deg' : '-10deg'})` }}
            >
              <Image
                src={image}
                alt="Professional woman with technology interface"
                className="w-full h-auto"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Consultation;