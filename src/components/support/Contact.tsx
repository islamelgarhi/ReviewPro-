import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-indigo-600" />
            <h2 className="text-lg font-semibold mb-2">Email</h2>
            <p className="text-gray-600 dark:text-gray-400">support@reviewpro.plus</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center">
            <Phone className="h-8 w-8 mx-auto mb-4 text-indigo-600" />
            <h2 className="text-lg font-semibold mb-2">Phone</h2>
            <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center">
            <MessageSquare className="h-8 w-8 mx-auto mb-4 text-indigo-600" />
            <h2 className="text-lg font-semibold mb-2">Live Chat</h2>
            <p className="text-gray-600 dark:text-gray-400">Available 24/7</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              ></textarea>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}