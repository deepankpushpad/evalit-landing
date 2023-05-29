import React, { useState, useRef } from 'react';

const ScrollAwareDiv = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const myRef = useRef(null);

  const handleScroll = () => {
    const scrollTopValue = myRef.current.scrollLeft;
    setScrollTop(scrollTopValue);
  };

  return (
    <div
      ref={myRef}
      onScroll={handleScroll}
      style={{
        border: '1px solid black',
        width: '100%',
        height: '100px',
        overflow: 'scroll',
      }}
    >
      <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
      <p>ScrollTop is {scrollTop}</p>
      <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
      <p>ScrollTop is {scrollTop}</p>
      <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
      <p>ScrollTop is {scrollTop}</p>
      <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
      <p>ScrollTop is {scrollTop}</p>
      <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
      <p>ScrollTop is {scrollTop}</p>
      <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
      <p>ScrollTop is {scrollTop}</p>
    </div>
  );
};

export default ScrollAwareDiv;
