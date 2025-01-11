import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/index';
import { setUser, removeUser } from '@/redux/userSlice';


const Sidebar = () => {

  const user = useSelector((state: RootState) => state.user.user);
  const dispatch: AppDispatch = useDispatch();


  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-full px-4 w-full max-w-sm bg-gray-100 text-black transform transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } shadow-xl overflow-y-auto`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            className="text-black text-3xl focus:outline-none"
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
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
      {/* Overlay 
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
      */}
    </div>
  )
}

export default Sidebar