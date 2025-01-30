import React from 'react';
import Image from 'next/image';

import NetworkMonitoring from "@/public/images/network-monitoring.png";

const NetworkMonitoringServices = () => {
  return (
    <div className="w-full container mx-auto p-6 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full md:w-1/2 rounded-3xl overflow-hidden">
          <Image
           src={NetworkMonitoring}
            alt="Network Security Professional"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl text-secondary md:text-5xl font-bold leading-tight">
            Revolutionize Your{' '}
            <span className="italic">Business with Our</span>
            {' '}Network Monitoring Services.
          </h1>
          
          <p className="text-lg text-secondary/70 leading-relaxed">
            Increase Control Of Your Network With Our Comprehensive Network Security Analysis, Design, Implementation And Management Services. We Have A Network Security Team That Specializes In Analyzing Your Current Network Against The Requirements Of Your Business, Finding Security Holes And Taking Remedial Action To Fill Them, To Protect Your Data And Your Brand Against A Damaging Breach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkMonitoringServices;