'use client';

import Image from 'next/image';

import cisco from "@/public/images/brands/cisco.png";
import connectwise from "@/public/images/brands/connectwise.png";
import datto from "@/public/images/brands/datto.png";
import dell from "@/public/images/brands/dell.png";
import google from "@/public/images/brands/google.png";
import microsoft from "@/public/images/brands/microsoft.png";

const logos = [
  { src: connectwise, alt: "ConnectWise Logo" },
  { src: google, alt: "Google Logo" },
  { src: cisco, alt: "Cisco Logo" },
  { src: microsoft, alt: "Microsoft Logo" },
  { src: dell, alt: "Dell Logo" },
  { src: datto, alt: "Datto Logo" },
  { src: connectwise, alt: "ConnectWise Logo" },
  { src: google, alt: "Google Logo" },
  { src: cisco, alt: "Cisco Logo" },
  { src: microsoft, alt: "Microsoft Logo" },
  { src: dell, alt: "Dell Logo" },
  { src: datto, alt: "Datto Logo" },
  { src: connectwise, alt: "ConnectWise Logo" },
  { src: google, alt: "Google Logo" },
  { src: cisco, alt: "Cisco Logo" },
  { src: microsoft, alt: "Microsoft Logo" },
  { src: dell, alt: "Dell Logo" },
  { src: datto, alt: "Datto Logo" },
  { src: connectwise, alt: "ConnectWise Logo" },
  { src: google, alt: "Google Logo" },
  { src: cisco, alt: "Cisco Logo" },
  { src: microsoft, alt: "Microsoft Logo" },
  { src: dell, alt: "Dell Logo" },
  { src: datto, alt: "Datto Logo" },
];

const BrandsSlider = () => {
  return (
    <div className="bg-black w-full overflow-hidden py-10">
      <div className="inline-flex flex-nowrap">
        {/* Track */}
        <div className="flex items-center animate-infinite-scroll">
          {/* First set */}
          <div className="flex items-center gap-24">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto object-contain brightness-200"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider;