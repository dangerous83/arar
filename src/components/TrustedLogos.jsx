import { motion } from "framer-motion";

const LOGOS = [
  (props) => (
    <svg viewBox="0 0 120 24" className="h-5 w-auto" {...props}>
      <circle cx="10" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="22" y="16" fontFamily="Geist, sans-serif" fontSize="12" fontWeight="600" fill="currentColor">
        Logoipsum
      </text>
    </svg>
  ),
  (props) => (
    <svg viewBox="0 0 130 24" className="h-5 w-auto" {...props}>
      <path d="M10 4 L16 12 L10 20 L4 12 Z" fill="currentColor" />
      <circle cx="10" cy="12" r="2.5" fill="#03000a" />
      <text x="22" y="16" fontFamily="Geist, sans-serif" fontSize="12" fontWeight="600" fill="currentColor">
        Logoipsum
      </text>
    </svg>
  ),
  (props) => (
    <svg viewBox="0 0 110 24" className="h-5 w-auto" {...props}>
      <text x="0" y="17" fontFamily="Instrument Serif, serif" fontSize="18" fontStyle="italic" fill="currentColor">
        IPSUM
      </text>
    </svg>
  ),
  (props) => (
    <svg viewBox="0 0 150 24" className="h-5 w-auto" {...props}>
      <text x="0" y="16" fontFamily="Geist, sans-serif" fontSize="13" fontWeight="500" fill="currentColor">
        logo
      </text>
      <circle cx="42" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="52" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="62" y="16" fontFamily="Geist, sans-serif" fontSize="13" fontWeight="700" fill="currentColor">
        ipsum*
      </text>
    </svg>
  ),
  (props) => (
    <svg viewBox="0 0 110 24" className="h-5 w-auto" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M2 12c0-4 3-6 8-6s8 2 8 6-3 6-8 6-8-2-8-6Z M22 12c0-4 3-6 8-6s8 2 8 6-3 6-8 6-8-2-8-6Z"
      />
      <text x="44" y="16" fontFamily="Geist, sans-serif" fontSize="12" fontWeight="600" fill="currentColor">
        LOOO
      </text>
    </svg>
  ),
  (props) => (
    <svg viewBox="0 0 130 24" className="h-5 w-auto" {...props}>
      <circle cx="10" cy="12" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6v12M4 12h12" stroke="currentColor" strokeWidth="1.5" />
      <text x="22" y="16" fontFamily="Geist, sans-serif" fontSize="12" fontWeight="600" fill="currentColor">
        Logoipsum
      </text>
    </svg>
  ),
];

export default function TrustedLogos() {
  return (
    <section className="relative px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        <div className="mx-auto flex items-center justify-center gap-3 text-xs text-white/40">
          <span className="hairline w-12 sm:w-20" />
          Trusted by 10,000+ Teams Worldwide
          <span className="hairline w-12 sm:w-20" />
        </div>

        <div className="mt-8 grid grid-cols-3 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-6">
          {LOGOS.map((Logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, opacity: 1 }}
              className="text-white/55 transition hover:text-violet-200"
            >
              <Logo />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
