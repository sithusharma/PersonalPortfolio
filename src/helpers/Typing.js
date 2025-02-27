import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Typing.css'; // Import the CSS file

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        1000,               // 1-second delay before typing starts
        'Kshitij Sharma',   // Text to type
      ]}
      wrapper="span"
      cursor={true}
      speed={6}            // Slower typing speed
      repeat={0}           // Type only once
      className="typing-text" // Apply the CSS class for responsiveness
    />
  );
};

export default Typing;
