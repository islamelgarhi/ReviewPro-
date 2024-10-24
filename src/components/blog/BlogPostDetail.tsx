import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';

const blogPosts = {
  1: {
    title: "The Future of Review Management in 2024",
    content: `
      The landscape of online review management is rapidly evolving, driven by advances in artificial intelligence and machine learning. As we move through 2024, several key trends are shaping how businesses handle their online reputation.

      ## AI-Powered Review Analysis
      
      Artificial intelligence is revolutionizing how businesses analyze and respond to reviews. Modern AI systems can:
      
      - Detect sentiment patterns across multiple platforms
      - Identify potential policy violations automatically
      - Predict review trends and potential issues
      - Generate customized response templates
      
      ## Machine Learning Applications
      
      Machine learning algorithms are becoming increasingly sophisticated in:
      
      - Identifying fake or malicious reviews
      - Analyzing customer behavior patterns
      - Predicting potential negative reviews
      - Optimizing response timing and content
      
      ## Platform Integration Trends
      
      The integration between different review platforms is becoming more seamless:
      
      - Cross-platform review monitoring
      - Unified response management
      - Automated alert systems
      - Real-time analytics dashboards
      
      ## Looking Ahead
      
      As we move forward, we can expect:
      
      - More sophisticated AI-driven review analysis
      - Enhanced automation in review management
      - Better integration between platforms
      - More powerful predictive analytics
    `,
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read"
  },
  2: {
    title: "Legal Implications of Review Management",
    content: `
      Understanding the legal framework surrounding review management is crucial for businesses. This comprehensive guide explores the key legal considerations and best practices.

      ## Legal Framework
      
      The legal landscape of review management includes:
      
      - Platform-specific policies
      - Consumer protection laws
      - Defamation regulations
      - Privacy requirements
      
      ## Common Legal Issues
      
      Businesses must navigate several legal challenges:
      
      - Review removal requests
      - Response liability
      - Customer privacy
      - Platform compliance
      
      ## Best Practices
      
      To maintain legal compliance:
      
      - Document all review-related communications
      - Maintain clear evidence trails
      - Follow platform guidelines strictly
      - Consult legal experts when needed
      
      ## Risk Management
      
      Effective risk management strategies include:
      
      - Regular policy reviews
      - Staff training programs
      - Documentation systems
      - Legal compliance checks
    `,
    author: "Michael Chen",
    date: "March 12, 2024",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    readTime: "10 min read"
  },
  3: {
    title: "Building Trust in the Digital Age",
    content: `
      In today's digital landscape, building and maintaining trust is more important than ever. Learn how to effectively manage your online reputation while maintaining authenticity.

      ## The Trust Factor
      
      Key elements of digital trust:
      
      - Transparent communication
      - Consistent service quality
      - Responsive customer service
      - Authentic online presence
      
      ## Review Management Strategies
      
      Effective approaches to building trust:
      
      - Proactive review monitoring
      - Timely response systems
      - Quality assurance programs
      - Customer feedback integration
      
      ## Authentication Methods
      
      Maintaining authenticity through:
      
      - Verified review systems
      - Customer verification processes
      - Platform authentication
      - Documentation standards
      
      ## Future Developments
      
      Emerging trends in trust building:
      
      - Blockchain verification
      - AI-powered authenticity checks
      - Enhanced verification systems
      - Cross-platform integration
    `,
    author: "Emma Williams",
    date: "March 10, 2024",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    readTime: "7 min read"
  }
};

export default function BlogPostDetail() {
  const { id } = useParams();
  const post = blogPosts[Number(id)];

  if (!post) {
    return (
      <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-indigo-600">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <div className="relative h-80 rounded-xl overflow-hidden mb-8">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="flex items-center gap-6 mb-8">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <User className="h-4 w-4 mr-2" />
            {post.author}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-2" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-2 text-indigo-600" />
            <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-400">
              {post.category}
            </span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {post.title}
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            } else if (paragraph.startsWith('- ')) {
              return (
                <ul key={index} className="list-disc pl-4 mb-4">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400">
                      {item.replace('- ', '')}
                    </li>
                  ))}
                </ul>
              );
            } else {
              return (
                <p key={index} className="text-gray-600 dark:text-gray-400 mb-4">
                  {paragraph}
                </p>
              );
            }
          })}
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <h3 className="text-lg font-semibold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Share on Twitter
            </button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900">
              Share on LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}