import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, Star, TrendingUp, ArrowLeft, CheckCircle } from 'lucide-react';
import { caseStudies } from '../CaseStudies';

const timelineEvents = {
  'superhost-restoration': [
    { title: 'Initial Assessment', description: 'Analyzed review patterns and identified unfair review clusters' },
    { title: 'Evidence Collection', description: 'Gathered communication records, maintenance logs, and guest interactions' },
    { title: 'Platform Engagement', description: 'Submitted detailed cases for each violating review' },
    { title: 'Status Recovery', description: 'Superhost status reinstated after successful review removals' }
  ],
  'restaurant-recovery': [
    { title: 'Multi-Platform Audit', description: 'Comprehensive analysis of Yelp and Google review patterns' },
    { title: 'Competitor Analysis', description: 'Identified suspicious review patterns from competitors' },
    { title: 'Legal Documentation', description: 'Prepared evidence packages for each platform' },
    { title: 'Rating Restoration', description: 'Achieved 4.4 average rating across platforms' }
  ],
  'luxury-villa': [
    { title: 'Portfolio Review', description: 'Analyzed review trends across all properties' },
    { title: 'Prevention Strategy', description: 'Implemented proactive review monitoring system' },
    { title: 'Response Protocol', description: 'Developed custom response templates for each scenario' },
    { title: 'Ongoing Protection', description: 'Maintained 4.9 average rating across portfolio' }
  ]
};

export default function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return (
      <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-indigo-600">Return to Case Studies</Link>
        </div>
      </div>
    );
  }

  const timeline = timelineEvents[id as keyof typeof timelineEvents];

  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/case-studies"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Case Studies
        </Link>

        <div className="relative h-80 rounded-xl overflow-hidden mb-8">
          <img 
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-900">
                  {study.category}
                </span>
                <span className="ml-4 text-white opacity-90">
                  <Shield className="h-4 w-4 inline mr-2" />
                  {study.platform}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white">{study.title}</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {Object.entries(study.metrics).map(([key, value], i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2>Challenge</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {study.description}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Our Approach</h2>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to achieve similar results?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Let us help you protect and improve your business reputation
          </p>
          <Link
            to="/free-trial"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}