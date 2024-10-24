import React, { useState } from 'react';
import { MessageSquare, Trash2, AlertCircle, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    platform: 'Yelp',
    rating: 2,
    content: "The food was cold and the service was slow. Had to wait 45 minutes for our main course...",
    reviewer: "John D.",
    date: "2024-03-15",
    location: "Downtown Branch",
    status: "pending",
    aiAnalysis: "Potential service violation, inconsistent with recent reviews"
  },
  {
    id: 2,
    platform: 'Google',
    rating: 1,
    content: "Terrible experience. Food quality was not what I expected from a restaurant of this caliber...",
    reviewer: "Emily S.",
    date: "2024-03-14",
    location: "Westside Location",
    status: "in_review",
    aiAnalysis: "Suspected competitor review, unusual review pattern detected"
  }
];

export default function ReviewsList() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Reviews</h2>
          <div className="flex gap-2">
            <select 
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Platforms</option>
              <option value="yelp">Yelp</option>
              <option value="google">Google</option>
            </select>
          </div>
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
                  <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Request Review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}