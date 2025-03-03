import BlogSection from "@/app/components/BlogSection";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  date: string;
  description: string;
}

const blogPosts: BlogPost[] = [ // Changed to const inside the component
  {
    "id": 1,
    "title": "Explore New Era of Automation with Jerika Inc",
    "slug": "explore-new-era-of-automation-with-jerika-inc",
    "image": "/images/blogs/explore-new-era-thumbnail.jpg",
    "date": "25 Dec 2024",
    "description": "Unlock efficiency with our advanced automation solutions, from robotic systems to AI-driven processes."
  },
  {
    "id": 2,
    "title": "Revolutionize Your Business with Jerika Inc.",
    "slug": "revolutionize-your-business-with-jerika-inc",
    "image": "/images/blogs/revolutionize-your-business-thumbnail.jpg",
    "date": "03 Mar 2024",
    "description": "Transform your operations with our tailored IT services, designed for growth and innovation."
  },
  {
    "id": 3,
    "title": "Step into the World of Smart Technology",
    "slug": "step-into-the-world-of-smart-technology",
    "image": "/images/blogs/step-into-the-world-thumbnail.jpg",
    "date": "10 Jan 2025",
    "description": "Experience the future with our smart tech solutions, seamlessly integrating AI and IoT for enhanced efficiency."
  }
];

export default function Blog() {
  return (
    <BlogSection blogPosts={blogPosts} />
  );
}