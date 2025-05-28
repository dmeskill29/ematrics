"use client";

import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  MicrophoneIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "AI Training Simulations",
    description:
      "Practice sales scenarios with AI-powered roleplay simulations. Get instant feedback and improve your pitch, objection handling, and closing techniques in a risk-free environment.",
    icon: AcademicCapIcon,
    href: "#ai-training",
  },
  {
    name: "Real-Time Call Coaching",
    description:
      "Receive live guidance during sales calls with AI-powered suggestions. Get prompts for next best questions, objection responses, and closing opportunities right when you need them.",
    icon: MicrophoneIcon,
    href: "#call-coaching",
  },
  {
    name: "Post-Call Analytics",
    description:
      "Analyze every conversation with detailed insights on talk time, sentiment, key topics, and missed opportunities. Turn every call into a learning experience.",
    icon: ChartBarIcon,
    href: "#analytics",
  },
  {
    name: "Team Performance Dashboards",
    description:
      "Compare team performance with comprehensive dashboards. Track quota attainment, identify top performers, and spot coaching opportunities across your entire sales organization.",
    icon: UsersIcon,
    href: "#dashboards",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Features() {
  return (
    <div id="features" className="bg-black py-24 sm:py-32 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#064e3b_0%,transparent_70%)] opacity-20" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center">
          {" "}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg font-semibold leading-7 text-emerald-400"
          >
            AI-Powered Sales Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight"
          >
            Everything you need to close more deals
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-xl leading-relaxed text-gray-300 font-normal"
          >
            Our comprehensive AI platform provides the tools and insights your
            sales team needs to perform at their best, from initial training to
            deal closure.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="relative pl-16 group"
              >
                {" "}
                <dt className="text-lg font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500 group-hover:bg-emerald-600 transition-colors shadow-lg">
                    <feature.icon
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  </div>
                  <a
                    href={feature.href}
                    className="hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
                  >
                    {feature.name}
                  </a>
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-gray-300">
                  {feature.description}
                </dd>
                <dd className="mt-4">
                  <a
                    href={feature.href}
                    className="text-base font-medium text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg px-2 py-1"
                  >
                    Learn more →
                  </a>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
