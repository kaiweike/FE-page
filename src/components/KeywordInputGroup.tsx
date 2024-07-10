import { useState } from 'react';
import KeywordInput from './KeywordInput.tsx';

const KeywordInputGroup = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <KeywordInput keyword={keyword} setKeyword={setKeyword} />
    </div>
  );
};

export default KeywordInputGroup;
