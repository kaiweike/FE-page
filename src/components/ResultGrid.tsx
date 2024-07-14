import { useState } from 'react';
import Refresh from '@mui/icons-material/Refresh';
import { ResultData } from '../types';
import { UserData } from '../UserData';

interface ResultGridProps {
  initialImages: ResultData;
}

function ResultGrid({ initialImages }: ResultGridProps) {
  const [images, setImages] = useState<UserData>(initialImages.data);
  const [totalPages, setTotalPages] = useState<number>(
    initialImages.totalPages
  );
  const [page, setPage] = useState<number>(initialImages.page);
  const pageSize: number = initialImages.pageSize;
  const [loading, setLoading] = useState<boolean>(false);
  const keyword: string | null = new URLSearchParams(
    window.location.search
  ).get('keyword');

  async function fetchMoreImages(): Promise<void> {
    if (page + 1 > totalPages) {
      return;
    }

    const nextPage: number = page + 1;

    const url: string = `${import.meta.env.VITE_API_ENDPOINT}/users/all?page=${nextPage}&pageSize=${pageSize}&keyword=${keyword}`;

    setLoading(true);
    try {
      const response: Response = await fetch(url);
      const newImages: ResultData = await response.json();
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
