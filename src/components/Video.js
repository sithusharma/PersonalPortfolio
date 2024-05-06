// Video.js
import React from 'react';
import '../styles/Video.css';

function Video() {
  return (
    <div className="video-container">
      <iframe
        className="video-iframe"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/isdLel273rQ?si=vOgQfkdO9oCjgNlH"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <span className="video-description">
        My favorite YouTube channel explaining something mind-blowing.
      </span>
    </div>
  );
}

export default Video;
