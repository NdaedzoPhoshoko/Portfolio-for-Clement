import React, { useEffect, useState } from 'react';
import './Post.css';

const Post = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    // Trigger title animation after component mounts
    const titleTimer = setTimeout(() => setTitleVisible(true), 500);

    return () => {
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <div className="post-container">
      {/* Main Content */}
      <div className="post-content">
        {/* Animated Title */}
        <div className="title-section">
          <h1 className={`post-title ${titleVisible ? 'animate' : ''}`}>
            <span className="title-word title-word-1">Blog</span>
            <span className="title-word title-word-2">Post</span>
          </h1>
          <p className={`post-subtitle ${titleVisible ? 'animate' : ''}`}>
            Welcome to my digital space where I share insights from my journey in technology. Here you'll find detailed explorations of the latest tech trends, practical tutorials from my development projects, and reflections on the ever-evolving world of software engineering. From cutting-edge frameworks to timeless programming principles, I'm excited to document my learning experiences and discoveries as I continue to grow in this dynamic field.
          </p>
        </div>

        {/* Main Layout */}
        <div className="post-layout">
          {/* Left Container - Content */}
          <div className="left-container">
            <div className="content-wrapper">
              <div className="placeholder-content">
                <div className="cosmic-placeholder">
                  <div className="orbit">
                    <div className="planet"></div>
                  </div>
                  <p>Blog content coming soon...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Container - Sidebar */}
          <div className="right-container">
            <div className="sidebar-wrapper">
              <div className="sidebar-content">
                <h3>Related Posts</h3>
                <p>More content will be added here...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
