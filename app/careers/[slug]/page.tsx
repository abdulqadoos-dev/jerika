import React from 'react';
import ServiceDetails from '@/app/components/ServiceDetails';

interface Section {
   heading: string | null;
   content: string | null;
   list_items?: string[];
}

interface Article {
   title: string;
   slug: string;
   sections: Section[];
}
const articles: Article[] = [
   {
       "title": "System/Network Administrator",
       "slug": "system-network-administrator",
       "sections": [
           {
               "heading": "Job Overview",
               "content": "We’re looking for a proactive and experienced System/Network Administrator to manage, maintain, and optimize our company’s IT systems and networks. This role is critical to keeping our operations running smoothly, safeguarding our data, and supporting our team with technical expertise. If you thrive in solving complex problems and have a passion for technology, we’d love to meet you!"
           },
           {
               "heading": "Key Responsibilities",
               "content": null,
               "list_items": [
                   "Install, configure, and maintain servers, networks, and related hardware/software (Windows/Linux environments).",
                   "Monitor system performance, troubleshoot issues, and ensure maximum uptime and reliability.",
                   "Manage network security, including firewalls, VPNs, and intrusion detection systems, to protect against threats.",
                   "Perform regular backups, disaster recovery planning, and system updates/patches.",
                   "Administer user accounts, permissions, and access controls across systems and applications.",
                   "Collaborate with internal teams to support IT needs, including onboarding/offboarding employees and resolving technical issues.",
                   "Document system configurations, processes, and incident reports for transparency and future reference.",
                   "Stay current on emerging technologies and recommend upgrades or improvements to enhance efficiency."
               ]
           },
           {
               "heading": "Qualifications",
               "content": null,
               "list_items": [
                   "3+ years of experience as a System Administrator, Network Administrator, or similar role.",
                   "Strong knowledge of network protocols (TCP/IP, DNS, DHCP) and system administration (Windows Server, Linux/Unix).",
                   "Experience with virtualization technologies (e.g., VMware, Hyper-V) and cloud platforms (e.g., AWS, Azure).",
                   "Familiarity with cybersecurity best practices and tools (e.g., antivirus, endpoint protection).",
                   "Proficiency in scripting (e.g., PowerShell, Bash) for automation is a plus.",
                   "Excellent problem-solving skills and the ability to work under pressure during outages or emergencies.",
                   "Relevant certifications (e.g., CompTIA Network+, CCNA, MCSA) are highly desirable.",
                   "Strong communication skills and a team-oriented mindset."
               ]
           },
           {
               "heading": "What We Offer",
               "content": null,
               "list_items": [
                   "Competitive salary and comprehensive benefits [add specifics if applicable, e.g., health insurance, 401(k)].",
                   "A supportive team environment with opportunities for growth and skill development.",
                   "Access to cutting-edge tools and technologies.",
                   "[Add unique perks, e.g., flexible schedules, professional certification reimbursement]."
               ]
           },
           {
               "heading": "How to Apply",
               "content": "Ready to keep Jerika Inc.’s systems running at peak performance? Submit your resume, a cover letter highlighting your technical experience, and any relevant certifications to [insert email or application link]. Applications close [insert deadline, e.g., April 15, 2025]."
           }
       ]
   },
   {
       "title": "Administrative Assistant",
       "slug": "administrative-assistant",
       "sections": [
           {
               "heading": "Job Overview",
               "content": "Coordinate the flow of information within the team and perform administrative tasks to support our operations."
           },
           {
               "heading": "Responsibilities",
               "content": null,
               "list_items": [
                   "Coordinate the flow of information within the team.",
                   "Open and distribute mail and other materials.",
                   "Record and prepare minutes of meetings, seminars, and conferences.",
                   "Schedule and confirm appointments.",
                   "Manage contracts.",
                   "Answer telephone and relay telephone calls and messages.",
                   "Answer electronic enquiries.",
                   "Compile data, statistics, and other information.",
                   "Respond to employee questions and complaints.",
                   "Order office supplies and maintain inventory.",
                   "Oversee payroll administration.",
                   "Set up and maintain manual and computerized information filing systems.",
                   "Perform data entry.",
                   "Provide customer service.",
                   "Consult with clients after sale to provide ongoing support.",
                   "Invoice clients.",
                   "Perform administrative tasks."
               ]
           },
           {
               "heading": "Eligibility",
               "content": "Only apply to this job if: You are a Canadian citizen, a permanent or a temporary resident of Canada. You have a valid Canadian work permit. If you are not authorized to work in Canada, do not apply. The employer will not respond to your application."
           }
       ]
   },
   {
       "title": "Social Media Manager / Content Creator",
       "slug": "social-media-manager-content-creator",
       "sections": [
           {
               "heading": "Job Overview",
               "content": "We’re seeking a talented Social Media Manager / Content Creator to develop, manage, and execute our social media strategy. This role combines creative storytelling with data-driven insights to grow our online presence, engage our audience, and drive brand awareness. If you’re a self-starter with a knack for crafting scroll-stopping content and a deep understanding of social trends, we want to hear from you!"
           },
           {
               "heading": "Key Responsibilities",
               "content": null,
               "list_items": [
                   "Develop and implement a comprehensive social media strategy aligned with Jerika Inc.’s brand goals.",
                   "Create high-quality, engaging content (graphics, videos, captions, etc.) for platforms including Instagram, Twitter/X, LinkedIn, TikTok, and more.",
                   "Manage daily posting schedules, ensuring consistency and timeliness across all channels.",
                   "Monitor social media analytics to track performance, optimize campaigns, and report on KPIs.",
                   "Engage with our online community by responding to comments, messages, and mentions in a brand-appropriate tone.",
                   "Stay ahead of social media trends, tools, and platform updates to keep our content fresh and relevant.",
                   "Collaborate with marketing, design, and product teams to align content with broader company initiatives.",
                   "Plan and execute paid social media campaigns as needed, working within budget guidelines."
               ]
           },
           {
               "heading": "Qualifications",
               "content": null,
               "list_items": [
                   "2+ years of experience in social media management, content creation, or a related field.",
                   "Proven track record of growing and engaging social media audiences (portfolio or examples required).",
                   "Proficiency with content creation tools (e.g., Canva, Adobe Creative Suite, video editing software).",
                   "Strong understanding of social media platforms, algorithms, and best practices.",
                   "Excellent writing and communication skills with an eye for detail and brand voice.",
                   "Analytical mindset with experience using social media analytics tools (e.g., Sprout Social, Hootsuite, Google Analytics).",
                   "Ability to work independently and manage multiple projects in a fast-paced environment.",
                   "Bonus: Experience with influencer partnerships or paid ad management."
               ]
           },
           {
               "heading": "What We Offer",
               "content": null,
               "list_items": [
                   "Competitive salary and benefits package [add specifics if applicable, e.g., health insurance, PTO].",
                   "Opportunity to work with a creative and collaborative team.",
                   "A chance to make a real impact on a growing brand.",
                   "[Add any unique perks, e.g., flexible hours, remote work options, professional development budget]."
               ]
           },
           {
               "heading": "How to Apply",
               "content": "Ready to bring your creativity to Jerika Inc.? Please submit your resume, a brief cover letter, and a portfolio or links to social media accounts/content you’ve managed to [info@jerika.ca](mailto:info@jerika.ca). Tell us why you’re the perfect fit for this role!"
           }
       ]
   }
];

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
   const { slug } = params;

   const article = articles.find((a) => a.slug === slug);

   if (!article) {
      return <div>Job Not Found</div>;
   }

   return (
      <div>
         <ServiceDetails article={article} />
      </div>
   );
}
