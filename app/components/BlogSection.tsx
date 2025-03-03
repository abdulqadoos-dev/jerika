import { Calendar } from "lucide-react";
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  date: string;
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
        {blogPosts.map((post) => (
          <Link href={`/blogs/${post.slug}`} key={post.id} className="bg-white rounded-3xl overflow-hidden group hover:scale-105 transition-all">
            <img src={post.image} className="scale-90" alt="" />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 line-clamp-2 text-secondary">
                {post.title}
              </h2>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.description}
              </p>

              <div className="flex items-center gap-6 mb-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* <div className="text-center mt-12">
        <Button variant="primary" size="lg" className="lg:w-auto min-w-40">
          <Link href="/blogs"> See More </Link>
        </Button>
      </div> */}
    </section>
  );
};

export default BlogSection;