import { motion } from "framer-motion";

const BARS = [
  { h: 36 }, { h: 52 }, { h: 44 }, { h: 64 }, { h: 96, highlight: true },
  { h: 58 }, { h: 70 }, { h: 48 }, { h: 80 }, { h: 38 }, { h: 60 }, { h: 50 },
];

export default function DashboardPreview() {
  return (
    <section className="relative -mt-12 px-4 pb-16 sm:px-6 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl"
      >
        {/* Outer glow */}
        <div className="pointer-events-none absolute -inset-x-10 -top-16 h-40 bg-gradient-to-b from-violet-500/30 to-transparent blur-3xl" />

        <div className="glass-strong relative overflow-hidden rounded-[28px] p-3 shadow-cardGlow sm:p-4">
          {/* Top toolbar */}
          <div className="flex items-center justify-between rounded-2xl bg-black/30 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-violet-700">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-white">
                  <path
                    fill="currentColor"
                    d="M10 1.5 12.6 7l5.9.9-4.3 4.1 1 5.9L10 15.2 4.8 17.9l1-5.9L1.5 7.9 7.4 7 10 1.5Z"
                  />
                </svg>
              </span>
              <span className="text-sm tracking-tight text-white/90">Quantix</span>
              <div className="ml-3 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/50 sm:flex">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                  <circle
                    cx="7"
                    cy="7"
                    r="4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    d="m11 11 3 3"
                  />
                </svg>
                Search bar
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                aria-label="Notifications"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.5 11.5h9l-1-1.5V7a3.5 3.5 0 1 0-7 0v3l-1 1.5ZM6.5 13.5a1.5 1.5 0 0 0 3 0"
                  />
                </svg>
              </button>
              <button
                aria-label="Settings"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                  <circle
                    cx="8"
                    cy="8"
                    r="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    d="M8 2v1.5M8 12.5V14M14 8h-1.5M3.5 8H2M12.2 3.8l-1 1M4.8 11.2l-1 1M12.2 12.2l-1-1M4.8 4.8l-1-1"
                  />
                </svg>
              </button>
              <span className="text-sm text-white/80">Hi Devid!</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-300 to-violet-700 text-[10px] font-medium">
                D
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="mt-3 grid grid-cols-12 gap-3">
            {/* Sidebar */}
            <aside className="col-span-1 hidden flex-col items-center gap-3 rounded-2xl bg-black/30 py-4 sm:flex">
              <SidebarBtn active><HomeIcon /></SidebarBtn>
              <SidebarBtn><BarsIcon /></SidebarBtn>
              <SidebarBtn><WalletIcon /></SidebarBtn>
              <SidebarBtn><CogIcon /></SidebarBtn>
            </aside>

            <div className="col-span-12 grid grid-cols-12 gap-3 sm:col-span-11">
              {/* Main */}
              <div className="col-span-12 rounded-2xl bg-black/30 p-5 lg:col-span-8">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-white/40">Overview</div>
                    <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                      My Dashboard
                    </h3>
                  </div>
                  <div className="hidden gap-1 rounded-full bg-white/[0.04] p-1 sm:flex">
                    {["All", "Withdrawal", "Savings", "Deposit"].map((t, i) => (
                      <button
                        key={t}
                        className={`rounded-full px-3 py-1 text-xs ${
                          i === 0
                            ? "pill-active text-white"
                            : "text-white/55 hover:text-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chart card */}
                <div className="mt-5 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-white/70">Revenue Flow</span>
                    <a className="text-xs text-violet-300 hover:underline">View all →</a>
                  </div>
                  <div className="grid grid-cols-[36px_1fr] gap-3">
                    <ul className="flex flex-col justify-between py-1 text-[10px] text-white/35">
                      <li>3.0k$</li>
                      <li>2.5k$</li>
                      <li>2.0k$</li>
                      <li>1.5k$</li>
                      <li>1.0k$</li>
                    </ul>
                    <div className="relative h-[140px]">
                      {/* grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="h-px w-full bg-white/[0.05]" />
                        ))}
                      </div>
                      <div className="relative flex h-full items-end gap-2 sm:gap-3">
                        {BARS.map((b, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0, opacity: 0 }}
                            whileInView={{ height: `${b.h}%`, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className={`relative flex-1 rounded-md ${
                              b.highlight
                                ? "bg-gradient-to-t from-violet-700 to-violet-300 shadow-[0_0_24px_rgba(168,85,247,0.6)]"
                                : "bg-white/[0.08]"
                            }`}
                          >
                            {b.highlight && (
                              <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-1.5 py-0.5 text-[10px] font-medium text-black shadow-pill">
                                +$32.45
                              </span>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="col-span-12 flex flex-col gap-3 lg:col-span-4">
                {/* Revenue card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/30 via-violet-700/10 to-black/40 p-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Revenue Flow</span>
                    <a className="text-xs text-violet-300">View all →</a>
                  </div>
                  <div className="mt-6 flex items-end justify-between">
                    <div className="font-display text-3xl tracking-tight">$456,000</div>
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-violet-200">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        d="M5 12a7 7 0 0 1 7-7M5 17a12 12 0 0 1 12-12M5 22a17 17 0 0 1 17-17"
                      />
                    </svg>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-[11px] text-white/60">
                    <span className="tracking-widest">4509 1212 0202 1894</span>
                    <span>09/27</span>
                  </div>
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-400/30 blur-3xl" />
                </div>

                {/* Transactions card */}
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Transactions</span>
                    <a className="text-xs text-violet-300">View all →</a>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {[
                      { name: "@leondaily", amt: "$1,400", up: true },
                      { name: "@ana.codes", amt: "$820", up: true },
                      { name: "@quantix.io", amt: "-$280", up: false },
                    ].map((t) => (
                      <li key={t.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-violet-300/60 to-violet-700/60 text-[10px]">
                            {t.name[1].toUpperCase()}
                          </span>
                          <span className="text-sm text-white/85">{t.name}</span>
                        </div>
                        <span className={`text-sm ${t.up ? "text-emerald-300" : "text-rose-300"}`}>
                          {t.amt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SidebarBtn({ children, active }) {
  return (
    <button
      className={`grid h-9 w-9 place-items-center rounded-xl ${
        active
          ? "bg-gradient-to-br from-violet-500/40 to-violet-700/40 text-white ring-1 ring-violet-400/50"
          : "text-white/55 hover:bg-white/[0.05]"
      }`}
    >
      {children}
    </button>
  );
}
function HomeIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9.5 10 4l7 5.5V16a1 1 0 0 1-1 1h-3v-4H7v4H4a1 1 0 0 1-1-1V9.5Z"
      />
    </svg>
  );
}
function BarsIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M5 14V9M10 14V5M15 14v-7"
      />
    </svg>
  );
}
function WalletIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M3 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm10 3h2"
      />
    </svg>
  );
}
function CogIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <circle cx="10" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M10 3v2M10 15v2M17 10h-2M5 10H3M15.2 4.8l-1.5 1.5M6.3 13.7l-1.5 1.5M15.2 15.2l-1.5-1.5M6.3 6.3 4.8 4.8"
      />
    </svg>
  );
}
