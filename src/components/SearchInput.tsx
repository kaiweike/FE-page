import '../styles/SearchInput.css';

interface KeywordInputProps {
  keyword: string;
  setKeyword: (value: string) => void;
  onEnterPress: () => void;
}

function KeywordInput({
  keyword,
  setKeyword,
  onEnterPress
}: KeywordInputProps) {
  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      onEnterPress();
    }
  }

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
}

export default KeywordInput;
