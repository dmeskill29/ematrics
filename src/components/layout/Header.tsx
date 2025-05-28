"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-emerald-500/20"
          : "bg-transparent"
      }`}
    >
      {/* Top banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-black py-1 text-center text-xs font-medium tracking-wider">
        Ematrics Launching June 2025, Join the Waitlist
      </div>
      <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Ematrics</span>
            <div className="flex items-center">
              <span className="font-bold text-xl text-white tracking-tight uppercase">
                EMATRICS
              </span>
            </div>
          </Link>
        </div>{" "}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium leading-6 transition-colors hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg px-3 py-2 ${
                pathname === item.href ? "text-emerald-400" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {" "}
          <Link
            href="/demo"
            className="text-sm uppercase tracking-wider font-medium bg-emerald-400 hover:bg-emerald-500 text-black px-6 py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
          >
            Join the Waitlist
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/95 px-6 py-6 sm:max-w-sm border-l border-emerald-500/20 backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Ematrics</span>{" "}
                  <div className="flex items-center">
                    <span className="font-bold text-lg text-white tracking-tight uppercase">
                      EMATRICS
                    </span>
                  </div>
                </Link>{" "}
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                {" "}
                <div className="-my-6 divide-y divide-gray-500/30">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-3 text-base font-medium leading-7 hover:bg-emerald-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                          pathname === item.href
                            ? "text-emerald-400"
                            : "text-white"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    {" "}
                    <Link
                      href="/demo"
                      className="bg-emerald-400 hover:bg-emerald-500 text-black px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-200 block text-center focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Join the Waitlist
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
