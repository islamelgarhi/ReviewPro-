import React, { useState } from 'react';
import { ArrowRight, Scale, Calendar, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardDemo from './DashboardDemo';
import PlatformIntegrations from './PlatformIntegrations';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative overflow-hidden pt-32 pb-20 lg:pt-40 bg-gray-50 dark:bg-gray-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Scale className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            Your Legal Advocate for
            <span className="block gradient-text">Review Protection</span>
          </h1>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            We handle each review case with the precision of a legal team. Our experts build and present compelling cases to platforms, protecting your business reputation with a methodical, evidence-based approach.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link 
              to="/free-trial"
              className="group bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => setShowVideo(true)}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 flex items-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                Close
              </button>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src="https://share.synthesia.io/embeds/videos/5f9b1b1a-8b1e-4b1e-9b1e-8b1e4b1e9b1e"
                  title="ReviewPro+ Product Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Video Preview Section */}
        <div className="mt-16 relative max-w-3xl mx-auto">
          <div 
            className="relative rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setShowVideo(true)}
          >
            <div className="aspect-video bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold mb-2">See ReviewPro+ in Action</h3>
                  <p className="text-lg opacity-90">Watch our 2-minute demo to see how we protect your business</p>
                </div>
                <div className="mt-6 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-indigo-600 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <DashboardDemo />
        <PlatformIntegrations />
      </div>
    </div>
  );
}