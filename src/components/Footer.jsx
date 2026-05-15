export default function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-violet-700">
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-white">
              <path
                fill="currentColor"
                d="M10 1.5 12.6 7l5.9.9-4.3 4.1 1 5.9L10 15.2 4.8 17.9l1-5.9L1.5 7.9 7.4 7 10 1.5Z"
              />
            </svg>
          </span>
          <span className="text-sm tracking-tight text-white/80">Quantix</span>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Quantix Labs · Built with AI-driven automation
        </p>
        <div className="flex items-center gap-4 text-xs text-white/45">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
