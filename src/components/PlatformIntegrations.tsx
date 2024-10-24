import React from 'react';

const platforms = [
  {
    name: 'Airbnb',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png',
    height: '32px'
  },
  {
    name: 'VRBO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Vrbo_2020_logo.svg/2560px-Vrbo_2020_logo.svg.png',
    height: '24px'
  },
  {
    name: 'Booking.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png',
    height: '32px'
  },
  {
    name: 'Google Reviews',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png',
    height: '28px'
  },
  {
    name: 'Yelp',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/2560px-Yelp_Logo.svg.png',
    height: '32px'
  },
  {
    name: 'Hostaway',
    logo: 'https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb5212502a6f119154_hostaway-logo.svg',
    height: '28px'
  }
];

export default function PlatformIntegrations() {
  return (
    <div className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Trusted Compatibility & Integrations
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Seamlessly integrated with all major booking and review platforms
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {platforms.map((platform) => (
          <div 
            key={platform.name}
            className="flex items-center justify-center w-full h-16 px-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-75 hover:opacity-100"
          >
            <img
              src={platform.logo}
              alt={`${platform.name} logo`}
              style={{ height: platform.height }}
              className="max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          And many more platforms supported through our API integrations
        </p>
      </div>
    </div>
  );
}