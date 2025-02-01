import BlogSection from "@/app/components/BlogSection";


import BlogOne from "@/public/images/blog-1.png";
import BlogTwo from "@/public/images/blog-2.png";
import BlogThree from "@/public/images/blog-3.png";


const blogPosts = [
   {
     id: 1,
     title: "Explore New Era of Automation with Jerika Inc",
     image: BlogOne,
     date: "25 Dec 2024",
     likes: "40.7k",
     comments: "15.2k",
     description: "From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly..."
   },
   {
     id: 2,
     title: "Revolutionize Your Business with Jerika Inc.",
     image: BlogTwo,
     date: "25 Dec 2024",
     likes: "40.7k",
     comments: "15.2k",
     description: "From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly..."
   },
   {
     id: 3,
     title: "Step into the World of Smart Technology",
     image: BlogThree,
     date: "25 Dec 2024",
     likes: "40.7k",
     comments: "15.2k",
     description: "From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly..."
   },
   {
      id: 4,
      title: "Explore New Era of Automation with Jerika Inc",
      image: BlogOne,
      date: "25 Dec 2024",
      likes: "40.7k",
      comments: "15.2k",
      description: "From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly..."
    },
    {
      id: 5,
      title: "Revolutionize Your Business with Jerika Inc.",
      image: BlogTwo,
      date: "25 Dec 2024",
      likes: "40.7k",
      comments: "15.2k",
      description: "From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly..."
    },
    {
      id: 6,
      title: "Step into the World of Smart Technology",
      image: BlogThree,
      date: "25 Dec 2024",
      likes: "40.7k",
      comments: "15.2k",
      description: "From smart industrial robotics to AI-powered systems, we offer comprehensive solutions that integrate seamlessly..."
    }
 ];



export default function About() {
   return (
         <BlogSection blogPosts={blogPosts} />
   )
}