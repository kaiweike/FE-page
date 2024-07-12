function TagsGrid() {
  return (
    <>
      <div className="tags-frame grid grid-cols-2 gap-[24px] sm:grid-cols-3 md:grid-cols-4 md:gap-y-[36px] lg:grid-cols-5">
        <div className="tags-card border">
          <div className="tags-image border">
            <div className="tags-tag border"></div>
          </div>
          <div className="tags-name border"></div>
          <div className="tags-count border"></div>
        </div>
      </div>
    </>
  );
}

export default TagsGrid;
