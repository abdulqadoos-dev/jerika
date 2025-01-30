import Image from "next/image";
import SecurityImage from "@/public/images/security-services.png";

const SecurityServices = () => {
  const services = [
    {
      title: "Security Advisory Services",
      description:
        "Our IT security services assess risks and define and implement business aligned strategies to optimize your security readiness.",
    },
    {
      title: "Data Protection and Privacy",
      description:
        "Protect critical data and help enterprises understand the use of critical content, all while meeting constantly increasing privacy requirements.",
    },
    {
      title: "Infrastructure and Endpoint Security",
      description:
        "Meet your unique security requirements through design, installation and integration of perimeter, network, endpoint and advanced threat-protection solutions.",
    },
    {
      title: "Security Risk Management",
      description:
        "We help identify your cyber risks, document a go-forward plan and carry out remediation projects.",
    },
    {
      title: "Identity and Access Management",
      description:
        "Access a variety of identity solutions - from provisioning and access governance to strong authentication and Public Key Infrastructure (PKI) to protect the enterprise.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-8 text-right">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-secondary ">
              Secure <span className="italic">your</span>
              <br />
              Tech <span className="text-3xl md:text-4xl lg:text-5xl">with our IT</span>
              <br />
              Security <span className="italic">Services.</span>
            </h1>
            <p className="text-gray-700 text-lg">
              Jerika Inc. help clients prevent potential attack pathways, reduce cyber risk and
              improve threat detection and incident response. Businesses of all sizes experience
              security issues today. Your company is a target, and an attack on your business
              can put you out of business. Here is the list of our solutions and service for
              enterprise to get true gains in security readiness.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
                <p className="text-secondary/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full">
          <Image
            src={SecurityImage}
            alt="IT Security Professional"
            fill
            className="h-2/3"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityServices;