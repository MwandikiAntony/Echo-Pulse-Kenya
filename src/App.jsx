import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* Make the full viewport a flex container */}
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
          <Navbar />

          {/* Ensure this fills available space */}
          <main className="flex-1 flex justify-center items-start p-4">
            <div className="w-full max-w-6xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
