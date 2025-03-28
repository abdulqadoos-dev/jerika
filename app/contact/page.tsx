
import Consultation from '@/app/components/Consultation';
import ContactForm from '@/app/components/ContactForm';


const ContactUs = () => {


  return (
    <>
      <section className="relative bg-secondary bg-no-repeat bg-cover  md:py-32 py-8">
        <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

        <div className="container mx-auto relative z-20 mt-20">
          <h2 className="text-white lg:text-7xl text-5xl my-8 text-center font-bold">
            Contact <span className="italic font-thin">Us</span>
          </h2>

          <div className="flex items-center justify-center lg:flex-row flex-col-reverse gap-20 w-full lg:py-10 px-10">
            <img
              src="/images/contact-us.png"
              className="rounded-lg lg:w-[600px] opacity-80"
              alt=""
            />

            {/* Contact Form */}
            <ContactForm title='Contact us now and learn more about our Managed IT Services.' />
          </div>

          <div className="container mx-auto px-4 flex lg:flex-row flex-col items-center justify-between gap-10 my-20">
            <div className="flex items-center flex-col">
              <span className="text-5xl text-white/10 font-bold">01</span>
              <a
                href="mailto:constact@softdevai.com"
                className="text-2xl font-bold text-white/80"
              >
                info@jerika.ca
              </a>
            </div>

            <div className="flex items-center flex-col text-center">
              <span className="text-5xl text-white/10 font-bold">02</span>
              <p className="text-2xl font-bold text-white/80">
                1 King Street West, Toronto, ON M5H 1A1
              </p>
            </div>

            <div className="flex items-center flex-col">
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