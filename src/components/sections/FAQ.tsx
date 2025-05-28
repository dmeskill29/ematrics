"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
}

const defaultFAQs: FAQ[] = [
  {
    id: "1",
    question: "How does AI sales coaching work?",
    answer:
      "Our AI analyzes your sales conversations in real-time and provides instant feedback. It identifies key moments like objections, buying signals, and missed opportunities, then suggests the best responses. The AI learns from top performers and provides personalized coaching recommendations.",
    category: "general",
  },
  {
    id: "2",
    question: "How quickly can my team get started?",
    answer:
      "Most teams are up and running within 24-48 hours. Our onboarding process includes account setup, initial team training, and integration with your existing CRM and communication tools. We provide comprehensive training materials and dedicated support throughout.",
    category: "implementation",
  },
  {
    id: "3",
    question: "What integrations are available?",
    answer:
      "Ematrics integrates with popular CRM systems (Salesforce, HubSpot, Pipedrive), communication platforms (Zoom, Teams, Slack), and sales tools (Outreach, SalesLoft). We also offer API access for custom integrations.",
    category: "technical",
  },
  {
    id: "4",
    question: "Is my sales data secure?",
    answer:
      "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 Type II compliance, and GDPR compliance. Your data is stored securely and never shared with third parties. We follow strict data privacy protocols.",
    category: "security",
  },
  {
    id: "5",
    question: "How much does Ematrics cost?",
    answer:
      "We offer flexible pricing plans starting at $49/month per user for our Starter plan. Our Pro plan at $149/month includes advanced features, and we have custom Enterprise solutions. All plans include a 14-day free trial.",
    category: "pricing",
  },
  {
    id: "6",
    question: "What kind of ROI can I expect?",
    answer:
      "Our customers typically see a 15-25% increase in close rates within the first 90 days. On average, teams report 20% faster deal velocity and 30% improvement in quota attainment. The platform typically pays for itself within 2-3 months.",
    category: "results",
  },
  {
    id: "7",
    question: "Do you offer training and support?",
    answer:
      "Yes! We provide comprehensive onboarding, live training sessions, documentation, video tutorials, and ongoing support. Our customer success team works with you to ensure maximum adoption and results.",
    category: "support",
  },
  {
    id: "8",
    question: "Can I customize the AI coaching for my industry?",
    answer:
      "Absolutely. Our Enterprise plan includes custom AI model training specific to your industry, sales methodology, and company processes. We can incorporate your best practices and objection handling strategies.",
    category: "customization",
  },
];

export default function FAQSection({
  faqs = defaultFAQs,
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about Ematrics",
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };
  return (
    <div className="bg-black py-24 sm:py-32 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#064e3b_0%,transparent_70%)] opacity-20" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">{subtitle}</p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm"
              >
                <dt>
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="flex w-full items-start justify-between text-left p-6 hover:bg-emerald-900/20 transition-colors rounded-lg"
                    aria-expanded={openItems.has(faq.id)}
                  >
                    <span className="text-lg font-semibold leading-7 text-white pr-4">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDownIcon
                        className={`h-6 w-6 transition-transform duration-200 text-emerald-400 ${
                          openItems.has(faq.id) ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                <AnimatePresence>
                  {openItems.has(faq.id) && (
                    <motion.dd
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-base leading-7 text-gray-300">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </dl>
        </div>

        <div className="mt-16 text-center">
          {" "}
          <p className="text-base text-gray-400">
            Still have questions?{" "}
            <a
              href="/contact"
              className="font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Contact our team
            </a>{" "}
            for personalized answers.
          </p>
        </div>

        {/* FAQ Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </div>
  );
}
