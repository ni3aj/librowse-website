import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden flex justify-center">
      {/* --- BACKGROUND EFFECTS START --- */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#C13383] opacity-[0.15] blur-[100px]"></div>
      {/* --- BACKGROUND EFFECTS END --- */}

      <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm px-3 py-1 text-sm text-zinc-600 shadow-sm">
            🚀 The #1 App for Library Owners & Students
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-zinc-900 max-w-4xl">
            Find & Book the Perfect <span className="text-[#C13383]">Study Desk</span> Near You.
          </h1>
          
          {/* Subheadline */}
          <p className="mx-auto max-w-[700px] text-zinc-600 md:text-lg lg:text-xl leading-relaxed">
            Stop dealing with messy paper registers. LiBrowse connects students with top-rated study rooms, offering real-time seat availability, instant booking, and automated tracking for owners.
          </p>
          
          {/* Call to Action Buttons (Fixed) */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto mt-8">
            <Link 
              href="#download"
              className="inline-flex items-center justify-center font-medium transition-colors bg-[#C13383] hover:bg-[#a1286b] text-white rounded-full px-8 text-md h-14 shadow-lg shadow-[#C13383]/20"
            >
              Download Student App
            </Link>
            <Link 
              href="#owners"
              className="inline-flex items-center justify-center font-medium transition-colors border border-zinc-300 text-zinc-700 bg-white/50 backdrop-blur-sm hover:bg-zinc-100 rounded-full px-8 text-md h-14"
            >
              I'm a Library Owner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}