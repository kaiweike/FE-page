import '../styles/Profile.css';
import { useState, useEffect } from 'react';
import Followers from './Followers';
import Following from './Following';

function Profile() {
  const [activeButton, setActiveButton] = useState('followers');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const response = await fetch(
        'https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=100'
      );
      const data = await response.json();
      setData(data);
    };

    const fetchFollowing = async () => {
      const response = await fetch(
        'https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=43'
      );
      const data = await response.json();
      setData(data);
    };

    if (activeButton === 'followers') {
      fetchFollowers();
    } else if (activeButton === 'following') {
      fetchFollowing();
    }
  }, [activeButton]);

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
      <div className="h-92 overflow-y-scroll overscroll-y-contain pt-6">
        {activeButton === 'followers' && <Followers followers={data.data} />}
        {activeButton === 'following' && <Following followers={data.data} />}
      </div>
    </>
  );
}

export default Profile;
