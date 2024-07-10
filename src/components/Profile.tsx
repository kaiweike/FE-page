import '../styles/Profile.css';
import { useState } from 'react';
import Followers from './Followers';
import Following from './Following';

function Profile() {
  const [activeButton, setActiveButton] = useState('followers');

  return (
    <>
      <div className="profile-switch flex">
        <button
          className={`profile-followers ${activeButton === 'followers' ? 'active' : ''}`}
          onClick={() => setActiveButton('followers')}
        >
          Followers
        </button>
        <button
          className={`profile-following ${activeButton === 'following' ? 'active' : ''}`}
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

export default Profile;
