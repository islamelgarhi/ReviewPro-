import React from 'react';
import { BarChart3, TrendingUp, Users, Star, AlertCircle, CheckCircle, Shield, Trash2, MessageSquare } from 'lucide-react';

const recentReviews = [
  {
    id: 1,
    platform: 'Airbnb',
    rating: 2,
    content: "The location was good but the cleanliness wasn't up to our standards...",
    reviewer: "Sarah M.",
    date: "2024-03-15",
    status: "pending"
  },
  {
    id: 2,
    platform: 'VRBO',
    rating: 1,
    content: "Host was unresponsive and the amenities listed were not available...",
    reviewer: "Michael R.",
    date: "2024-03-14",
    status: "in_review"
  }
];

export default function DashboardDemo() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-16 rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Previous metrics section remains the same */}
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Review Removal Requests</h3>
          <div className="space-y-4">
            {recentReviews.map((review) => (
              <div key={review.id} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{review.platform}</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400">
                        {review.status === 'pending' ? 'Pending Review' : 'In Progress'}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{review.content}</div>
                    <div className="mt-2 flex items-center gap-4">
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
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        AI Analysis: High probability of policy violation
                      </span>
                    </div>
                    <button className="px-4 py-1 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Request Removal
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}