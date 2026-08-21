import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 bg-zinc-50 border-t border-zinc-200 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-extrabold tracking-tight text-zinc-900">
            LiBrowse
          </span>
          <p className="text-sm text-zinc-500">
            © {currentYear} LiBrowse. All rights reserved.
          </p>
        </div>

        {/* Legal & Support Links (Required for App Store) */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-600 font-medium">
          <Link href="mailto:support@librowse.in" className="hover:text-[#C13383] transition-colors">
            Contact Support
          </Link>
          <Link href="/privacy" className="hover:text-[#C13383] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#C13383] transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/refunds" className="hover:text-[#C13383] transition-colors">
            Refunds & Cancellations
          </Link>
        </div>

      </div>
    </footer>
  );
}