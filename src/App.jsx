import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import DashboardPreview from "./components/DashboardPreview.jsx";
import TrustedLogos from "./components/TrustedLogos.jsx";
import Features from "./components/Features.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    if (document.querySelector('script[data-spline-viewer]')) return;
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://unpkg.com/@splinetool/viewer@1.12.94/build/spline-viewer.js";
    s.setAttribute("data-spline-viewer", "true");
    document.head.appendChild(s);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <DashboardPreview />
        <TrustedLogos />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
