import { MapPin, CalendarCheck, CreditCard, Users, TrendingUp, ShieldCheck } from "lucide-react";

export default function Features() {
  const studentFeatures = [
    {
      title: "Find Nearby Libraries",
      description: "Use location services to discover the top-rated study rooms around you instantly.",
      icon: <MapPin className="w-6 h-6 text-[#C13383]" />,
    },
    {
      title: "Real-Time Seat Availability",
      description: "No more walking in just to find out it's full. Check AC, Non-AC, and reserved seat availability live.",
      icon: <CalendarCheck className="w-6 h-6 text-[#C13383]" />,
    },
    {
      title: "Seamless Payments",
      description: "Say goodbye to cash and exact change. Track your subscriptions and pay directly via UPI.",
      icon: <CreditCard className="w-6 h-6 text-[#C13383]" />,
    },
  ];

  const ownerFeatures = [
    {
      title: "Automated Student Tracking",
      description: "Replace messy paper registers. Track KYC details, shift timings, and seat numbers digitally.",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Stop Revenue Leakage",
      description: "Get automated alerts for expired subscriptions. Never let an unpaid seat go unnoticed again.",
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Verified Student Profiles",
      description: "Every student must complete Aadhaar KYC, ensuring your study room remains safe and secure.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    },
  ];

  return (
    <section id="features" className="w-full py-24 bg-white flex justify-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-zinc-900">
            Built for Both Sides of the Desk
          </h2>
          <p className="mt-4 mx-auto max-w-[600px] text-zinc-600 md:text-lg">
            Whether you're studying for your next big exam or managing a 100-seat library, we have the tools you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {/* --- FOR STUDENTS --- */}
          <div className="flex flex-col space-y-8 bg-zinc-50 p-8 rounded-3xl border border-zinc-200 shadow-sm">
            <div className="inline-block bg-[#C13383]/10 px-4 py-1.5 rounded-full self-start mb-2">
              <Text className="text-[#C13383] font-bold text-sm tracking-widest uppercase">For Students</Text>
            </div>
            {studentFeatures.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="mt-1 bg-white p-3 rounded-2xl shadow-sm border border-zinc-100 h-fit">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">{feature.title}</h3>
                  <p className="text-zinc-600 mt-1 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* --- FOR OWNERS --- */}
          <div className="flex flex-col space-y-8 bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100 shadow-sm">
            <div className="inline-block bg-indigo-100 px-4 py-1.5 rounded-full self-start mb-2">
              <Text className="text-indigo-700 font-bold text-sm tracking-widest uppercase">For Library Owners</Text>
            </div>
            {ownerFeatures.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="mt-1 bg-white p-3 rounded-2xl shadow-sm border border-indigo-50 h-fit">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">{feature.title}</h3>
                  <p className="text-zinc-600 mt-1 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple Text wrapper to avoid React Native confusion if you copy-pasted habits over
function Text({ className, children }: { className?: string, children: React.ReactNode }) {
  return <span className={className}>{children}</span>;
}