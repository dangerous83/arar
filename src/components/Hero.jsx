import { lazy, Suspense, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SafeBoundary from "./SafeBoundary.jsx";

const Spline = lazy(() => import("@splinetool/react-spline"));
gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  {
    badge: "Optimize Your Workflow",
    title: ["Elevate Your Business Using", "AI-Driven Automation"],
    body: "An innovative software platform that simplifies your tasks, enhances efficiency, and helps your business grow seamlessly.",
    ctas: [
      { label: "Start Free Trial", href: "#features", kind: "primary" },
      { label: "Book a Demo", href: "#contact", kind: "ghost" },
    ],
  },
  {
    badge: "Built for Scale",
    title: ["Workflows that think", "in parallel."],
    body: "Quantix orchestrates thousands of agents across your stack — researching, deciding, and shipping work while you sleep.",
    ctas: [{ label: "See it in motion", href: "#dashboard", kind: "primary" }],
  },
  {
    badge: "One platform, every signal",
    title: ["From data to decision,", "in a single breath."],
    body: "Wire up your tools, watch Quantix learn your operating rhythm, and let it run the loops nobody wants to.",
    ctas: [
      { label: "Explore Features", href: "#features", kind: "primary" },
      { label: "Talk to Sales", href: "#contact", kind: "ghost" },
    ],
  },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const panelsRef = useRef([]);
  const splineWrapRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current.filter(Boolean);
      if (!panels.length) return;

      // Each panel gets its own scroll slot; the section is pinned across all of them.
      const pinDuration = panels.length * window.innerHeight;

      // Initial state: only panel 0 visible.
      gsap.set(panels, { autoAlpha: 0, y: 40 });
      gsap.set(panels[0], { autoAlpha: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${pinDuration}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;
        const prev = panels[i - 1];
        tl.to(prev, { autoAlpha: 0, y: -40, duration: 1, ease: "power2.inOut" }, i - 0.4);
        tl.fromTo(
          panel,
          { autoAlpha: 0, y: 60 },
          { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" },
          i - 0.1,
        );
      });

      // Subtle parallax on the Spline scene as the user scrolls through panels.
      if (splineWrapRef.current) {
        gsap.to(splineWrapRef.current, {
          yPercent: -8,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${pinDuration}`,
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate h-screen w-full overflow-hidden"
    >
      {/* 3D scene fills the whole pinned section */}
      <div ref={splineWrapRef} className="absolute inset-0 z-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid place-items-center"
        >
          <div className="relative h-72 w-72 rounded-full bg-gradient-to-br from-violet-400/30 via-violet-700/15 to-transparent blur-3xl" />
          <div className="absolute h-52 w-52 animate-pulseGlow rounded-full border border-violet-300/30" />
          <div className="absolute h-72 w-72 rounded-full border border-violet-400/15" />
        </div>
        <SafeBoundary fallback={null}>
          <Suspense fallback={null}>
            <Spline
              scene="https://prod.spline.design/FMcrcJ3RFG369YBa/scene.splinecode"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
              }}
            />
          </Suspense>
        </SafeBoundary>
      </div>

      {/* Atmospheric overlays */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-ink-950/70 via-ink-950/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      {/* Stacked text panels — pinned and scrubbed by GSAP */}
      <div className="absolute inset-0 z-20 grid place-items-center px-6">
        {PANELS.map((p, i) => (
          <article
            key={i}
            ref={(el) => (panelsRef.current[i] = el)}
            className="col-start-1 row-start-1 flex max-w-3xl flex-col items-center text-center"
            style={{ gridColumn: 1, gridRow: 1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80 backdrop-blur">
              <Sparkle />
              {p.badge}
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.8rem)] leading-[1.02] tracking-tight">
              <span className="text-gradient">{p.title[0]}</span>
              <br />
              <span className="text-gradient italic">{p.title[1]}</span>
            </h1>
            <p className="mt-5 max-w-xl text-balance text-sm text-white/70 sm:text-base">
              {p.body}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {p.ctas.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className={c.kind === "primary" ? "btn-primary" : "btn-ghost"}
                >
                  {c.label}
                  <Arrow />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex justify-center">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40">
          <span className="hairline w-10" />
          Scroll
          <span className="hairline w-10" />
        </div>
      </div>
    </section>
  );
}

function Sparkle() {
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
