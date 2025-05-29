import { Metadata } from "next";
import {
  CalendarIcon,
  UserIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Sales Insights & Blog | Ematrics - AI Sales Coaching Tips",
  description:
    "Discover expert sales insights, AI coaching strategies, and industry best practices. Learn how to boost your sales team performance with Ematrics.",
  keywords:
    "sales insights, sales tips, AI sales coaching, sales training, sales performance, sales blog",
};

// Mock blog data - in a real app, this would come from a CMS or database
const featuredPost = {
  id: 1,
  title:
    "The Future of Sales Coaching: How AI is Revolutionizing Team Performance",
  excerpt:
    "Discover how artificial intelligence is transforming sales coaching from reactive feedback to proactive, real-time guidance that drives measurable results.",
  content:
    "Sales coaching has traditionally been a reactive process - managers review calls after they've happened, provide feedback during weekly one-on-ones, and hope that insights stick...",
  author: "Sarah Chen",
  authorRole: "VP of Sales",
  publishedAt: "2024-01-15",
  readTime: "8 min read",
  category: "AI & Technology",
  image: "/api/placeholder/800/400",
};

const recentPosts = [
  {
    id: 2,
    title: "5 Objection Handling Techniques That Actually Work in 2024",
    excerpt:
      "Modern buyers are more informed than ever. Here are the proven objection handling strategies that top salespeople use to close more deals.",
    author: "Michael Rodriguez",
    authorRole: "Sales Training Manager",
    publishedAt: "2024-01-12",
    readTime: "6 min read",
    category: "Sales Techniques",
    image: "/api/placeholder/400/250",
  },
  {
    id: 3,
    title: "Building a Data-Driven Sales Culture: Metrics That Matter",
    excerpt:
      "Learn which sales metrics actually predict success and how to build a culture where data drives decisions, not just reports.",
    author: "Jennifer Park",
    authorRole: "Sales Operations Director",
    publishedAt: "2024-01-10",
    readTime: "7 min read",
    category: "Analytics",
    image: "/api/placeholder/400/250",
  },
  {
    id: 4,
    title: "Remote Sales Management: Coaching Your Team from Anywhere",
    excerpt:
      "Best practices for managing and coaching distributed sales teams, from virtual ride-alongs to digital performance tracking.",
    author: "David Kim",
    authorRole: "Regional Sales Manager",
    publishedAt: "2024-01-08",
    readTime: "5 min read",
    category: "Management",
    image: "/api/placeholder/400/250",
  },
  {
    id: 5,
    title: "The Psychology of B2B Buying: Understanding Your Prospect's Mind",
    excerpt:
      "Dive deep into the psychological factors that influence B2B purchase decisions and how to align your sales approach accordingly.",
    author: "Dr. Lisa Thompson",
    authorRole: "Sales Psychology Expert",
    publishedAt: "2024-01-05",
    readTime: "9 min read",
    category: "Psychology",
    image: "/api/placeholder/400/250",
  },
  {
    id: 6,
    title: "CRM Integration Best Practices: Maximizing Your Sales Stack",
    excerpt:
      "How to integrate your sales tools effectively to create a seamless workflow that actually helps your team sell more.",
    author: "Alex Johnson",
    authorRole: "Sales Technology Consultant",
    publishedAt: "2024-01-03",
    readTime: "6 min read",
    category: "Technology",
    image: "/api/placeholder/400/250",
  },
];

const categories = [
  "All",
  "AI & Technology",
  "Sales Techniques",
  "Analytics",
  "Management",
  "Psychology",
  "Technology",
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-500 to-teal-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Sales Insights & Expert Advice
            </h1>
            <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI-powered sales
              coaching, proven techniques, and industry best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-charcoal-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary-50 to-teal-50 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-primary-600 text-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-charcoal-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-charcoal-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                        <UserIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal-900">
                          {featuredPost.author}
                        </p>
                        <p className="text-sm text-charcoal-600">
                          {featuredPost.authorRole}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-charcoal-500 space-x-4">
                        <span className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {new Date(
                            featuredPost.publishedAt
                          ).toLocaleDateString()}
                        </span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>{" "}
                  <button className="inline-flex items-center mt-6 text-primary-600 hover:text-primary-700 font-semibold">
                    Read full article
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </div>
                <div className="lg:p-8">
                  <div className="bg-gradient-to-br from-primary-100 to-teal-100 rounded-xl h-full min-h-[300px] flex items-center justify-center">
                    <span className="text-primary-600 font-medium">
                      Featured Article Image
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts Grid */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal-900 mb-8">
              Recent Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                    <span className="text-charcoal-400 font-medium">
                      Article Image
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-charcoal-500">
                        {post.readTime}
                      </span>
                    </div>{" "}
                    <h3 className="font-bold text-charcoal-900 mb-3 line-clamp-2">
                      <span className="hover:text-primary-600 cursor-default">
                        {post.title}
                      </span>
                    </h3>
                    <p className="text-charcoal-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                          <UserIcon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-charcoal-900 text-sm">
                            {post.author}
                          </p>
                          <p className="text-xs text-charcoal-500">
                            {post.authorRole}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-charcoal-500">
                        <CalendarIcon className="w-3 h-3 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-charcoal-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-4">
            Stay Updated with Sales Insights
          </h2>
          <p className="text-lg text-charcoal-600 mb-8">
            Get the latest sales strategies, AI coaching tips, and industry
            insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-charcoal-500 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
