import React from 'react';
import { Shield, Star, MessageSquare, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const guides = [
  {
    title: "Preventing Negative Reviews Through Proactive Communication",
    icon: MessageSquare,
    content: `
      Early communication is your best defense against negative reviews. Follow these proven strategies:

      1. Set Clear Expectations
      - Provide detailed property/service descriptions
      - Document all policies and rules clearly
      - Send pre-arrival/pre-service communications

      2. Regular Check-ins
      - Implement a 24-hour check-in message
      - Schedule mid-stay communications
      - Address issues immediately when reported

      3. Documentation
      - Keep all communication records
      - Take photos before and after stays
      - Log all maintenance and cleaning activities

      Remember: Most negative reviews stem from mismatched expectations or unaddressed concerns.
    `
  },
  {
    title: "Building a Strong Case for Review Removal",
    icon: Shield,
    content: `
      When facing an unfair review, documentation is crucial. Here's how to build a strong case:

      1. Gather Evidence
      - Collect all communication records
      - Document property/service condition
      - Save timestamps of interactions
      - Maintain service/maintenance logs

      2. Identify Policy Violations
      - Review platform guidelines thoroughly
      - Highlight specific violation points
      - Document any extortion attempts
      - Note any discriminatory language

      3. Present Your Case
      - Write a professional, fact-based appeal
      - Include supporting documentation
      - Reference specific platform policies
      - Maintain a neutral, professional tone

      Pro Tip: Treat each review dispute like a legal case, focusing on facts rather than emotions.
    `
  },
  {
    title: "Maintaining a Perfect Rating Strategy",
    icon: Star,
    content: `
      Protect your perfect rating with these proven strategies:

      1. Early Warning System
      - Monitor guest behavior patterns
      - Address concerns immediately
      - Document all interactions
      - Use automated check-in surveys

      2. Professional Response Protocol
      - Never respond emotionally
      - Draft responses carefully
      - Focus on solutions
      - Document resolution attempts

      3. Prevention Techniques
      - Regular quality checks
      - Standardized service procedures
      - Staff training programs
      - Guest satisfaction surveys

      Key Point: Prevention is always better than dispute resolution.
    `
  }
];

export default function Guides() {
  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Review Protection Guides
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Expert strategies to protect and manage your online reputation
          </p>
        </div>

        <div className="space-y-12">
          {guides.map((guide, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <guide.icon className="h-8 w-8 text-indigo-600 mr-4" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {guide.title}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  {guide.content.split('\n\n').map((paragraph, i) => (
                    <div key={i} className="mb-6">
                      {paragraph.startsWith('- ') ? (
                        <ul className="list-disc pl-4">
                          {paragraph.split('\n').map((item, j) => (
                            <li key={j} className="text-gray-600 dark:text-gray-400">
                              {item.replace('- ', '')}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {paragraph}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-indigo-600 mt-1 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Need Professional Help?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our team of experts is ready to assist you with review management and protection.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}