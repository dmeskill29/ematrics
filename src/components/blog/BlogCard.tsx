"use client";

import Link from "next/link";
import { CalendarIcon, UserIcon, ClockIcon } from "@heroicons/react/24/outline";
import { BlogPost } from "@/lib/blog";
import OptimizedImage from "@/components/ui/OptimizedImage";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClasses = featured
    ? "group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    : "group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200";

  const imageClasses = featured
    ? "aspect-[16/9] w-full object-cover group-hover:scale-105 transition-transform duration-300"
    : "aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-300";

  return (
    <article className={cardClasses}>
      <Link href={`/insights/${post.id}`} className="block">
        <div className="relative overflow-hidden">
          <OptimizedImage
            src={post.image}
            alt={post.title}
            width={featured ? 800 : 400}
            height={featured ? 450 : 300}
            className={imageClasses}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800">
              {post.category}
            </span>
          </div>

          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                Featured
              </span>
            </div>
          )}
        </div>

        <div className={`p-${featured ? "8" : "6"}`}>
          <h3
            className={`${
              featured ? "text-2xl" : "text-xl"
            } font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-3 line-clamp-2`}
          >
            {post.title}
          </h3>

          <p
            className={`text-gray-600 mb-4 line-clamp-${featured ? "3" : "2"}`}
          >
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <UserIcon className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
