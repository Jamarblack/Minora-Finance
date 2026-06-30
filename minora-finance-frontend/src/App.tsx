import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
// import ServicePage from './pages/ServicePage';
// import CartPage from './pages/CartPage';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
        {/* Global Navbar */}
        <Navbar />

        {/* Page Routing */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/service" element={<ServicePage />} /> */}
            {/* <Route path="/cart" element={<CartPage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;