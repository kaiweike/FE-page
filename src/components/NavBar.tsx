import '../styles/NavBar.css';

function NavBar() {
  return (
    <>
      <div className="nav-bar fixed bottom-0 left-0 right-0 z-10 flex items-center justify-center md:relative md:block">
        <div className="logo-style fixed left-0 right-0 top-0 z-10 flex items-center md:relative md:justify-center">
          LOGO
        </div>

        <div>
          <img src="src/assets/home.svg" alt="home" className="nav-home-svg" />
          <div className="nav-home hidden md:block">Home</div>
        </div>

        <div>
          <img src="src/assets/tags.svg" alt="tags" className="nav-tags-svg" />
          <div className="nav-status-dot hidden md:block"></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
