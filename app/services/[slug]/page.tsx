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
      "title": "Jerika Inc. Your Partner in Managed IT Services",
      "slug": "jerika-inc-managed-it-services",
      "sections": [
         {
            "heading": null,
            "content": "Jerika Inc., a leading force in the tech industry, offers comprehensive and tailored Managed IT Services designed to meet the diverse needs of modern businesses. More than just technical support, Jerika acts as a true partner, dedicated to optimizing your IT infrastructure, boosting productivity, and ensuring seamless operations."
         },
         {
            "heading": null,
            "content": "Jerika's suite of services includes proactive monitoring, where expert technicians vigilantly watch over your systems, preventing potential problems before they impact your business. Data management solutions ensure your information is secure, accessible, and efficiently organized. Robust cybersecurity measures protect your business from ever-present threats, providing invaluable peace of mind. Jerika also offers cloud management services, empowering your business to leverage cutting-edge technology for scalability and flexibility."
         },
         {
            "heading": null,
            "content": "A dedicated team collaborates closely with each client, understanding their unique challenges and goals to create a customized IT strategy aligned with their specific vision. Choosing Jerika Inc.'s Managed IT Services translates to transformed business operations, reduced downtime, and an empowered team equipped with the tools they need to thrive in the dynamic digital landscape."
         },
         {
            "heading": null,
            "content": "Jerika's commitment to excellence and innovation means constantly evolving its approach to incorporate the latest technological advancements, keeping your business at the industry's forefront. Support extends beyond technology itself, with training and resources provided to empower your team, fostering an environment of confident adaptation to new tools."
         },
         {
            "heading": null,
            "content": "Exceptional customer service is a Jerika hallmark. A responsive support team is available around the clock, ready to assist with any inquiries or challenges. Jerika believes in building long-lasting, trust-based relationships with its clients."
         },
         {
            "heading": "Why Choose Jerika Inc.?",
            "content": "Jerika's integrated approach combines advanced technology with personalized service, making them a trusted partner for businesses seeking reliable data backup and disaster recovery solutions. Jerika's adaptability to the unique demands of each client allows for tailored strategies that address specific challenges and goals."
         },
         {
            "heading": "Client-Centric Focus",
            "content": "Recognizing that every business is unique, Jerika takes a client-centric approach. They listen to your needs, analyze your infrastructure, and design seamlessly integrated solutions. Jerika strives to become an extension of your team, providing support and expertise that complements your internal capabilities."
         },
         {
            "heading": "Future-Proof Your Business",
            "content": "In the face of constant technological evolution, Jerika ensures your systems are future-proofed with the latest advancements in data protection and recovery. By staying at the cutting edge, Jerika helps you navigate the complexities of the digital landscape, giving you the confidence to innovate and grow. Partner with Jerika Inc. and experience a seamless blend of technology and personalized service. Together, you can drive your business forward, unlocking new opportunities and achieving remarkable success in today's competitive market."
         }
      ]
   },
   {
      "title": "Managed Security Services",
      "slug": "managed-security-services",
      "sections": [
         {
            "heading": null,
            "content": "In today's rapidly evolving digital landscape, safeguarding your business against cyber threats is more crucial than ever. Jerika Inc is at the forefront of providing cutting-edge Managed Security Services, designed to protect your organization with comprehensive, innovative solutions. Our approach to security is holistic, integrating advanced technologies with expert insights to offer a robust defense against potential threats. With Jerika Inc, you gain access to real-time threat monitoring and swift incident response, ensuring that any vulnerabilities are quickly addressed to minimize risks and disruptions. We understand that each business is unique, which is why our security solutions are tailored to meet your specific needs. Our team of seasoned security professionals works closely with you to develop a custom strategy that aligns with your operational goals and regulatory requirements."
         },
         {
            "heading": "Key Features",
            "content": "",
            "list_items": [
               "24/7 Monitoring and Support: Our security experts are available around the clock, providing continuous monitoring to detect and respond to threats as they arise.",
               "Threat Intelligence: We leverage the latest threat intelligence to anticipate and neutralize potential risks before they impact your business.",
               "Compliance and Risk Management: We assist you in navigating complex compliance landscapes, ensuring that your security measures meet industry standards and regulations.",
               "Advanced Firewalls and Intrusion Prevention Systems: Our state-of-the-art technology protects your networks from unauthorized access and malicious activities.",
               "User Training and Awareness: Empower your team with the knowledge and skills needed to identify and mitigate security threats, fostering a culture of security within your organization."
            ]
         },
         {
            "heading": null,
            "content": "At Jerika Inc, we prioritize your peace of mind, allowing you to focus on what matters most—growing your business. Our commitment to excellence and innovation ensures that you remain protected in an ever-changing threat environment. Choose Jerika Inc's Managed Security Services and partner with a team dedicated to safeguarding your digital assets. Let's secure your future and build a resilient defense that stands strong against any challenge."
         }
      ]
   },
   {
      "title": "Data Backup + Disaster Recovery",
      "slug": "data-backup-disaster-recovery",
      "sections": [
         {
            "heading": null,
            "content": "In an era where data is the backbone of every business, Jerika Inc offers top-tier Data Backup and Disaster Recovery services designed to ensure your business continuity and data integrity. Our comprehensive solutions provide peace of mind, knowing that your valuable information is protected and recoverable in the event of any unforeseen disruptions."
         },
         {
            "heading": "Reliable Data Backup Solutions",
            "content": "At Jerika Inc, we understand that data loss can have significant repercussions on your operations. Our reliable data backup solutions are tailored to meet the specific needs of your business, ensuring that your data is securely stored and easily accessible whenever you need it. With automated backup schedules and secure cloud storage, we safeguard your data against loss due to hardware failures, accidental deletions, or cyber threats."
         },
         {
            "heading": "Robust Disaster Recovery Plans",
            "content": "Disasters can strike at any moment, and having a solid recovery plan is essential. Our disaster recovery services are designed to minimize downtime and restore your operations swiftly and efficiently. We work closely with you to develop a customized recovery strategy that aligns with your business objectives, ensuring that you can resume normal operations with minimal impact."
         },
         {
            "heading": "Features of Our Data Backup + Disaster Recovery Services",
            "content": null,
            "list_items": [
               "Automated Backups: Set it and forget it—our automated backup solutions ensure that your data is consistently backed up without manual intervention.",
               "Secure Cloud Storage: Protect your data with our secure cloud storage solutions, offering both accessibility and robust protection against data breaches.",
               "Rapid Recovery: In the event of a disaster, our rapid recovery processes restore your systems quickly, minimizing downtime and ensuring business continuity.",
               "Regular Testing and Updates: We conduct regular testing of your backup and recovery processes to ensure they are up-to-date and effective, adapting them as your business grows and evolves.",
               "Comprehensive Support: Our expert team provides continuous support, guiding you through backup management and recovery processes with ease and confidence."
            ]
         },
         {
            "heading": null,
            "content": "Join the many businesses that trust Jerika Inc with their most critical assets. Together, we can build a secure and resilient foundation that supports your long-term success, allowing you to focus on what you do best—delivering value to your customers and driving your business forward. Partner with us for your Data Backup and Disaster Recovery needs, and secure your business against any eventuality. With our innovative solutions and dedicated support, you can focus on driving your business forward, knowing that your data is safe and your operations can withstand any challenge. We are committed to not only protecting your data but also empowering your business to thrive in a data-driven world. Our team of experts is dedicated to delivering solutions that not only meet but exceed your expectations, ensuring that your business remains resilient and competitive."
         }
      ]
   },
   {
      "title": "Web Development and Hosting",
      "slug": "web-development-hosting",
      "sections": [
         {
            "heading": null,
            "content": "At Jerika Inc, we understand that your website is the digital face of your business, serving as a critical platform for engagement and growth. Our Web Development and Hosting services are designed to create and maintain a powerful online presence that captures your brand's essence and meets your business objectives."
         },
         {
            "heading": "Custom Web Development Solutions",
            "content": "Our team of skilled developers collaborates closely with you to design and build bespoke websites that are not only visually stunning but also highly functional and user-friendly. From e-commerce platforms to corporate websites, we tailor our web development solutions to align with your unique needs, ensuring a seamless user experience that drives engagement and conversions."
         },
         {
            "heading": "Key Features of Custom Web Development",
            "content": null,
            "list_items": [
               "Responsive Design: Our websites are optimized for all devices, ensuring a consistent and engaging experience whether accessed via desktop, tablet, or smartphone.",
               "SEO Optimization: We integrate the latest SEO practices to enhance your website's visibility, helping you reach a broader audience and improve search engine rankings.",
               "Custom Functionality: Whether you need interactive features, advanced analytics, or integrated payment systems, our team can develop custom functionalities that cater to your specific requirements."
            ]
         },
         {
            "heading": "Reliable Hosting Services",
            "content": "With Jerika Inc's hosting solutions, you can rest assured that your website is in safe hands. We provide secure, reliable, and high-performance hosting services that keep your site running smoothly, even during high traffic periods."
         },
         {
            "heading": "Key Features of Hosting Services",
            "content": null,
            "list_items": [
               "Scalable Solutions: Our hosting services are designed to grow with your business, offering scalable options that can be adjusted as your needs evolve.",
               "Robust Security: Protect your website with our advanced security measures, including firewalls, regular backups, and monitoring to safeguard against potential threats.",
               "24/7 Support: Our dedicated support team is available around the clock to assist with any hosting-related inquiries or issues, ensuring that your website remains operational at all times."
            ]
         },
         {
            "heading": null,
            "content": "Empower Your Digital Presence. By choosing Jerika Inc for your web development and hosting needs, you gain a partner committed to helping you thrive in the digital world. We blend creativity with technical expertise to deliver solutions that not only meet your current needs but also anticipate future growth opportunities. Let us help you build a website that stands out, attracts visitors, and converts them into loyal customers. Join the many businesses that trust Jerika Inc with their digital presence. Together, we can create a compelling online experience that reflects your brand's values and drives your business forward. Enhance your digital footprint with our innovative solutions and dedicated support, and watch your business reach new heights."
         }
      ]
   },
   {
      "title": "Co-Managed IT Services",
      "slug": "co-managed-it-services",
      "sections": [
         {
            "heading": null,
            "content": "At Jerika Inc, we recognize that every business has unique IT needs and existing capabilities. Our Co-Managed IT Services are designed to be the perfect complement to your internal IT team, providing additional expertise, resources, and support that empower your staff and enhance your operations."
         },
         {
            "heading": "Collaborative IT Support",
            "content": "Our approach to Co-Managed IT Services is all about partnership and collaboration. We work alongside your existing team, providing guidance and additional resources to tackle complex challenges without taking over control. This ensures your internal staff remains engaged and empowered, while benefiting from our industry-leading insights and strategies."
         },
         {
            "heading": "Key Features of Collaborative IT Support",
            "content": null,
            "list_items": [
               "Flexible Partnership: Customize our services to fit your specific requirements. Whether you need to fill knowledge gaps, manage specialized projects, or require extra support during peak times, our flexible solutions are tailored to your needs.",
               "Expert Consultation: Gain access to a wealth of knowledge from our seasoned IT professionals, who bring cutting-edge insights and innovative strategies to enhance your IT operations.",
               "Seamless Integration: Our solutions are designed to integrate smoothly with your existing processes and systems, minimizing disruption and maximizing effectiveness."
            ]
         },
         {
            "heading": "Enhanced Capabilities",
            "content": "By choosing Jerika Inc as your co-managed IT partner, you can expand your team's capabilities without the need for extensive hiring or training. Leverage our expertise to focus on strategic initiatives while we handle routine maintenance and complex technical tasks."
         },
         {
            "heading": "Key Features of Enhanced Capabilities",
            "content": null,
            "list_items": [
               "Proactive Monitoring: Benefit from our advanced monitoring tools that keep a vigilant watch over your systems, identifying and addressing issues before they impact your operations.",
               "Scalable Solutions: Our services grow with your business, ensuring you have the right level of support as your needs evolve and change.",
               "Comprehensive Training: Empower your team with ongoing training and resources, ensuring they stay updated with the latest technological advancements and best practices."
            ]
         },
         {
            "heading": "Empower Your IT Team",
            "content": "Choosing Jerika Inc for Co-Managed IT Services is more than just gaining additional support; it's about empowering your IT team to excel. We believe in a partnership that enhances your internal capabilities, drives innovation, and supports your business goals. Join the many organizations that have strengthened their IT operations with Jerika Inc's co-managed services. Together, we can build a dynamic and resilient IT environment that supports your business's success and growth."
         }
      ]
   },
   {
      "title": "Cloud Hosting Services",
      "slug": "cloud-hosting-services",
      "sections": [
         {
            "heading": null,
            "content": "Welcome to Jerika Inc's Cloud Hosting Services, where innovation meets reliability to provide your business with the agility and performance it needs in today’s fast-paced digital world. Our cloud hosting solutions are designed to empower your enterprise with scalable, secure, and high-performance infrastructure that adapts to your evolving needs."
         },
         {
            "heading": "Why Choose Jerika Inc for Cloud Hosting?",
            "content": "At Jerika Inc, we understand that a robust cloud hosting environment is crucial for modern businesses. We offer a comprehensive suite of cloud hosting services that ensure seamless operations, enhanced security, and unparalleled support."
         },
         {
            "heading": "Key Benefits",
            "content": null,
            "list_items": [
               "Scalable Infrastructure: Easily scale your resources up or down to meet your business demands without the hassle of managing physical hardware. Our flexible cloud solutions grow with your business, providing you with the capacity you need, when you need it.",
               "High Performance: Experience lightning-fast speeds and minimal downtime with our state-of-the-art data centers and optimized server configurations. We ensure that your applications and data are always accessible and performing at their best.",
               "Unmatched Security: Protect your data with our advanced security measures, including encryption, firewalls, and regular security audits. Our cloud hosting services are designed to safeguard your digital assets against threats, ensuring peace of mind.",
               "Comprehensive Support: Our dedicated support team is available 24/7 to assist with any inquiries or issues. We pride ourselves on delivering exceptional customer service, ensuring that your cloud environment is always running smoothly."
            ]
         },
         {
            "heading": "Tailored Cloud Solutions",
            "content": "Every business is unique, and so are its cloud hosting needs. At Jerika Inc, we offer tailored solutions that align with your specific requirements, whether you're a startup seeking a cost-effective hosting solution or an enterprise needing robust infrastructure for mission-critical applications."
         },
         {
            "heading": "Our Cloud Solutions",
            "content": null,
            "list_items": [
               "Hybrid Cloud Options: Combine the benefits of public and private clouds with our hybrid solutions, offering flexibility, security, and control over your data and applications.",
               "Managed Cloud Services: Let us handle the complexities of cloud management so you can focus on strategic initiatives. Our expert team manages your cloud environment, ensuring optimal performance and efficiency.",
               "Disaster Recovery and Backup: Ensure business continuity with our cloud-based disaster recovery and backup solutions. We provide reliable and efficient recovery options to protect your data and minimize downtime in case of unexpected events."
            ]
         },
         {
            "heading": null,
            "content": "Transform Your Business with Cloud Hosting. By choosing Jerika Inc's Cloud Hosting Services, you're partnering with a team dedicated to driving your business forward. Our innovative solutions and expert support empower you to focus on growth and innovation, while we handle the technical complexities. Experience the future of business with Jerika Inc—where your success is our mission. Join the many businesses that trust Jerika Inc to power their cloud hosting needs. Together, we can unlock new opportunities and propel your business to new heights with the power of the cloud."
         }
      ]
   },
   {
      "title": "Social Media Marketing and Branding",
      "slug": "social-media-marketing-branding",
      "sections": [
        {
          "heading": null,
          "content": "In the digital age, having a strong social media presence is essential for any business looking to connect with its audience and build a recognizable brand. At Jerika Inc, we specialize in Social Media Marketing and Branding services that elevate your business, creating meaningful engagement and fostering a loyal community around your brand."
        },
        {
          "heading": "Strategic Social Media Marketing",
          "content": "Our team of social media experts works closely with you to develop a comprehensive strategy that aligns with your business goals and resonates with your target audience. We leverage the power of social media platforms to amplify your message, increase brand awareness, and drive measurable results."
        },
        {
          "heading": "Key Features of Social Media Marketing",
          "content": null,
          "list_items": [
            "Tailored Campaigns: We create customized social media campaigns that reflect your brand's unique voice and objectives, ensuring that every post and interaction contributes to your overall strategy.",
            "Content Creation and Curation: Our creative team crafts engaging and visually appealing content, from eye-catching graphics to compelling copy, designed to captivate your audience and encourage interaction.",
            "Audience Engagement: Building a community is at the heart of our social media efforts. We focus on fostering genuine engagement through interactive posts, responding to comments, and creating conversations that matter."
          ]
        },
        {
          "heading": "Brand Development and Identity",
          "content": "Your brand is more than just a logo—it's the essence of your business. Jerika Inc helps you develop a strong and cohesive brand identity that resonates with your audience and sets you apart in the marketplace."
        },
        {
          "heading": "Key Features of Brand Development",
          "content": null,
          "list_items": [
            "Brand Strategy: We collaborate with you to define your brand's mission, values, and unique selling points, crafting a strategy that communicates your message effectively across all channels.",
            "Visual Identity: Our designers create a consistent and memorable visual identity, including logos, color schemes, and typography, that embodies your brand's personality and appeals to your target market.",
            "Storytelling and Messaging: Through powerful storytelling, we convey your brand's journey, values, and vision, building an emotional connection with your audience that inspires trust and loyalty."
          ]
        },
        {
          "heading": "Analytics and Optimization",
          "content": "To ensure the success of your social media and branding efforts, we provide detailed analytics and insights, allowing you to track performance and make data-driven decisions."
        },
        {
          "heading": "Key Features of Analytics and Optimization",
          "content": null,
          "list_items": [
            "Performance Tracking: Our analytics tools measure the effectiveness of your campaigns, providing insights into engagement rates, audience demographics, and conversion metrics.",
            "Continuous Improvement: We use performance data to optimize your strategy, making necessary adjustments to improve reach, engagement, and overall impact."
          ]
        },
        {
          "heading": "Empower Your Brand Online",
          "content": "With Jerika Inc's Social Media Marketing and Branding services, you gain more than just visibility—you gain a partner dedicated to helping your brand thrive in the digital world. Our innovative strategies and creative solutions ensure that your brand not only reaches but resonates with your audience, driving growth and success. Join the many businesses that trust Jerika Inc to elevate their social media presence and strengthen their brand identity. Together, we can create a powerful online presence that captures your brand's essence and engages your audience like never before. Let us help you tell your story and connect with your community in meaningful ways."
        }
      ]
    }
];

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
   const { slug } = params;

   const article = articles.find((a) => a.slug === slug);

   if (!article) {
      return <div>Article not found</div>;
   }

   return (
      <div>
         <ServiceDetails article={article} />
      </div>
   );
}
