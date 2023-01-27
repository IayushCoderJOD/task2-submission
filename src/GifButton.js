import React, { useState } from 'react';

function GifButtons() {
  const link = 'https://sendspark.com/share/haecaq9kpd5wa9n7';
  const [gif1, setGif1] = useState({url: 'https://example.com/gif1.gif', link: '/share/1'});
  const [gif2, setGif2] = useState({url: 'https://example.com/gif2.gif', link: '/share/2'});

  const handleClick = (gif) => {
    navigator.clipboard.writeText(`https://sendspark.com/share/haecaq9kpd5wa9n7`);
  }

  return (
    <div>
      <button onClick={() => handleClick(gif1)}>Copy Linked Gif 1</button>
      <button onClick={() => handleClick(gif2)}>Copy Linked Gif 2</button>
    </div>
  );
}

export default GifButtons;
