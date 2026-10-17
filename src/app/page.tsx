
import Hero from '@/components/Hero/page';
import Footer from '@/components/footer/page';
import Header from "@/components/header/page";
import Navbar from '@/components/Navbar/page';

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 flex flex-col justify-between">
      {/* <Header /> */}
      {/* <Navbar /> */}
      <main className="pt-16 flex-grow">
        <Hero />
      </main>
      {/* <Footer /> */}
    </div>
  );
}