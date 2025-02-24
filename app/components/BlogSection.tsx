import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { Heart, MessageSquare, Calendar } from "lucide-react";
import Link from 'next/link';

interface BlogPost {
  id: number; 
  title: string;
  image: { src: string; height: number; width: number; blurDataURL?: string };
  date: string;
  likes: string;
  comments: string;
  description: string;
}

interface BlogSectionProps {
  blogPosts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogPosts }) => {
  return (
    <section className="w-full bg-white container mx-auto px-4 py-28">
      <h1 className="text-center mb-12 text-6xl font-bold text-secondary">
        See <span className="italic font-normal">Our Latest</span> Blog!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-3xl overflow-hidden group">
            <Image
              src={post.image}
              alt={post.title}
              width={500} // Add width and height for better image rendering
              height={300} // Adjust these values as needed
              className=""
              priority
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 line-clamp-2 text-secondary">
                {post.title}
              </h2>

              <div className="flex items-center gap-6 mb-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>{post.comments}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="primary" size="lg" className="lg:w-auto min-w-40">
          <Link href="/blogs"> See More </Link>
        </Button>
      </div>
    </section>
  );
};

export default BlogSection;