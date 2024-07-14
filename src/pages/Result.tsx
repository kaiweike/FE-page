import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Result.css';
import ResultGrid from '../components/ResultGrid';
import { ResultData } from '../types';

function Result() {
  const [data, setData] = useState<ResultData | null>(null);
  const pageSize: string | null = new URLSearchParams(useLocation().search).get(
    'pageSize'
  );
  const keyword: string | null = new URLSearchParams(useLocation().search).get(
    'keyword'
  );

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response: Response = await fetch(
          `${import.meta.env.VITE_API_ENDPOINT}/users/all?page=1&pageSize=${pageSize}&keyword=${keyword}`
        );
        const result: ResultData = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch new images:', error);
      }
    }

    fetchData();
  }, [pageSize, keyword]);

  function SkeletonLoader() {
    return (
      <>
        <div className="result-image-frame grid-col-1 grid animate-pulse gap-y-[20px] pb-[20px] sm:grid-cols-3 sm:gap-x-[34px] sm:gap-y-[31px]">
          <div>
            <div className="result-image rounded-lg bg-slate-500" />
            <div className="result-title">
              <div className="h-2 w-32 rounded bg-slate-500" />
            </div>
            <div className="result-username">
              <div className="h-2 w-24 rounded bg-slate-500" />
            </div>
          </div>
          <div>
            <div className="result-image rounded-lg bg-slate-600" />
            <div className="result-title">
              <div className="h-2 w-32 rounded bg-slate-600" />
            </div>
            <div className="result-username">
              <div className="h-2 w-24 rounded bg-slate-600" />
            </div>
          </div>
        </div>
      </>
    );
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
          {!data ? <SkeletonLoader /> : <ResultGrid initialImages={data} />}
        </div>
        <div className="result-spaceholder hidden 2xl:block" />
      </div>
    </>
  );
}

export default Result;
