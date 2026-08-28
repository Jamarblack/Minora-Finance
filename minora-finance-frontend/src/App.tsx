import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ServicePage from './pages/ServicePage';
import CartPage from './pages/CartPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import AssessPage from './pages/AssessPage';
import ResourcesPage from './pages/ResourcesPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminPostEditor from './pages/AdminPostEditor';
import SinglePostPage from './pages/SinglePostPage';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#f9f8f4]">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/assess" element={<AssessPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/posts/new" element={<AdminPostEditor />} />
                <Route path="/resources/:slug" element={<SinglePostPage />} />
                <Route path="/admin" element={<AdminLogin />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
      <Analytics />
    </>
  );
}

export default App;