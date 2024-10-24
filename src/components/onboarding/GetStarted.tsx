import React, { useState } from 'react';
import { Shield, Building2, ArrowRight, CreditCard, Mail, User, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const plans = {
  starter: {
    name: 'Starter',
    price: 49
  },
  professional: {
    name: 'Professional',
    price: 99
  },
  enterprise: {
    name: 'Enterprise',
    price: 249
  }
};

export default function GetStarted() {
  const location = useLocation();
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [hoveredIndustry, setHoveredIndustry] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    plan: location.state?.selectedPlan?.toLowerCase() || 'professional'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const selectedPlan = plans[formData.plan as keyof typeof plans];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className={`relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 cursor-pointer
                ${selectedIndustry === 'rental' ? 'ring-2 ring-indigo-600 scale-[1.02]' : ''}
                ${hoveredIndustry === 'rental' ? 'transform scale-[1.02] shadow-xl' : ''}
                ${hoveredIndustry === 'restaurant' ? 'opacity-75' : ''}`}
              onClick={() => {
                setSelectedIndustry('rental');
                setStep(2);
              }}
              onMouseEnter={() => setHoveredIndustry('rental')}
              onMouseLeave={() => setHoveredIndustry('')}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-900/20 dark:to-transparent rounded-xl transition-opacity duration-300 ${
                hoveredIndustry === 'rental' ? 'opacity-100' : 'opacity-0'
              }`} />
              <div className="relative z-10">
                <Shield className={`h-12 w-12 mb-6 transition-colors duration-300 ${
                  hoveredIndustry === 'rental' ? 'text-indigo-500' : 'text-indigo-600'
                }`} />
                <h2 className="text-2xl font-bold mb-4">Short-Term Rentals</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Protect your rental business across Airbnb, VRBO, and Booking.com
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <ArrowRight className={`h-5 w-5 mr-2 transition-transform duration-300 ${
                      hoveredIndustry === 'rental' ? 'transform translate-x-1' : ''
                    }`} />
                    <span>Automated review monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className={`h-5 w-5 mr-2 transition-transform duration-300 ${
                      hoveredIndustry === 'rental' ? 'transform translate-x-1' : ''
                    }`} />
                    <span>AI-powered sentiment analysis</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className={`h-5 w-5 mr-2 transition-transform duration-300 ${
                      hoveredIndustry === 'rental' ? 'transform translate-x-1' : ''
                    }`} />
                    <span>Professional dispute handling</span>
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className={`relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 cursor-pointer
                ${selectedIndustry === 'restaurant' ? 'ring-2 ring-indigo-600 scale-[1.02]' : ''}
                ${hoveredIndustry === 'restaurant' ? 'transform scale-[1.02] shadow-xl' : ''}
                ${hoveredIndustry === 'rental' ? 'opacity-75' : ''}`}
              onClick={() => {
                setSelectedIndustry('restaurant');
                setStep(2);
              }}
              onMouseEnter={() => setHoveredIndustry('restaurant')}
              onMouseLeave={() => setHoveredIndustry('')}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-900/20 dark:to-transparent rounded-xl transition-opacity duration-300 ${
                hoveredIndustry === 'restaurant' ? 'opacity-100' : 'opacity-0'
              }`} />
              <div className="relative z-10">
                <Building2 className={`h-12 w-12 mb-6 transition-colors duration-300 ${
                  hoveredIndustry === 'restaurant' ? 'text-indigo-500' : 'text-indigo-600'
                }`} />
                <h2 className="text-2xl font-bold mb-4">Restaurants</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Manage your restaurant's reputation across Yelp and Google Reviews
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <ArrowRight className={`h-5 w-5 mr-2 transition-transform duration-300 ${
                      hoveredIndustry === 'restaurant' ? 'transform translate-x-1' : ''
                    }`} />
                    <span>Multi-platform review management</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className={`h-5 w-5 mr-2 transition-transform duration-300 ${
                      hoveredIndustry === 'restaurant' ? 'transform translate-x-1' : ''
                    }`} />
                    <span>Legal-grade review disputes</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className={`h-5 w-5 mr-2 transition-transform duration-300 ${
                      hoveredIndustry === 'restaurant' ? 'transform translate-x-1' : ''
                    }`} />
                    <span>24/7 review monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      // Rest of the steps remain unchanged
      case 2:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Account Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Continue to Payment
                </button>
              </form>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Card Number</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CVC</label>
                    <input
                      type="text"
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                      required
                    />
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>{selectedPlan.name} Plan</span>
                    <span>${selectedPlan.price}/month</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Includes all features and priority support
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Complete Purchase
                </button>
              </form>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Welcome Aboard!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Your account has been created successfully. You'll receive a confirmation email shortly.
              </p>
              <button
                onClick={() => window.location.href = selectedIndustry === 'rental' ? '/short-term-rentals' : '/restaurant'}
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get Started with ReviewPro+
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose your industry and let's protect your reputation
          </p>
        </div>

        {renderStep()}
      </div>
    </div>
  );
}