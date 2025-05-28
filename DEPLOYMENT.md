# Ematrics Website Deployment Guide

## Quick Start

1. **Clone and Install**

   ```bash
   git clone <repository-url>
   cd ematrics-website
   npm install
   ```

2. **Environment Setup**

   ```bash
   cp .env.example .env.local
   ```

   Update the environment variables with your actual values.

3. **Development**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

4. **Production Build**
   ```bash
   npm run build
   npm start
   ```

## Vercel Deployment (Recommended)

1. **Connect Repository**

   - Push code to GitHub
   - Import project in Vercel dashboard
   - Connect GitHub repository

2. **Environment Variables**
   Add these in Vercel dashboard → Settings → Environment Variables:

   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   NEXT_PUBLIC_SITE_URL=https://ematrics.com
   CRM_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/xxxxx
   HUBSPOT_API_KEY=your_hubspot_private_app_token
   ```

3. **Domain Configuration**

   - Add custom domain: ematrics.com
   - Configure DNS records as shown in Vercel

4. **Deploy**
   - Vercel auto-deploys on git push
   - Preview deployments for branches
   - Production deployment from main branch

## Google Tag Manager Setup

1. **Create GTM Container**

   - Go to [Google Tag Manager](https://tagmanager.google.com)
   - Create new container for ematrics.com
   - Copy Container ID (GTM-XXXXXXX)

2. **Configure Tags**

   **Google Analytics 4:**

   ```
   Tag Type: Google Analytics 4 Configuration
   Measurement ID: G-XXXXXXXXXX
   Trigger: All Pages
   ```

   **Meta Pixel:**

   ```
   Tag Type: Custom HTML
   HTML: Facebook Pixel code
   Trigger: All Pages
   ```

   **LinkedIn Insight:**

   ```
   Tag Type: Custom HTML
   HTML: LinkedIn Insight Tag code
   Trigger: All Pages
   ```

3. **Event Tracking**
   The website automatically sends these events:
   - `demo_request` - When demo form is submitted
   - `contact_form` - When contact form is submitted
   - `page_view` - On page navigation
   - `form_submit` - Generic form submissions

## CRM Integration

### HubSpot Setup

1. Create Private App in HubSpot
2. Grant scopes: `crm.objects.contacts.write`
3. Copy Private App Token
4. Add to environment: `HUBSPOT_API_KEY=your_token`

### Zapier Webhook Setup

1. Create new Zap in Zapier
2. Trigger: Webhooks by Zapier → Catch Hook
3. Copy webhook URL
4. Add to environment: `CRM_WEBHOOK_URL=webhook_url`

### Custom CRM

Modify `/api/contact/route.ts` to integrate with your CRM API.

## Performance Optimization

The website is pre-optimized for performance:

- **Images**: Automatic optimization with Next.js Image
- **Fonts**: Google Fonts with display:swap
- **Code Splitting**: Automatic with Next.js
- **Caching**: Static generation where possible
- **Service Worker**: PWA functionality

Target Lighthouse scores:

- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

## SEO Configuration

### Sitemap

- Auto-generated at `/sitemap.xml`
- Includes all pages + blog posts
- Submit to Google Search Console

### Robots.txt

- Generated at `/robots.txt`
- Allows all crawlers except AI bots
- Points to sitemap

### Schema.org

Structured data included for:

- Organization
- Website
- FAQ
- Blog posts

## Content Management

### Blog Posts

Edit `/lib/blog.ts` to add new blog posts:

```typescript
{
  id: 4,
  title: "Your Blog Post Title",
  excerpt: "Brief description...",
  content: "Full markdown content...",
  author: "Author Name",
  authorRole: "Job Title",
  publishedAt: "2024-01-20",
  readTime: "5 min read",
  category: "Sales Techniques",
  tags: ["sales", "tips"],
  image: "/images/blog/post-image.jpg"
}
```

### FAQ Updates

Edit `/components/sections/FAQ.tsx` to modify FAQ content.

## Monitoring & Analytics

### Performance Monitoring

- Web Vitals automatically tracked
- Core Web Vitals sent to analytics
- Performance budget in CI/CD

### Error Tracking

Consider adding:

- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior

### Uptime Monitoring

- Pingdom
- UptimeRobot
- StatusPage

## Security

### Headers

Security headers configured in `next.config.ts`:

- HSTS
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options

### Data Protection

- GDPR/CCPA compliant cookie consent
- Privacy policy included
- No PII stored in localStorage
- Secure form handling

## Maintenance

### Regular Updates

- Dependencies: Monthly security updates
- Content: Weekly blog posts
- Analytics: Monthly performance review

### Backup Strategy

- Git repository (code)
- Database exports (if using CMS)
- Environment variables backup

### Support Contacts

- **Technical Issues**: dev@ematrics.com
- **Content Updates**: marketing@ematrics.com
- **Analytics**: analytics@ematrics.com

## Troubleshooting

### Common Issues

**Forms not submitting:**

- Check API routes are working
- Verify environment variables
- Test webhook endpoints

**Analytics not tracking:**

- Verify GTM container ID
- Check tag configuration
- Test in GTM preview mode

**Performance issues:**

- Run Lighthouse audit
- Check image optimization
- Monitor Core Web Vitals

**SEO problems:**

- Validate structured data
- Check sitemap generation
- Test robots.txt accessibility

For additional support, contact the development team or refer to the GitHub repository issues.
