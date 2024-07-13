import '../styles/SearchInput.css';

const KeywordInput = ({ keyword, setKeyword, onEnterPress }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onEnterPress();
    }
  };

  return (
    <>
      <div className="search-label">Search</div>
      <input
        id="keyword"
        name="keyword"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Keyword"
        className="keyword-input"
      />
    </>
  );
};

export default KeywordInput;
