import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

// Add Next.js revalidation so your blog updates automatically when you publish
export const revalidate = 60; 

export default async function BlogPage() {
  // Fetch data directly on the server
  const posts = await client.fetch(postsQuery);

  return (
    <div className="max-w-4xl mx-auto py-20 font-heading">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Writing</h1>
        <p className="text-muted-foreground text-lg">
          Thoughts on software engineering, UI/UX architecture, and building digital products.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {posts.map((post: any) => (
          <Link href={`/blog/${post.slug}`} key={post._id}>
            <article className="group bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm hover:shadow-md hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              
              <h2 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2 font-body">
                {post.excerpt}
              </p>

              <div className="flex items-center text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}