import { useState } from 'react';
import SearchInput from '../components/SearchInput.tsx';
import SliderBar from '../components/SliderBar.tsx';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <SearchInput keyword={keyword} setKeyword={setKeyword} />
      <SliderBar />
      <div>4</div>
    </div>
  );
};

export default SearchPage;
