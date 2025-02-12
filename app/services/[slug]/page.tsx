import React from 'react';
import ServiceDetails from '@/app/components/ServiceDetails'; 

interface Section {
  heading: string | null;
  content: string;
}

interface Article {
  title: string;
  slug: string;
  sections: Section[];
}

const articles: Article[] = [ 
   {
      title: "Jerika Inc.: Your Partner in Managed IT Services",
      slug: "jerika-inc-managed-it-services",
      sections: [
        { heading: null, content: "Jerika Inc.... (rest of the content)" },
      ],
    },
    {
      title: "Another Article",
      slug: "another-article",
      sections: [
        { heading: "Introduction", content: "This is another article." },
      ],
    },
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
