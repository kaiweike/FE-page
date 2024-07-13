function TagsGrid({ tags }) {
  function SkeletonLoader() {
    return (
      <>
        <div className="tags-card relative animate-pulse">
          <div className="tags-image absolute rounded-lg"></div>

          <div className="tags-name absolute truncate">
            <div className="mx-2 h-2 w-20 rounded bg-slate-500" />
          </div>
          <div className="tags-count absolute">
            <div className="mx-2 h-2 w-10 rounded bg-slate-500" />
          </div>
        </div>
        <div className="tags-card relative animate-pulse">
          <div className="tags-image absolute rounded-lg"></div>

          <div className="tags-name absolute truncate">
            <div className="mx-2 h-2 w-20 rounded bg-slate-600" />
          </div>
          <div className="tags-count absolute">
            <div className="mx-2 h-2 w-10 rounded bg-slate-600" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="tags-frame grid grid-cols-2 gap-[24px] sm:grid-cols-3 md:grid-cols-4 md:gap-y-[36px] lg:grid-cols-5">
        {!tags.length && <SkeletonLoader />}

        {tags.length > 0 &&
          tags.map((tag, index) => (
            <div className="tags-card relative" key={index}>
              <div className="tags-image absolute rounded-lg"></div>
              <div className="tags-tag absolute truncate">{tag.name}</div>
              <div className="tags-name absolute truncate">{tag.name}</div>
              <div className="tags-count absolute">{tag.count} Questions</div>
            </div>
          ))}
      </div>
    </>
  );
}

export default TagsGrid;
