'use client';

import Image from 'next/image';
import Link from 'next/link';

import Button from "@/app/components/ui/Button";

const images = [
  '/image1.jpg',  // Replace with your actual image paths
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg'
];

const Consultation = () => {
  return (
    <section className="relative min-h-screen bg-secondary overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-white/30 to-secondary z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Schedule Consultation
            <span className="block">with one of our Experts.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Take the first step towards a brighter future and supercharge your business with
            cutting-edge technologies, expert guidance, and unparalleled support.
          </p>
          <Button variant="primary" size="lg" className="lg:w-auto w-full">Schedule Meeting</Button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="absolute inset-0 w-full h-full">
        <div className="flex gap-4 absolute bottom-0 w-full h-60 md:h-80">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-1/4 h-full overflow-hidden rounded-t-2xl"
            >
              <Image
                src={image}
                alt={`Consultation image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 25vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultation;