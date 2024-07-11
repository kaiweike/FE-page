import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Result.css';

function Result() {
  const [data, setData] = useState(null);
  const query = new URLSearchParams(useLocation().search); // get URL query string

  useEffect(() => {
    const fetchData = async () => {
      const pageSize = query.get('pageSize');
      const keyword = query.get('keyword');
      const response = await fetch(
        `https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=${pageSize}&keyword=${keyword}`
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="2xl:flex">
        <div className="result-navbar flex">
          <Link to="/">
            <img
              src="src/assets/arrow.svg"
              alt="Back Home"
              className="result-back-arrow"
            />
          </Link>
          <div className="result-homepage 2xl:hidden">Home Page</div>
        </div>
        <div>
          <div className="result-results">Results</div>
          <div className="max-h-[700px] overflow-y-scroll">
            <div className="result-image-frame grid-col-1 grid gap-y-[20px] pb-[8px] pt-[20px] sm:grid-cols-3 sm:gap-x-[34px] sm:gap-y-[31px]">
              {data.data.map((image, index) => (
                <div key={image.id}>
                  <img
                    src={`src/assets/result${(index % 3) + 1}.png`}
                    alt="result"
                    className="result-image"
                  />
                  <div className="result-title">This is a title</div>
                  <div className="result-username">by {image.username}</div>
                </div>
              ))}
            </div>
            <button className="result-more">MORE</button>
          </div>
        </div>
        <div className="result-spaceholder hidden 2xl:block" />
      </div>
    </>
  );
}

export default Result;
