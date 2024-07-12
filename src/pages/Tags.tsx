import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.tsx';
import TagsGrid from '../components/TagsGrid.tsx';
import '../styles/Tags.css';

function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch('https://avl-frontend-exam.herokuapp.com/api/tags')
      .then((response) => response.json())
      .then((data) => setTags(data))
      .catch((error) => console.error('Error fetching tags:', error));
  }, []);

  if (tags.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="hidden md:block">
          <NavBar />
        </div>
        <div className="flex flex-1 justify-center">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Tags;
