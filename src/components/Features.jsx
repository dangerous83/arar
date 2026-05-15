import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-20 sm:px-6 sm:py-28">
      {/* Backdrop glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mx-auto inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
          <span className="hairline w-8" />
          Features
          <span className="hairline w-8" />
        </div>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] tracking-tight">
          <span className="text-gradient">Accelerate your setup using</span>
          <br />
          <span className="text-gradient italic">streamlined low-code processes.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-sm text-white/55 sm:text-base">
          All the tools you need to optimize operations, enhance productivity, and grow
          confidently. Fueled by AI for intelligent expansion.
        </p>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <FeatureCard
          delay={0}
          className="lg:col-span-2"
          title="Quantix AI Solutions"
          body="AI-powered task management for streamlined and effective workflows."
          visual={<NodesVisual />}
        />
        <FeatureCard
          delay={0.1}
          className="lg:col-span-2"
          title="Custom Support Solutions"
          body="Many tasks are now automated, allowing your users to work more effectively."
          visual={<BotVisual />}
        />
        <FeatureCard
          delay={0.2}
          className="lg:col-span-2"
          title="Data Integration Made Easy"
          body="Easily connect your credit cards, loans, investments, and bank accounts."
          visual={<LineChartVisual />}
        />
        <FeatureCard
          delay={0.3}
          className="lg:col-span-3"
          title="Intelligent Automation"
          body="Harnessing AI to create workflows that simplify tasks and boost productivity."
          visual={<WaveformVisual />}
        />
        <FeatureCard
          delay={0.4}
          className="lg:col-span-3"
          title="Data Visualization"
          body="Effortlessly visualize and organize complex datasets for clearer insights and quicker decisions."
          visual={<BarVisual />}
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, body, visual, delay = 0, className = "" }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-1.5 shadow-cardGlow transition-all hover:border-violet-400/40 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[20px] bg-black/40 p-6">
        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-violet-500/25 blur-3xl transition group-hover:bg-violet-400/40" />
        <div className="relative h-44 w-full">{visual}</div>
        <div className="mt-6">
          <h3 className="font-display text-xl tracking-tight">{title}</h3>
          <p className="mt-2 text-sm text-white/55">{body}</p>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------- Visuals ---------- */

function NodesVisual() {
  // Concentric ring + connected nodes around a centered bot icon
  const nodes = [
    { x: 40, y: 18 },
    { x: 75, y: 35 },
    { x: 85, y: 70 },
    { x: 55, y: 90 },
    { x: 18, y: 80 },
    { x: 8, y: 45 },
    { x: 22, y: 22 },
  ];
  return (
    <svg viewBox="0 0 100 110" className="absolute inset-0 mx-auto h-full w-full">
      <defs>
        <radialGradient id="g1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="55" r="40" fill="url(#g1)" />
      <circle cx="50" cy="55" r="22" fill="none" stroke="rgba(168,85,247,0.35)" strokeDasharray="2 2" />
      <circle cx="50" cy="55" r="36" fill="none" stroke="rgba(168,85,247,0.15)" />
      {nodes.map((n, i) => (
        <g key={i}>
          <line
            x1="50"
            y1="55"
            x2={n.x}
            y2={n.y}
            stroke="rgba(167,139,250,0.4)"
            strokeWidth="0.5"
          />
          <circle cx={n.x} cy={n.y} r="3.5" fill="rgba(20,8,40,1)" stroke="#a78bfa" />
        </g>
      ))}
      {/* center */}
      <g transform="translate(50 55)">
        <circle r="13" fill="#0a0418" stroke="rgba(168,85,247,0.7)" />
        <circle r="13" fill="none" stroke="rgba(168,85,247,0.25)" strokeWidth="6" />
        <path
          d="M-5 -2h10v6h-10z M-2 1h1v1h-1z M1 1h1v1h-1z"
          fill="#c4b5fd"
        />
      </g>
    </svg>
  );
}

function BotVisual() {
  return (
    <svg viewBox="0 0 100 110" className="absolute inset-0 mx-auto h-full w-full">
      <defs>
        <radialGradient id="g2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="55" r="42" fill="url(#g2)" />
      {/* orbiting avatars */}
      <g>
        <circle cx="18" cy="35" r="6" fill="#5b21b6" stroke="rgba(255,255,255,0.2)" />
        <circle cx="84" cy="40" r="5" fill="#a78bfa" stroke="rgba(255,255,255,0.2)" />
        <circle cx="20" cy="80" r="4.5" fill="#7c3aed" stroke="rgba(255,255,255,0.2)" />
        <circle cx="80" cy="82" r="5.5" fill="#c4b5fd" stroke="rgba(255,255,255,0.2)" />
      </g>
      {/* central bot bubble */}
      <g transform="translate(50 55)">
        <circle r="20" fill="url(#g2)" />
        <circle r="14" fill="#0a0418" stroke="rgba(168,85,247,0.7)" />
        <rect x="-7" y="-5" width="14" height="9" rx="2" fill="rgba(255,255,255,0.08)" stroke="#a78bfa" strokeWidth="0.8" />
        <circle cx="-2.5" cy="-0.5" r="1.2" fill="#c4b5fd" />
        <circle cx="2.5" cy="-0.5" r="1.2" fill="#c4b5fd" />
        <line x1="0" y1="-9" x2="0" y2="-5" stroke="#a78bfa" />
        <circle cx="0" cy="-10" r="1" fill="#a78bfa" />
      </g>
    </svg>
  );
}

function LineChartVisual() {
  return (
    <svg viewBox="0 0 200 110" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="gline" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* grid */}
      {[20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
      ))}
      <path
        d="M0,85 C20,80 40,60 60,65 C80,70 100,30 120,28 C140,26 160,55 180,40 L200,30 L200,110 L0,110 Z"
        fill="url(#gline)"
      />
      <path
        d="M0,85 C20,80 40,60 60,65 C80,70 100,30 120,28 C140,26 160,55 180,40 L200,30"
        fill="none"
        stroke="#c4b5fd"
        strokeWidth="1.6"
      />
      <circle cx="120" cy="28" r="3" fill="#fff" stroke="#a78bfa" strokeWidth="1.5" />
      <circle cx="120" cy="28" r="7" fill="none" stroke="rgba(168,85,247,0.4)" />
    </svg>
  );
}

function WaveformVisual() {
  const bars = Array.from({ length: 28 }, (_, i) => {
    const t = i / 27;
    const center = Math.exp(-Math.pow((t - 0.5) * 4, 2));
    return 12 + center * 60 + Math.sin(i * 1.7) * 6;
  });
  return (
    <svg viewBox="0 0 240 110" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="gwave" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      {/* mic in middle */}
      <g transform="translate(120 55)">
        <circle r="20" fill="#0a0418" stroke="rgba(168,85,247,0.6)" />
        <circle r="28" fill="none" stroke="rgba(168,85,247,0.3)" />
        <rect x="-3.5" y="-9" width="7" height="14" rx="3.5" fill="url(#gwave)" />
        <path
          d="M-7 0a7 7 0 0 0 14 0 M0 7v5"
          fill="none"
          stroke="#c4b5fd"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      {/* bars */}
      {bars.map((h, i) => {
        const left = i < 14;
        const x = left ? 8 + i * 5.5 : 142 + (i - 14) * 5.5;
        return (
          <rect
            key={i}
            x={x}
            y={(110 - h) / 2}
            width="2.5"
            height={h}
            rx="1.2"
            fill="url(#gwave)"
            opacity={0.85}
          />
        );
      })}
    </svg>
  );
}

function BarVisual() {
  const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = [55, 45, 60, 50, 90, 65, 70];
  return (
    <svg viewBox="0 0 240 130" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="gbar" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#5b21b6" />
        </linearGradient>
      </defs>
      {data.map((v, i) => {
        const x = 14 + i * 32;
        const h = v;
        const highlight = i === 4;
        return (
          <g key={i}>
            <rect
              x={x}
              y={100 - h}
              width="14"
              height={h}
              rx="6"
              fill={highlight ? "url(#gbar)" : "rgba(255,255,255,0.07)"}
            />
            {highlight && (
              <g transform={`translate(${x + 7} ${100 - h - 14})`}>
                <rect x="-14" y="-7" width="28" height="13" rx="6" fill="#fff" />
                <text
                  x="0"
                  y="2"
                  textAnchor="middle"
                  fontFamily="Geist, sans-serif"
                  fontSize="7.5"
                  fontWeight="700"
                  fill="#1a0438"
                >
                  +$84,500
                </text>
              </g>
            )}
            <text
              x={x + 7}
              y={118}
              textAnchor="middle"
              fontFamily="Geist, sans-serif"
              fontSize="8"
              fill="rgba(255,255,255,0.45)"
            >
              {months[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
