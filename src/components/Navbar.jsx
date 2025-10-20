import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-green-600 dark:bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">EcoPulse Kenya</Link>
      <div className="flex items-center gap-4">
        <Link to="/about" className="hover:underline">About</Link>
        <button onClick={toggleTheme}>
          {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
