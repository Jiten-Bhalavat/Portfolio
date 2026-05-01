import { useState } from 'react';
import { allMediumArticles, blogMetaLine } from '../data/medium';
import SecondarySiteNav from './SecondarySiteNav';

const FILTERS = [
  { key: 'all',          label: 'All Topics'  },
  { key: 'Agents',       label: 'Agents'      },
  { key: 'RAG',          label: 'RAG'         },
  { key: 'LLMs',         label: 'LLMs'        },
  { key: 'Productivity', label: 'Productivity' },
  { key: 'Cloud',        label: 'Cloud'       },
];

const MediumPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? allMediumArticles
      : allMediumArticles.filter(a => a.topics?.includes(activeFilter));

  return (
    <div className="min-h-screen bg-portfolio-gradient pt-4">
      <div className="max-w-[860px] mx-auto px-6">
        <SecondarySiteNav backTo="/#blogs" />
      </div>

      <div className="max-w-[860px] mx-auto px-6 pb-16">
        <div className="medium-page-content-layer">

          <div className="medium-page-header">
            <h1>Writing &amp; Articles</h1>
            <p>Practical guides on AI agents, RAG, voice AI, and building with LLMs</p>
          </div>

          <div className="medium-page-stats">
            <div className="medium-page-stat-item">
              <span className="medium-page-stat-number">{allMediumArticles.length}</span>
              <span className="medium-page-stat-label">Total Articles</span>
            </div>
            <div className="medium-page-stat-item">
              <span className="medium-page-stat-number">{filtered.length}</span>
              <span className="medium-page-stat-label">Showing</span>
            </div>
          </div>

          <div className="medium-page-filters">
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`medium-page-filter-btn${activeFilter === f.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="medium-page-list">
            {filtered.map((article, index) => (
              <div key={index} className="medium-page-item">
                <h2 className="medium-page-item-title">
                  {article.url !== '#' ? (
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  ) : (
                    article.title
                  )}
                </h2>
                <div className="medium-page-item-meta">{blogMetaLine(article)}</div>
                <p className="medium-page-item-excerpt">{article.excerpt}</p>
                {article.displayTags && article.displayTags.length > 0 && (
                  <div className="medium-page-item-tags">
                    {article.displayTags.map((tag, ti) => (
                      <span key={ti} className="medium-page-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MediumPage;
