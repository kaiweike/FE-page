import { useState } from 'react';
import SearchInput from '../components/SearchInput.tsx';
import SliderGroup from '../components/SliderGroup.tsx';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <SearchInput keyword={keyword} setKeyword={setKeyword} />
      <SliderGroup />
      <div>4</div>
    </div>
  );
};

export default SearchPage;
