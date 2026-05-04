import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Client Experience", href: "/client-experience" },
  { label: "Milestones", href: "/milestones" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-100 px-6 md:px-10 py-4
                    flex items-center justify-between transition-all duration-300
                    ${
                      scrolled
                        ? "bg-[rgba(5,5,8,0.85)] backdrop-blur-xl border-b border-white/6"
                        : "bg-transparent"
                    }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-sora text-xl font-extrabold tracking-widest gradient-text select-none"
        >
          VIPPROW
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              {/* <button
                onClick={() => scrollTo(href)}
                className="text-sm text-white/50 hover:text-white font-medium transition-colors duration-200
                           bg-transparent border-none cursor-pointer"
              >
                {label}
              </button> */}
              <Link
                to={href}
                className="text-sm text-white/50 hover:text-white font-medium transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollTo("#contact")}
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white
                     px-5 py-2.5 rounded-lg border-none cursor-pointer"
          style={{
            background: "linear-gradient(135deg,#8B5CF6,#6D28D9)",
            boxShadow: "0 0 24px rgba(139,92,246,0.3)",
          }}
        >
          Book a Strategy Call
        </motion.button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16.25 left-4 right-4 z-99 rounded-2xl p-5
                       glass-card border order-white/8 flex flex-col gap-3"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                onClick={() => setMobileOpen(false)}
                className="text-left text-sm text-white/70 hover:text-white font-medium
                           py-2 px-3 rounded-lg over:bg-white/5 transition-all
                           bg-transparent border-none cursor-pointer w-full"
              >
                {label}
              </Link>
            ))}
            <a
              href="https://vipprow.com/contact"
              className="mt-1 text-sm font-medium text-white py-2.5 px-4 rounded-lg
                         border-none cursor-pointer"
              style={{ background: "linear-gradient(135deg,#8B5CF6,#6D28D9)" }}
            >
              Book a Strategy Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
