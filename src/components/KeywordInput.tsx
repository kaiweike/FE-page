import '../styles/KeywordInput.css';

const KeywordInput = ({ keyword, setKeyword }) => (
  <input
    type="text"
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    placeholder="Keyword"
    className="keyword-input"
  />
);

export default KeywordInput;
