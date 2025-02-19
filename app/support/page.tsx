
import Button from "@/app/components/ui/Button";

const Support = () => {
  return (
    <section className="relative min-h-screen bg-secondary bg-no-repeat bg-cover h-screen flex items-center justify-center">

      <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

      <div className="container mx-auto relative z-20">

        <div className="space-y-10 text-center px-4">
          <h2 className="text-white text-7xl font-bold  ">Remote <span className="italic font-thin">Support</span> </h2>
          <div className="text-5xl text-white/70 flex justify-center gap-5 w-full md:flex-row flex-col">
            Click <Button size="lg">Connect Now</Button>  For Technical Assistance
          </div>
        </div>


      </div>
    </section>
  );
};

export default Support;