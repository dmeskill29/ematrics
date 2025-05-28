import { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, UserIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline'

// Mock data - in a real app, this would come from a CMS or database
const getBlogPost = (id: string) => {
  const posts = {
    '1': {
      id: 1,
      title: "The Future of Sales Coaching: How AI is Revolutionizing Team Performance",
      excerpt: "Discover how artificial intelligence is transforming sales coaching from reactive feedback to proactive, real-time guidance that drives measurable results.",
      content: `
        <p>Sales coaching has traditionally been a reactive process - managers review calls after they've happened, provide feedback during weekly one-on-ones, and hope that insights stick. But what if we could flip this model on its head?</p>

        <p>Artificial Intelligence is fundamentally changing how sales teams learn, improve, and perform. Instead of waiting for post-call analysis, AI-powered coaching provides real-time guidance that helps sales reps navigate conversations as they happen.</p>

        <h2>The Traditional Coaching Challenge</h2>

        <p>Most sales managers are overwhelmed. They're responsible for coaching multiple team members while managing their own quotas and administrative responsibilities. The result? Coaching often gets pushed to the back burner, happening sporadically and without the consistency needed for real improvement.</p>

        <p>Traditional coaching approaches also suffer from several limitations:</p>

        <ul>
          <li><strong>Limited sample size:</strong> Managers can only review a fraction of their team's calls</li>
          <li><strong>Subjective feedback:</strong> Coaching quality varies based on the manager's experience and availability</li>
          <li><strong>Delayed insights:</strong> By the time feedback is provided, the moment for improvement has passed</li>
          <li><strong>Inconsistent methodology:</strong> Different managers coach differently, leading to mixed messages</li>
        </ul>

        <h2>How AI Changes Everything</h2>

        <p>AI-powered sales coaching addresses these challenges by providing:</p>

        <h3>Real-Time Guidance</h3>
        <p>Instead of waiting for post-call feedback, AI can analyze conversations as they happen, providing prompts and suggestions that help reps navigate difficult moments. This immediate support is particularly valuable for newer team members who need more guidance.</p>

        <h3>Comprehensive Analysis</h3>
        <p>AI can analyze 100% of sales conversations, not just the small sample that managers have time to review. This comprehensive approach identifies patterns and opportunities that would otherwise be missed.</p>

        <h3>Objective Insights</h3>
        <p>AI removes subjectivity from coaching by analyzing conversations against proven methodologies and best practices. Every rep receives consistent, data-driven feedback based on what actually works.</p>

        <h3>Personalized Development</h3>
        <p>AI can identify each rep's unique strengths and weaknesses, providing personalized coaching recommendations that accelerate improvement in specific areas.</p>

        <h2>Real-World Results</h2>

        <p>Companies implementing AI-powered sales coaching are seeing remarkable results:</p>

        <ul>
          <li>35% increase in deal closure rates</li>
          <li>50% reduction in ramp time for new hires</li>
          <li>40% improvement in sales conversation quality scores</li>
          <li>60% more coaching interactions per rep per month</li>
        </ul>

        <h2>The Future is Now</h2>

        <p>We're just at the beginning of the AI coaching revolution. As natural language processing improves and AI becomes more sophisticated, we can expect even more advanced capabilities:</p>

        <ul>
          <li>Emotional intelligence analysis to help reps read prospect sentiment</li>
          <li>Predictive insights that forecast deal outcomes based on conversation patterns</li>
          <li>Automated role-playing and practice scenarios tailored to each rep's needs</li>
          <li>Integration with CRM data to provide context-aware coaching</li>
        </ul>

        <p>The question isn't whether AI will transform sales coaching - it's whether your organization will embrace this transformation or be left behind by competitors who do.</p>

        <h2>Getting Started</h2>

        <p>For sales leaders considering AI-powered coaching, start by:</p>

        <ol>
          <li><strong>Assessing your current coaching process:</strong> Identify gaps and pain points in your existing approach</li>
          <li><strong>Defining success metrics:</strong> Determine how you'll measure the impact of AI coaching</li>
          <li><strong>Piloting with a small team:</strong> Start with a subset of your sales team to test and refine the approach</li>
          <li><strong>Training your managers:</strong> Help managers understand how to work alongside AI coaching tools</li>
          <li><strong>Scaling gradually:</strong> Expand the program based on lessons learned from your pilot</li>
        </ol>

        <p>The future of sales coaching is here, and it's powered by AI. Organizations that embrace this technology today will build competitive advantages that compound over time, creating high-performing sales teams that consistently exceed their targets.</p>
      `,
      author: "Sarah Chen",
      authorRole: "VP of Sales",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Technology",
      tags: ["AI", "Sales Coaching", "Performance", "Technology"],
      image: "/api/placeholder/800/400"
    }
  }
  
  return posts[id as keyof typeof posts]
}

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.id)
  
  if (!post) {
    return {
      title: 'Post Not Found | Ematrics',
    }
  }

  return {
    title: `${post.title} | Ematrics Insights`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-charcoal-900 mb-4">Post Not Found</h1>
          <p className="text-charcoal-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/insights"
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Back to Insights
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/insights"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
          
          <div className="mb-6">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-charcoal-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-charcoal-900">{post.author}</p>
                <p className="text-charcoal-600">{post.authorRole}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center text-sm text-charcoal-500 space-x-4 mb-2">
                <span className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
                <span>{post.readTime}</span>
              </div>
              <button className="flex items-center text-sm text-primary-600 hover:text-primary-700">
                <ShareIcon className="w-4 h-4 mr-1" />
                Share
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-primary-100 to-teal-100 rounded-xl h-96 flex items-center justify-center mb-8">
          <span className="text-primary-600 font-medium">Article Featured Image</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div 
          className="prose prose-lg prose-charcoal max-w-none
            prose-headings:text-charcoal-900 prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-charcoal-700 prose-p:leading-relaxed prose-p:mb-4
            prose-ul:text-charcoal-700 prose-ol:text-charcoal-700
            prose-li:mb-2 prose-strong:text-charcoal-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-charcoal-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
              <UserIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-charcoal-900">{post.author}</h3>
              <p className="text-charcoal-600 mb-3">{post.authorRole}</p>
              <p className="text-charcoal-700">
                {post.author} has over 10 years of experience in sales leadership and has helped hundreds of sales teams optimize their performance through data-driven coaching and AI-powered insights.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mock related articles */}
            {[
              {
                title: "5 Objection Handling Techniques That Actually Work in 2024",
                excerpt: "Modern buyers are more informed than ever. Here are the proven objection handling strategies...",
                category: "Sales Techniques",
                readTime: "6 min read"
              },
              {
                title: "Building a Data-Driven Sales Culture: Metrics That Matter",
                excerpt: "Learn which sales metrics actually predict success and how to build a culture where data drives decisions...",
                category: "Analytics",
                readTime: "7 min read"
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                  {article.category}
                </span>
                <h3 className="font-bold text-charcoal-900 mt-3 mb-2">
                  {article.title}
                </h3>
                <p className="text-charcoal-600 text-sm mb-3">
                  {article.excerpt}
                </p>
                <span className="text-xs text-charcoal-500">{article.readTime}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
