import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative px-6 pb-28 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex max-w-3xl items-center justify-center"
      >
        <div className="pointer-events-none absolute inset-x-0 -bottom-10 mx-auto h-40 w-72 rounded-full bg-violet-500/40 blur-[80px]" />
        <a
          href="#features"
          className="btn-primary text-base sm:text-base"
          style={{ padding: "14px 22px" }}
        >
          Explore Features
          <svg viewBox="0 0 16 16" className="h-4 w-4">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8h10M9 4l4 4-4 4"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
