import { useState } from 'react';
import SearchInput from '../components/SearchInput.tsx';
import SliderGroup from '../components/SliderGroup.tsx';
import '../styles/SearchPage.css';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <SearchInput keyword={keyword} setKeyword={setKeyword} />
      <hr className="placeholder1" />
      <div className="placeholder2" />
      <SliderGroup />
      <hr className="placeholder3" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchPage;
