import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">Last updated: March 2024</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Information We Collect</h2>
              <div className="text-gray-600 dark:text-gray-400">
                <p className="mb-4">We collect the following types of information:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Account information (name, email, business details)</li>
                  <li>Property and listing information</li>
                  <li>Review data from connected platforms</li>
                  <li>Usage data and analytics</li>
                  <li>Payment information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. How We Use Your Information</h2>
              <div className="text-gray-600 dark:text-gray-400">
                <p className="mb-4">Your information is used to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide and improve our services</li>
                  <li>Process payments and transactions</li>
                  <li>Monitor and analyze review patterns</li>
                  <li>Communicate with you about our services</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Secure access controls and authentication</li>
                <li>Regular backup procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Data Sharing</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                <li>Service providers and partners</li>
                <li>Platform providers (Airbnb, VRBO, etc.)</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Your Rights</h2>
              <div className="text-gray-600 dark:text-gray-400">
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access your personal data</li>
                  <li>Request corrections to your data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Export your data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We use cookies and similar tracking technologies to improve your experience and analyze service usage. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">7. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-400">
                If you have any questions about this Privacy Policy, please contact us at privacy@reviewpro.plus
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}