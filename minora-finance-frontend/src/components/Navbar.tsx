import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const  { cartCount } = useCart();

  return (
    <nav className="bg-gray-100/70 top-0 w-full flex fixed justify-between items-center px-6 md:px-12 py-6 md:py-8 z-50">
      <Link  to="/" className="z-50 flex ">
        <img src={logo} alt="Minora Finance Logo" className="h-8 md:h-10" />
        <span className="font-bold text-xl">Minora Finance</span>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 text-sm tracking-wide">
        <Link to="/" className="font-semibold border-b border-black pb-1">Home</Link>
        <Link to="/service" className="hover:text-gray-600 transition-colors uppercase">SERVICE</Link>
        <Link to="/cart" className="hover:text-gray-600 transition-colors uppercase">
          Cart {cartCount > 0 && `(${cartCount})`}
        </Link>
      </div>

      {/* Mobile Hamburger Toggle */}
      <button 
        className="md:hidden z-50 text-black" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

     {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-screen bg-[#f9f8f4] flex flex-col items-center justify-center space-y-8 md:hidden z-40">
          <Link to="/" onClick={() => setIsOpen(false)} className="font-semibold text-2xl uppercase tracking-widest">
            Home
          </Link>
          <Link to="/service" onClick={() => setIsOpen(false)} className="text-2xl uppercase tracking-widest hover:text-gray-600">
            Service
          </Link>
          <Link to="/cart" onClick={() => setIsOpen(false)} className="text-2xl uppercase tracking-widest hover:text-gray-600">
            Cart {cartCount > 0 && `(${cartCount})`}
          </Link>
        </div>
      )}
    </nav>
  );
}

function useCart(): { cartCount: number } {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const getCartCount = () => {
      if (typeof window === 'undefined') {
        return 0;
      }

      const storedCart = window.localStorage.getItem('cart');
      if (!storedCart) {
        return 0;
      }

      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          return parsedCart.length;
        }

        if (parsedCart && Array.isArray(parsedCart.items)) {
          return parsedCart.items.length;
        }
      } catch {
        return 0;
      }

      return 0;
    };

    setCartCount(getCartCount());
  }, []);

  return { cartCount };
}
