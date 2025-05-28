import { Metadata } from 'next'
import DemoForm from '@/components/forms/DemoForm'
import { CheckIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Book a Demo | Ematrics - See AI Sales Coaching in Action',
  description: 'Schedule a personalized demo of Ematrics AI-powered sales coaching platform. See how we can transform your sales team performance in just 30 minutes.',
  keywords: 'Ematrics demo, sales demo, AI sales coaching demo, sales training demonstration',
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-500 to-teal-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              See Ematrics in Action
            </h1>
            <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
              Book a personalized 30-minute demo and discover how AI-powered sales coaching can transform your team&apos;s performance.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Information */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-8">
                What You&apos;ll See in Your Demo
              </h2>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "AI Training & Onboarding",
                    description: "Watch how Ematrics learns your sales methodology and trains your team with personalized coaching."
                  },
                  {
                    title: "Real-Time Call Coaching",
                    description: "See live AI assistance during sales calls with prompts, objection handling, and conversation guidance."
                  },
                  {
                    title: "Performance Analytics",
                    description: "Explore comprehensive dashboards showing individual and team performance metrics and insights."
                  },
                  {
                    title: "CRM Integration",
                    description: "Learn how Ematrics seamlessly integrates with your existing sales tools and workflows."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal-900">
                        {item.title}
                      </h3>
                      <p className="text-charcoal-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Demo Benefits */}
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  Why Book a Demo?
                </h3>
                <ul className="space-y-2 text-primary-700">
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-4 w-4 text-primary-500 flex-shrink-0" />
                    <span>Personalized to your industry and use case</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-4 w-4 text-primary-500 flex-shrink-0" />
                    <span>See real ROI projections for your team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-4 w-4 text-primary-500 flex-shrink-0" />
                    <span>Get expert consultation on implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-4 w-4 text-primary-500 flex-shrink-0" />
                    <span>Q&A with our sales and technical experts</span>
                  </li>
                </ul>
              </div>

              {/* Social Proof */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-4">
                  Join 500+ Sales Teams
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-600">
                      <span className="font-semibold">4.9/5</span> average rating from sales managers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Booking Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">
                Schedule Your Demo
              </h2>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal-900">
              Demo FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long is the demo?",
                answer: "Our standard demo is 30 minutes, but we can extend it to 45 minutes if you have specific questions or requirements to discuss."
              },
              {
                question: "Can multiple team members join?",
                answer: "Absolutely! We encourage sales managers, operations team members, and key stakeholders to join the demo."
              },
              {
                question: "Will I see my actual data?",
                answer: "During the demo, we'll use sample data that's relevant to your industry. After the demo, we can discuss a trial period with your actual data."
              },
              {
                question: "What if I need to reschedule?",
                answer: "No problem! You&apos;ll receive a calendar invite with options to reschedule. You can also contact us directly if you need to make changes."
              }
            ].map((faq, index) => (
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
