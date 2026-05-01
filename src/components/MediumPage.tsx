import React, { useMemo, useState } from 'react';
import { PenTool, ArrowLeft, ExternalLink, Clock, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allMediumArticles } from '../data/medium';

const MediumPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    allMediumArticles.forEach((article) => {
      article.tags.forEach((tag) => tags.add(tag));
    });
    return ['all', ...Array.from(tags).sort()];
  }, []);

  const filteredArticles = useMemo(() => {
    if (activeFilter === 'all') {
      return allMediumArticles;
    }
    return allMediumArticles.filter((article) => article.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/#medium" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <PenTool size={48} className="text-green-600 mr-4" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Medium Articles</h1>
              <p className="text-xl text-gray-600 mt-2">Technical insights, tutorials, and thoughts on AI & ML</p>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Filters */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex flex-wrap gap-2">
          {availableTags.map((tag) => {
            const isActive = activeFilter === tag;
            const label = tag === 'all' ? 'All Topics' : tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-green-400 hover:text-green-700'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Showing {filteredArticles.length} article{filteredArticles.length === 1 ? '' : 's'}
          {activeFilter !== 'all' ? ` for "${activeFilter}"` : ''}.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <span>{article.date}</span>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                {article.claps ? (
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <ThumbsUp size={14} className="mr-1" />
                    <span>{article.claps} claps</span>
                  </div>
                ) : (
                  <div />
                )}
                {article.url !== "#" ? (
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    Read More
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                ) : (
                  <span className="text-gray-400 text-sm">Coming Soon</span>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No articles found for this topic yet.
          </div>
        )}

        {/* Profile Link */}
        <div className="text-center mt-12">
          <a 
            href="https://infinityai.medium.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Follow on Medium
            <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediumPage; 