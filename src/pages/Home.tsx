import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar.tsx';
import SearchPage from '../components/SearchPage.tsx';
import Result from './Result.tsx';
import Profile from '../components/Profile.tsx';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [onDesktop, setOnDesktop] = useState<boolean>(
    window.innerWidth >= 1440
  );
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (onDesktop) {
      setShowProfile(true);
    } else if (!onDesktop && event.clientX > window.innerWidth - 50) {
      setShowProfile(true);
    } else if (!onDesktop && event.clientX <= window.innerWidth - 375) {
      setShowProfile(false);
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0];
    if (onDesktop) {
      setShowProfile(true);
    } else if (!onDesktop && touch.clientX > window.innerWidth - 5) {
      setShowProfile(true);
    } else if (showProfile) {
      touchStartXRef.current = touch.clientX;
      touchStartYRef.current = touch.clientY;
    }
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!onDesktop && showProfile) {
      const touch = event.touches[0];
      const touchStartX = touchStartXRef.current;
      const touchStartY = touchStartYRef.current;

      if (touchStartX && touchStartY) {
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;

        // Only hide profile on significant horizontal swipe, not vertical scroll
        if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 50) {
          setShowProfile(false);
          touchStartXRef.current = null;
          touchStartYRef.current = null;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [onDesktop, showProfile]);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1440;
      setOnDesktop(isDesktop);
      if (!isDesktop) {
        setShowProfile(false); // Ensure profile is hidden when switching to mobile
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  async function handleSearch(
    keyword: string,
    pageSize: number
  ): Promise<void> {
    navigate(
      `/result?&pageSize=${pageSize}&keyword=${encodeURIComponent(keyword)}`
    );
  }

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

        <div
          className={`fixed right-0 top-0 z-20 h-screen w-[375px] bg-[#1B1B1B] transition-transform duration-300 ${
            showProfile || onDesktop ? 'translate-x-0' : 'translate-x-full'
          }`}
          onMouseEnter={handleMouseMove}
          onMouseLeave={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Home;
