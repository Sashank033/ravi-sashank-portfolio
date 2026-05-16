import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import BackToTop from "@/components/ui/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import RecruiterSnapshot from "@/components/sections/RecruiterSnapshot";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import TechProof from "@/components/sections/TechProof";
import AISection from "@/components/sections/AISection";
import ResumeSection from "@/components/sections/ResumeSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-navy-950 text-slate-100 overflow-x-hidden noise-bg">
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="blob blob-sky w-[600px] h-[600px] -top-40 -left-40 opacity-20" />
        <div className="blob blob-violet w-[500px] h-[500px] top-1/3 -right-60 opacity-15" />
        <div className="blob blob-emerald w-[400px] h-[400px] bottom-1/4 left-1/4 opacity-10" />
      </div>

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <RecruiterSnapshot />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <TechProof />
        <AISection />
        <ResumeSection />
        <Contact />
      </div>

      <Footer />
      <FloatingCTA />
      <BackToTop />
    </main>
  );
}
