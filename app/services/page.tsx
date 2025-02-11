
import Consultation from '@/app/components/Consultation';
import WebServicesSection from '@/app/components/WebServicesSection';
import FAQSection from '@/app/components/FAQSection';

export default function Services() {
   return (
      <>
         <section className="relative min-h-screen bg-header-background bg-no-repeat bg-cover flex items-center">
            <div className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-b from-transparent to-white" />

            <div className="container mx-auto lg:px-10 px-5 lg:py-32 py-28 relative z-10 flex flex-col md:gap-40 gap-10">

               <div className="text-center space-y-5">
                  <h2 className="font-extrabold text-secondary md:text-8xl text-3xl ">
                     <span className="font-light italic">Our</span> Services
                  </h2>
                  {/* <p className="text-primary text-lg md:text-4xl md:tracking-[0.25em] font-bold ">We Get the Right Person for the Right Job</p> */}
               </div>


               <div className="grid md:grid-cols-4 grid-cols-2 gap-12 text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 h-80 flex items-center justify-center flex-col">
                     <div className=" p-3 md:p-5 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg
                           width={86}
                           height={92}
                           viewBox="0 0 86 92"
                           fill="none"
                           className="h-14 w-14"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M65.1715 40.5734C66.7989 40.5734 68.2153 39.9857 69.4208 38.8104C70.6263 37.635 71.229 36.2336 71.229 34.6062V21.0446C71.229 19.3569 70.6413 17.9254 69.466 16.75C68.2906 15.5747 66.8591 14.987 65.1715 14.987H51.6098C49.9824 14.987 48.581 15.5898 47.4057 16.7952C46.2303 18.0007 45.6427 19.4172 45.6427 21.0446V26.198H39.9468V6.75961C39.9468 5.13221 39.344 3.73084 38.1385 2.5555C36.9331 1.38015 35.5166 0.792479 33.8892 0.792479H6.31381C4.68641 0.792479 3.28504 1.38015 2.1097 2.5555C0.934352 3.73084 0.34668 5.13221 0.34668 6.75961V34.335C0.34668 35.9624 0.934352 37.3789 2.1097 38.5843C3.28504 39.7898 4.68641 40.3926 6.31381 40.3926H22.0454V51.6035H6.31381C4.68641 51.6035 3.28504 52.2063 2.1097 53.4118C0.934352 54.6172 0.34668 56.0337 0.34668 57.6611V85.2365C0.34668 86.8639 0.934352 88.2653 2.1097 89.4406C3.28504 90.6159 4.68641 91.2036 6.31381 91.2036H33.8892C35.5166 91.2036 36.9331 90.6159 38.1385 89.4406C39.344 88.2653 39.9468 86.8639 39.9468 85.2365V65.7981H55.6783C57.3057 65.7981 58.7071 65.1953 59.8824 63.9899C61.0578 62.7844 61.6454 61.3679 61.6454 59.7405V40.5734H65.1715ZM48.807 21.0446C48.807 20.261 49.0783 19.598 49.6207 19.0555C50.1632 18.5131 50.8262 18.2418 51.6098 18.2418H65.1715C65.955 18.2418 66.618 18.5131 67.1605 19.0555C67.703 19.598 67.9742 20.261 67.9742 21.0446V34.6062C67.9742 35.3898 67.703 36.0528 67.1605 36.5953C66.618 37.1378 65.955 37.409 65.1715 37.409H61.6454V32.1651C61.6454 30.5377 61.0578 29.1364 59.8824 27.961C58.7071 26.7857 57.3057 26.198 55.6783 26.198H48.807V21.0446ZM48.807 29.4528H55.6783C56.4016 29.4528 57.0345 29.724 57.5769 30.2665C58.1194 30.809 58.3906 31.4419 58.3906 32.1651V37.409H51.6098C50.8262 37.409 50.1632 37.1378 49.6207 36.5953C49.0783 36.0528 48.807 35.3898 48.807 34.6062V29.4528ZM6.31381 37.1378C5.53025 37.1378 4.8823 36.8665 4.36998 36.3241C3.85765 35.7816 3.60148 35.1186 3.60148 34.335V6.75961C3.60148 6.03632 3.87271 5.40345 4.41518 4.86098C4.95765 4.31851 5.59053 4.04728 6.31381 4.04728H33.8892C34.6728 4.04728 35.3358 4.30344 35.8783 4.81577C36.4207 5.3281 36.692 5.97605 36.692 6.75961V26.198H28.1029C26.4755 26.198 25.0591 26.7857 23.8536 27.961C22.6481 29.1364 22.0454 30.5377 22.0454 32.1651V37.1378H6.31381ZM36.692 29.4528V34.335C36.692 35.1186 36.4207 35.7816 35.8783 36.3241C35.3358 36.8665 34.6728 37.1378 33.8892 37.1378H25.3002V32.1651C25.3002 31.3816 25.5714 30.7336 26.1139 30.2213C26.6563 29.709 27.3193 29.4528 28.1029 29.4528H36.692ZM36.692 85.2365C36.692 86.02 36.4207 86.668 35.8783 87.1803C35.3358 87.6926 34.6728 87.9488 33.8892 87.9488H6.31381C5.59053 87.9488 4.95765 87.6776 4.41518 87.1351C3.87271 86.5926 3.60148 85.9598 3.60148 85.2365V57.6611C3.60148 56.8775 3.85765 56.2145 4.36998 55.672C4.8823 55.1296 5.53025 54.8583 6.31381 54.8583H22.0454V59.7405C22.0454 61.4282 22.633 62.8597 23.8084 64.0351C24.9837 65.2104 26.4152 65.7981 28.1029 65.7981H36.692V85.2365ZM36.692 62.5433H28.1029C27.3193 62.5433 26.6563 62.2721 26.1139 61.7296C25.5714 61.1871 25.3002 60.5241 25.3002 59.7405V54.8583H33.8892C34.6728 54.8583 35.3358 55.1296 35.8783 55.672C36.4207 56.2145 36.692 56.8775 36.692 57.6611V62.5433ZM58.3906 59.7405C58.3906 60.5241 58.1345 61.1871 57.6221 61.7296C57.1098 62.2721 56.4619 62.5433 55.6783 62.5433H39.9468V57.6611C39.9468 55.9734 39.3591 54.5419 38.1837 53.3666C37.0084 52.1912 35.5769 51.6035 33.8892 51.6035H25.3002V40.3926H33.8892C35.5769 40.3926 37.0084 39.8049 38.1837 38.6295C39.3591 37.4542 39.9468 36.0227 39.9468 34.335V29.4528H45.6427V34.6062C45.6427 36.2336 46.2303 37.635 47.4057 38.8104C48.581 39.9857 49.9824 40.5734 51.6098 40.5734H58.3906V59.7405ZM79.7277 65.4364H68.9687C67.3413 65.4364 65.94 66.0392 64.7646 67.2447C63.5893 68.4501 63.0016 69.8666 63.0016 71.494V82.1625C63.0016 83.7899 63.5893 85.2063 64.7646 86.4118C65.94 87.6173 67.3413 88.22 68.9687 88.22H79.7277C81.3551 88.22 82.7564 87.6173 83.9318 86.4118C85.1071 85.2063 85.6948 83.7899 85.6948 82.1625V71.494C85.6948 69.8666 85.1071 68.4501 83.9318 67.2447C82.7564 66.0392 81.3551 65.4364 79.7277 65.4364ZM82.44 82.1625C82.44 82.9461 82.1838 83.6091 81.6715 84.1515C81.1592 84.694 80.5112 84.9652 79.7277 84.9652H68.9687C68.1852 84.9652 67.5222 84.694 66.9797 84.1515C66.4372 83.6091 66.166 82.9461 66.166 82.1625V71.494C66.166 70.7104 66.4372 70.0474 66.9797 69.5049C67.5222 68.9625 68.1852 68.6912 68.9687 68.6912H79.7277C80.5112 68.6912 81.1592 68.9625 81.6715 69.5049C82.1838 70.0474 82.44 70.7104 82.44 71.494V82.1625Z"
                              fill="black"
                           />
                        </svg>
                     </div>
                     <h3 className="md:text-2xl text-lg font-bold mb-4 text-secondary">Unique Technologies</h3>
                     <p className="text-secondary/70 text-sm md:text-base text-center">
                        Revolutionizing your software experience with one of a kind AI innovations
                     </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8  h-80 flex items-center justify-center flex-col">
                     <div className=" p-3 md:p-5 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg
                           width={92}
                           height={92}
                           viewBox="0 0 92 92"
                           fill="none"
                           className="h-14 w-14"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M87.813 40.3032L89.5305 38.6761C90.7358 37.4708 91.3384 35.9944 91.3384 34.2468C91.3384 32.4991 90.7358 31.0227 89.5305 29.8174L62.2314 2.51829C61.0261 1.31303 59.5497 0.710399 57.8021 0.710399C56.0544 0.710399 54.578 1.31303 53.3727 2.51829L51.7456 4.23578L50.4801 2.97026C49.2748 1.765 47.8135 1.16237 46.096 1.16237C44.3785 1.16237 42.9171 1.765 41.7118 2.97026L3.11338 41.5687C1.90812 42.774 1.30549 44.2354 1.30549 45.9529C1.30549 47.6704 1.90812 49.1317 3.11338 50.337L4.3789 51.6025L2.66141 53.32C1.45615 54.5253 0.853516 55.9866 0.853516 57.7041C0.853516 59.4216 1.45615 60.883 2.66141 62.0883L29.9606 89.3874C31.1658 90.5927 32.6272 91.1953 34.3447 91.1953C36.0622 91.1953 37.5236 90.5927 38.7288 89.3874L40.4463 87.6699L41.7118 88.9354C42.9171 90.1407 44.3785 90.7433 46.096 90.7433C47.8135 90.7433 49.2748 90.1407 50.4801 88.9354L89.0786 50.337C90.2838 49.1317 90.8865 47.6704 90.8865 45.9529C90.8865 44.2354 90.2838 42.774 89.0786 41.5687L87.813 40.3032ZM55.723 4.86855C56.3256 4.32618 57.0186 4.055 57.8021 4.055C58.5855 4.055 59.2785 4.32618 59.8811 4.86855L87.1803 32.1677C87.7226 32.7703 87.9938 33.4633 87.9938 34.2468C87.9938 35.0302 87.7226 35.7232 87.1803 36.3258L85.5532 38.0433L58.5252 11.0154C58.2239 10.7141 57.8473 10.5634 57.3953 10.5634C56.9433 10.5634 56.5667 10.7141 56.2654 11.0154L17.9381 49.3427L14.5935 45.9981L52.8304 7.67078L55.723 4.86855ZM40.4463 71.8509L20.1979 51.6025L51.7456 20.0548L71.994 40.3032L40.4463 71.8509ZM5.37324 43.8286L43.9717 5.32052C44.5743 4.77815 45.2824 4.50697 46.096 4.50697C46.9095 4.50697 47.6176 4.77815 48.2202 5.32052L49.4858 6.49565L11.1585 44.8229C10.8572 45.1242 10.7065 45.5009 10.7065 45.9529C10.7065 46.4048 10.8572 46.7815 11.1585 47.0828L38.1865 74.1107L34.8419 77.4553L5.37324 48.0771C4.77061 47.4745 4.4693 46.7664 4.4693 45.9529C4.4693 45.1393 4.77061 44.4312 5.37324 43.8286ZM36.469 87.1276C35.8663 87.6699 35.1733 87.9411 34.3899 87.9411C33.6065 87.9411 32.9134 87.6699 32.3108 87.1276L4.92127 59.8284C4.31864 59.2258 4.01732 58.5177 4.01732 57.7041C4.01732 56.8906 4.31864 56.1825 4.92127 55.5799L6.63876 53.8624L33.6667 80.8903C33.968 81.1917 34.3447 81.3423 34.7967 81.3423C35.2486 81.3423 35.6253 81.1917 35.9266 80.8903L74.2539 42.6535L77.5985 45.9981L36.469 87.1276ZM86.8187 48.0771L48.2202 86.6756C47.6176 87.218 46.9095 87.4891 46.096 87.4891C45.2824 87.4891 44.5743 87.218 43.9717 86.6756L42.7062 85.4101L81.0335 47.0828C81.3348 46.7815 81.4854 46.4048 81.4854 45.9529C81.4854 45.5009 81.3348 45.1242 81.0335 44.8229L54.0055 17.795L57.3501 14.4504L86.8187 43.8286C87.4213 44.4312 87.7226 45.1393 87.7226 45.9529C87.7226 46.7664 87.4213 47.4745 86.8187 48.0771Z"
                              fill="black"
                           />
                        </svg>
                     </div>
                     <h3 className="md:text-2xl text-lg font-bold mb-4 text-secondary">Endless Possibilities</h3>
                     <p className="text-secondary/70 text-sm md:text-base  text-center">
                        Revolutionizing your software experience with one of a kind AI innovations
                     </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center h-80 flex items-center justify-center flex-col">
                     <div className=" p-3 md:p-5 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg
                           width={79}
                           height={92}
                           viewBox="0 0 79 92"
                           fill="none"
                           className="h-14 w-14"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M51.6469 13.266C47.4273 13.4468 43.5694 14.3209 40.0732 15.8881C36.8784 17.3349 34.1357 19.3542 31.845 21.9462C29.675 24.3574 28.0324 27.1152 26.9172 30.2196C25.802 33.324 25.2444 36.5038 25.2444 39.7589C25.2444 43.014 25.802 46.1937 26.9172 49.2981C28.0324 52.4025 29.675 55.1603 31.845 57.5715C34.1357 60.1635 36.8784 62.1829 40.0732 63.6296C43.5694 65.1969 47.4273 66.0709 51.6469 66.2518C52.0086 66.1915 52.31 66.0106 52.5511 65.7092C52.7922 65.4078 52.9128 65.0612 52.9128 64.6694C52.9128 64.2776 52.7922 63.931 52.5511 63.6296C52.31 63.3282 52.0086 63.1474 51.6469 63.0871C47.4273 63.0871 43.5242 62.0473 39.9376 59.9676C36.3509 57.888 33.5178 55.0548 31.4382 51.4682C29.3585 47.8815 28.3187 43.9784 28.3187 39.7589C28.5598 33.8515 30.3079 28.9085 33.563 24.9301C36.4564 21.3133 40.2239 18.8418 44.8654 17.5157C49.3864 16.2498 53.8772 16.2498 58.3379 17.5157C62.9795 18.8418 66.7771 21.3133 69.7308 24.9301C72.9859 28.9085 74.734 33.8515 74.9751 39.7589C74.9148 40.0603 74.945 40.3767 75.0655 40.7083C75.1861 41.0398 75.382 41.296 75.6532 41.4768C75.9245 41.6577 76.2259 41.7481 76.5574 41.7481C76.889 41.7481 77.1904 41.6577 77.4616 41.4768C77.7329 41.296 77.9288 41.0398 78.0494 40.7083C78.1699 40.3767 78.2001 40.0603 78.1398 39.7589C78.1398 34.9968 76.9342 30.5361 74.523 26.3768C72.1721 22.3983 69.0074 19.2337 65.029 16.8828C60.8697 14.4716 56.409 13.266 51.6469 13.266ZM51.6469 75.4745C45.9203 75.2334 40.7363 74.058 36.0948 71.9482C31.7546 69.959 28.0474 67.2464 24.9732 63.8104C22.0797 60.5553 19.8494 56.7879 18.2821 52.508C16.8354 48.4693 16.1121 44.2196 16.1121 39.7589C16.1121 35.2982 16.8354 31.0485 18.2821 27.0097C19.8494 22.7299 22.0797 18.9624 24.9732 15.7073C28.0474 12.2714 31.7546 9.55878 36.0948 7.56956C40.7363 5.45977 45.9203 4.28432 51.6469 4.0432C52.0688 4.0432 52.4456 3.87743 52.7771 3.54589C53.1087 3.21435 53.2744 2.83761 53.2744 2.41565C53.2744 1.99369 53.1087 1.61695 52.7771 1.28541C52.4456 0.953869 52.0688 0.7881 51.6469 0.7881C44.5942 0.7881 38.0237 2.56635 31.9355 6.12285C26.0883 9.55878 21.4468 14.2003 18.0109 20.0474C14.4544 26.1357 12.6761 32.7062 12.6761 39.7589C12.6761 46.8116 14.4544 53.3821 18.0109 59.4703C21.4468 65.3174 26.0883 69.959 31.9355 73.3949C38.0237 76.9514 44.5942 78.7296 51.6469 78.7296C52.0688 78.7296 52.4456 78.5639 52.7771 78.2323C53.1087 77.9008 53.2744 77.524 53.2744 77.1021C53.2744 76.6801 53.1087 76.3034 52.7771 75.9718C52.4456 75.6403 52.0688 75.4745 51.6469 75.4745ZM51.6469 87.9524C45.1367 87.9524 38.8978 86.6865 32.9301 84.1548C27.1432 81.6833 22.0345 78.2323 17.604 73.8018C13.1734 69.3712 9.72242 64.2625 7.25096 58.4757C4.71921 52.508 3.45334 46.2691 3.45334 39.7589C3.45334 39.3369 3.28757 38.9602 2.95603 38.6286C2.6245 38.2971 2.24775 38.1313 1.82579 38.1313C1.40383 38.1313 1.02709 38.2971 0.695549 38.6286C0.364011 38.9602 0.198242 39.3369 0.198242 39.7589C0.198242 46.7513 1.55453 53.4122 4.26712 59.7416C6.85914 65.8901 10.5362 71.3454 15.2983 76.1075C20.0604 80.8696 25.5157 84.5466 31.6642 87.1386C37.9936 89.8512 44.6545 91.2075 51.6469 91.2075C52.0688 91.2075 52.4456 91.0418 52.7771 90.7102C53.1087 90.3787 53.2744 90.0019 53.2744 89.58C53.2744 89.158 53.1087 88.7813 52.7771 88.4497C52.4456 88.1182 52.0688 87.9524 51.6469 87.9524ZM51.6469 25.6534C49.1151 25.6534 46.7642 26.2864 44.5942 27.5522C42.4241 28.8181 40.7061 30.5361 39.4403 32.7062C38.1744 34.8762 37.5415 37.2271 37.5415 39.7589C37.662 43.3154 38.7169 46.2992 40.7061 48.7104C42.4543 50.8805 44.7147 52.3573 47.4876 53.1409C50.2605 53.9246 53.0183 53.9246 55.761 53.1409C58.5037 52.3573 60.7793 50.8805 62.5876 48.7104C64.5166 46.2992 65.5715 43.3154 65.7523 39.7589C65.7523 37.2271 65.1194 34.8762 63.8535 32.7062C62.5876 30.5361 60.8697 28.8181 58.6996 27.5522C56.5295 26.2864 54.1786 25.6534 51.6469 25.6534ZM51.6469 50.6092C49.6577 50.6092 47.8342 50.127 46.1765 49.1625C44.5188 48.198 43.2077 46.8869 42.2433 45.2292C41.2788 43.5716 40.7966 41.7481 40.7966 39.7589C40.9171 37.0463 41.7309 34.7557 43.2379 32.887C44.564 31.1992 46.2971 30.0539 48.437 29.4511C50.5769 28.8483 52.7169 28.8483 54.8568 29.4511C56.9967 30.0539 58.7297 31.1992 60.0559 32.887C61.5629 34.7557 62.3767 37.0463 62.4972 39.7589C62.4972 41.7481 62.015 43.5716 61.0505 45.2292C60.086 46.8869 58.775 48.198 57.1173 49.1625C55.4596 50.127 53.6361 50.6092 51.6469 50.6092Z"
                              fill="black"
                           />
                        </svg>
                     </div>
                     <h3 className="md:text-2xl text-lg font-bold mb-4 text-secondary">AI Experts</h3>
                     <p className="text-secondary/70 text-sm md:text-base text-center">
                        Revolutionizing your software experience with one of a kind AI innovations
                     </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8  h-80 flex items-center justify-center flex-col">
                     <div className=" p-3 md:p-5 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg
                           width={91}
                           height={92}
                           viewBox="0 0 91 92"
                           fill="none"
                           className="h-14 w-14"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M90.4344 28.5496C90.4946 23.0048 88.9879 17.9421 85.9141 13.3615C83.0814 9.14261 79.2994 5.88802 74.5682 3.59775C69.837 1.30748 64.9401 0.40343 59.8774 0.885592C54.3928 1.36775 49.5109 3.3868 45.2317 6.94275C40.9525 3.3868 36.0707 1.36775 30.5861 0.885592C25.5234 0.40343 20.6264 1.30748 15.8952 3.59775C11.164 5.88802 7.38205 9.14261 4.54935 13.3615C1.47557 17.9421 -0.0311879 23.0048 0.0290823 28.5496C0.0290823 31.7439 0.556446 34.8328 1.61117 37.8161C2.6659 40.7995 4.18773 43.5267 6.17664 45.9978C4.18773 48.4689 2.6659 51.1961 1.61117 54.1795C0.556446 57.1629 0.0290823 60.2517 0.0290823 63.446C-0.0311879 68.9909 1.47557 74.0536 4.54935 78.6341C7.38205 82.853 11.164 86.1076 15.8952 88.3979C20.6264 90.6882 25.5234 91.5922 30.5861 91.1101C36.0707 90.6279 40.9525 88.6088 45.2317 85.0529C49.5109 88.6088 54.3928 90.6279 59.8774 91.1101C64.9401 91.5922 69.837 90.6882 74.5682 88.3979C79.2994 86.1076 83.0814 82.853 85.9141 78.6341C88.9879 74.0536 90.4946 68.9909 90.4344 63.446C90.4344 60.2517 89.907 57.1629 88.8523 54.1795C87.7975 51.1961 86.2757 48.4689 84.2868 45.9978C86.2757 43.5267 87.7975 40.7995 88.8523 37.8161C89.907 34.8328 90.4344 31.7439 90.4344 28.5496ZM87.1798 28.5496C87.1798 31.2618 86.7428 33.8986 85.8689 36.4601C84.995 39.0216 83.7142 41.3872 82.0267 43.5569C79.4351 41.0255 76.4668 39.0818 73.1218 37.7257C69.7768 36.3697 66.2962 35.6916 62.6799 35.6916C59.0637 35.6916 55.5681 36.3697 52.1929 37.7257C48.8178 39.0818 45.8344 41.0255 43.2428 43.5569C41.0731 40.7845 39.5965 37.6956 38.8129 34.2903C38.0294 30.8851 37.9541 27.4798 38.5869 24.0745C39.2198 20.6693 40.5457 17.5202 42.5648 14.6272C44.5838 11.7342 47.085 9.39876 50.0684 7.62079C53.0518 5.84281 56.2762 4.74288 59.7418 4.32099C63.2073 3.8991 66.6276 4.21552 70.0028 5.27025C73.3779 6.32498 76.3613 8.01254 78.9529 10.3329C81.5445 12.6533 83.5636 15.3956 85.0101 18.5598C86.4565 21.724 87.1798 25.0539 87.1798 28.5496ZM27.7835 4.04978C30.4957 4.04978 33.1325 4.48674 35.694 5.36065C38.2555 6.23457 40.6211 7.51531 42.7908 9.20288C39.4157 12.6383 37.1103 16.6312 35.8748 21.1816C34.6392 25.732 34.5488 30.2974 35.6036 34.878C36.6583 39.4585 38.7828 43.5267 41.9771 47.0827L42.8812 47.9867C41.495 49.0716 39.9882 49.9757 38.3609 50.6989C33.8407 52.8686 29.0944 53.5617 24.1221 52.7782C19.1498 51.9947 14.8254 49.8853 11.1489 46.4499C7.47245 43.0145 5.07671 38.8558 3.96171 33.9739C2.84671 29.092 3.20833 24.3156 5.04658 19.6447C6.88482 14.9737 9.88326 11.2069 14.0419 8.34403C18.2005 5.48119 22.7811 4.04978 27.7835 4.04978ZM3.28367 63.446C3.28367 60.7339 3.72063 58.0971 4.59455 55.5356C5.46847 52.9741 6.74921 50.6085 8.43677 48.4388C11.2092 51.0907 14.3583 53.0946 17.8841 54.4507C21.4099 55.8068 25.0563 56.4246 28.8232 56.304C32.5901 56.1835 36.2213 55.3096 39.717 53.6823C42.3086 52.055 44.6893 50.1565 46.859 47.9867C48.6671 50.1565 50.0383 52.5673 50.9725 55.2192C51.9066 57.8711 52.3737 60.6133 52.3737 63.446C52.3737 67.906 51.2738 72.0044 49.0739 75.7412C46.8741 79.4779 43.8907 82.4462 40.1238 84.6461C36.3569 86.8459 32.2586 87.9609 27.8287 87.9911C23.3988 88.0212 19.3005 86.9213 15.5336 84.6913C11.7667 82.4613 8.78333 79.4779 6.58347 75.7412C4.3836 72.0044 3.28367 67.906 3.28367 63.446ZM62.6799 87.9459C59.9678 87.9459 57.331 87.5089 54.7695 86.635C52.208 85.7611 49.8424 84.4803 47.6727 82.7928C51.1683 79.2971 53.5189 75.1385 54.7243 70.3168C55.9297 65.7363 55.9297 61.1256 54.7243 56.4848C53.5189 51.6632 51.1683 47.5046 47.6727 44.0089C51.0478 41.4776 54.7695 39.8955 58.8377 39.2626C62.906 38.6298 66.8989 38.9914 70.8164 40.3475C74.734 41.7036 78.1091 43.9486 80.9418 47.0827C84.3169 50.8194 86.336 55.1288 86.999 60.0106C87.6017 64.5912 86.9236 69.0512 84.9648 73.3906C83.0061 77.7301 80.1282 81.1956 76.3311 83.7872C72.293 86.6199 67.7426 88.0061 62.6799 87.9459Z"
                              fill="black"
                           />
                        </svg>
                     </div>
                     <h3 className="md:text-2xl text-lg font-bold mb-4 text-secondary">Partners For AI</h3>
                     <p className="text-secondary/70 text-sm md:text-base  text-center">
                        Revolutionizing your software experience with one of a kind AI innovations
                     </p>
                  </div>

               </div>

            </div>
         </section>


         <section className="bg-white container mx-auto px-4 py-20">

            <div className="text-center">
               <p className="font-bold md:text-lg text-sm uppercase text-secondary/70">what we do</p>
               <h2 className="text-3xl md:text-5xl  font-bold text-secondary max-w-6xl mx-auto">
                  Empower Your Business with Innovative IT Solutions: Seamless Integration,  Robust Security, and  Unmatched Support, Service, SLA
               </h2>
            </div>

         </section>

         <WebServicesSection />
         <FAQSection />
         <Consultation />


      </>
   )
}