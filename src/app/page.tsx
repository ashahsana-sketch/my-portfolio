import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// Import About, Skills, Projects, and Contact components as you create them

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-100 selection:bg-sky-500 selection:text-white">
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </main>
  );
}