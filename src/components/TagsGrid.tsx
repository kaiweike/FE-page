function TagsGrid({ tags }) {
  return (
    <>
      <div className="tags-frame grid grid-cols-2 gap-[24px] sm:grid-cols-3 md:grid-cols-4 md:gap-y-[36px] lg:grid-cols-5">
        {tags.map((tag, index) => (
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
