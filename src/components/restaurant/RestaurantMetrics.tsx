import React from 'react';
import { Star, TrendingUp, MapPin, Shield } from 'lucide-react';

const metrics = [
  {
    label: 'Yelp Rating',
    value: '4.5',
    change: '+0.2',
    icon: Star,
    color: 'text-red-500'
  },
  {
    label: 'Google Rating',
    value: '4.7',
    change: '+0.3',
    icon: Star,
    color: 'text-blue-500'
  },
  {
    label: 'Total Locations',
    value: '12',
    change: '+2',
    icon: MapPin,
    color: 'text-green-500'
  },
  {
    label: 'Protected Reviews',
    value: '96%',
    change: '+5%',
    icon: Shield,
    color: 'text-indigo-500'
  }
];

export default function RestaurantMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
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
  );
}