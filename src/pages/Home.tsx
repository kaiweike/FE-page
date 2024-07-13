import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar.tsx';
import SearchPage from './SearchPage.tsx';
import Result from './Result.tsx';
import Profile from '../components/Profile.tsx';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = async (keyword, pageSize) => {
    navigate(`/result?&pageSize=${pageSize}&keyword=${keyword}`);
  };

  return (
    <>
      <div
        className={`md:grid ${
          location.pathname === '/'
            ? 'md:grid-cols-home-layout-md 2xl:grid-cols-home-layout-2xl'
            : 'md:grid-cols-result-layout-md 2xl:grid-cols-home-layout-2xl'
        }`}
      >
        <div>
          {location.pathname === '/' && <NavBar />}
          {location.pathname === '/result' && (
            <div className="fixed hidden 2xl:block">
              <NavBar />
            </div>
          )}
        </div>

        <div className="flex justify-center">
          {location.pathname === '/' && <SearchPage onSearch={handleSearch} />}
          {location.pathname === '/result' && <Result />}
        </div>

        <div className="fixed right-0 hidden h-screen w-[375px] bg-[#1B1B1B] 2xl:block">
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Home;
