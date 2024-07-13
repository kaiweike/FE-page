import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Result.css';
import ResultGrid from '../components/ResultGrid';

function Result() {
  const [data, setData] = useState(null);
  const query = new URLSearchParams(useLocation().search); // get URL's query string

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
          <ResultGrid initialImages={data} />
        </div>
        <div className="result-spaceholder hidden 2xl:block" />
      </div>
    </>
  );
}

export default Result;
