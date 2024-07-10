import NavBar from '../components/NavBar.tsx';
import SliderBar from '../components/SliderBar.tsx';

function Home() {
  return (
    <>
      <div className="flex justify-between">
        <NavBar />
        <div className="flex flex-1 justify-center">
          <div>
            <div>2</div>
            <SliderBar />
            <div>4</div>
          </div>
        </div>
        <div className="w-375 hidden h-screen 2xl:block">5</div>
      </div>
    </>
  );
}

export default Home;
