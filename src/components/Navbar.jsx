import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Feature", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integration", href: "#integration" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-[0_20px_60px_-30px_rgba(139,92,246,0.7)]"
            : "glass"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 pl-2 pr-3">
          <span className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-violet-700 shadow-[0_0_24px_rgba(139,92,246,0.65)]">
            <span className="absolute inset-0 rounded-full ring-1 ring-white/30" />
            <svg viewBox="0 0 20 20" className="h-4 w-4 text-white">
              <path
                fill="currentColor"
                d="M10 1.5 12.6 7l5.9.9-4.3 4.1 1 5.9L10 15.2 4.8 17.9l1-5.9L1.5 7.9 7.4 7 10 1.5Z"
              />
            </svg>
          </span>
          <span className="font-medium tracking-tight">Quantix</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full bg-white/[0.03] p-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`relative inline-block rounded-full px-4 py-1.5 text-sm transition ${
                  active === l.label
                    ? "pill-active text-white"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden sm:inline-flex">
            Contact
            <Arrow />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[2px] w-4 bg-white transition ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[2px] w-4 bg-white transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-[2px] w-4 bg-white transition ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-4 right-4 top-[78px] z-40 rounded-2xl glass-strong p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => {
                      setActive(l.label);
                      setOpen(false);
                    }}
                    className={`block rounded-xl px-4 py-3 text-sm ${
                      active === l.label
                        ? "pill-active text-white"
                        : "text-white/75 hover:bg-white/[0.04]"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contact" className="btn-primary w-full justify-center">
                  Contact <Arrow />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8h10M9 4l4 4-4 4"
      />
    </svg>
  );
}
