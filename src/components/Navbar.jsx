import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center transition-colors duration-300">
      {/* Brand */}
      <Link 
        to="/" 
        className="font-bold text-xl text-gray-800 dark:text-white"
      >
        EcoPulse Kenya
      </Link>

      {/* Menu & Theme Toggle */}
      <div className="flex items-center gap-4">
        <Link 
          to="/about" 
          className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"
        >
          About
        </Link>

        <button 
          onClick={toggleTheme} 
          className="text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-yellow-400 transition"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
