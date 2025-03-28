import Button from "@/app/components/ui/Button";
import Link from "next/link";

const Career = () => {
  const jobListings = [
    {
      id: 1,
      title: "System/Network Administrator",
      overview:
        "We’re looking for a proactive and experienced System/Network Administrator to manage, maintain, and optimize our company’s IT systems and networks.",
      slug: "system-network-administrator",
    },
    {
      id: 2,
      title: "Administrative Assistant",
      overview:
        "Coordinate the flow of information within the team and perform administrative tasks to support our operations.",
      slug: "administrative-assistant",
    },
    {
      id: 3,
      title: "Social Media Manager / Content Creator",
      overview:
        "Develop, manage, and execute our social media strategy to grow our online presence and engage our audience.",
      slug: "social-media-manager-content-creator",
    },
  ];

  return (
    <section className="relative  bg-secondary bg-no-repeat bg-cover min-h-screen md:py-36 py-28">
      <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

      <div className="container mx-auto relative z-20">
        <div className="space-y-10 text-center px-4">
          <h1 className="text-4xl font-bold text-white">Join Our Team</h1>
          <p className="text-lg text-white">
            Explore exciting career opportunities and grow with us.
          </p>

          <div className="space-y-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="bg-white/10 p-6 rounded-xl shadow-md text-left"
              >
                <h2 className="text-2xl font-semibold text-white">
                  {job.title}
                </h2>
                <p className="text-white/80 mt-2">{job.overview}</p>
                <Link href={`/careers/${job.slug}`}>
                  <Button className="mt-4">
                    View Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;