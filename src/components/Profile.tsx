import '../styles/Profile.css';
import { useState, useEffect, useRef } from 'react';
import Followers from './Followers';
import Following from './Following';
import Refresh from '@mui/icons-material/Refresh';

function Profile() {
  const [activeButton, setActiveButton] = useState('followers');
  const [followersData, setFollowersData] = useState([]);
  const [followingData, setFollowingData] = useState([]);
  const [loadNewData, setLoadNewData] = useState(false);
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef(null); // ref for the scroll container

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);

      try {
        const baseUrl = 'https://avl-frontend-exam.herokuapp.com/api/users/';
        const userType = activeButton === 'followers' ? 'all' : 'friends';
        const pageSize = activeButton === 'followers' ? 100 : 43;
        const url = `${baseUrl}${userType}?page=1&pageSize=${pageSize}`;

        const response = await fetch(url);
        const newData = await response.json();

        if (activeButton === 'followers') {
          setFollowersData((prevData) => [...prevData, ...newData.data]);
        } else {
          setFollowingData((prevData) => [...prevData, ...newData.data]);
        }
      } catch (error) {
        console.error('Error fetching tags:', error);
      } finally {
        setLoading(false);
        setLoadNewData(false);
      }
    }

    fetchUsers();
  }, [activeButton, loadNewData]);

  // Scroll event handler
  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setLoadNewData(true);
    }
  }

  function LoadingAnimation() {
    return <Refresh className="animate-spin" />;
  }

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
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="hide-scrollbar h-[92%] overflow-y-scroll overscroll-y-contain pt-6"
      >
        {activeButton === 'followers' ? (
          <Followers followers={followersData} />
        ) : (
          <Following followers={followingData} />
        )}
        <div className="m-4 text-center">{loading && <LoadingAnimation />}</div>
      </div>
    </>
  );
}

export default Profile;
