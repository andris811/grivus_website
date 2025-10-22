import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-[#4CD3B7]">
              Grivus
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-[#4CD3B7] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-white mb-4">
            Grivus – Terms of Use & Privacy Policy
          </h1>

          <div className="text-gray-400 mb-2">
            <strong>Effective Date:</strong> September 29, 2025
          </div>
          <div className="text-gray-400 mb-8">
            <strong>Last updated:</strong> October 10, 2025
          </div>

          <p className="text-gray-300 text-lg mb-12">
            Welcome to Grivus, a personal habit tracker designed to help you build routines, stay consistent, and celebrate your progress.
            By using Grivus, you agree to the following Terms of Use and Privacy Policy.
          </p>

          {/* General Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">🧭 1. General Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Grivus is developed and maintained by András Varga (AVDev).
              </p>
              <p>
                The app is available exclusively through the Apple App Store and complies with Apple&apos;s developer and privacy guidelines.
              </p>
              <p>
                These terms apply to all users of the app, whether using the free or Pro version.
              </p>
            </div>
          </section>

          {/* Terms of Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">📋 2. Terms of Use</h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">2.1. Use of the App</h3>
                <p>
                  Grivus is designed for personal productivity and self-improvement. You agree to use it responsibly and only for lawful purposes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">2.2. Ownership and Intellectual Property</h3>
                <p>
                  All content, design, and functionality of Grivus — including its name, logo, and user interface — are owned by András Varga (AVDev).
                  You may not copy, modify, distribute, or sell any part of the app without prior written permission.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">2.3. In-App Purchases</h3>
                <p>
                  Grivus Pro is a one-time purchase that unlocks additional features such as unlimited habits, extended statistics, and widgets.
                </p>
                <p>
                  All transactions are processed securely through Apple&apos;s App Store. The developer does not collect or store any payment details.
                  Refunds and billing issues are handled by Apple.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">2.4. Limitation of Liability</h3>
                <p>
                  Grivus is provided &quot;as is&quot; without warranties of any kind. While every effort is made to ensure reliability and stability,
                  the developer is not responsible for data loss, sync errors, or damages resulting from the use or inability to use the app.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">2.5. Termination or Changes</h3>
                <p>
                  The developer reserves the right to modify or discontinue the app, features, or pricing at any time.
                  Updates may be released to fix bugs, improve performance, or enhance user experience.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">🔒 3. Privacy Policy</h2>
            <p className="text-gray-300 mb-6">
              Grivus respects your privacy. This section explains how your information is handled.
            </p>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">3.1. Information We Collect</h3>
                <p>
                  <strong>Personal Data:</strong> Grivus does not require you to create an account. We do not collect personally identifiable information
                  (such as your name, email address, or phone number).
                </p>
                <p>
                  <strong>App Data:</strong> Any data you enter (such as habits, reminders, or preferences) is stored locally on your device and is not transmitted to us.
                </p>
                <p>
                  <strong>Analytics/Tracking:</strong> Grivus does not use third-party analytics, tracking, or advertising tools.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">3.2. How We Use Your Data</h3>
                <p>
                  Your data is only used within the app to provide habit tracking, reminders, and progress insights.
                </p>
                <p>
                  We do not sell, rent, or share your data with anyone.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">3.3. Data Storage & Security</h3>
                <p>
                  All habit data is stored locally on your device.
                </p>
                <p>
                  If you enable iCloud sync, your data will be securely stored in your Apple iCloud account, where Apple&apos;s iCloud Privacy Policy applies.
                </p>
                <p>
                  Deleting the app will remove your local data from your device. iCloud data can be removed via iOS Settings → Apple ID → iCloud → Manage Storage → Grivus.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">3.4. Notifications</h3>
                <p>
                  If you enable notifications, Grivus will schedule local reminders for your habits.
                </p>
                <p>
                  These are handled entirely on your device — no external servers or personal identifiers are involved.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">3.5. Children&apos;s Privacy</h3>
                <p>
                  Grivus is not directed toward children under 13 and does not knowingly collect any data from them.
                  If you believe a child has submitted data through the app, please contact us for assistance.
                </p>
              </div>
            </div>
          </section>

          {/* Pro Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">💳 4. Pro Features & Purchases</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Grivus Pro unlocks additional features like unlimited habits, detailed statistics, and widgets.
              </p>
              <p>
                Purchases are securely processed by Apple via the App Store.
              </p>
              <p>
                The developer has no access to your payment details, and all refunds or billing issues must be handled through Apple Support.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">⚖️ 5. Your Rights</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Because Grivus does not collect any personal data directly, there is no account or server data to delete or export.
              </p>
              <p>
                All information remains stored locally or in your iCloud account under your control.
              </p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">🔄 6. Updates to This Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may update this policy from time to time to reflect app improvements or legal requirements.
              </p>
              <p>
                Any updates will appear within the app and on the official Grivus website or Notion page.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">📬 7. Contact Us</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have questions about these Terms or the Privacy Policy, please contact:
              </p>
              <p>
                📧{' '}
                <a href="mailto:avdev2024@gmail.com" className="text-[#4CD3B7] hover:underline">
                  avdev2024@gmail.com
                </a>
              </p>
              <p>
                <a href="https://andris811.github.io/avdev/" target="_blank" rel="noopener noreferrer" className="text-[#4CD3B7] hover:underline">
                  Visit my website and get in touch
                </a>
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 mb-2">
              © 2025 András Varga (AVDev). All rights reserved.
            </p>
            <p className="text-[#4CD3B7] font-semibold">
              Grivus – Build Better Habits.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
