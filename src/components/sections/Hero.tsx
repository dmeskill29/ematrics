"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-black bg-gradient-to-br from-black to-gray-900 pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Teal gradient background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,#00a884_0%,transparent_70%)] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium uppercase tracking-widest text-emerald-400 mb-2"
          >
            Proprietary Technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {" "}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
              Your Personal AI
              <br />
              Sales
              <span className="text-emerald-400"> Catalyst</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8 text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto font-normal"
          >
            Ematrics is an AI integrated system that encourages sales growth. It
            predicts leads, automates outreach and maximizes conversions
            seamlessly.
          </motion.p>{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 flex items-center justify-center"
          >
            <Link href="/demo">
              <button className="bg-emerald-400 hover:bg-emerald-500 text-black font-medium py-3 px-8 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 text-sm uppercase tracking-wide">
                Ignite Your Sales
              </button>
            </Link>
          </motion.div>{" "}
        </div>

        {/* Second section - Next Generation Sales Wingman */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-36 flow-root sm:mt-48"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                Your Next-Generation
                <br />
                Sales Wingman
              </h2>
              <p className="text-base leading-relaxed text-gray-300 mb-6">
                Ematrics provides core AI-powered services to rebuild your sales
                team&apos;s performance with extensive training simulations,
                real-time call assistance, and detailed analytics. Our AI
                technology helps sales representatives prepare for calls through
                interactive training scenarios, offers live guidance during
                customer conversations to boost confidence and improve
                communication flow, and generates precise performance insights
                to help managers optimize individual and team results.
              </p>
              <p className="text-base leading-relaxed text-gray-300">
                What sets Ematrics apart is our unique approach to AI-powered
                training for sales executives, we deliver a seamless ecosystem
                that combines analysis, and strategic intelligence. Managers get
                detailed and analyzed dashboards with personalized coaching
                recommendations, individual rep tracking, and predictive
                analytics that highlight improvement opportunities. Beyond mere
                sales monitoring, Ematrics&apos; intelligent AI actively guides
                teams in real-time assistance and strategic analysis and
                feedback, leading to consistent revenue growth.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-full bg-gradient-to-tr from-emerald-900/30 to-emerald-500/30 rounded-lg p-1">
                <div className="w-full h-full bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-emerald-500/20">
                  {/* Content could go here */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
