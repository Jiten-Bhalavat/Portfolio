import React from 'react';
import { Youtube, ArrowLeft, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allYouTubeVideos } from '../data/youtube';

const YouTubePage = () => {

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/#youtube" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <Youtube size={48} className="text-red-600 mr-4" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">YouTube Content</h1>
              <p className="text-xl text-gray-600 mt-2">Educational videos on AI, Machine Learning, and Software Development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allYouTubeVideos.map((video, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div 
                className="relative cursor-pointer"
                onClick={() => {
                  if (video.url && video.url !== "#") {
                    window.open(video.url, '_blank');
                  }
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  {video.url && video.url !== "#" ? (
                    <div className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                  ) : (
                    <div className="bg-gray-600 rounded-full p-4">
                      <Play size={32} className="text-gray-300 ml-1" />
                    </div>
                  )}
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-lg leading-tight">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{video.views}</span>
                  <span>{video.uploadDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Link */}
        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/@AI-Agents-official" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Subscribe to Channel
            <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default YouTubePage; 