import { Smartphone, Apple } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section id="download" className="w-full py-24 bg-zinc-900 text-white flex justify-center relative overflow-hidden">
      {/* Subtle background glow for dark mode */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C13383] opacity-20 blur-[120px]"></div>

      <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Ready to upgrade your study experience?
        </h2>
        <p className="mt-4 mx-auto max-w-[600px] text-zinc-400 md:text-lg">
          Join hundreds of students and library owners already using LiBrowse to manage their daily study routines.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto mt-10">
          <Link 
            href="#"
            className="inline-flex items-center justify-center font-medium transition-colors bg-white text-zinc-900 hover:bg-zinc-200 rounded-full px-8 text-md h-14"
          >
            <Apple className="w-5 h-5 mr-2" />
            App Store
          </Link>
          
          <Link 
            href="#"
            className="inline-flex items-center justify-center font-medium transition-colors bg-[#C13383] hover:bg-[#a1286b] text-white rounded-full px-8 text-md h-14 shadow-lg shadow-[#C13383]/20"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Google Play
          </Link>
        </div>
      </div>
    </section>
  );
}