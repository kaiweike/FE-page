import NavBar from '../components/NavBar.tsx';
import SearchPage from './SearchPage.tsx';

function Home() {
  return (
    <>
      <div className="flex justify-between">
        <NavBar />
        <div className="flex flex-1 justify-center">
          <div>
            <SearchPage />
          </div>
        </div>
        <div className="w-375 hidden h-screen 2xl:block">5</div>
      </div>
    </>
  );
}

export default Home;
