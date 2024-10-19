import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg p-4 flex flex-col lg:flex-row justify-between items-center overflow-x-hidden">
      <div className="font-bold text-[2em] lg:text-[2.5em] leading-tight tracking-tight font-FuturaMdBT text-[#4A4A4A]">
        Ri<span className="text-[#498600]">pp</span>le Nexus
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="text-black lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col lg:flex lg:flex-row items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-8 w-full lg:w-auto lg:justify-end mt-4 lg:mt-0 overflow-x-hidden`}
      >
        <Link
          to="/"
          className={`text-sm sm:text-[1em] font-normal text-black ${
            location.pathname === '/' ? 'border-b-2 border-black' : ''
          }`}
        >
          Home
        </Link>
        <Link
          to="/services"
          className={`text-sm sm:text-[1em] font-normal text-black ${
            location.pathname === '/services' ? 'border-b-2 border-black' : ''
          }`}
        >
          Services
        </Link>
        <Link
          to="/career"
          className={`text-sm sm:text-[1em] font-normal text-black ${
            location.pathname === '/career' ? 'border-b-2 border-black' : ''
          }`}
        >
          Career
        </Link>
        <Link
          to="/about"
          className={`text-sm sm:text-[1em] font-normal text-black ${
            location.pathname === '/about' ? 'border-b-2 border-black' : ''
          }`}
        >
          About Us
        </Link>
        <Link to="/">
          <button
            className={`py-2 px-4 rounded-lg mt-2 lg:mt-0 ${
              location.pathname === '/'
                ? 'border-2 border-black text-black'
                : 'text-black border-2 border-black'
            }`}
          >
            Request a Quote
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
