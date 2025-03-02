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
   image: string;
   sections: Section[];
}
const articles: Article[] = [
   {
       "title": "Revolutionize Your Business with Jerika Inc.",
       "slug": "revolutionize-your-business-with-jerika-inc",
       "image": "/images//blogs/revolutionize-your-business-main.jpg",
       "sections": [
           {
               "heading": "Empowering Businesses in the Digital Age",
               "content": "In today's rapidly evolving digital landscape, businesses need to be agile and adaptable to thrive. Jerika Inc. is your partner in this transformation, offering a comprehensive suite of IT solutions designed to empower your business and drive success.",
           },
           {
               "heading": "Our Comprehensive Services",
               "content": "We provide a wide array of services to cater to your unique business needs:",
               "list_items": [
                   "IT Infrastructure Optimization",
                   "Brand Management and Marketing",
                   "Social Media Strategy and Growth",
                   "Secure Network Design and Implementation",
                   "Streamlined Systems Integration",
                   "Expert Project Management",
                   "Technology Installation and Support",
                   "Proactive Desktop Support"
               ]
           },
           {
               "heading": "Why Choose Jerika Inc.?",
               "content": "We are committed to delivering exceptional results and building long-term partnerships with our clients. Here's why you should choose Jerika Inc.:",
               "list_items": [
                   "Experienced and Certified Professionals",
                   "Cutting-Edge Technology and Solutions",
                   "Customer-Centric Approach",
                   "Focus on Business Growth and Success"
               ]
           },
           {
               "heading": "Contact Us Today",
               "content": "Ready to revolutionize your business? Contact Jerika Inc. today for a consultation. Let's discuss your specific needs and explore how our expertise can help you achieve your goals."
           }
       ]
   },
   {
       "title": "Explore New Era of Automation with Jerika Inc.",
       "slug": "explore-new-era-of-automation-with-jerika-inc",
       "image": "/images/blogs/explore-new-era-main.jpg",
       "sections": [
           {
               "heading": "Embracing Automation for Business Growth",
               "content": "In today's fast-paced digital world, businesses are constantly seeking ways to enhance efficiency and productivity. Jerika Inc. offers advanced automation solutions to streamline your operations and drive growth."
           },
           {
               "heading": "Our Automation Services",
               "content": "We provide a diverse range of automation solutions tailored to your specific needs:",
               "list_items": [
                   "Robotic Process Automation (RPA)",
                   "Artificial Intelligence (AI) Integration",
                   "Internet of Things (IoT) Solutions",
                   "Custom Software Development for Automation",
                   "Systems Integration for Seamless Automation"
               ]
           },
           {
               "heading": "The Jerika Inc. Advantage in Automation",
               "content": "Why choose Jerika Inc. for your automation needs?",
               "list_items": [
                   "Expertise in Cutting-Edge Automation Technologies",
                   "Customized Solutions for Optimal Efficiency",
                   "Commitment to Seamless Integration and Support",
                   "Focus on Driving Tangible Business Results"
               ]
           },
           {
               "heading": "Unlock Your Business Potential with Automation",
               "content": "Ready to explore the new era of automation? Contact Jerika Inc. today to discover how our solutions can transform your business."
           }
       ]
   },
   {
       "title": "Step into the World of Smart Technology",
       "slug": "step-into-the-world-of-smart-technology",
       "image": "/images/blogs/step-into-the-world-main.jpg",
       "sections": [
           {
               "heading": "Discovering the Power of Smart Technology",
               "content": "In an increasingly connected world, smart technology is transforming how businesses operate. Jerika Inc. empowers you to leverage these innovations for enhanced efficiency and competitive advantage."
           },
           {
               "heading": "Our Smart Technology Solutions",
               "content": "We offer a range of smart technology services to meet your business needs:",
               "list_items": [
                   "Internet of Things (IoT) Integration",
                   "Artificial Intelligence (AI) and Machine Learning",
                   "Smart Infrastructure and Automation",
                   "Data Analytics and Insights",
                   "Cloud-Based Smart Solutions"
               ]
           },
           {
               "heading": "Why Jerika Inc. for Smart Technology?",
               "content": "Partner with Jerika Inc. to unlock the potential of smart technology:",
               "list_items": [
                   "Expertise in Implementing Cutting-Edge Smart Solutions",
                   "Tailored Strategies for Your Unique Business Needs",
                   "Comprehensive Support and Integration Services",
                   "Focus on Delivering Measurable Business Outcomes"
               ]
           },
           {
               "heading": "Embrace the Future with Smart Technology",
               "content": "Ready to step into the world of smart technology? Contact Jerika Inc. today to explore how our solutions can revolutionize your business."
           }
       ]
   }
];

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
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
