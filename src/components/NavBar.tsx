import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="nav-bar fixed bottom-0 left-0 right-0 z-10 flex items-center justify-center md:relative md:block">
        <div className="logo-style fixed left-0 right-0 top-0 z-10 flex items-center md:relative md:justify-center">
          LOGO
        </div>

        <Link to="/" className="home-link">
          <img src="/icons/home.svg" alt="home" className="nav-home-svg" />
          <div className="nav-home hidden md:block">Home</div>
        </Link>

        <Link to="/tags" className="tags-link">
          <div>
            <img src="/icons/tags.svg" alt="tags" className="nav-tags-svg" />
            {currentPath !== '/tags' && (
              <div className="nav-status-dot hidden md:block"></div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
