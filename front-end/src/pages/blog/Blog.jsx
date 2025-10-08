import React from 'react';
import './Blog.css';
import ItemGrid from './posts/ItemGrid';

const Blog = () => {
  return (
    <div className="blog-container">
      {/* Top Section - Hero */}
      <div className="post-container">
        {/* Left Section - Image with Overlay */}
        <div className="left-section">
          <div className="image-container">
            <img 
              src="../../../src/assets/blogs/mainteachingstudents.jpeg" 
              alt="Recent insights" 
              className="main-image"
            />
            <div className="image-overlay">
              <div className="author-text">
                <h3>Clement Phoshoko</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="right-section">
          <div className="text-content">
            <h1 className="main-title">
              Recent <span className="highlight-word">Insights</span>
            </h1>
            <p className="description">
              Discover the latest trends, tips, and insights from my development journey. 
              Stay updated with cutting-edge technologies and best practices.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid Section */}
      <div className="blog-posts-section">
        <ItemGrid />
      </div>
    </div>
  );
};

export default Blog;