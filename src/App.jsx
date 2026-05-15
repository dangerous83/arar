import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import DashboardPreview from "./components/DashboardPreview.jsx";
import TrustedLogos from "./components/TrustedLogos.jsx";
import Features from "./components/Features.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
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
