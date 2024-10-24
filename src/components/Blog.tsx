import React, { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const allArticles = [
  {
    id: 1,
    title: "The Future of Review Management in 2024",
    excerpt: "AI and machine learning are revolutionizing how businesses handle online reviews. Learn about the latest trends and technologies shaping review management.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Legal Implications of Review Management",
    excerpt: "Understanding the legal framework around review management and removal. Expert insights on compliance and best practices.",
    author: "Michael Chen",
    date: "March 12, 2024",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Building Trust in the Digital Age",
    excerpt: "How to maintain authenticity while protecting your business from unfair reviews. Strategies for building lasting customer trust.",
    author: "Emma Williams",
    date: "March 10, 2024",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "AI-Powered Review Analysis: A Deep Dive",
    excerpt: "Exploring how artificial intelligence is transforming the way businesses analyze and respond to customer reviews.",
    author: "David Thompson",
    date: "March 8, 2024",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Restaurant Review Management Strategies",
    excerpt: "Specific strategies for restaurants to maintain their online reputation across multiple review platforms.",
    author: "Lisa Chen",
    date: "March 5, 2024",
    category: "Restaurants",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Vacation Rental Review Protection Guide",
    excerpt: "Essential strategies for vacation rental owners to protect their properties from unfair reviews.",
    author: "Mark Anderson",
    date: "March 3, 2024",
    category: "Rentals",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    title: "The Psychology of Online Reviews",
    excerpt: "Understanding customer psychology in online reviews and how it affects business reputation.",
    author: "Dr. Rachel Brown",
    date: "March 1, 2024",
    category: "Research",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    title: "Review Management ROI: Measuring Success",
    excerpt: "How to measure and maximize the return on investment from your review management efforts.",
    author: "James Wilson",
    date: "February 28, 2024",
    category: "Business",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    title: "Platform-Specific Review Strategies",
    excerpt: "Tailored approaches for managing reviews across different platforms like Airbnb, Yelp, and Google.",
    author: "Sophie Martinez",
    date: "February 25, 2024",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Blog() {
  const [displayCount, setDisplayCount] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayCount(prev => Math.min(prev + 3, allArticles.length));
      setLoading(false);
    }, 500);
  };

  const displayedArticles = allArticles.slice(0, displayCount);

  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Industry Insights & Updates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Latest news and strategies in review management and protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article) => (
            <article 
              key={article.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 relative">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-400 transform transition-transform duration-300 group-hover:scale-105">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-2 transition-colors duration-300 group-hover:text-indigo-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {article.author}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2 transition-colors duration-300 group-hover:text-indigo-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {article.date}
                    </span>
                  </div>
                </div>
                <Link
                  to={`/blog/${article.id}`}
                  className="mt-6 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-300 group-hover:translate-x-2"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {displayCount < allArticles.length && (
          <div className="mt-12 text-center">
            <button 
              onClick={handleLoadMore}
              disabled={loading}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                'Load More Articles'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}