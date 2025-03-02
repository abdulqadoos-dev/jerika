
import Button from "@/app/components/ui/Button";
import Consultation from '@/app/components/Consultation';

const ContactUs = () => {
  return (
    <>
      <section className="relative  bg-secondary bg-no-repeat bg-cover  min-h-screen flex items-center">

        <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

        <div className="container mx-auto relative z-20 mt-20">

          <h2 className="text-white lg:text-7xl text-6xl my-8 text-center font-bold">Contact  <span className="italic font-thin">Us </span> </h2>

          <div className="flex items-center justify-center lg:flex-row flex-col-reverse gap-20 w-full  lg:py-10 px-10">

            <img src="/images/contact-us.png" className="rounded-lg lg:w-[600px] opacity-80" alt="" />

            {/* Contact Form */}
            <div className=" space-y-6 ">
              <p className="text-lg text-white/80 font-bold">
                Contact us now and learn more about our Managed IT Services.
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 p-3 bg-white/10 backdrop-blur-lg block w-full rounded-lg text-white focus:outline-none "
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 p-3 bg-white/10 backdrop-blur-lg block w-full rounded-lg text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-1 p-3 bg-white/10 backdrop-blur-lg block w-full rounded-lg text-white focus:outline-none"
                  ></textarea>
                </div>

                <Button variant="primary" size="lg" className="lg:w-auto min-w-40"> Send Message</Button>
              </form>
            </div>


          </div>

          <div className="container mx-auto px-4 flex lg:flex-row flex-col items-center justify-between gap-10 my-20">

            <div className="flex items-center flex-col  ">
              <span className="text-5xl text-white/10 font-bold">01</span>
              <a href="mailto:constact@softdevai.com" className="text-2xl font-bold text-white/80">
                info@jerika.ca
              </a>
            </div>

            <div className="flex items-center flex-col  text-center">
              <span className="text-5xl text-white/10 font-bold">02</span>
              <p className="text-2xl font-bold text-white/80 ">1 King Street West, Toronto, ON M5H 1A1</p>
            </div>

            <div className="flex items-center flex-col ">
              <span className="text-5xl text-white/10 font-bold">03</span>
              <a href="" className="text-2xl text-end font-bold text-white/80">
                (647) 270-6400
              </a>
            </div>
          </div>
        </div>



      </section>
      <Consultation />


    </>
  );
};

export default ContactUs;