import React from 'react';
import { Shield, Star, Trash2, MessageSquare, CheckCircle, Building2, Scale, FileText, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Scale,
    title: 'Case-by-Case Advocacy',
    description: 'Each review is treated as a unique case, with our experts building detailed arguments for removal or modification.'
  },
  {
    icon: FileText,
    title: 'Evidence-Based Defense',
    description: 'We compile comprehensive evidence packages to support each case, just like a legal defense.'
  },
  {
    icon: Shield,
    title: 'Platform Policy Expertise',
    description: 'Deep understanding of platform policies to build strong cases for review removal or modification.'
  },
  {
    icon: Building2,
    title: 'Multi-Platform Support',
    description: 'Expert representation across Airbnb, VRBO, Booking.com, Yelp, and Google Reviews.'
  },
  {
    icon: Star,
    title: 'Rating Protection',
    description: 'Strategic defense of your ratings with platform-specific approaches and documentation.'
  },
  {
    icon: MessageSquare,
    title: 'Professional Advocacy',
    description: 'Our team presents your case to platform review teams with professional, legal-style documentation.'
  }
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Professional Review Defense
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We approach each case with the thoroughness of a legal team
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity" />
              <feature.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Review Defense Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Process Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Case Building</h4>
              <p className="text-gray-600 dark:text-gray-400">We analyze each review and compile evidence to support your case</p>
              
              {/* Arrow 1 */}
              <div className="hidden md:block absolute top-1/2 left-[30%] transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-indigo-300 dark:text-indigo-700 transition-all group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:translate-x-2" />
              </div>
            </div>

            {/* Process Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <Scale className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Legal-Style Documentation</h4>
              <p className="text-gray-600 dark:text-gray-400">Professional preparation of platform-specific removal requests</p>
              
              {/* Arrow 2 */}
              <div className="hidden md:block absolute top-1/2 left-[63%] transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-indigo-300 dark:text-indigo-700 transition-all group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:translate-x-2" />
              </div>
            </div>

            {/* Process Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Platform Advocacy</h4>
              <p className="text-gray-600 dark:text-gray-400">Expert presentation and follow-up with platform review teams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}