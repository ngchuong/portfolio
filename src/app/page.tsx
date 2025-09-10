import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import { LazyHero, LazyAbout, LazyPortfolio, LazyContact, LazyFooter } from '@/components/sections/LazySections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <LazyHero />
        <LazyAbout />
        <LazyPortfolio />
        <LazyContact />
      </main>
      <LazyFooter />
    </>
  );
}
