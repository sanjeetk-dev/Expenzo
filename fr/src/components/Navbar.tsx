import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/index';
const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isProfileMenuOpen &&
        !document.getElementById('profile-menu')?.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/about-us', label: 'About' },
    { path: '/contact-us', label: 'Contact' },
  ];

  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50 p-4 shadow-lg transition-all ${isScrolled
          ? 'backdrop-blur-md bg-gray-200/70 shadow-lg'
          : 'bg-gray-100'
          }`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-black">My Navbar</h1>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-black text-lg transition-colors ${location.pathname === link.path
                  ? 'font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-500'
                  : 'hover:text-blue-400'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            {!user ? (
              <Link
                to="/login"
                className="bg-blue-600 text-black py-2 px-4 rounded-md hover:bg-blue-500"
              >
                Login
              </Link>
            ) : (
              <div className="relative" id="profile-menu">
                <button
                  className="flex items-center text-black text-lg focus:outline-none"
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                >
                  <FaUserCircle className="text-2xl mr-2" />
                  Profile
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-black rounded-md shadow-lg">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                      onClick={() => {
                        dispatch(removeUser())
                        setIsProfileMenuOpen(false);
                        navigate('/login');
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            className="text-black text-3xl md:hidden focus:outline-none"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            aria-expanded={isSidebarOpen}
            aria-label="Toggle sidebar"
          >
            <FiMenu />
          </button>
        </div>
      </nav>
      
      <div
        className={`fixed top-0 left-0 h-full px-4 w-full max-w-sm bg-gray-100 text-black transform transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } shadow-xl overflow-y-auto`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            className="text-black text-3xl focus:outline-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>
        <ul className="mt-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block p-3 rounded-md text-lg transition-colors ${location.pathname === link.path
                  ? 'bg-gray-400 text-black'
                  : 'hover:bg-gray-600 hover:text-black'
                  }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {!user && (
            <li>
              <Link
                to="/login"
                className="block p-3 bg-blue-600 text-black rounded-md hover:bg-blue-500"
                onClick={() => setIsSidebarOpen(false)}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
      
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
