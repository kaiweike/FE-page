import '../styles/Follow.css';
import { useState } from 'react';
import Followers from './Followers';
import Following from './Following';

function Follow() {
  const [activeButton, setActiveButton] = useState('followers');

  return (
    <>
      <div className="follow-switch flex">
        <button
          className={`followers-tab ${activeButton === 'followers' ? 'active' : ''}`}
          onClick={() => setActiveButton('followers')}
        >
          Followers
        </button>
        <button
          className={`following-tab ${activeButton === 'following' ? 'active' : ''}`}
          onClick={() => setActiveButton('following')}
        >
          Following
        </button>
      </div>

      {activeButton === 'followers' && <Followers />}
      {activeButton === 'following' && <Following />}
    </>
  );
}

export default Follow;
