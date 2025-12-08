import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { MobileDock } from "@/components/MobileDock";

export default function Home() {
  return (
    <main className="bg-background min-h-screen relative selection:bg-accent selection:text-black">
      <MobileDock />
      <Hero />
      <Timeline />
      <Services />
      <Contact />

      <footer className="py-8 text-center text-secondary text-xs font-mono opacity-50">
        © {new Date().getFullYear()} Minimalist Technical Portfolio. Built with Next.js 14.
      </footer>
    </main>
  );
}