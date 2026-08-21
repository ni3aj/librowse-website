export default function TermsAndConditions() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-4">Terms & Conditions</h1>
      <p className="text-zinc-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-8 text-zinc-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the LiBrowse mobile application and website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">2. User Accounts</h2>
          <p>
            To use certain features of the service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">3. Payments and Bookings</h2>
          <p>
            All seat bookings made through LiBrowse are subject to the specific rules and availability of the respective Library Owner. Payments are processed securely, and users must abide by the cancellation and refund policies set forth by the specific library they book.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">4. Limitation of Liability</h2>
          <p>
            LiBrowse acts as a platform connecting students with library owners. We are not responsible for disputes arising directly between students and library management regarding physical premises, disputes, or loss of personal property.
          </p>
        </section>
      </div>
    </main>
  );
}