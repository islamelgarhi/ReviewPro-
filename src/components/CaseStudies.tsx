import React from 'react';
import { Star, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'superhost-restoration',
    title: "Superhost Status Restored",
    category: "Short-Term Rental",
    platform: "Airbnb",
    metrics: {
      reviewsRemoved: 12,
      ratingIncrease: 0.8,
      bookingIncrease: "32%"
    },
    description: "How we helped a property manager restore their Superhost status after a series of unfair reviews threatened their business.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: 'restaurant-recovery',
    title: "Restaurant Chain Reputation Recovery",
    category: "Restaurant",
    platform: "Yelp & Google",
    metrics: {
      reviewsRemoved: 24,
      ratingIncrease: 1.2,
      revenueIncrease: "45%"
    },
    description: "A multi-location restaurant chain's journey from a 3.2 to 4.4 average rating across platforms.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: 'luxury-villa',
    title: "Luxury Villa Portfolio Protection",
    category: "Short-Term Rental",
    platform: "VRBO",
    metrics: {
      reviewsProtected: 18,
      ratingMaintained: "4.9",
      occupancyIncrease: "28%"
    },
    description: "Maintaining perfect ratings for a portfolio of luxury properties through proactive review management.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000"
  }
];

export { caseStudies };

export default function CaseStudies() {
  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real results from real businesses protecting their reputation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Shield className="h-4 w-4 mr-2" />
                  {study.platform}
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {study.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(study.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                        {value}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/case-studies/${study.id}`}
                  className="w-full bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors flex items-center justify-center group"
                >
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="mb-6 text-lg opacity-90">Join hundreds of businesses who've protected their reputation with ReviewPro+</p>
          <Link 
            to="/free-trial"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}