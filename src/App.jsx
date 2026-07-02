import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Requirements from "./components/Requirements";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen antialiased selection:bg-brand-green selection:text-white transition-colors duration-300">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Tech Stack Section */}
      <TechStack />

      {/* 4. Project Showcase Section */}
      <Projects />

      <Requirements />

      {/* 5. Footer / CTA Section */}
      <CTA />

      <Footer />
    </div>
  );
}
