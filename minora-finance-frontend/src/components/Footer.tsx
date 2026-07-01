import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#3e2723] text-white py-20 px-6 md:px-12 mt-auto">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl mx-auto gap-12 md:gap-0">
        <div className="mb-10 md:mb-0 w-full md:w-1/2">
          <div className="flex items-center space-x-4 mb-10">
            <img src={logo} alt="Minora Finance Logo" className="h-10 md:h-12" />
            <span className="text-2xl font-extrabold uppercase tracking-widest">Minora Financials</span>
          </div>
          <h3 className="text-xl font-bold uppercase mb-4 text-gray-300">Subscribe</h3>
          <p className="font-serif text-sm mb-6 opacity-80">Sign up with your email address to receive news and updates.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Email Address" className="px-4 py-3 w-full sm:w-64 bg-white text-black font-serif outline-none" />
            <button type="submit" className="border border-white px-6 py-3 uppercase tracking-widest text-sm font-mono hover:bg-white hover:text-[#3e2723] transition-colors whitespace-nowrap">Sign Up</button>
          </form>
          <p className="font-serif text-xs mt-6 opacity-60">We respect your privacy.</p>
        </div>
        <div className="flex flex-row space-x-16 md:space-x-24">
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-sm mb-2 text-gray-400">Sitemap</h4>
            <Link to="/" className="font-serif text-sm opacity-80 hover:opacity-100 uppercase">Home</Link>
            <Link to="/service" className="font-serif text-sm opacity-80 hover:opacity-100 uppercase">Service</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-sm mb-2 text-gray-400">Follow</h4>
            <a href="#" className="font-serif text-sm opacity-80 hover:opacity-100 uppercase underline decoration-1 underline-offset-4">Instagram</a>
            <a href="#" className="font-serif text-sm opacity-80 hover:opacity-100 uppercase underline decoration-1 underline-offset-4">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}