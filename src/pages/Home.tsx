import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar.tsx';
import SearchPage from './SearchPage.tsx';
import Result from './Result.tsx';
import Profile from '../components/Profile.tsx';

function Home() {
  const [resultData, setResultData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = async (keyword, pageSize) => {
    navigate(`/result?&pageSize=${pageSize}&keyword=${keyword}`);
  };

  return (
    <>
      <div className="flex justify-between">
        <NavBar />
        <div className="flex flex-1 justify-center">
          <div>
            {location.pathname === '/' && (
              <SearchPage onSearch={handleSearch} />
            )}
            {location.pathname === '/result' && <Result />}
          </div>
        </div>
        <div className="w-375 bg-bg-second hidden h-screen 2xl:block">
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Home;
