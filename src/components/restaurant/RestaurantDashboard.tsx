import React, { useState } from 'react';
import { Star, Building2, MessageSquare, Trash2, AlertCircle, CheckCircle, TrendingUp, Shield } from 'lucide-react';

const demoReviews = [
  {
    id: 1,
    platform: 'Yelp',
    rating: 2,
    content: "Waited over an hour for our food. The service was terrible and the manager was nowhere to be found...",
    reviewer: "David M.",
    date: "2024-03-15",
    location: "Downtown Location",
    status: "pending",
    aiAnalysis: "Service timing inconsistent with POS data - potential misrepresentation"
  },
  {
    id: 2,
    platform: 'Google',
    rating: 1,
    content: "Food was cold and not fresh. Very disappointed with the quality considering the prices...",
    reviewer: "Sarah L.",
    date: "2024-03-14",
    location: "Westside Branch",
    status: "in_review",
    aiAnalysis: "Review pattern suggests potential competitor activity"
  }
];

const metrics = [
  {
    label: 'Yelp Rating',
    value: '4.6',
    change: '+0.3',
    icon: Star,
    color: 'text-red-500'
  },
  {
    label: 'Google Rating',
    value: '4.8',
    change: '+0.2',
    icon: Star,
    color: 'text-blue-500'
  },
  {
    label: 'Protected Reviews',
    value: '92%',
    change: '+4%',
    icon: Shield,
    color: 'text-green-500'
  }
];

export default function RestaurantDashboard() {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [reviews, setReviews] = useState(demoReviews);

  const handleRemovalRequest = (reviewId: number) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, status: 'removal_requested' }
        : review
    ));
  };

  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Restaurant Review Management
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Professional review protection for restaurants across Yelp and Google Reviews
          </p>
        </div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{metric.value}</p>
                </div>
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600 dark:text-green-400">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>{metric.change} this month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Review Management Demo</h2>
              <select 
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm"
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
              >
                <option value="all">All Platforms</option>
                <option value="yelp">Yelp</option>
                <option value="google">Google Reviews</option>
              </select>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 text-sm rounded-full ${
                          review.platform === 'Yelp'
                            ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400'
                        }`}>
                          {review.platform}
                        </span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {review.location}
                        </span>
                      </div>
                      <p className="mt-3 text-gray-600 dark:text-gray-300">{review.content}</p>
                      <div className="mt-3 flex items-center gap-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          by {review.reviewer}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                        <MessageSquare className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          AI Analysis: {review.aiAnalysis}
                        </span>
                      </div>
                      <button 
                        onClick={() => handleRemovalRequest(review.id)}
                        className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                          review.status === 'removal_requested'
                            ? 'bg-green-600 text-white'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                      >
                        {review.status === 'removal_requested' ? (
                          <span className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Removal Requested
                          </span>
                        ) : 'Request Removal'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to protect your restaurant's reputation?</h2>
          <p className="mb-6">Join leading restaurants who trust us with their online presence.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}