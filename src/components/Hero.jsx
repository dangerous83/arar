import { lazy, Suspense, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SafeBoundary from "./SafeBoundary.jsx";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const splineY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-start overflow-hidden pt-40 sm:pt-36"
    >
      {/* Grid + glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <motion.div
          style={{ y: glowY }}
          className="absolute inset-x-0 top-0 h-[80vh] bg-radial-violet"
        />
        <motion.div
          style={{ y: glowY }}
          className="arc-glow absolute left-1/2 top-24 h-[60vh] w-[120vw] -translate-x-1/2 rounded-[50%]"
        />
        {/* Vignette */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80 backdrop-blur"
        >
          <SparkleIcon />
          Optimize Your Workflow
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] tracking-tight"
        >
          <span className="text-gradient">Elevate Your Business Using</span>
          <br />
          <span className="text-gradient italic">AI-Driven Automation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-6 max-w-xl text-balance text-sm text-white/65 sm:text-base"
        >
          An innovative software platform that simplifies your tasks, enhances
          efficiency, and helps your business grow seamlessly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#features" className="btn-primary">
            Start Free Trial <Arrow />
          </a>
          <a href="#contact" className="btn-ghost">
            Book a Demo <Arrow />
          </a>
        </motion.div>
      </motion.div>

      {/* Spline 3D scene */}
      <motion.div
        style={{ y: splineY }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-0 mt-8 w-full"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/30 blur-[120px]" />
        <div className="mx-auto aspect-[16/9] w-full max-w-5xl animate-float sm:aspect-[16/8]">
          <SplineViewer />
        </div>
      </motion.div>
    </section>
  );
}

function SplineViewer() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative h-full w-full">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 grid place-items-center transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative h-56 w-56 rounded-full bg-gradient-to-br from-violet-400/30 via-violet-700/20 to-transparent blur-2xl" />
        <div className="absolute h-40 w-40 animate-pulseGlow rounded-full border border-violet-300/30" />
        <div className="absolute h-56 w-56 rounded-full border border-violet-400/15" />
      </div>
      <SafeBoundary fallback={null}>
        <Suspense fallback={null}>
          <Spline
            scene="https://prod.spline.design/FMcrcJ3RFG369YBa/scene.splinecode"
            onLoad={() => setLoaded(true)}
            style={{ width: "100%", height: "100%", background: "transparent" }}
          />
        </Suspense>
      </SafeBoundary>
    </div>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-violet-300">
      <path
        fill="currentColor"
        d="M8 1.5 9.4 6 14 7.4 9.4 8.8 8 13.4 6.6 8.8 2 7.4 6.6 6 8 1.5Z"
      />
    </svg>
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
