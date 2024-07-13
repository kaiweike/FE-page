import { useState } from 'react';
import Refresh from '@mui/icons-material/Refresh';

function ResultGrid({ initialImages }) {
  const [images, setImages] = useState(initialImages.data);
  const [totalPages, setTotalPages] = useState(initialImages.totalPages);
  const [page, setPage] = useState(initialImages.page);
  const pageSize = initialImages.pageSize;
  const [loading, setLoading] = useState(false);
  const keyword = new URLSearchParams(window.location.search).get('keyword');

  async function fetchMoreImages() {
    if (page + 1 > totalPages) {
      return;
    }

    const nextPage = page + 1;

    const url = `${import.meta.env.VITE_API_ENDPOINT}/users/all?page=${nextPage}&pageSize=${pageSize}&keyword=${keyword}`;

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
  }

  function LoadingAnimation() {
    return (
      <>
        <Refresh className="mr-2 animate-spin" />
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
