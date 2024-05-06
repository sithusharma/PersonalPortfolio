// src/Blog.js

import React from "react";
import "../styles/Blog.css";
import TikTokImage from "../assets/tiktok.jpg";

const Blog = () => {
  // Medium post information
  const url = "https://medium.com/@sithusharma/tiktok-the-social-media-giant-changing-how-we-see-videos-eb280db8ef22";
  const title = "TikTok: The Social Media Giant Changing How We See Videos";
  const description = "This is my Medium post where I analyze and discuss the rapid growth of TikTok and how its able to gain an edge amongst their competitors.";
  const imageUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnbc.com%2F2023%2F09%2F19%2Ftiktok-is-launching-new-tool-that-will-help-creators-label-ai-content-on-the-app.html&psig=AOvVaw1olhmlBMa1_nfXhIlyxzrB&ust=1715115982021000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPj-mor3-YUDFQAAAAAdAAAAABAE";
  const author = "Kshitij Sharma";
  const date = "May 6, 2024";

  return (
    <div className="blog-card">
      {imageUrl && <img src={TikTokImage} alt={title} className="blog-image" />}
      <div className="blog-content">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-description">{description}</p>
        <p className="blog-author">
          By {author} | {date}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="blog-link">
          Read more on Medium
        </a>
      </div>
    </div>
  );
};

export default Blog;
