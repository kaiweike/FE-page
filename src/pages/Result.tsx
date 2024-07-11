import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Result() {
  const [data, setData] = useState(null);
  const query = new URLSearchParams(useLocation().search); // get URL query string

  useEffect(() => {
    const fetchData = async () => {
      const pageSize = query.get('pageSize');
      const keyword = query.get('keyword');
      const response = await fetch(
        `https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=${pageSize}&keyword=${keyword}`
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Result Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Result;
