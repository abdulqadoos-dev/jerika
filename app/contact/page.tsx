
import Button from "@/app/components/ui/Button";

const ContactUs = () => {
  return (
    <section className="relative min-h-screen bg-secondary bg-no-repeat bg-cover  h-screen flex items-center">

      <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

      <div className="container mx-auto relative z-20">

        <h2 className="text-white text-7xl my-8 text-center font-bold">Contact  <span className="italic font-thin">Us </span> </h2>

        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Content Section */}
          {/* <div className="space-y-6">
            <h2 className="text-white text-6xl">Contact Us</h2>
            <p className="text-lg text-white/70">
              We’re looking forward to speaking with you about your company’s IT needs.Find the answers to your questions here. Our Support Specialist is ready to help with whatever you need.
              We offer a full range of IT development, implementation and maintenance services; including secure and proficient network design, successful systems integration,
              effective project management and installation of technologies, right through to pro-active and reactive desktop support.
            </p>

            <p className="text-lg text-white font-bold">
              Contact us now and learn more about our Managed IT Services.
            </p>
          </div> */}


          <div className="w-full text-white py-8">
            <div className="container mx-auto px-4 flex flex-col justify-between items-end  gap-10">

              <div className="flex items-end flex-col gap-2">
                <span className="text-7xl text-white/15 font-bold">01</span>
                <a href="mailto:constact@softdevai.com" className="text-2xl font-bold text-white/80">
                  info@jerika.ca
                </a>
               
              </div>

              <div className="flex items-end flex-col gap-2">
                <span className="text-7xl text-white/15 font-bold">02</span>
                <a href="tel:+16503197284" className="text-2xl font-bold text-white/80">
                  +1 (650) 319-7284
                </a>
              </div>

              <div className="flex items-end flex-col gap-2">
                <span className="text-7xl text-white/15 font-bold">03</span>
                <p className="text-2xl font-bold text-white/80 text-right">95 Third Street, 2nd Floor, San Francisco, California 94103, US</p>

              </div>
            </div>
          </div>


          {/* Contact Form */}
          <div className="p-8  space-y-6">
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
      </div>
    </section>
  );
};

export default ContactUs;