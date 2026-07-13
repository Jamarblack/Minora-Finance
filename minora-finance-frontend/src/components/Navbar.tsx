import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex justify-between border-b-2 border-b-[#5a2926] items-center px-6 md:px-12 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-[#f9f8f4]/90 py-6 md:py-8'
      }`}
    >
      {/* BRAND & LOGO */}
      <Link to="/" className="z-50 flex items-center gap-2">
        <img src={logo} alt="Minora Financials Logo" className="h-8 md:h-10" />
        <span className="font-bold text-xl">MINORA FINANCIALS</span>
      </Link>
      
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center space-x-8 text-sm tracking-wide">
        
        <Link 
          to="/" 
          className={`font-semibold uppercase transition-colors ${
            location.pathname === '/' ? 'text-[#d4af37] border-b-2 border-[#d4af37] pb-1' : 'hover:text-gray-600'
          }`}
        >
          Home
        </Link>

        <Link 
          to="/about" 
          className={`font-semibold uppercase transition-colors ${
            location.pathname === '/about' ? 'text-[#d4af37] border-b-2 border-[#d4af37] pb-1' : 'hover:text-gray-600'
          }`}
        >
          About
        </Link>

        <Link 
          to="/assess" 
          className={`font-semibold uppercase transition-colors ${
            location.pathname === '/assess' ? 'text-[#d4af37] border-b-2 border-[#d4af37] pb-1' : 'hover:text-gray-600'
          }`}
        >
          Assess
        </Link>

        {/* CTA BUTTON */}
        <button 
          onClick={() => navigate('/booking')}
          className="bg-[#0a3028] text-white px-5 py-2.5 uppercase tracking-widest text-xs font-bold hover:bg-[#d4af37] transition-colors ml-4"
        >
          Book a Free Assessment
        </button>
      </div>

      {/* MOBILE HAMBURGER TOGGLE */}
      <button 
        className="md:hidden z-50 text-black" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-screen bg-[#f9f8f4] flex flex-col items-center justify-center space-y-8 md:hidden z-40">
          
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className={`font-semibold text-2xl uppercase tracking-widest ${location.pathname === '/' ? 'text-[#d4af37]' : 'text-black'}`}
          >
            Home
          </Link>

          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)} 
            className={`font-semibold text-2xl uppercase tracking-widest ${location.pathname === '/about' ? 'text-[#d4af37]' : 'text-black'}`}
          >
            About
          </Link>

          <Link 
            to="/assess" 
            onClick={() => setIsOpen(false)} 
            className={`font-semibold text-2xl uppercase tracking-widest ${location.pathname === '/assess' ? 'text-[#d4af37]' : 'text-black'}`}
          >
            Assess
          </Link>

          <button 
            onClick={() => {
              setIsOpen(false);
              navigate('/booking');
            }}
            className="bg-[#0a3028] text-white px-8 py-4 uppercase tracking-widest text-sm font-bold mt-4"
          >
            Book a Free Assessment
          </button>
        </div>
      )}
    </nav>
  );
}