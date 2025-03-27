'use client';


import Link from "next/link";

const ServicesGrid = () => {


  return (
    <section className="bg-black py-20 relative overflow-hidden">

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 to-secondary z-10" />

      <div className="container mx-auto px-4 relative z-20">
        {/* Header */}


        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get our Professional Services
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Jerika Inc gives the most Professional Tech Services with over 2000+ Experienced Software Engineers
          </p>
        </div>


        <div className="flex w-full overflow-x-auto sm:overflow-hidden flex-col md:flex-row md:h-[600px] gap-5">
          {/* Column 1 */}

          <div className="hover:md:w-3/4 w-full md:w-1/3 lg:w-1/6 xl:w-1/6 flex flex-col gap-5 transition-all">


            <Link
              href={`services/jerika-inc-managed-it-services`}
              className="group relative md:hover:h-5/6 md:h-2/3 h-52 hover:h-[50vh] transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4 overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundImage: "url('/images/services/it-services.png')" }}
              ></div>

              {/* Content */}
              <h2 className="relative text-xl group-hover:text-3xl font-bold mb-2 text-white z-10">
                Managed IT Services
              </h2>
            </Link>

            <Link
              href={`services/managed-security-services`}
              className="group relative md:hover:h-5/6 md:h-1/3 h-52 hover:h-[50vh] transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4 overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundImage: "url('/images/services/it-security.png')" }}
              ></div>

              {/* Content */}
              <h2 className="relative text-xl group-hover:text-3xl font-bold mb-2 text-white z-10">
                Managed Security Services
              </h2>
            </Link>

          </div>


          {/* Column 2 */}
          <div className="md:hover:w-11/12 w-full md:w-1/3 lg:w-2/3 xl:w-2/3 flex flex-col gap-5 transition-all">
            {/* Row for Sub Column 1 and Sub Column 2 */}
            <div className="hover:h-4/5 flex flex-col gap-5 lg:flex-row lg:h-1/3 h-1/2">

              <Link
                href={`services/data-backup-disaster-recovery`}
                className="group relative hover:h-5/6 lg:hover:w-11/12 md:hover:h-full w-full lg:w-1/2 lg:h-full md:h-1/2 h-52 transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4 overflow-hidden"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ backgroundImage: "url('/images/services/data-backup.jpg')" }}
                ></div>

                {/* Content */}
                <h2 className="relative text-xl group-hover:text-3xl font-bold mb-2 text-white z-10">
                  Data Backup + Disaster Recovery
                </h2>
              </Link>

              <Link
                href={`services/co-managed-it-services`}
                className="group relative hover:h-5/6 lg:hover:w-11/12 md:hover:h-full w-full lg:w-1/2 lg:h-full md:h-1/2 h-52 transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4 overflow-hidden"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ backgroundImage: "url('/images/services/manage-service.png')" }}
                ></div>

                {/* Content */}
                <h2 className="relative text-xl group-hover:text-3xl font-bold mb-2 text-white z-10">
                  Co-Managed IT Services
                </h2>
              </Link>

            </div>
            {/* Sub Column 3 */}
            <Link
              href={`services/web-development-hosting`}
              className="group relative hover:h-4/5 lg:h-2/3 md:h-1/2 h-52 w-full transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4 overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundImage: "url('/images/services/web-development.jpg')" }}
              ></div>

              {/* Content */}
              <h2 className="relative text-xl group-hover:text-3xl font-bold mb-2 text-white z-10">
                Web Development and Hosting
              </h2>
            </Link>

          </div>
          {/* Column 3 */}
          <div className="hover:md:w-3/4 w-full md:w-1/3 lg:w-1/6 xl:w-1/6 flex flex-col gap-5 transition-all">

            <Link
              href={`services/cloud-hosting-services`}
              className="group relative md:hover:h-5/6 md:h-1/3 h-52 hover:h-[50vh] transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4 overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundImage: "url('/images/services/cloud-hosting.jpg')" }}
              ></div>

              {/* Content */}
              <h2 className="relative text-xl group-hover:text-3xl font-bold mb-2 text-white z-10">
                Cloud Hosting Services
              </h2>
            </Link>

            <Link
              href={`services/social-media-marketing-branding`}
              className="group relative md:hover:h-5/6 md:h-2/3 h-52 hover:h-[50vh] transition-all duration-300 hover:shadow-lg bg-white/5 rounded-3xl flex flex-col items-center text-center justify-center p-4 overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundImage: "url('/images/services/social-media.jpg')" }}
              ></div>

              {/* Content */}
              <h2 className="relative text-xl group-hover:text-3xl font-bold mb-2 text-white z-10">
                Social Media Marketing and Branding
              </h2>
            </Link>


          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;