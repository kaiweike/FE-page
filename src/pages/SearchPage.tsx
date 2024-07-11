import { useState } from 'react';
import SearchInput from '../components/SearchInput.tsx';
import SliderGroup from '../components/SliderGroup.tsx';
import '../styles/SearchPage.css';

const SearchPage = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [pageSize, setPageSize] = useState(15);

  const handleSearchClick = () => {
    onSearch(keyword, pageSize);
  };

  return (
    <div>
      <SearchInput keyword={keyword} setKeyword={setKeyword} />
      <hr className="placeholder1" />
      <div className="placeholder2" />
      <SliderGroup pageSize={pageSize} setPageSize={setPageSize} />
      <hr className="placeholder3" />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchPage;
