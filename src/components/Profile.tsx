import '../styles/Profile.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import Followers from './Followers';
import Following from './Following';
import Refresh from '@mui/icons-material/Refresh';

function Profile() {
  const [activeButton, setActiveButton] = useState('followers');
  const [followersData, setFollowersData] = useState([]);
  const [followingData, setFollowingData] = useState([]);
  const [loading, setLoading] = useState(false);

  const followersScrollRef = useRef(null); // ref for the followers scroll container
  const followingScrollRef = useRef(null); // ref for the following scroll container

  // fetch data function
  const fetchData = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    try {
      const baseUrl = `${import.meta.env.VITE_API_ENDPOINT}/users/`;
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
      console.error('Error fetching followers/following:', error);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  // fetch initial data
  useEffect(() => {
    const resetScroll = () => {
      if (activeButton === 'followers') {
        if (followersScrollRef.current) {
          followersScrollRef.current.scrollTop = 0;
        }
      } else {
        if (followingScrollRef.current) {
          followingScrollRef.current.scrollTop = 0;
        }
      }
    };

    const getData = async () => {
      setLoading(true);
      resetScroll();

      try {
        const baseUrl = `${import.meta.env.VITE_API_ENDPOINT}/users/`;
        const userType = activeButton === 'followers' ? 'all' : 'friends';
        const pageSize = activeButton === 'followers' ? 100 : 43;
        const url = `${baseUrl}${userType}?page=1&pageSize=${pageSize}`;

        const response = await fetch(url);
        const newData = await response.json();

        if (activeButton === 'followers') {
          setFollowersData([]);
          setFollowersData(newData.data);
        } else {
          setFollowingData([]);
          setFollowingData(newData.data);
        }
      } catch (error) {
        console.error('Error fetching followers/following:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [activeButton]);

  // handle the scroll event and call the fetchData function when the user reaches the end of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer =
        activeButton === 'followers'
          ? followersScrollRef.current
          : followingScrollRef.current;
      if (scrollContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
          fetchData();
        }
      }
    };

    const scrollContainer =
      activeButton === 'followers'
        ? followersScrollRef.current
        : followingScrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [fetchData]);

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
        ref={
          activeButton === 'followers' ? followersScrollRef : followingScrollRef
        }
        className="hide-scrollbar h-[92%] overflow-y-scroll overscroll-y-none pt-6"
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
