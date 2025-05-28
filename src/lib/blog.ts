// Blog data management utilities
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  color: string;
}

export const blogCategories: BlogCategory[] = [
  {
    id: 'ai-technology',
    name: 'AI & Technology',
    description: 'Latest trends in AI-powered sales tools and technology',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'sales-techniques',
    name: 'Sales Techniques',
    description: 'Proven strategies and tactics for sales success',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'analytics',
    name: 'Analytics',
    description: 'Data-driven insights for sales performance',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'leadership',
    name: 'Leadership',
    description: 'Sales management and team leadership best practices',
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'training',
    name: 'Training',
    description: 'Sales coaching and training methodologies',
    color: 'bg-teal-100 text-teal-800'
  }
];

// Mock blog posts - in production, this would come from a CMS
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Sales Coaching: How AI is Revolutionizing Team Performance",
    excerpt: "Discover how artificial intelligence is transforming sales coaching from reactive feedback to proactive, real-time guidance that drives measurable results.",
    content: `
# The Future of Sales Coaching: How AI is Revolutionizing Team Performance

Sales coaching has traditionally been a reactive process - managers review calls after they've happened, provide feedback during weekly one-on-ones, and hope that insights stick. But artificial intelligence is fundamentally changing this paradigm, enabling proactive, real-time coaching that drives immediate and measurable results.

## The Old Way vs. The New Way

Traditional sales coaching relied heavily on:
- Post-call analysis and feedback
- Periodic performance reviews
- Generic training materials
- Manager availability and expertise

AI-powered coaching introduces:
- Real-time guidance during live calls
- Personalized training based on individual weaknesses
- Continuous learning and improvement
- Objective, data-driven insights

## Key Benefits of AI Sales Coaching

### 1. Real-Time Performance Enhancement
AI coaches can provide instant suggestions during calls, helping reps navigate objections, ask better questions, and identify closing opportunities as they happen.

### 2. Personalized Development Plans
By analyzing individual performance patterns, AI can create customized training programs that address each rep's specific areas for improvement.

### 3. Consistent Quality Standards
AI ensures that coaching quality remains consistent across all team members, regardless of manager availability or expertise levels.

### 4. Objective Performance Measurement
Remove subjective bias from performance evaluations with data-driven insights that track improvement over time.

## Implementation Best Practices

1. **Start with clear objectives** - Define what success looks like for your team
2. **Ensure buy-in from leadership** - Support from management is crucial for adoption
3. **Provide adequate training** - Help your team understand how to leverage AI tools effectively
4. **Measure and iterate** - Continuously refine your approach based on results

The future of sales coaching is here, and it's powered by AI. Organizations that embrace this technology now will gain a significant competitive advantage in developing high-performing sales teams.
    `,
    author: "Sarah Chen",
    authorRole: "VP of Sales",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Technology",
    tags: ["AI", "Sales Coaching", "Performance", "Technology"],
    image: "/api/placeholder/800/400",
    featured: true,
    seoTitle: "AI Sales Coaching: Revolutionizing Team Performance | Ematrics",
    seoDescription: "Learn how AI is transforming sales coaching with real-time guidance and personalized training. Discover the future of sales team development.",
    seoKeywords: "AI sales coaching, sales performance, real-time coaching, sales training, AI technology"
  },
  {
    id: 2,
    title: "5 Objection Handling Techniques That Actually Work in 2024",
    excerpt: "Modern buyers are more informed than ever. Here are the proven objection handling strategies that top salespeople use to close more deals.",
    content: `
# 5 Objection Handling Techniques That Actually Work in 2024

In today's informed marketplace, buyers come prepared with research, comparisons, and preconceived notions. Traditional objection handling techniques often fall flat because they feel scripted and impersonal. Here are five modern approaches that top performers use to turn objections into opportunities.

## 1. The Acknowledge and Explore Method

Instead of immediately countering an objection, acknowledge it and dig deeper:

**Traditional approach**: "That's not a problem because..."
**Modern approach**: "I understand your concern about price. Help me understand what's driving that - is it budget constraints or a question about ROI?"

This technique shows empathy and often reveals the real underlying concern.

## 2. The Feel, Felt, Found Framework (Modernized)

The classic framework gets an update with specific, data-driven examples:

"I understand how you feel about implementing another tool. Many of our clients felt the same way initially. What they found was that the 15-minute daily time investment actually saved them 2 hours per week through better call preparation."

## 3. The Assumption Reversal

Turn the objection into a question about their current situation:

**Objection**: "We're happy with our current solution."
**Response**: "That's great to hear you're satisfied. What would have to change about your current situation for you to consider looking at alternatives?"

## 4. The Future Pacing Technique

Help them visualize the consequences of not addressing the underlying problem:

"I hear that budget is tight right now. Help me understand - if this challenge isn't addressed in the next 6 months, what impact do you think that might have on your team's quota attainment?"

## 5. The Collaborative Problem-Solving Approach

Position yourself as a partner in solving their business challenge:

"It sounds like you're concerned about user adoption. That's actually something we specialize in helping with. Based on similar implementations, here are three strategies that have proven most effective..."

## Implementation Tips

- **Practice active listening** - Often objections mask deeper concerns
- **Use data and examples** - Modern buyers respond to concrete evidence
- **Stay curious** - Ask follow-up questions to understand the full picture
- **Be genuine** - Authenticity trumps perfect technique every time

Remember, objection handling isn't about winning an argument - it's about understanding and addressing legitimate business concerns.
    `,
    author: "Michael Rodriguez",
    authorRole: "Sales Training Manager",
    publishedAt: "2024-01-12",
    readTime: "6 min read",
    category: "Sales Techniques",
    tags: ["Objection Handling", "Sales Techniques", "Closing", "Communication"],
    image: "/api/placeholder/400/250",
    seoTitle: "5 Proven Objection Handling Techniques for Modern Sales | Ematrics",
    seoDescription: "Master modern objection handling with these 5 proven techniques. Learn how top salespeople turn objections into opportunities in 2024.",
    seoKeywords: "objection handling, sales techniques, closing deals, sales training, objection responses"
  },
  {
    id: 3,
    title: "Building a Data-Driven Sales Culture: Metrics That Matter",
    excerpt: "Learn which sales metrics actually predict success and how to build a culture where data drives decisions, not just reports.",
    content: `
# Building a Data-Driven Sales Culture: Metrics That Matter

In the age of big data, sales teams are drowning in metrics but starving for insights. The key to building a truly data-driven sales culture isn't collecting more data - it's focusing on the right metrics and creating a culture that acts on insights.

## The Problem with Traditional Sales Metrics

Most sales teams focus on lagging indicators:
- Monthly/quarterly revenue
- Number of deals closed
- Average deal size
- Conversion rates

While these metrics are important for reporting, they don't help teams improve performance in real-time.

## Leading Indicators That Drive Results

### 1. Activity Metrics That Predict Pipeline Health
- **Quality conversations per week** (not just calls made)
- **Discovery questions asked per call**
- **Follow-up timing and consistency**
- **Stakeholder engagement breadth**

### 2. Behavioral Metrics That Predict Close Rates
- **Talk-to-listen ratio in sales calls**
- **Objection handling effectiveness**
- **Value proposition alignment**
- **Competitive positioning accuracy**

### 3. Pipeline Velocity Indicators
- **Time spent in each stage**
- **Stage progression consistency**
- **Deal momentum indicators**
- **Resource allocation efficiency**

## Building the Culture

### 1. Start with Leadership Buy-In
Leaders must model data-driven decision making. When managers use gut feelings over data, teams follow suit.

### 2. Make Data Accessible and Actionable
- Create simple, visual dashboards
- Focus on 3-5 key metrics per role
- Provide context and benchmarks
- Enable self-service reporting

### 3. Celebrate Data-Driven Wins
Recognize team members who use data to improve their performance, not just those with the highest numbers.

### 4. Implement Continuous Improvement Processes
- Weekly data review sessions
- Hypothesis-driven testing
- Regular metric evaluation and adjustment
- Cross-team learning and sharing

## Common Implementation Mistakes

1. **Too many metrics** - Focus on quality over quantity
2. **Lack of context** - Data without benchmarks is meaningless
3. **No action plans** - Insights without actions don't drive results
4. **Inconsistent measurement** - Changing metrics frequently undermines trust

## The ROI of Data-Driven Sales Culture

Organizations with strong data cultures see:
- 15-20% increase in quota attainment
- 25% reduction in sales cycle length
- 30% improvement in forecast accuracy
- 40% better sales rep retention

The investment in building a data-driven culture pays dividends in both performance and predictability.
    `,
    author: "Jennifer Park",
    authorRole: "Sales Operations Director",
    publishedAt: "2024-01-10",
    readTime: "7 min read",
    category: "Analytics",
    tags: ["Data Analytics", "Sales Metrics", "Performance", "Culture", "KPIs"],
    image: "/api/placeholder/400/250",
    seoTitle: "Data-Driven Sales Culture: Essential Metrics and Implementation | Ematrics",
    seoDescription: "Build a data-driven sales culture with the right metrics. Learn which indicators predict success and how to implement them effectively.",
    seoKeywords: "data-driven sales, sales metrics, sales analytics, performance indicators, sales culture"
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getBlogPostById(id: number): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getRelatedPosts(currentPostId: number, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostById(currentPostId);
  if (!currentPost) return [];

  // Find posts with similar tags or category
  const related = blogPosts
    .filter(post => post.id !== currentPostId)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .sort((a, b) => {
      // Prioritize by shared tags count
      const aSharedTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bSharedTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      return bSharedTags - aSharedTags;
    });

  return related.slice(0, limit);
}
