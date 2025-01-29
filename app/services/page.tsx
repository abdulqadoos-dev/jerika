import Image from 'next/image';

import Button from "@/app/components/ui/Button";

import AboutMain from "@/public/images/about-main.png";
import AboutEra from "@/public/images/about-era.png";
import FlexibleIcon from "@/public/icons/flexible.svg";
import ComplianceIcon from "@/public/icons/compliance.svg";


export default function Services() {
   return (
      <>
         <section className="relative min-h-screen bg-header-background bg-no-repeat bg-cover">
            <div className="absolute inset-0 backdrop-blur bg-white/75" />
            <div className="container mx-auto lg:px-10 px-5 lg:py-32 py-28 relative z-10 ">
               <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 lg:gap-24 ">
                  {/* Left Column - Image and Stats */}
                  <div className="relative">
                     <div className="rounded-3xl overflow-hidden">
                        <Image
                           src={AboutMain}
                           alt="Professional woman with technology interface"
                           className="w-full h-auto"
                           priority
                        />
                     </div>

                     {/* Stats Overlay */}
                     <div className="absolute lg:-bottom-6 -bottom-5 left-0 lg:p-4 p-1 font-bold text-secondary">
                        <div className="lg:text-5xl text-2xl">50+</div>
                        <div className="lg:text-lg text-sm text-secondary/70">Active Exprets</div>
                     </div>

                     <div className="absolute lg:bottom-5 lg:right-5 lg:p-4 bottom-5 right-3 p-2 bg-white/30 backdrop-blur rounded-xl font-bold border-2 border-primary text-secondary">
                        <div className="lg:text-5xl text-2xl">27/7</div>
                        <div className="lg:text-lg text-sm text-secondary/70">IT Helpdesk</div>
                     </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="space-y-8 text-secondary">
                     <h1 className="text-4xl font-bold lg:text-8xl">
                        Choose Us <span className="italic">to</span>
                        <br />
                        <span className="text-3xl lg:text-6xl text-secondary">get the best</span>
                        <br />
                        IT Services.
                     </h1>


                     <div className="ml-5">
                        <ul className="list-disc pl-6 space-y-2 font-bold text-secondary">
                           <li className="">MANAGED IT SERVICES</li>
                           <li className="">CLOUD HOSTING</li>
                           <li className="">IT SECURITY SERVICES</li>
                           <li className="">DATA BACKUP RECOVERY</li>
                           <li className="">RECORDS MANAGEMENT</li>
                           <li className="">WEBSITE DESIGN</li>
                        </ul>
                     </div>

                     {/* CTA Box */}

                     {/* <div className="bg-white/20 backdrop-blur rounded-2xl p-6 shadow-lg border-2 border-primary">
                <div className="flex items-center justify-between flex-col-reverse gap-5 lg:flex-row ">
                  
                  <Button variant="primary" size="lg" className="lg:w-auto w-full">Contact Us</Button>

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
              </div> */}



                     <p className="text-secondary/70">
                        At <b> Jerika Inc,</b> we leverage our extensive experience and talented resource pool to deliver top-notch IT services for businesses globally. Over the years, we have succeeded in keeping up the trust placed in us by our customers and established long-term relations.
                     </p>

                  </div>

               </div>
            </div>
         </section>

         <section className="container mx-auto md:px-20 px-4 py-16 md:py-24">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
               <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight text-secondary">
                     New Era <span className="italic">of Technology</span>
                     <br />with <span className="font-bold">Jerika Inc</span>
                     <br />Managed IT Services.
                  </h1>
                  <p className="text-secondary/70">
                     It all depends on who is your IT Service provider. That's why we encourage
                     clients to ask questions when you are searching for an IT provider and
                     understand what's included in the managed services contract. We offer a large
                     variety of services. They can be either included in the our managed services
                     solution or we can scope out, design and implement as part of a your IT needs
                  </p>
               </div>
               <div className="relative">
                  <Image
                     src={AboutEra}
                     alt="IT Services Technology"
                     className="rounded-2xl"
                     width={600}
                     height={400}
                     priority
                  />
               </div>
            </div>

            {/* Features Section */}
            <div className="mt-20 grid md:grid-cols-7 gap-10">
               {/* Feature Cards */}

               <div className="md:col-span-4 grid md:grid-cols-2  gap-8">
                  <div className="bg-gray-100 rounded-3xl p-8 text-center  flex items-center justify-center flex-col border border-secondary/70">
                     <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg
                           width={88}
                           height={84}
                           viewBox="0 0 88 84"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <rect width={88} height={84} rx={15} fill="#CDA15B" />
                           <mask
                              id="mask0_2419_722"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={11}
                              y={9}
                              width={66}
                              height={66}
                           >
                              <rect x={11} y="9.33325" width="65.3333" height="65.3333" fill="#D9D9D9" />
                           </mask>
                           <g mask="url(#mask0_2419_722)">
                              <path
                                 d="M43.6665 68.2796C37.639 68.2796 32.5026 67.5598 28.2573 66.1202C24.0116 64.6806 21.8887 62.6782 21.8887 60.113C21.8887 58.8707 22.4558 57.741 23.5901 56.7238C24.7243 55.7061 26.2476 54.8833 28.16 54.2554L30.3854 56.2658C28.7729 56.7331 27.4073 57.3027 26.2885 57.9747C25.1701 58.6466 24.6109 59.3594 24.6109 60.113C24.6109 61.5022 26.396 62.7569 29.9662 63.8771C33.5364 64.9973 38.1031 65.5574 43.6665 65.5574C49.2298 65.5574 53.7965 64.9973 57.3667 63.8771C60.9369 62.7569 62.722 61.5022 62.722 60.113C62.722 59.3594 62.1628 58.6466 61.0444 57.9747C59.9256 57.3027 58.56 56.7331 56.9475 56.2658L59.1729 54.2554C61.0853 54.8833 62.6086 55.7061 63.7428 56.7238C64.8771 57.741 65.4442 58.8707 65.4442 60.113C65.4442 62.6782 63.3213 64.6806 59.0756 66.1202C54.8303 67.5598 49.6939 68.2796 43.6665 68.2796ZM43.6665 58.8567C42.9823 58.8567 42.3323 58.7303 41.7167 58.4776C41.1005 58.2244 40.5289 57.8796 40.0017 57.4431L22.8517 42.3192C22.5413 42.0297 22.3031 41.7051 22.1371 41.3453C21.9715 40.9859 21.8887 40.6125 21.8887 40.2251V34.8854C21.8887 34.463 21.9488 34.0636 22.069 33.687C22.1897 33.31 22.4052 32.9765 22.7155 32.6866L39.9704 16.6411C40.4626 16.1597 41.0282 15.7986 41.667 15.5577C42.3053 15.3167 42.9718 15.1963 43.6665 15.1963C44.3611 15.1963 45.0276 15.3167 45.6659 15.5577C46.3047 15.7986 46.8703 16.1597 47.3625 16.6411L64.6174 32.6866C64.9277 32.9765 65.1432 33.31 65.2639 33.687C65.3841 34.0636 65.4442 34.463 65.4442 34.8854V40.2251C65.4442 40.6125 65.3614 40.9859 65.1958 41.3453C65.0298 41.7051 64.7916 42.0297 64.4812 42.3192L47.3312 57.4431C46.804 57.8796 46.2324 58.2244 45.6162 58.4776C45.0006 58.7303 44.3506 58.8567 43.6665 58.8567ZM35.4998 37.2361C36.3128 37.2361 36.9961 36.9595 37.5496 36.4065C38.1027 35.8534 38.3792 35.1701 38.3792 34.3566C38.3792 33.5436 38.1027 32.8606 37.5496 32.3075C36.9961 31.754 36.3128 31.4772 35.4998 31.4772C34.6867 31.4772 34.0035 31.754 33.45 32.3075C32.8969 32.8606 32.6204 33.5436 32.6204 34.3566C32.6204 35.1701 32.8969 35.8534 33.45 36.4065C34.0035 36.9595 34.6867 37.2361 35.4998 37.2361ZM39.8451 41.2255C41.6214 41.9337 43.4562 42.1091 45.3495 41.7516C47.2428 41.3936 48.919 40.576 50.3781 39.2988C51.7111 38.1224 52.6071 36.6758 53.0663 34.9589C53.525 33.2417 53.4524 31.5507 52.8485 29.8861L39.8451 41.2255ZM43.6665 29.0694C44.4795 29.0694 45.1628 28.7929 45.7163 28.2398C46.2693 27.6868 46.5459 27.0035 46.5459 26.19C46.5459 25.3769 46.2693 24.6939 45.7163 24.1408C45.1628 23.5873 44.4795 23.3106 43.6665 23.3106C42.8534 23.3106 42.1701 23.5873 41.6166 24.1408C41.0636 24.6939 40.787 25.3769 40.787 26.19C40.787 27.0035 41.0636 27.6868 41.6166 28.2398C42.1701 28.7929 42.8534 29.0694 43.6665 29.0694Z"
                                 fill="black"
                              />
                           </g>
                        </svg>

                     </div>
                     <h3 className="text-2xl font-bold mb-4 text-secondary">Flexible Solutions</h3>
                     <p className="text-secondary/70">
                        From smart industrial robotics to AI-powered systems, we offer comprehensive
                     </p>
                  </div>

                  <div className="bg-gray-100 rounded-3xl p-8 text-center flex items-center justify-center flex-col border border-secondary/70">
                     <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg
                           width={88}
                           height={84}
                           viewBox="0 0 88 84"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <rect width={88} height={84} rx={15} fill="#CDA15B" />
                           <mask
                              id="mask0_2419_727"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={11}
                              y={9}
                              width={66}
                              height={66}
                           >
                              <rect x={11} y="9.33325" width="65.3333" height="65.3333" fill="#D9D9D9" />
                           </mask>
                           <g mask="url(#mask0_2419_727)">
                              <path
                                 d="M45.2164 69.2223C41.7052 69.2223 38.4211 68.3802 35.364 66.696C32.307 65.0123 29.8395 62.668 27.9616 59.6632L17.6172 43.0365L18.4393 42.2144C18.9279 41.7153 19.5098 41.4327 20.1849 41.3664C20.8605 41.3002 21.4809 41.4608 22.0462 41.8483L32.7779 48.9574V22.9445C32.7779 22.5919 32.9079 22.2771 33.1679 21.9999C33.4279 21.7222 33.7516 21.5834 34.139 21.5834C34.4916 21.5834 34.8064 21.7222 35.0836 21.9999C35.3613 22.2771 35.5001 22.5919 35.5001 22.9445V40.6389H42.7766V17.5C42.7766 17.1475 42.9066 16.8326 43.1666 16.5554C43.4266 16.2777 43.7503 16.1389 44.1378 16.1389C44.5252 16.1389 44.8489 16.2777 45.1089 16.5554C45.3689 16.8326 45.4989 17.1475 45.4989 17.5V40.6389H52.776V20.2222C52.776 19.8697 52.906 19.5549 53.166 19.2776C53.426 19 53.7497 18.8611 54.1372 18.8611C54.5242 18.8611 54.8479 19 55.1083 19.2776C55.3683 19.5549 55.4983 19.8697 55.4983 20.2222V40.6389H62.7224V24.3056C62.7224 23.9531 62.8524 23.6382 63.1123 23.361C63.3723 23.0833 63.696 22.9445 64.0835 22.9445C64.436 22.9445 64.7509 23.0833 65.0281 23.361C65.3058 23.6382 65.4446 23.9531 65.4446 24.3056V49.0465C65.4446 54.6688 63.4789 59.437 59.5476 63.3511C55.6158 67.2652 50.8387 69.2223 45.2164 69.2223Z"
                                 fill="#1C1B1F"
                              />
                           </g>
                        </svg>
                     </div>
                     <h3 className="text-2xl font-bold mb-4 text-secondary">Compliance Audits</h3>
                     <p className="text-secondary/70">
                        Security and compliance assessments to meet industry standards.
                     </p>
                  </div>
               </div>

               {/* Why Jerika Inc Section */}
               <div className="space-y-6 md:col-span-3">
                  <h2 className="text-3xl font-bold text-secondary">Why Jerika Inc?</h2>
                  <ul className="ml-5 list-disc space-y-1 text-secondary/70">
                     <li><strong>Comprehensive IT Services</strong> tailored to your needs.</li>
                     <li><strong>24/7 Support HelpDesk</strong> always available with end-user assistance.</li>
                     <li><strong>Strategic IT Planning</strong> for high potential of your systems and technology.</li>
                     <li><strong>Optimized IT tools and practices</strong> to enhance productivity.</li>
                     <li><strong>Multi-Layered Protection</strong> with top-tier network security tools.</li>
                     <li><strong>Proactive Monitoring 24/7</strong> IT security monitoring, alerts, and reporting.</li>
                     <li><strong>Timely Updated</strong> Softwares, patches, and hotfixes.</li>
                     <li><strong>Remote Server Management</strong>, maintenance and updates.</li>
                     <li><strong>Workstation Setup</strong> Purchase, configure, and install end-user products.</li>
                     <li><strong>License Management</strong> Track and manage software licenses.</li>
                     <li><strong>Vendor Coordination</strong> Seamless relationships and support with vendors.</li>
                  </ul>
               </div>
            </div>
         </section>

      </>
   )
}