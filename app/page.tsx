import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Education from "@/components/education"; // Import baru
import Contact from "@/components/contact";     // Import baru

export default function Home() {
  return (
    <main className="bg-primary min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-10 text-center border-t border-accent/10 bg-primary">
        <p className="text-accent/50 text-sm">
          © {new Date().getFullYear()} - Built with Next.js & NestJS by Professional Dev
        </p>
      </footer>
    </main>
  );
}