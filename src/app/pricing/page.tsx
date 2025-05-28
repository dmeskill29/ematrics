'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

const pricingTiers = [
  {
    name: 'Starter',
    id: 'starter',
    href: '/demo',
    price: { monthly: 49, annually: 39 },
    description: 'Perfect for small sales teams getting started with AI coaching.',
    features: [
      'Up to 5 team members',
      'Basic AI training simulations',
      'Real-time call coaching',
      'Monthly performance reports',
      'Email support',
      'Mobile app access',
    ],
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'pro',
    href: '/demo',
    price: { monthly: 149, annually: 119 },
    description: 'Advanced features for growing sales organizations.',
    features: [
      'Up to 25 team members',
      'Advanced AI simulations with custom scenarios',
      'Real-time coaching with conversation intelligence',
      'Weekly performance analytics',
      'Team comparison dashboards',
      'Integration with CRM systems',
      'Priority phone & email support',
      'Custom onboarding session',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    href: '/contact',
    price: { monthly: 'Custom', annually: 'Custom' },
    description: 'Tailored solutions for large sales organizations.',
    features: [
      'Unlimited team members',
      'Custom AI model training',
      'Advanced analytics & reporting',
      'White-label options',
      'Dedicated customer success manager',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security & compliance',
      'On-premise deployment options',
    ],
    mostPopular: false,
  },
];

const faqs = [
  {
    question: 'Can I change my plan at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'We offer a 14-day free trial for all plans. No credit card required to get started.',
  },
  {
    question: 'What integrations do you support?',
    answer: 'We integrate with popular CRM systems like Salesforce, HubSpot, Pipedrive, and more. Custom integrations are available for Enterprise plans.',
  },
  {
    question: 'How does the AI coaching work?',
    answer: 'Our AI analyzes conversation patterns, tone, and content to provide real-time suggestions and post-call insights to improve sales performance.',
  },
];

export default function PricingPage() {
  const [frequency, setFrequency] = useState<'monthly' | 'annually'>('monthly');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Pricing Plans</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for your team
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Start with a 14-day free trial. Scale up as your team grows. All plans include our core AI coaching features.
          </p>
        </div>

        {/* Billing frequency toggle */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-2 gap-x-1 rounded-full bg-gray-100 p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
            <button
              className={`cursor-pointer rounded-full px-2.5 py-1 ${
                frequency === 'monthly'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-500'
              }`}
              onClick={() => setFrequency('monthly')}
            >
              Monthly billing
            </button>
            <button
              className={`cursor-pointer rounded-full px-2.5 py-1 ${
                frequency === 'annually'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-500'
              }`}
              onClick={() => setFrequency('annually')}
            >
              Annual billing
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: tierIdx * 0.1 }}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={`text-lg font-semibold leading-8 ${
                      tier.mostPopular ? 'text-primary-600' : 'text-gray-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-primary-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {typeof tier.price[frequency] === 'string' ? tier.price[frequency] : `$${tier.price[frequency]}`}
                  </span>
                  {typeof tier.price[frequency] !== 'string' && (
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /{frequency === 'monthly' ? 'month' : 'month'}
                    </span>
                  )}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-primary-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                variant={tier.mostPopular ? 'default' : 'outline'}
                className="mt-8"
                asChild
              >
                <a href={tier.href} aria-describedby={tier.id}>
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-24 max-w-2xl sm:mt-32 lg:max-w-4xl">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="pt-6">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
