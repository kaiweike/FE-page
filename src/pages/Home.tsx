import NavBar from '../components/NavBar.tsx';

function Home() {
  return (
    <>
      <div className="flex justify-between">
        <NavBar />
        <div>
          <div className="">2</div>
          <div className="">3</div>
          <div className="">4</div>
        </div>
        <div className="w-375 h-screen">5</div>
      </div>
    </>
  );
}

export default Home;
