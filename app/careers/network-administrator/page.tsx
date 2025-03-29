import ContactForm from '@/app/components/ContactForm';

export const metadata = {
  title: 'Job Posting - System/Network Administrator',
  description: 'Job posting for an System/Network Administrator position',
};

export default function SocialMediaManager() {
  return (
    <article className="relative  bg-secondary bg-no-repeat bg-cover md:py-36 py-28 ">
      <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

      <div className="container mx-auto relative z-20">
        <h2 className="text-white md:text-6xl text-3xl md:my-8 my-0 mx-10 font-bold">System/Network Administrator</h2>

        <div className="grid md:grid-cols-3 gap-10 items-start">

          <div className="bg-black text-white md:col-span-2 space-y-10 p-10 rounded-xl">

            <div className="mb-6">
              <p><strong>Company:</strong> Jerkia Inc.</p>
              <p><strong>Location:</strong> Hybrid Option</p>
              <p><strong>Type:</strong> Full-Time</p>
              <p><strong>Salary:</strong>$85,000/ per annum</p>
            </div>

            <div className="mb-6">
              <h2 className='text-xl text-white pb-2 mb-2'>Job Overview</h2>
              <p>
                We’re looking for a proactive and experienced System/Network Administrator to manage, maintain, and optimize our company’s IT systems and networks. This role is critical to keeping our operations running smoothly, safeguarding our data, and supporting our team with technical expertise. If you thrive in solving complex problems and have a passion for technology, we’d love to meet you!
              </p>
            </div>



            <div className="mb-6">
              <h2 className="text-xl text-white/80 pb-2 mb-2">Responsibilities</h2>
              <ul className="list-disc ml-5">
                <li>Install, configure, and maintain servers, networks, and related hardware/software (Windows/Linux environments).</li>
                <li>Monitor system performance, troubleshoot issues, and ensure maximum uptime and reliability.</li>
                <li>Manage network security, including firewalls, VPNs, and intrusion detection systems, to protect against threats.</li>
                <li>Perform regular backups, disaster recovery planning, and system updates/patches.</li>
                <li>Administer user accounts, permissions, and access controls across systems and applications.</li>
                <li>Collaborate with internal teams to support IT needs, including onboarding/offboarding employees and resolving technical issues.</li>
                <li>Document system configurations, processes, and incident reports for transparency and future reference.</li>
                <li>Stay current on emerging technologies and recommend upgrades or improvements to enhance efficiency.</li>
              </ul>
            </div>



            <div className="mb-6">
              <h2 className="text-xl text-white/80 pb-2 mb-2">Qualifications:</h2>
              <ul className="list-disc ml-5">
                <li>3+ years of experience as a System Administrator, Network Administrator, or similar role.</li>
                <li>Strong knowledge of network protocols (TCP/IP, DNS, DHCP) and system administration (Windows Server, Linux/Unix).</li>
                <li>Experience with virtualization technologies (e.g., VMware, Hyper-V) and cloud platforms (e.g., AWS, Azure).</li>
                <li>Familiarity with cybersecurity best practices and tools (e.g., antivirus, endpoint protection).</li>
                <li>Proficiency in scripting (e.g., PowerShell, Bash) for automation is a plus.</li>
                <li>Excellent problem-solving skills and the ability to work under pressure during outages or emergencies.</li>
                <li>Relevant certifications (e.g., CompTIA Network+, CCNA, MCSA) are highly desirable.</li>
                <li>Strong communication skills and a team-oriented mindset.</li>
              </ul>
            </div>



            <div className="mb-6">
              <h2 className="text-xl text-white/80 pb-2 mb-2">What We Offer:</h2>
              <ul className="list-disc ml-5">
                <li>Competitive salary and comprehensive benefits.</li>
                <li>A supportive team environment with opportunities for growth and skill development.</li>
                <li>Access to cutting-edge tools and technologies.</li>
              </ul>
            </div>



            <div className="mb-6">
              <h2 className="text-xl text-white/80 pb-2 mb-2">How to Apply:</h2>
              <p className="mb-5">
                Ready to keep Jerika Inc.’s systems running at peak performance? Submit your resume, a cover letter highlighting your technical experience, and any relevant certifications. Applications close April 15, 2025.

              </p>

              <p className='my-5'>Jerika Inc. is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
            </div>

          </div>

          <div className="bg-black text-white space-y-10 p-10 rounded-xl">

            <p className="text-lg text-white/80 font-bold">
              Get in touch
            </p>
            <ContactForm title='' />
            <div className="container mx-auto px-4 flex flex-col justify-between  gap-10">

              <div className="flex flex-col gap-2">
                <span className="text-5xl text-white/50 font-bold">01</span>
                <a href="mailto:constact@softdevai.com" className="text-xl font-bold text-white/80">
                  info@jerika.ca
                </a>

              </div>

              <div className="flex flex-col gap-2">
                <span className="text-5xl text-white/50 font-bold">02</span>
                <a href="" className="text-xl font-bold text-white/80">
                  (647) 270-6400
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-5xl text-white/50 font-bold">03</span>
                <p className="text-xl font-bold text-white/80 ">1 King Street West, Toronto, ON M5H 1A1</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </article>
  );
}

