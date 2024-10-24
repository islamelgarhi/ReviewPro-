import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '49',
    features: [
      'Up to 5 properties',
      'Basic review monitoring',
      'Standard response templates',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: '99',
    features: [
      'Up to 15 properties',
      'Advanced review analysis',
      'Custom response templates',
      'Priority support',
      'Review removal assistance',
      'Sentiment analysis insights',
      'Review trend predictions',
      'Guest behavior patterns',
      'Automated review risk scoring'
    ]
  },
  {
    name: 'Enterprise',
    price: '249',
    features: [
      'Unlimited properties',
      'AI-powered review protection',
      'Custom API integration',
      '24/7 dedicated support',
      'Dedicated account manager',
      'Advanced ML review prediction',
      'Real-time fraud detection',
      'Competitive analysis AI',
      'Custom ML model training',
      'Predictive revenue analytics'
    ]
  }
];

export default function Pricing() {
  const navigate = useNavigate();

  const handleGetStarted = (planName: string) => {
    navigate('/get-started', { state: { selectedPlan: planName } });
  };

  return (
    <div id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 ${
                plan.name === 'Professional' ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              {plan.name === 'Professional' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">${plan.price}</span>
                <span className="ml-1 text-sm font-semibold text-gray-500 dark:text-gray-400">/month</span>
              </p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="ml-3 text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleGetStarted(plan.name)}
                className={`mt-8 w-full px-6 py-3 rounded-lg transition-colors ${
                  plan.name === 'Professional'
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}