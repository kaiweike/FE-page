import { useState } from 'react';
import SearchInput from './SearchInput.tsx';
import SliderGroup from './SliderGroup.tsx';
import '../styles/SearchPage.css';

interface SearchPageProps {
  onSearch: (keyword: string, pageSize: number) => Promise<void>;
}

function SearchPage({ onSearch }: SearchPageProps) {
  const [keyword, setKeyword] = useState<string>('');
  const [pageSize, setPageSize] = useState<number>(15);

  function handleSearchClick(): void {
    onSearch(keyword, pageSize);
  }

  return (
    <div>
      <SearchInput
        keyword={keyword}
        setKeyword={setKeyword}
        onEnterPress={handleSearchClick}
      />
      <hr className="placeholder1" />
      <div className="placeholder2" />
      <SliderGroup pageSize={pageSize} setPageSize={setPageSize} />
      <hr className="placeholder3" />
      <button className="search-button" onClick={handleSearchClick}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchPage;
