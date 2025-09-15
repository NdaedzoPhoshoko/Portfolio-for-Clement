import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewItem.css';
import blogData from '../../data.json';

const ViewItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Minimal Markdown to HTML converter for headings, lists, bold/italic, inline code, links, and paragraphs
  const convertMarkdownToHtml = (markdown) => {
    if (!markdown) return '';

    const escapeHtml = (str) =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Process block elements line-by-line, handling lists as groups
    const lines = markdown.split(/\r?\n/);
    const htmlBlocks = [];
    let listBuffer = [];

    const flushList = () => {
      if (listBuffer.length > 0) {
        const items = listBuffer
          .map((item) => `<li>${item}</li>`) 
          .join('');
        htmlBlocks.push(`<ul>${items}</ul>`);
        listBuffer = [];
      }
    };

    const inlineTransforms = (text) => {
      // Inline code: `code`
      let t = text.replace(/`([^`]+)`/g, '<code>$1</code>');
      // Bold: **text**
      t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      // Italic: *text*
      t = t.replace(/(^|\s)\*([^*]+)\*(?=\s|$)/g, '$1<em>$2</em>');
      // Links: [text](url)
      t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
      return t;
    };

    for (let i = 0; i < lines.length; i++) {
      const rawLine = lines[i];
      const line = rawLine.trim();

      if (line.length === 0) {
        // blank line separates paragraphs/lists
        flushList();
        continue;
      }

      // Headings
      if (line.startsWith('### ')) {
        flushList();
        htmlBlocks.push(`<h3>${inlineTransforms(escapeHtml(line.slice(4)))}</h3>`);
        continue;
      }
      if (line.startsWith('## ')) {
        flushList();
        htmlBlocks.push(`<h2>${inlineTransforms(escapeHtml(line.slice(3)))}</h2>`);
        continue;
      }
      if (line.startsWith('# ')) {
        flushList();
        htmlBlocks.push(`<h1>${inlineTransforms(escapeHtml(line.slice(2)))}</h1>`);
        continue;
      }

      // Unordered list item: - item or * item
      if (/^[-*]\s+/.test(line)) {
        const itemText = line.replace(/^[-*]\s+/, '');
        listBuffer.push(inlineTransforms(escapeHtml(itemText)));
        continue;
      }

      // Paragraph
      flushList();
      htmlBlocks.push(`<p>${inlineTransforms(escapeHtml(line))}</p>`);
    }
    // Flush any remaining list
    flushList();

    return htmlBlocks.join('');
  };

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
          <div className="post-content" dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(post.content) }} />
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
