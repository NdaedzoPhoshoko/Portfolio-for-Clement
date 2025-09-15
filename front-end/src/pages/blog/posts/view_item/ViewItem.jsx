import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewItem.css';
import blogData from '../../data.json';

const ViewItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      const foundPost = blogData.blogPosts.find(p => p.id === id);
      setPost(foundPost);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleBackClick = () => {
    navigate('/blog');
  };

  if (loading) {
    return (
      <div className="view-item-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="view-item-container">
        <div className="not-found-container">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <button onClick={handleBackClick} className="back-btn">
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="view-item-container">
      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={handleBackClick} className="back-button">
          <span className="back-arrow">←</span>
          <span className="back-text">Back to Blog</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="view-item-hero">
        <div className="hero-image-container">
          <img 
            src={post.image} 
            alt={post.title}
            className="hero-image"
          />
        </div>
        
        <div className="hero-content">
          <div className="post-meta">
            <div className="author-info">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="author-avatar"
              />
              <div className="author-details">
                <span className="author-name">{post.author.name}</span>
                <span className="post-date">{post.publishDate}</span>
              </div>
            </div>
            <div className="read-time">{post.readTime}</div>
          </div>
          
          <h1 className="post-title">{post.title}</h1>
          <p className="post-description">{post.description}</p>
          
          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">#{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="view-item-content">
        <div className="content-wrapper">
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
