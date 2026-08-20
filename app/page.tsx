import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import CallToAction from "@/components/landing/CallToAction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero />
      <Features />
      <CallToAction />
    </main>
  );
}