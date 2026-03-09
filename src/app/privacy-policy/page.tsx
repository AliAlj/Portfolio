export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-20 pb-16">
        <div className="mx-auto max-w-2xl px-6">
          <a href="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
            ← Back
          </a>

          <h1 className="mt-6 text-3xl md:text-4xl font-semibold">Privacy Policy for AlfiBaT</h1>
          <p className="mt-2 text-sm text-muted-foreground">Effective Date: February 2026</p>

          <p className="mt-6 text-muted-foreground">
            AlfiBaT does not collect, store, transmit, or share any personal information.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xl font-semibold">Information Collection</h2>
              <p className="mt-2 text-muted-foreground">AlfiBaT does not require account creation and does not collect personal data from users.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Analytics and Tracking</h2>
              <p className="mt-2 text-muted-foreground">AlfiBaT does not use third-party analytics, advertising frameworks, or tracking technologies.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Internet Usage</h2>
              <p className="mt-2 text-muted-foreground">The app works fully offline and does not require an internet connection.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Children's Privacy</h2>
              <p className="mt-2 text-muted-foreground">AlfiBaT does not knowingly collect personal information from children or adults.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Changes to This Policy</h2>
              <p className="mt-2 text-muted-foreground">Any future updates to this privacy policy will be reflected on this page.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Contact</h2>
              <p className="mt-2 text-muted-foreground">If you have questions about this policy, contact:</p>
              <p className="mt-1 text-muted-foreground">Ali Aljahmi</p>
              <a href="mailto:alimjahmi@gmail.com" className="text-sm font-semibold hover:underline">alimjahmi@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
