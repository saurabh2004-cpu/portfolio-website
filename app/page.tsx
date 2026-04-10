import Navbar from '@/components/Navbar';
import Banner from '@/components/home/Banner';
import About from '@/components/home/About';
import Skills from '@/components/home/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* <Navbar /> */}
      <Banner />
      <About />
      <Skills />
    </main>
  );
}
