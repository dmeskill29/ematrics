import { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contact Us | Ematrics - AI-Powered Sales Wingman',
  description: 'Get in touch with Ematrics. Book a demo, ask questions, or learn how our AI-powered sales coaching can transform your team performance.',
  keywords: 'contact Ematrics, sales demo, AI sales coaching, sales support, customer service',
}

export default function ContactPage() {
  const faqs = [
    {
      question: "How quickly can we get started with Ematrics?",
      answer: "Most teams can be up and running within 24-48 hours. Our onboarding process includes setup assistance, initial training, and integration with your existing CRM and communication tools."
    },
    {
      question: "What CRM systems does Ematrics integrate with?",
      answer: "Ematrics integrates with all major CRM platforms including Salesforce, HubSpot, Pipedrive, and more. We also offer API access for custom integrations."
    },
    {
      question: "Is there a minimum contract length?",
      answer: "Our Starter and Pro plans are month-to-month with no long-term commitment. Enterprise plans typically include annual agreements with custom terms."
    },
    {
      question: "How does Ematrics ensure data security?",
      answer: "We use enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and GDPR compliance. Your data is stored in secure, geographically distributed data centers."
    },
    {
      question: "Can Ematrics work with remote sales teams?",
      answer: "Absolutely! Ematrics is designed for modern, distributed sales teams. Our platform works seamlessly with video calls, phone calls, and in-person meetings."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-500 to-teal-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
              Ready to transform your sales team with AI-powered coaching? Let&apos;s discuss how Ematrics can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-8">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-lg text-charcoal-600 mb-8">
                Whether you&apos;re looking to book a demo, have questions about our platform, or want to explore custom enterprise solutions, we&apos;re here to help.
              </p>

              <div className="space-y-6">
                {/* Contact Methods */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900">Phone</h3>
                    <p className="text-charcoal-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-charcoal-500">Monday - Friday, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900">Email</h3>
                    <p className="text-charcoal-600">hello@ematrics.com</p>
                    <p className="text-sm text-charcoal-500">We&apos;ll get back to you within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900">Office</h3>
                    <p className="text-charcoal-600">
                      123 Innovation Drive<br />
                      Tech Hub, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Options */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4">
                  Quick Support
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="/demo" 
                    className="bg-primary-50 border border-primary-200 rounded-lg p-4 hover:bg-primary-100 transition-colors"
                  >
                    <h4 className="font-semibold text-primary-700">Book a Demo</h4>
                    <p className="text-sm text-primary-600">See Ematrics in action</p>
                  </a>
                  <a 
                    href="mailto:support@ematrics.com" 
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-semibold text-charcoal-700">Technical Support</h4>
                    <p className="text-sm text-charcoal-600">Get help with your account</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-charcoal-600">
              Find quick answers to common questions about Ematrics
            </p>
          </div>          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-charcoal-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
