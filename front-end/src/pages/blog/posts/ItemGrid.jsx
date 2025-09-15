import React, { useState, useEffect } from 'react';
import Item from './item/Item';
import './ItemGrid.css';
import blogData from '../data.json';

const ItemGrid = () => {
  const [allBlogPosts, setAllBlogPosts] = useState([]);

  useEffect(() => {
    // Transform the data to match the Item component props
    const transformedPosts = blogData.blogPosts.map(post => ({
      id: post.id,
      title: post.title,
      description: post.description,
      image: post.image,
      authorName: post.author.name,
      authorAvatar: post.author.avatar,
      date: post.publishDate
    }));
    
    setAllBlogPosts(transformedPosts);
  }, []);

  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisiblePosts(prev => Math.min(prev + 6, allBlogPosts.length));
      setIsLoading(false);
    }, 500);
  };

  const displayedPosts = allBlogPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < allBlogPosts.length;

  return (
    <div className="item-grid-container">
      <div className="item-grid">
        {displayedPosts.map((post) => (
          <Item
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            authorName={post.authorName}
            authorAvatar={post.authorAvatar}
            date={post.date}
          />
        ))}
      </div>
      
      {/* Load More Button */}
      <div className="load-more-container">
        {hasMorePosts ? (
          <button 
            className="load-more-btn"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            <span className="load-more-text">
              {isLoading ? 'Loading...' : 'Load More Posts'}
            </span>
            <span className={`load-more-chevron ${isLoading ? 'rotated' : ''}`}>
              ▼
            </span>
          </button>
        ) : (
          <div className="no-more-posts">
            <span className="no-more-text">No more posts</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemGrid;
