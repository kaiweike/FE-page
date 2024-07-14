import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.tsx';
import TagsGrid from '../components/TagsGrid.tsx';
import '../styles/Tags.css';
import Refresh from '@mui/icons-material/Refresh';

function Tags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch data function
  const fetchData = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/tags`);
      const newTags = await response.json();
      setTags((prevTags) => [...prevTags, ...newTags]);
    } catch (error) {
      console.error('Error fetching tags:', error);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  // fetch initial data
  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_ENDPOINT}/tags`
        );
        const newTags = await response.json();
        setTags(newTags);
      } catch (error) {
        console.error('Error fetching tags:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // handle the scroll event and call the fetchData function when the user reaches the end of the page
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchData]);

  function LoadingAnimation() {
    return <Refresh className="animate-spin" />;
  }

  return (
    <>
      <div className="flex">
        <div className="fixed hidden md:block">
          <NavBar />
        </div>
        <div className="mb-40 flex flex-1 justify-center md:ml-[80px]">
          <div className="">
            <div className="flex h-[70px] w-[375px] md:hidden">
              <Link to="/">
                <img
                  src="src/assets/arrow.svg"
                  alt="Back Home"
                  className="tags-back-arrow"
                />
              </Link>
              <div className="tags-homepage">Home Page</div>
            </div>
            <div className="tags-title">Tags</div>
            <TagsGrid tags={tags} />
            <div className="m-4 text-center">
              {loading && <LoadingAnimation />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tags;
