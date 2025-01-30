import React from 'react';

const DollarIcon = () => (
   <svg
      width={47}
      height={47}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className='w-10 h-10'
   >
      <mask
         id="mask0_2465_327"
         style={{ maskType: "alpha" }}
         maskUnits="userSpaceOnUse"
         x={0}
         y={0}
         width={47}
         height={47}
      >
         <rect
            x="0.607422"
            y="0.171303"
            width="46.0899"
            height="46.0899"
            fill="#D9D9D9"
         />
      </mask>
      <g mask="url(#mask0_2465_327)">
         <path
            d="M23.7859 35.8468L28.4097 31.234L23.7859 26.6212L22.5818 27.8253L25.2372 30.4807C23.7502 30.4881 22.4286 30.3132 21.2725 29.956C20.1167 29.5991 19.1905 29.0723 18.4937 28.3755C17.7796 27.6614 17.2422 26.8515 16.8815 25.9457C16.5208 25.0396 16.3404 24.1334 16.3404 23.2273C16.3404 22.6832 16.4001 22.1391 16.5195 21.595C16.6389 21.0508 16.8143 20.5351 17.0457 20.0476L15.746 18.8953C15.3741 19.5723 15.0971 20.2737 14.915 20.9996C14.7329 21.7256 14.6418 22.4644 14.6418 23.2163C14.6418 24.3573 14.8633 25.4833 15.3063 26.5943C15.7496 27.7056 16.4046 28.7007 17.2713 29.5796C18.1378 30.4585 19.2764 31.1116 20.6873 31.5389C22.0981 31.9658 23.5471 32.183 25.0341 32.1904L22.5818 34.6427L23.7859 35.8468ZM31.5967 27.5372C31.9686 26.8603 32.2456 26.1588 32.4277 25.4329C32.6098 24.707 32.7009 23.9681 32.7009 23.2163C32.7009 22.0791 32.4812 20.9494 32.0417 19.8272C31.6023 18.7051 30.9431 17.71 30.0642 16.8419C29.2099 15.963 28.073 15.3119 26.6535 14.8884C25.2343 14.4649 23.786 14.2532 22.3086 14.2532L24.761 11.7898L23.5569 10.5857L18.933 15.1985L23.5569 19.8114L24.761 18.6073L22.0945 15.9408C23.5741 15.9408 24.8975 16.1211 26.0644 16.4819C27.2314 16.8426 28.1633 17.3723 28.8601 18.071C29.5565 18.7694 30.0877 19.5726 30.4535 20.4806C30.8194 21.389 31.0023 22.2972 31.0023 23.2052C31.0023 23.7494 30.9426 24.2935 30.8232 24.8376C30.7038 25.3817 30.5283 25.8975 30.2965 26.385L31.5967 27.5372ZM23.6591 40.5C21.2692 40.5 19.0221 40.0465 16.918 39.1394C14.8142 38.2323 12.984 37.0013 11.4275 35.4464C9.87102 33.8915 8.63891 32.063 7.73119 29.9608C6.82316 27.8589 6.36914 25.6128 6.36914 23.2225C6.36914 20.8326 6.82268 18.5855 7.72975 16.4814C8.63683 14.3776 9.86782 12.5474 11.4227 10.9909C12.9776 9.43442 14.8062 8.20232 16.9084 7.2946C19.0103 6.38657 21.2564 5.93255 23.6466 5.93255C26.0366 5.93255 28.2836 6.38609 30.3878 7.29316C32.4916 8.20024 34.3217 9.43122 35.8782 10.9861C37.4347 12.541 38.6668 14.3696 39.5745 16.4718C40.4826 18.5737 40.9366 20.8198 40.9366 23.21C40.9366 25.6 40.4831 27.847 39.576 29.9512C38.6689 32.055 37.4379 33.8851 35.883 35.4416C34.3281 36.9981 32.4996 38.2302 30.3974 39.138C28.2955 40.046 26.0494 40.5 23.6591 40.5Z"
            fill="black"
         />
      </g>
   </svg>

);

const ITStaffingSection = () => {
   return (

      <div className="container mx-auto rounded-[50px] lg:px-10 overflow-clip px-5 lg:py-32 py-28 relative bg-web-service bg-no-repeat md:bg-bottom bg-cover ">

         <div className="absolute inset-0 backdrop-blur-3xl bg-secondary/40" />

         <div className="max-w-7xl mx-auto relative z-20">
            <div className="text-center mb-16">
               <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Get the Best <span className="text-white">IT Staffing System</span>
               </h1>
               <p className="text-xl md:text-2xl text-primary">
                  We Get the Right Person for the Right Job
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               {/* Card 1 */}
               <div className="bg-white/10 backdrop-blur rounded-3xl border border-white/50 text-secondary p-10 space-y-5">
                  <div className="flex gap-4 items-center">
                     <div className="bg-primary p-3 rounded-xl w-fit">
                        <DollarIcon  />
                     </div>
                     <h3 className="text-xl font-semibold text-white">
                        Flexible Staffing  <br /> Options
                     </h3>
                  </div>

                  <p className="text-white/70 leading-relaxed">
                     With persistent vacillation of business conditions, more companies are seeking to incorporate and expand their use of contingent workforce as it enables them to adapt more easily to the changing market. Temp staffing is ideal for companies who constantly work on time and cost saving constraints incurred on permanent hire thereby increasing hiring flexibility.
                  </p>
               </div>


               <div className="bg-white/10 backdrop-blur rounded-3xl border border-white/50 text-secondary p-10 space-y-5">
                  <div className="flex gap-4 items-center">
                     <div className="bg-primary p-3 rounded-xl w-fit">
                        <DollarIcon  />
                     </div>
                     <h3 className="text-xl font-semibold text-white">
                     Lower Costs & Increase <br /> Efficiency
                     </h3>
                  </div>

                  <p className="text-white/70 leading-relaxed">
                  Staffing adds value by turning fixed costs into variable ones. Hiring contractors helps businesses convert fixed overheads into flexible expenses. Tasks like writing job posts, reviewing resumes, conducting interviews, and checking references are time-consuming and drain resources. We take care of these tasks—finding, screening, and qualifying candidates. Additionally, we handle administrative responsibilities such as attendance, payroll, training, insurance, leave, and other employee benefits, so clients can focus on their core business.
                  </p>
               </div>



               <div className="bg-white/10 backdrop-blur rounded-3xl border border-white/50 text-secondary p-10 space-y-5">
                  <div className="flex gap-4 items-center">
                     <div className="bg-primary p-3 rounded-xl w-fit">
                        <DollarIcon  />
                     </div>
                     <h3 className="text-xl font-semibold text-white">
                     Gain Competitive <br /> Advantage
                     </h3>
                  </div>

                  <p className="text-white/70 leading-relaxed">
                     With outsourcing recruiting and hiring efforts, companies are freed from the cumbersome and time-consuming task of finding and retaining qualified professionals. Various researches conducted on companies that engage staffing firm talent have found that companies who engage contract professionals tend to do better economically.
                  </p>
               </div>




             
            </div>
         </div>
      </div>
   );
};

export default ITStaffingSection;