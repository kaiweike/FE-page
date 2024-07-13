import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.tsx';
import TagsGrid from '../components/TagsGrid.tsx';
import '../styles/Tags.css';
import Refresh from '@mui/icons-material/Refresh';

function Tags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTags() {
      setLoading(true);
      try {
        const response = await fetch(
          'https://avl-frontend-exam.herokuapp.com/api/tags'
        );
        const newTags = await response.json();
        setTags((prevTags) => [...prevTags, ...newTags]);
      } catch (error) {
        console.error('Error fetching tags:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTags();

    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading
      )
        return;
      fetchTags();
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
