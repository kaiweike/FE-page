import '../styles/Follow.css';
import { useState } from 'react';

function Follow() {
  const [activeButton, setActiveButton] = useState('followers');

  return (
    <>
      <div className="follow-switch flex">
        <button
          className={`followers-button ${activeButton === 'followers' ? 'active' : ''}`}
          onClick={() => setActiveButton('followers')}
        >
          Followers
        </button>
        <button
          className={`following-button ${activeButton === 'following' ? 'active' : ''}`}
          onClick={() => setActiveButton('following')}
        >
          Following
        </button>
      </div>
    </>
  );
}

export default Follow;
