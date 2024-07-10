import '../styles/SearchInput.css';

const KeywordInput = ({ keyword, setKeyword }) => (
  <>
    <div className="search-label">Search</div>
    <input
      type="text"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="Keyword"
      className="keyword-input"
    />
  </>
);

export default KeywordInput;
