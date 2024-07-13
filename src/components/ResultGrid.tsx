import { useState, useEffect } from 'react';
import Refresh from '@mui/icons-material/Refresh';

function ResultGrid({ initialImages }) {
  if (!initialImages) {
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

  const [images, setImages] = useState(initialImages.data);
  const [totalPages, setTotalPages] = useState(initialImages.totalPages);
  const [page, setPage] = useState(initialImages.page);
  const pageSize = initialImages.pageSize;
  const [loading, setLoading] = useState(false);
  const keyword = new URLSearchParams(window.location.search).get('keyword');

  const fetchMoreImages = async () => {
    if (page + 1 > totalPages) {
      return;
    }

    const nextPage = page + 1;

    const url = `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${nextPage}&pageSize=${pageSize}&keyword=${keyword}`;

    setLoading(true);
    try {
      const response = await fetch(url);
      const newImages = await response.json();
      setImages((prevImages) => [...prevImages, ...newImages.data]);
      setPage(nextPage);
      setTotalPages(newImages.totalPages);
    } catch (error) {
      console.error('Failed to fetch new images:', error);
    } finally {
      setLoading(false);
    }
  };

  function LoadingAnimation() {
    return (
      <>
        <Refresh className="align mr-2 animate-spin" />
        <span>Loading...</span>
      </>
    );
  }

  return (
    <>
      <div className="result-image-frame grid-col-1 grid gap-y-[20px] pb-[20px] sm:grid-cols-3 sm:gap-x-[34px] sm:gap-y-[31px]">
        {images.map((image, index) => (
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
      {page < totalPages ? (
        <button
          className="result-more mb-40"
          onClick={fetchMoreImages}
          disabled={loading}
        >
          {loading ? <LoadingAnimation /> : 'MORE'}
        </button>
      ) : (
        <button className="result-more mb-40" disabled>
          No more images
        </button>
      )}
    </>
  );
}

export default ResultGrid;
