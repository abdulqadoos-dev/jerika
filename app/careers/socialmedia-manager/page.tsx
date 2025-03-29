import ContactForm from '@/app/components/ContactForm';

export const metadata = {
  title: 'Job Posting - Social Media Manager / Content Creator',
  description: 'Job posting for an Social Media Manager / Content Creator position',
};

export default function SocialMediaManager() {
  return (
    <article className="relative  bg-secondary bg-no-repeat bg-cover md:py-36 py-28 ">
      <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

      <div className="container mx-auto relative z-20">
        <h2 className="text-white md:text-6xl text-3xl md:my-8 my-0 mx-10 font-bold">Social Media Manager / Content Creator</h2>

        <div className="grid md:grid-cols-3 gap-10 items-start">

          <div className="bg-black text-white md:col-span-2 space-y-10 p-10 rounded-xl">

            <div className="mb-6">
              <p><strong>Company:</strong> Jerkia Inc.</p>
              <p><strong>Location:</strong> Hybrid Option</p>
              <p><strong>Type:</strong> Full-Time</p>
              <p><strong>Salary:</strong> $75,000/ per annum</p>
            </div>

            <div className="mb-6">
              <h2 className='text-xl text-white pb-2 mb-2'>Job Overview</h2>
              <p>
                We’re seeking a talented Social Media Manager / Content Creator to develop, manage, and execute our social media strategy. This role combines creative storytelling with data-driven insights to grow our online presence, engage our audience, and drive brand awareness. If you’re a self-starter with a knack for crafting scroll-stopping content and a deep understanding of social trends, we want to hear from you!
              </p>
            </div>



            <div className="mb-6">
              <h2 className="text-xl text-white/80 pb-2 mb-2">Responsibilities</h2>
              <ul className="list-disc ml-5">
                <li>Develop and implement a comprehensive social media strategy aligned with Jerika Inc.’s brand goals.</li>
                <li>Create high-quality, engaging content (graphics, videos, captions, etc.) for platforms including Instagram, Twitter/X, LinkedIn, TikTok, and more.</li>
                <li>Manage daily posting schedules, ensuring consistency and timeliness across all channels.</li>
                <li>Monitor social media analytics to track performance, optimize campaigns, and report on KPIs.</li>
                <li>Engage with our online community by responding to comments, messages, and mentions in a brand-appropriate tone.</li>
                <li>Stay ahead of social media trends, tools, and platform updates to keep our content fresh and relevant.</li>
                <li>Collaborate with marketing, design, and product teams to align content with broader company initiatives.</li>
                <li>Plan and execute paid social media campaigns as needed, working within budget guidelines.</li>
              </ul>
            </div>



            <div className="mb-6">
              <h2 className="text-xl text-white/80 pb-2 mb-2">Qualifications:</h2>
              <ul className="list-disc ml-5">
                <li>2+ years of experience in social media management, content creation, or a related field.</li>
                <li>Proven track record of growing and engaging social media audiences (portfolio or examples required).</li>
                <li>Proficiency with content creation tools (e.g., Canva, Adobe Creative Suite, video editing software).</li>
                <li>Strong understanding of social media platforms, algorithms, and best practices.</li>
                <li>Excellent writing and communication skills with an eye for detail and brand voice.</li>
                <li>Analytical mindset with experience using social media analytics tools (e.g., Sprout Social, Hootsuite, Google Analytics).</li>
                <li>Ability to work independently and manage multiple projects in a fast-paced environment.</li>
                <li>Bonus: Experience with influencer partnerships or paid ad management.</li>
              </ul>
            </div>



            <div className="mb-6">
              <h2 className="text-xl text-white/80 pb-2 mb-2">What We Offer:</h2>
              <ul className="list-disc ml-5">
                <li>Competitive salary and benefits package [add specifics if applicable, e.g., health insurance, PTO].</li>
                <li>Opportunity to work with a creative and collaborative team.</li>
                <li>A chance to make a real impact on a growing brand.</li>
              </ul>
            </div>



            <div className="mb-6">
              <h2 className="text-xl text-white/80 pb-2 mb-2">How to Apply:</h2>
              <p className="mb-5">
                Ready to bring your creativity to Jerika Inc.? Please submit your resume, a brief cover letter, and a portfolio or links to social media accounts/content you’ve managed to info@jerika.ca. Tell us why you’re the perfect fit for this role!
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

