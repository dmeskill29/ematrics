import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ematrics',
  description: 'Learn how Ematrics protects your privacy and handles your personal data.',
  robots: 'index, follow',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-charcoal-900">Privacy Policy</h1>
          <p className="mt-4 text-lg text-charcoal-600">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2>1. Introduction</h2>
            <p>
              Ematrics (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
            </p>

            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name, email address, phone number, and job title</li>
              <li>Company name and industry information</li>
              <li>Sales team size and current tools used</li>
              <li>Communication preferences</li>
            </ul>

            <h3>2.2 Usage Information</h3>
            <p>We automatically collect certain information about your interaction with our services:</p>
            <ul>
              <li>Browser type, operating system, and device information</li>
              <li>IP address and general location information</li>
              <li>Pages visited, time spent, and navigation patterns</li>
              <li>Referral sources and search terms used</li>
            </ul>

            <h3>2.3 Sales Conversation Data</h3>
            <p>For customers using our platform:</p>
            <ul>
              <li>Audio recordings of sales calls (with appropriate consent)</li>
              <li>Call transcripts and analysis results</li>
              <li>Performance metrics and coaching insights</li>
              <li>CRM integration data</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your requests and respond to inquiries</li>
              <li>Send you updates, newsletters, and marketing communications</li>
              <li>Analyze usage patterns and enhance user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Provide AI-powered sales coaching and analytics</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            
            <h3>4.1 Service Providers</h3>
            <p>We may share information with trusted third-party service providers who assist us in operating our business, such as:</p>
            <ul>
              <li>Cloud hosting and data storage providers</li>
              <li>Analytics and marketing platforms</li>
              <li>Customer support tools</li>
              <li>Payment processors</li>
            </ul>

            <h3>4.2 Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to valid legal requests.</p>

            <h3>4.3 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>

            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your information:</p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and employee training</li>
              <li>SOC 2 Type II compliance</li>
              <li>GDPR and CCPA compliance measures</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>We retain your information for as long as necessary to:</p>
            <ul>
              <li>Provide our services to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Improve our services and user experience</li>
            </ul>

            <h2>7. Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Restrict Processing:</strong> Request limitation of how we use your data</li>
            </ul>

            <h2>8. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Personalize content and advertisements</li>
              <li>Improve website performance and security</li>
            </ul>
            <p>You can control cookie settings through your browser preferences.</p>

            <h2>9. International Data Transfers</h2>
            <p>Your information may be processed and stored in countries other than your own. We ensure appropriate safeguards are in place when transferring data internationally.</p>

            <h2>10. Children&apos;s Privacy</h2>
            <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>

            <h2>11. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &quot;last modified&quot; date.</p>

            <h2>12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> privacy@ematrics.com</li>
              <li><strong>Address:</strong> 123 Innovation Drive, Tech Hub, CA 94105</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            </ul>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mt-8">
              <h3 className="text-primary-900 font-semibold mb-2">Questions about your data?</h3>
              <p className="text-primary-700 mb-4">
                We&apos;re committed to transparency about how we handle your information. If you have any questions or concerns about your privacy, don&apos;t hesitate to reach out.
              </p>
              <a href="mailto:privacy@ematrics.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                Contact our Privacy Team →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
