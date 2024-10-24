import React, { useState } from 'react';
import { Lock, Database, Server, Settings } from 'lucide-react';

const Documentation = () => {
  const [selectedSection, setSelectedSection] = useState('authentication');

  const sections = [
    { id: 'authentication', name: 'Authentication', icon: Lock },
    { id: 'database', name: 'Database Schema', icon: Database },
    { id: 'deployment', name: 'Deployment', icon: Server },
    { id: 'configuration', name: 'Configuration', icon: Settings },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <aside className="lg:col-span-3">
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                  selectedSection === section.id
                    ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                <section.icon className="h-5 w-5 mr-3" />
                {section.name}
              </button>
            ))}
          </nav>
        </aside>

        <main className="mt-8 lg:col-span-9 lg:mt-0">
          {selectedSection === 'authentication' && (
            <>
              <h2 className="flex items-center text-2xl font-bold mb-6">
                <Lock className="h-6 w-6 mr-2 text-indigo-600" />
                Authentication
              </h2>
              
              <div className="space-y-8">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold">API Keys</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      API keys are available in two types:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                            <span className="text-green-600 dark:text-green-400 text-sm">P</span>
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">Production Keys</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            For live environments with full access to all features
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                            <span className="text-yellow-600 dark:text-yellow-400 text-sm">T</span>
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">Test Keys</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            For development and testing with simulated responses
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold">JWT Authentication</h3>
                  </div>
                  <div className="p-6">
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <pre className="text-sm text-white overflow-x-auto">
{`// Example JWT token request
const response = await fetch('/api/auth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    apiKey: 'your_api_key',
    secret: 'your_api_secret'
  })
});

const { token } = await response.json();`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      JWT tokens expire after 24 hours and should be refreshed before expiration
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedSection === 'database' && (
            <>
              <h2 className="flex items-center text-2xl font-bold mb-6">
                <Database className="h-6 w-6 mr-2 text-indigo-600" />
                Database Schema
              </h2>
              
              <div className="space-y-8">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold">Users</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-900/50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Column</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium">id</td>
                          <td className="px-6 py-4 text-sm text-gray-500">INTEGER</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Primary key</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium">email</td>
                          <td className="px-6 py-4 text-sm text-gray-500">TEXT</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Unique email address</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium">password</td>
                          <td className="px-6 py-4 text-sm text-gray-500">TEXT</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Hashed password</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold">Properties</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-900/50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Column</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium">id</td>
                          <td className="px-6 py-4 text-sm text-gray-500">INTEGER</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Primary key</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium">user_id</td>
                          <td className="px-6 py-4 text-sm text-gray-500">INTEGER</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Foreign key to users</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium">platform</td>
                          <td className="px-6 py-4 text-sm text-gray-500">TEXT</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Platform identifier</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedSection === 'deployment' && (
            <>
              <h2 className="flex items-center text-2xl font-bold mb-6">
                <Server className="h-6 w-6 mr-2 text-indigo-600" />
                Deployment
              </h2>
              
              <div className="space-y-8">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold">Docker Deployment</h3>
                  </div>
                  <div className="p-6">
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <pre className="text-sm text-white overflow-x-auto">
{`# Pull the latest image
docker pull reviewpro/api:latest

# Run the container
docker run -d \\
  -p 3000:3000 \\
  -e DATABASE_URL=your_database_url \\
  -e JWT_SECRET=your_jwt_secret \\
  reviewpro/api:latest`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold">Required Environment Variables</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                          DATABASE_URL
                        </code>
                        <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">
                          Connection string for your database
                        </span>
                      </li>
                      <li className="flex items-start">
                        <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                          JWT_SECRET
                        </code>
                        <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">
                          Secret key for JWT token generation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                          PORT
                        </code>
                        <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">
                          Port number for the API server (default: 3000)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedSection === 'configuration' && (
            <>
              <h2 className="flex items-center text-2xl font-bold mb-6">
                <Settings className="h-6 w-6 mr-2 text-indigo-600" />
                Configuration
              </h2>
              
              <div className="space-y-8">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold">API Configuration</h3>
                  </div>
                  <div className="p-6">
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <pre className="text-sm text-white overflow-x-auto">
{`{
  "api": {
    "version": "v1",
    "rateLimit": {
      "window": 900000,
      "max": 100
    },
    "timeout": 30000
  },
  "database": {
    "poolSize": 20,
    "idleTimeoutMillis": 30000
  },
  "cache": {
    "ttl": 3600,
    "checkPeriod": 600
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold">Platform Integration Settings</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Airbnb Integration</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>API Version: 2024-03</li>
                          <li>Polling Interval: 5 minutes</li>
                          <li>Webhook Support: Yes</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">VRBO Integration</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>API Version: v3</li>
                          <li>Polling Interval: 10 minutes</li>
                          <li>Webhook Support: Limited</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Documentation;