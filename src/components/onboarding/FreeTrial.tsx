import React from 'react';
import { Shield, Star, Building2 } from 'lucide-react';

export default function FreeTrial() {
  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Start Your Free Trial
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            14 days of premium features, no credit card required
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <Shield className="h-12 w-12 text-indigo-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Short-Term Rentals</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>Airbnb, VRBO, and Booking.com integration</span>
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>AI-powered review monitoring</span>
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>Professional review dispute handling</span>
              </li>
            </ul>
            <button className="w-full mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Start Rental Trial
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <Building2 className="h-12 w-12 text-indigo-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Restaurants</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>Yelp and Google Reviews management</span>
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>Review sentiment analysis</span>
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>Legal-grade review disputes</span>
              </li>
            </ul>
            <button className="w-full mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Start Restaurant Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}