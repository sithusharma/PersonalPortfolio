import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        1000,               // 1-second delay before typing starts
        'Kshitij Sharma',   // Text to type
      ]}
      wrapper="span"
      cursor={true}
      speed={6}           // Slower typing speed (default is 40)
      repeat={0}           // Type only once
      style={{
        fontSize: '10em',
        fontWeight: '200',
        display: 'inline-block',
        color: '#ffffff',
      }}
    />
  );
};

export default Typing;
