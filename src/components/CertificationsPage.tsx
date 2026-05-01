import React from 'react';
import { Bot, Mic, Brain, Cloud, Shield, Cpu, Calendar, GraduationCap, Award } from 'lucide-react';
import { allCertifications } from '../data/certifications';
import SecondarySiteNav from './SecondarySiteNav';

const CertificationsPage = () => {
  const getCertificationIcon = (title: string, issuer: string) => {
    const lowerTitle = title.toLowerCase();
    const lowerIssuer = issuer.toLowerCase();

    if (lowerTitle.includes('multimodal') || lowerTitle.includes('rag')) {
      return <Bot size={17} className="text-amber-600" />;
    }
    if (lowerTitle.includes('voice')) {
      return <Mic size={17} className="text-amber-600" />;
    }
    if (lowerTitle.includes('agent')) {
      return <Cpu size={17} className="text-amber-600" />;
    }
    if (lowerTitle.includes('machine learning')) {
      return <Brain size={17} className="text-amber-600" />;
    }
    if (lowerIssuer.includes('google cloud') || lowerIssuer.includes('amazon')) {
      return <Cloud size={17} className="text-amber-600" />;
    }
    if (lowerTitle.includes('secure') || lowerTitle.includes('security')) {
      return <Shield size={17} className="text-amber-600" />;
    }
    return <Award size={17} className="text-amber-600" />;
  };

  return (
    <>
      <div className="min-h-screen bg-portfolio-gradient pt-4">
      <div className="max-w-[860px] mx-auto px-4 py-8">
        <SecondarySiteNav backTo="/#certifications" />
        <h1 className="text-4xl md:text-[44px] font-bold text-gray-900 leading-tight">
          Certifications & Achievements
        </h1>
        <div className="h-[3px] w-[360px] bg-amber-600 mt-2 mb-6 max-w-full" />

        <div className="space-y-4">
          {allCertifications.map((cert, index) => (
            <a
              key={index}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/95 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-200/80 hover:border-amber-200"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-md bg-amber-50 flex items-center justify-center flex-shrink-0 border border-amber-100 mt-0.5">
                  {getCertificationIcon(cert.title, cert.issuer)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-[19px] font-bold text-gray-900 leading-snug mb-2">
                    {cert.title}
                  </h3>
                  {cert.description && (
                    <p className="text-[15px] md:text-[15px] text-gray-700 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  )}
                  <div className="border-t border-gray-200 pt-3 flex items-center justify-between gap-3">
                    <span className="text-gray-500 text-sm inline-flex items-center">
                      <Calendar size={13} className="mr-1.5" />
                      {cert.date}
                    </span>
                    <span className="text-gray-500 text-sm inline-flex items-center text-right">
                      <GraduationCap size={13} className="mr-1.5" />
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty state */}
        {allCertifications.length === 0 && (
          <div className="text-center py-12">
            <Award size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No certifications found</h3>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default CertificationsPage; 