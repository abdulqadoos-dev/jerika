import ContactForm from '@/app/components/ContactForm';

export const metadata = {
  title: 'Job Posting - Administrative assistant',
  description: 'Job posting for an Administrative assistant position',
};

export default function AdministrativeAssistant() {
  return (
    <article className="relative  bg-secondary bg-no-repeat bg-cover md:py-36 py-28 ">
      <div className="absolute inset-0 bg-gradient-radial from-white/15 to-secondary z-10" />

      <div className="container mx-auto relative z-20">
        <h2 className="text-white md:text-6xl text-3xl md:my-8 my-0 mx-10 font-bold">Administrative assistant</h2>

        <div className="grid md:grid-cols-3 gap-10 items-start">

          <div className="bg-black text-white md:col-span-2 space-y-10 p-10 rounded-xl">

            <div className="mb-6">
              <p><strong>Type:</strong> Permanent, Full-time</p>
              <p><strong>Start:</strong> As soon as possible</p>
              <p><strong>No. of Vacancies:</strong> 1</p>
              <p><strong>Salary:</strong> $56,000/Year for 30 hrs/week</p>
              <p><strong>Experience:</strong> Experience an asset</p>
              <p><strong>Education:</strong> Bachelor’s Degree</p>
              <p><strong>Timings:</strong> Day, Evening, On Call, Weekend</p>
              <p><strong>Languages:</strong> English</p>
            </div>


            <div className="mb-6">
              <h2 className="text-xl text-white pb-2 mb-2">Work Environment</h2>
              <p><strong>Work Setting:</strong> Work must be completed both in person and remotely, Information technology (IT) consulting</p>
              <p><strong>Transportation/Travel Information:</strong> Willing to travel, Travel expenses paid by employer</p>
              <p><strong>Work Conditions and Physical Capabilities:</strong></p>
              <ul className="list-disc ml-5">
                <li>Ability to work independently</li>
                <li>Work under pressure</li>
                <li>Attention to detail</li>
                <li>Work with minimal supervision</li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl text-white/80 pb-2 mb-2">Responsibilities</h2>
              <ul className="list-disc ml-5">
                <li>Coordinate the flow of information within the team</li>
                <li>Open and distribute mail and other materials</li>
                <li>Record and prepare minutes of meetings, seminars and conferences</li>
                <li>Schedule and confirm appointments</li>
                <li>Manage contracts</li>
                <li>Answer telephone and relay telephone calls and messages</li>
                <li>Answer electronic enquiries</li>
                <li>Compile data, statistics and other information</li>
                <li>Respond to employee questions and complaints</li>
                <li>Order office supplies and maintain inventory</li>
                <li>Oversee payroll administration</li>
                <li>Set up and maintain manual and computerized information filing systems</li>
                <li>Perform data entry</li>
                <li>Provide customer service</li>
                <li>Consult with clients after sale to provide ongoing support</li>
                <li>Invoice clients</li>
                <li>Perform administrative tasks</li>
              </ul>
            </div>


            <div className="mb-6">
              <h2 className="text-xl text-white/80 pb-2 mb-2">Employment Groups</h2>
              <ul className="list-disc ml-5">
                <li>Persons with disabilities (Applies accessible and inclusive recruitment policies that accommodate persons with disabilities)</li>
                <li>Newcomers & Refugees (Supports newcomers and/or refugees with foreign credential recognition)</li>
                <li>Youth (Offers on-the-job training tailored to youth)</li>
                <li>Visible Minorities (Applies hiring policies that discourage discrimination against members of visible minorities (for example: anonymizing the hiring process, etc.))</li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl text-white/80 pb-2 mb-2">How to Apply:</h2>
              <p className="mb-5">
                Ready to bring your creativity to Jerika Inc.? Please submit your resume, a brief cover letter to info@jerika.ca. Tell us why you’re the perfect fit for this role!
              </p>
              <p className="font-bold text-red-700">Only apply to this job if:</p>
              <ul className="list-disc ml-5">
                <li>You are a Canadian citizen, a permanent or a temporary resident of Canada</li>
                <li>You have a valid Canadian work permit</li>
              </ul>
              <p className="font-bold text-red-700">If you are not authorized to work in Canada, do not apply. The employer will not respond to your application.</p>
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

