import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Ref: image_73c752.jpg) */}
      <section className="relative h-screen flex items-center px-12">
        {/* Background Image Setup */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-right bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('/assets/image_73c752.jpg')" }}
        />
        {/* Gradient overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0" />
        
        <div className="relative z-10 max-w-2xl mt-20">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 uppercase">
            Financial Planning <br/> For Young <br/> Professionals
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-md leading-relaxed font-serif">
            Most people aren't taught how money really works. At <strong>Minora Financials</strong>, we give you the strategy, protection, and knowledge to build a stronger financial future.
          </p>
          <button className="border border-black px-8 py-4 uppercase tracking-widest text-sm font-mono hover:bg-black hover:text-white transition-colors">
            Start A Plan &rarr;
          </button>
        </div>
      </section>

      {/* 2. ABOUT US SECTION (Ref: image_73ca00.jpg) */}
      <section className="bg-[#f9f8f4] py-24 px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl pr-8">
          <h2 className="text-4xl font-extrabold mb-6 uppercase tracking-tight">About Us</h2>
          <p className="text-gray-700 font-serif leading-relaxed mb-10">
            At Minora Financials, we realized that the traditional education system teaches us how to work for a paycheck, but never how to make that paycheck work for us. We noticed a gap where young, high-achieving professionals were earning well but lacked the "financial engine" to turn that income into lasting freedom. We founded Minora to close that gap.
          </p>
          <button className="border border-black px-8 py-4 uppercase tracking-widest text-sm font-mono hover:bg-black hover:text-white transition-colors">
            View services &rarr;
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <img src="/assets/image_73ca00.jpg" alt="Financial analysis" className="w-full h-auto object-cover shadow-sm" />
        </div>
      </section>

      {/* 3. THE THREE PILLARS (Ref: image_73ca1e.png, image_73ca3f.png) */}
      <section className="bg-[#f9f8f4] py-24 px-12 border-t border-gray-200">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight">What We Do</h2>
          <h3 className="text-2xl font-bold uppercase mt-2 text-[#4a3b32]">The Three Pillars <br/> Of Minora Financials</h3>
        </div>

        {/* Pillar 1: Investment */}
        <div className="mb-16">
          <h4 className="text-2xl font-extrabold uppercase mb-4">Investment</h4>
          <p className="font-serif text-gray-700 mb-8 max-w-3xl">
            <strong>Build Your Financial Engine</strong><br/>
            Income alone rarely creates wealth. Assets do. We help young professionals move beyond saving and start strategically investing—building portfolios that grow over time.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Note: You can replace these with actual SVGs or Lucide icons */}
            <div className="flex flex-col items-start"><span className="text-3xl mb-2">🪙</span><p className="text-sm font-serif">RRSP & TFSA investment strategies</p></div>
            <div className="flex flex-col items-start"><span className="text-3xl mb-2">📈</span><p className="text-sm font-serif">Long-term wealth accumulation</p></div>
            <div className="flex flex-col items-start"><span className="text-3xl mb-2">🧮</span><p className="text-sm font-serif">Tax-efficient investment planning</p></div>
            <div className="flex flex-col items-start"><span className="text-3xl mb-2">📊</span><p className="text-sm font-serif">Asset diversification</p></div>
          </div>
        </div>

        {/* You can duplicate the block above for the Insurance and Education pillars */}
      </section>

      {/* 4. MISSION & VISION (Ref: image_73ca61.jpg) */}
      <section className="flex flex-col md:flex-row bg-[#e8e9e4]">
        <div className="w-full md:w-1/2">
          <img src="/assets/image_73ca61.jpg" alt="Team collaborating" className="w-full h-full object-cover min-h-[500px]" />
        </div>
        <div className="w-full md:w-1/2 p-16 flex flex-col justify-center space-y-12">
          <div>
            <h3 className="text-3xl font-extrabold uppercase mb-4">Our Mission</h3>
            <p className="font-serif text-gray-800">
              - Build assets - Protect those assets - And raise financially confident families.<br/><br/>
              We believe financial planning should feel clear, empowering, and practical, not confusing or intimidating. To educate, protect, and empower individuals and families to make confident financial decisions and create lasting financial freedom.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold uppercase mb-4">Our Vision</h3>
            <p className="font-serif text-gray-800">
              A world where every family has financial clarity, confidence, and the freedom to live life on their own terms.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold uppercase mb-4">Our Values</h3>
            <ul className="list-disc list-inside font-serif text-gray-800 space-y-2">
              <li>Integrity & Transparency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. FOOTER (Ref: image_73ca99.png) */}
      <footer className="bg-[#3e2723] text-white py-20 px-12">
        <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl mx-auto">
          {/* Subscribe Column */}
          <div className="mb-10 md:mb-0 w-full md:w-1/2">
            <h3 className="text-3xl font-extrabold uppercase mb-4">Subscribe</h3>
            <p className="font-serif text-sm mb-6 opacity-80">Sign up with your email address to receive news and updates.</p>
            <form className="flex space-x-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-4 py-3 w-64 bg-white text-black font-serif outline-none"
              />
              <button 
                type="submit" 
                className="border border-white px-6 py-3 uppercase tracking-widest text-sm font-mono hover:bg-white hover:text-[#3e2723] transition-colors"
              >
                Sign Up
              </button>
            </form>
            <p className="font-serif text-xs mt-6 opacity-60">We respect your privacy.</p>
          </div>

          {/* Links Columns */}
          <div className="flex space-x-24">
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold uppercase tracking-wider text-sm mb-2">Sitemap</h4>
              <Link to="/" className="font-serif text-sm opacity-80 hover:opacity-100 uppercase">Home</Link>
              <Link to="/service" className="font-serif text-sm opacity-80 hover:opacity-100 uppercase">Service</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold uppercase tracking-wider text-sm mb-2">Follow</h4>
              <a href="#" className="font-serif text-sm opacity-80 hover:opacity-100 uppercase underline decoration-1 underline-offset-4">Instagram</a>
              <a href="#" className="font-serif text-sm opacity-80 hover:opacity-100 uppercase underline decoration-1 underline-offset-4">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}