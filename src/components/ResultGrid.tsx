function ResultGrid({ images }) {
  return (
    <>
      <div className="result-image-frame grid-col-1 grid gap-y-[20px] pb-[20px] sm:grid-cols-3 sm:gap-x-[34px] sm:gap-y-[31px]">
        {images.data.map((image, index) => (
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
    </>
  );
}

export default ResultGrid;
