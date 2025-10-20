import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
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
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
          <Navbar />

          <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
            {/* Main content area that fills available space */}
            <main className="flex-1 flex flex-col justify-start container mx-auto px-4 py-6 sm:px-6 lg:px-8 w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </Suspense>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
