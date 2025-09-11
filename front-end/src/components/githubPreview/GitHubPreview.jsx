import React, { useState, useEffect } from 'react';
import './GitHubPreview.css';

const GitHubPreview = ({ repositoryUrl }) => {
  const [repoData, setRepoData] = useState(null);
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!repositoryUrl) return;

    const fetchRepositoryData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Extract owner and repo from URL
        const urlParts = repositoryUrl.replace('https://github.com/', '').split('/');
        const owner = urlParts[0];
        const repo = urlParts[1];

        if (!owner || !repo) {
          throw new Error('Invalid GitHub repository URL');
        }

        // Fetch repository data
        const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!repoResponse.ok) {
          throw new Error('Repository not found or private');
        }
        const repoData = await repoResponse.json();

        // Fetch languages data
        const languagesResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
        const languagesData = await languagesResponse.json();

        setRepoData(repoData);
        setLanguages(languagesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositoryData();
  }, [repositoryUrl]);

  if (loading) {
    return (
      <div className="github-preview-container">
        <div className="github-preview-loading">
          <div className="loading-spinner"></div>
          <p>Loading repository...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-preview-container">
        <div className="github-preview-error">
          <div className="error-icon">⚠️</div>
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!repoData) {
    return null;
  }

  // Calculate total bytes for language percentages
  const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
  const topLanguages = Object.entries(languages)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .map(([lang, bytes]) => ({
      name: lang,
      percentage: Math.round((bytes / totalBytes) * 100)
    }));

  return (
    <div className="github-preview-container">
      <div className="github-preview-content">
        <div className="github-preview-main">
          <div className="github-preview-header">
            <h1 className="github-repo-name">
              <span className="repo-owner">{repoData.owner.login}/</span>
              <span className="repo-name">{repoData.name}</span>
            </h1>
            {repoData.description && (
              <p className="github-repo-description">{repoData.description}</p>
            )}
          </div>

          <div className="github-preview-stats">
            <div className="stat-item">
              <svg className="stat-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M5.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.5 2.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM11 1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM5.5 8.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.5 2.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM11 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>
              </svg>
              <span className="stat-number">{repoData.contributors_url ? 'Multiple' : '1'}</span>
              <span className="stat-label">Contributors</span>
            </div>

            <div className="stat-item">
              <svg className="stat-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.878.392a1.75 1.75 0 0 0-1.756 0l-5.25 3.045A1.75 1.75 0 0 0 1 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 0 0 1.756 0l5.25-3.045c.54-.314.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392ZM7.875 1.69a.25.25 0 0 1 .25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677Zm6.25 8.271l4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432v5.516Z"/>
              </svg>
              <span className="stat-number">{repoData.stargazers_count}</span>
              <span className="stat-label">Stars</span>
            </div>

            <div className="stat-item">
              <svg className="stat-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"/>
              </svg>
              <span className="stat-number">{repoData.forks_count}</span>
              <span className="stat-label">Forks</span>
            </div>
          </div>

          {topLanguages.length > 0 && (
            <div className="github-languages">
              <h3 className="languages-title">Languages</h3>
              <div className="languages-list">
                {topLanguages.map((lang, index) => (
                  <div key={lang.name} className="language-item">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-percentage">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="github-preview-avatar">
          <img 
            src={repoData.owner.avatar_url} 
            alt={`${repoData.owner.login} avatar`}
            className="owner-avatar"
          />
        </div>
      </div>

      <div className="github-preview-footer">
        <div className="github-logo">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GitHubPreview;
