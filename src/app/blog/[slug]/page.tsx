import { client } from "@/sanity/lib/client";
import { postBySlugQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

export const revalidate = 60; // Revalidate every 60 seconds

// Custom components to style the Sanity rich text with our semantic theme
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="text-muted-foreground leading-relaxed mb-6">{children}</p>,
    h1: ({ children }: any) => <h1 className="text-3xl font-bold text-foreground mt-12 mb-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-foreground mt-8 mb-4">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 text-muted-foreground mb-6 space-y-2">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-foreground">{children}</strong>,
    link: ({ children, value }: any) => (
      <a href={value.href} target="_blank" rel="noreferrer" className="text-accent hover:underline">
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params for Next.js 15 compatibility
  const { slug } = await params;
  
  // Fetch the post data
  const post = await client.fetch(postBySlugQuery, { slug });

  // If no post is found, trigger the Next.js 404 page
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-20 font-heading">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to articles
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
      </header>

      {/* The main content body */}
      <div className="prose prose-lg dark:prose-invert max-w-none font-body">
        {post.body ? (
          <PortableText value={post.body} components={portableTextComponents} />
        ) : (
          <p className="text-muted-foreground">No content found for this post.</p>
        )}
      </div>
    </article>
  );
}