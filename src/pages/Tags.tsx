import { useState, useEffect } from 'react';

function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch('https://avl-frontend-exam.herokuapp.com/api/tags')
      .then((response) => response.json())
      .then((data) => setTags(data))
      .catch((error) => console.error('Error fetching tags:', error));
  }, []);

  return (
    <div>
      <h1>Tags Page</h1>
      {tags.length === 0 ? (
        <p>Loading tags...</p>
      ) : (
        <pre>{JSON.stringify(tags, null, 2)}</pre>
      )}
    </div>
  );
}

export default Tags;
