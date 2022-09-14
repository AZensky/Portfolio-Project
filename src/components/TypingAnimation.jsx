import React from 'react';
import Typed from 'react-typed';

export default function TypingAnimation({ content }) {
  return (
    <div>
      <Typed
        strings={['Software Engineer', 'Web Developer', 'Technical Writer']}
        typeSpeed={40}
        backDelay={1100}
        backSpeed={30}
        attr='placeholder'
        loop
      />
    </div>
  );
}
