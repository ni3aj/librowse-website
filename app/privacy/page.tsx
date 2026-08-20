// app/privacy/page.tsx
export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-4">Privacy Policy</h1>
      <p className="text-zinc-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-8 text-zinc-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">1. Information We Collect</h2>
          <p>
            When you use LiBrowse, we collect information you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This includes your name, email, phone number, and KYC verification details (like Aadhaar).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services. This includes facilitating seat bookings, processing payments, sending receipts, and providing customer support.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">3. Data Sharing and Security</h2>
          <p>
            We do not sell your personal data to third parties. Information is only shared with Library Owners to the extent necessary to fulfill your booking (e.g., verifying your identity when you arrive). We use industry-standard security measures to protect your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <strong>support@librowse.in</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}