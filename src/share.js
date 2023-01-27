import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./App.css"

function Share() {
    const [gif, setGif] = useState('');
    const [message, setMessage] = useState('');
    const { history } = useLocation();
  const handleCopyGif1 = () => {
    setGif('gif1');
    navigator.clipboard.writeText('https://sendspark.com/share/haecaq9kpd5wa9n7')
    
      .then(() => {
        history.push('/share/1');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleCopyGif2 = () => {
    setGif('gif2');
    navigator.clipboard.writeText('https://sendspark.com/share/nw6o8q2iq9pog0b8')
      .then(() => {
        history.push('/share/2');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };
  const handleCopyGif3 = () => {
    setGif('gif2');
    navigator.clipboard.writeText('https://sendspark.com/share/1fhuww8h7h7bnw9a')
      .then(() => {
        history.push('/share/3');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div  >
      <button className="gif-button"  onClick={handleCopyGif1}>Copy Linked Gif 1</button>
      <button className="gif-button" onClick={handleCopyGif2}>Copy Linked Gif 2</button>
      <button className="gif-button" onClick={handleCopyGif3}>Copy Linked Gif 3</button>
    <br/>
    <form>
        <textarea placeholder="Check URL"></textarea>
      </form>
    
    </div>
    
  );
}

export default Share;
