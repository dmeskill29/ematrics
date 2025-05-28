import { BlogPost } from './blog';

// JSON-LD Schema.org markup utilities
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ematrics",
  "description": "AI-powered sales coaching platform that transforms sales team performance through real-time guidance and analytics.",
  "url": "https://ematrics.com",
  "logo": "https://ematrics.com/logo.png",
  "foundingDate": "2023",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Innovation Drive",
    "addressLocality": "Tech Hub",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "Customer Service",
    "email": "hello@ematrics.com",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/ematrics",
    "https://twitter.com/ematrics"
  ]
}

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Ematrics",
  "description": "AI-powered sales coaching platform that provides real-time call guidance, training simulations, and performance analytics.",
  "url": "https://ematrics.com",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "USD",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "creator": {
    "@type": "Organization",
    "name": "Ematrics"
  },
  "featureList": [
    "Real-time AI call coaching",
    "Sales conversation analytics",
    "Performance dashboards",
    "CRM integration",
    "Team training simulations"
  ]
}

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

export const articleSchema = (article: {
  headline: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.headline,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Ematrics",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ematrics.com/logo.png"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "image": article.image || "https://ematrics.com/default-article-image.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://ematrics.com"
  }
})

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

// Utility function to inject JSON-LD into the page
export const injectJsonLd = (schema: object) => {
  if (typeof window === 'undefined') return

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}

// SEO and Schema.org utilities
export function generateBlogPostSchema(post: BlogPost, baseUrl: string = 'https://ematrics.com') {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `${baseUrl}${post.image}`,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ematrics",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/favicon.ico`
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/insights/${post.id}`
    },
    "keywords": post.tags.join(", ")
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateOrganizationSchema(baseUrl: string = 'https://ematrics.com') {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ematrics",
    "description": "AI-powered sales coaching and training platform",
    "url": baseUrl,
    "logo": `${baseUrl}/favicon.ico`,
    "sameAs": [
      "https://www.linkedin.com/company/ematrics",
      "https://twitter.com/ematrics"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "sales@ematrics.com"
    }
  };
}

export function generateWebsiteSchema(baseUrl: string = 'https://ematrics.com') {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ematrics",
    "description": "AI-powered sales coaching and training platform",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/insights?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}
