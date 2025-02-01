
import Button from "@/app/components/ui/Button";

const ContactUs = () => {
  return (
    <section className="relative min-h-screen bg-secondary bg-no-repeat bg-cover  h-screen flex items-center">

      <div className="absolute inset-0 bg-gradient-radial from-white/10 to-secondary z-10" />

      <div className="container mx-auto relative z-20">

        <div className="grid md:grid-cols-2 gap-12">
          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-white text-6xl">Contact Us</h2>
            <p className="text-lg text-white/70">
              We’re looking forward to speaking with you about your company’s IT needs.Find the answers to your questions here. Our Support Specialist is ready to help with whatever you need.
              We offer a full range of IT development, implementation and maintenance services; including secure and proficient network design, successful systems integration, 
              effective project management and installation of technologies, right through to pro-active and reactive desktop support.
            </p>

            <p className="text-lg text-white font-bold">
              Contact us now and learn more about our Managed IT Services.
            </p>
          </div>

          {/* Contact Form */}
          <div className=" p-8 rounded-xl shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 p-3 bg-transparent block w-full rounded-md text-white border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
                   className="mt-1 p-3 bg-transparent block w-full rounded-md text-white border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
                    className="mt-1 p-3 bg-transparent block w-full rounded-md text-white border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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