import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">Last updated: March 2024</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-400">
                By accessing and using ReviewPro+ ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 dark:text-gray-400">
                ReviewPro+ provides review management and protection services for short-term rental properties and restaurants. The Service includes review monitoring, analysis, and assistance with review disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. User Accounts</h2>
              <div className="text-gray-600 dark:text-gray-400">
                <p className="mb-4">When creating an account, you agree to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Promptly update any changes to your information</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Payment Terms</h2>
              <div className="text-gray-600 dark:text-gray-400">
                <p className="mb-4">4.1 Subscription Plans</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Payments are processed securely through our payment providers</li>
                  <li>Subscriptions are billed in advance on a monthly basis</li>
                  <li>No refunds for partial months of service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Acceptable Use</h2>
              <div className="text-gray-600 dark:text-gray-400">
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Use the Service for any illegal purposes</li>
                  <li>Submit false or misleading information</li>
                  <li>Attempt to circumvent any security measures</li>
                  <li>Interfere with the proper operation of the Service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Termination</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We reserve the right to terminate or suspend access to our Service immediately, without prior notice, for any breach of these Terms or for any other reason we deem appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-400">
                ReviewPro+ shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}