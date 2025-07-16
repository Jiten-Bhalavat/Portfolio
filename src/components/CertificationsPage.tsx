import React from 'react';
import { Award, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allCertifications } from '../data/certifications';

const CertificationsPage = () => {

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/#certifications" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <Award size={48} className="text-blue-600 mr-4" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">All Certifications</h1>
              <p className="text-xl text-gray-600 mt-2">Professional credentials and achievements</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allCertifications.map((cert, index) => (
            <a
              key={index}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-blue-600 mb-2 group-hover:text-blue-800 transition-colors">
                  {cert.issuer}
                </h3>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm leading-tight">
                  {cert.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{cert.date}</p>
                <div className="flex items-center justify-center text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs mr-1">Verify Certificate</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage; 