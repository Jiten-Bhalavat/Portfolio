import React, { useState, useMemo } from 'react';
import { Award, ArrowLeft, ExternalLink, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allCertifications } from '../data/certifications';

const CertificationsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Get unique issuers for filter options
  const uniqueIssuers = useMemo(() => {
    const issuers = [...new Set(allCertifications.map(cert => cert.issuer))];
    return issuers.sort();
  }, []);

  // Filter certifications based on selected filter
  const filteredCertifications = useMemo(() => {
    if (selectedFilter === 'all') {
      return allCertifications;
    }
    return allCertifications.filter(cert => cert.issuer === selectedFilter);
  }, [selectedFilter]);

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
          <div className="flex items-center mb-6">
            <Award size={48} className="text-blue-600 mr-4" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">All Certifications</h1>
              <p className="text-xl text-gray-600 mt-2">Professional credentials and achievements</p>
            </div>
          </div>

          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filter by Platform:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                All ({allCertifications.length})
              </button>
              {uniqueIssuers.map((issuer) => {
                const count = allCertifications.filter(cert => cert.issuer === issuer).length;
                return (
                  <button
                    key={issuer}
                    onClick={() => setSelectedFilter(issuer)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedFilter === issuer
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:text-blue-600'
                    }`}
                  >
                    {issuer} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {selectedFilter === 'all' 
              ? `Showing all ${filteredCertifications.length} certifications`
              : `Showing ${filteredCertifications.length} certification${filteredCertifications.length === 1 ? '' : 's'} from ${selectedFilter}`
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCertifications.map((cert, index) => (
            <a
              key={index}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {cert.title}
                </h3>
                <h4 className="font-semibold text-blue-600 mb-3 text-sm group-hover:text-blue-800 transition-colors">
                  {cert.issuer}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{cert.date}</p>
                <div className="flex items-center justify-center text-blue-600 transition-opacity">
                  <span className="text-xs mr-1">Verify Certificate</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <Award size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No certifications found</h3>
            <p className="text-gray-500">Try selecting a different filter option.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationsPage; 