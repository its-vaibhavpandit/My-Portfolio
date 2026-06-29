import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Skills from "@/components/sections/Skills";
import Certificates from "@/components/sections/Certificates";
import Projects from "@/components/sections/Projects";
import GitHubDashboard from "@/components/sections/GitHubDashboard";
import LeetCodeDashboard from "@/components/sections/LeetCodeDashboard";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Journey />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Certificates />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <GitHubDashboard />
        <div className="section-divider" />
        <LeetCodeDashboard />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
