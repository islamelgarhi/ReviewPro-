import React, { useState } from 'react';
import { Trash2, MessageSquare, Filter, Star, TrendingUp, Shield, Building2 } from 'lucide-react';

// Sample data for demonstration
const sampleRentalReviews = [
  {
    id: 1,
    platform: 'Airbnb',
    propertyName: 'Luxury Beach Villa',
    reviewer: 'John D.',
    rating: 3,
    content: 'The location was great but the cleanliness could be improved.',
    date: '2024-03-15',
    status: 'pending'
  },
  {
    id: 2,
    platform: 'VRBO',
    propertyName: 'Mountain Retreat',
    reviewer: 'Sarah M.',
    rating: 2,
    content: 'Had issues with the heating system during our stay.',
    date: '2024-03-14',
    status: 'pending'
  }
];

const sampleRestaurantReviews = [
  {
    id: 1,
    platform: 'Yelp',
    restaurantName: 'Bella Italia',
    reviewer: 'Mike R.',
    rating: 2,
    content: 'Long wait times and cold food.',
    date: '2024-03-15',
    status: 'pending'
  },
  {
    id: 2,
    platform: 'Google',
    restaurantName: 'Sushi Express',
    reviewer: 'Lisa K.',
    rating: 3,
    content: 'Average experience, service was slow.',
    date: '2024-03-14',
    status: 'pending'
  }
];

const rentalMetrics = [
  {
    label: 'Average Rating',
    value: '4.8',
    change: '+0.2',
    icon: Star,
    color: 'text-yellow-400'
  },
  {
    label: 'Protected Reviews',
    value: '95%',
    change: '+3%',
    icon: Shield,
    color: 'text-indigo-600'
  },
  {
    label: 'Active Properties',
    value: '12',
    change: '+2',
    icon: Building2,
    color: 'text-green-500'
  }
];

const restaurantMetrics = [
  {
    label: 'Yelp Rating',
    value: '4.5',
    change: '+0.3',
    icon: Star,
    color: 'text-red-500'
  },
  {
    label: 'Google Rating',
    value: '4.7',
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

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('rentals');
  const [rentalReviewsState, setRentalReviewsState] = useState(sampleRentalReviews);
  const [restaurantReviewsState, setRestaurantReviewsState] = useState(sampleRestaurantReviews);

  const handleRemovalRequest = (reviewId: number) => {
    if (activeTab === 'rentals') {
      setRentalReviewsState(rentalReviewsState.map(review => 
        review.id === reviewId 
          ? { ...review, status: 'removal_requested' }
          : review
      ));
    } else {
      setRestaurantReviewsState(restaurantReviewsState.map(review => 
        review.id === reviewId 
          ? { ...review, status: 'removal_requested' }
          : review
      ));
    }
  };

  const currentMetrics = activeTab === 'rentals' ? rentalMetrics : restaurantMetrics;
  const currentReviews = activeTab === 'rentals' ? rentalReviewsState : restaurantReviewsState;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('rentals')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'rentals'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Short-Term Rentals
              </button>
              <button
                onClick={() => setActiveTab('restaurants')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'restaurants'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Restaurants
              </button>
            </nav>
          </div>

          {/* KPIs Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {currentMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
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

          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {activeTab === 'rentals' ? 'Rental Reviews' : 'Restaurant Reviews'}
              </h2>
              <button className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Filter className="h-4 w-4 mr-2" />
                Filter Reviews
              </button>
            </div>

            <div className="space-y-6">
              {currentReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {activeTab === 'rentals' ? review.propertyName : review.restaurantName}
                        </span>
                        <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                          {review.platform}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                            fill={i < review.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                          by {review.reviewer}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                        <MessageSquare className="h-5 w-5" />
                      </button>
                      <button 
                        className="p-2 text-gray-400 hover:text-red-500"
                        onClick={() => handleRemovalRequest(review.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {review.content}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {review.date}
                    </span>
                    <button
                      onClick={() => handleRemovalRequest(review.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        review.status === 'removal_requested'
                          ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                          : 'bg-red-50 text-red-600 hover:bg-red-100'
                      }`}
                      disabled={review.status === 'removal_requested'}
                    >
                      {review.status === 'removal_requested' ? 'Removal Requested' : 'Request Removal'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}