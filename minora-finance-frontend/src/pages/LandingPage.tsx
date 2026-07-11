import { useNavigate } from 'react-router-dom';
import { 
  Search, BookOpen, Leaf, CheckCircle2, 
  Users, Shield, BarChart3, Heart,
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import homeHero from '../assets/minora-pic.jpg'; 
import aboutTeaserImg from '../assets/about.png'; 
import insurance from "../assets/insurance.png";
import investing from "../assets/investing.png";
import family from "../assets/family.png";
import money from "../assets/money-tips.png"

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-20">
      
      {/* 1. HERO SECTION (Text Left, Image Right) */}
      <section className="relative flex flex-col md:flex-row min-h-[90vh] bg-[#f9f8f4]">
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 z-10"
          initial="hidden" animate="visible" variants={fadeUpVariant}
        >
          {/* Script overlay from the mockup */}
          <div className="hidden lg:block absolute top-24 right-[45%] font-serif italic text-2xl text-gray-500 opacity-60 z-20">
            Plan today.<br/>Live tomorrow.<br/>Leave a legacy.
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-[#0a3028]">
            From Financial <br /> Confusion to <br /> Financial <span className="text-[#d4af37]">Freedom</span>
          </h1>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed font-serif max-w-lg">
            We help individuals and families understand their finances, build confidence with money, and create lasting financial freedom through insurance, investments, and education.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button 
              onClick={() => navigate('/booking')}
              className="bg-[#0a3028] text-white px-8 py-3.5 font-bold hover:bg-[#d4af37] transition-colors text-sm"
            >
              Book a Free Assessment
            </button>
            <button 
              className="border-2 border-gray-300 text-gray-800 px-8 py-3.5 font-bold hover:border-[#0a3028] transition-colors text-sm bg-white"
            >
              Start Your Journey
            </button>
          </div>

          {/* Trust Rating */}
          {/* <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
            <span className="flex items-center gap-2"><Users size={16}/> Trusted by 300+ Families</span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1 text-[#d4af37]">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
            </span>
            <span>5.0 Client Rating</span>
          </div> */}
        </motion.div>

        <div className="w-full md:w-1/2 relative bg-cover bg-center min-h-[400px]" style={{ backgroundImage: `url(${homeHero})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9f8f4] via-[#f9f8f4]/40 to-transparent" />
        </div>
      </section>

      {/* 2. FRAMEWORK SECTION (3 Columns) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            Our Framework
          </motion.h3>
          <motion.h2 className="text-3xl md:text-5xl font-extrabold text-[#0a3028] mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            Assess. Empower. Freedom.
          </motion.h2>
          <motion.p className="font-serif text-gray-600 mb-16 max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            A simple, proven pathway to help you build confidence, make better decisions, and create the life you deserve.
          </motion.p>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            
            {/* ASSESS */}
            <motion.div variants={fadeUpVariant} className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#0a3028] text-white flex items-center justify-center shrink-0"><Search size={24} /></div>
                <h4 className="text-2xl font-bold text-[#0a3028]">1. ASSESS</h4>
              </div>
              <p className="font-serif text-gray-600 mb-6 min-h-[60px]">We evaluate your current financial situation and create a personalized plan for your goals.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-700 font-serif flex-grow">
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Financial Needs Analysis</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Insurance Review</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Budget & Cash Flow Review</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Investment & Debt Assessment</li>
              </ul>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 text-sm font-bold w-max hover:border-[#0a3028]">Learn More</button>
            </motion.div>

            {/* EMPOWER */}
            <motion.div variants={fadeUpVariant} className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] text-white flex items-center justify-center shrink-0"><BookOpen size={24} /></div>
                <h4 className="text-2xl font-bold text-[#d4af37]">2. EMPOWER</h4>
              </div>
              <p className="font-serif text-gray-600 mb-6 min-h-[60px]">We educate and equip you with the knowledge to make confident financial decisions.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-700 font-serif flex-grow">
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Financial Education</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Insurance Literacy</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Investment Education</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Workshops & Youth Programs</li>
              </ul>
              <button className="border border-[#d4af37] text-[#d4af37] px-6 py-2 text-sm font-bold w-max hover:bg-[#d4af37] hover:text-white transition-colors">Learn More</button>
            </motion.div>

            {/* FREEDOM */}
            <motion.div variants={fadeUpVariant} className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#0a3028] text-white flex items-center justify-center shrink-0"><Leaf size={24} /></div>
                <h4 className="text-2xl font-bold text-[#0a3028]">3. FREEDOM</h4>
              </div>
              <p className="font-serif text-gray-600 mb-6 min-h-[60px]">We help you build long-term wealth so you can live life on your terms.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-700 font-serif flex-grow">
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Wealth Building</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Retirement Planning</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Segregated Funds</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0 mt-0.5"/> Estate & Legacy Planning</li>
              </ul>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 text-sm font-bold w-max hover:border-[#0a3028]">Learn More</button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT TEASER SECTION (Image Left, Text Center, Icons Right) */}
      <section className="relative flex flex-col lg:flex-row min-h-[80vh] bg-[#f9f8f4]">
        <div className="w-full lg:w-2/5 relative bg-cover bg-top min-h-[400px]" style={{ backgroundImage: `url(${aboutTeaserImg})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f9f8f4]/40 to-[#f9f8f4]" />
        </div>
        
        <motion.div 
          className="w-full lg:w-3/5 flex flex-col md:flex-row p-8 lg:p-16 z-10 gap-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {/* Text block */}
          <motion.div variants={fadeUpVariant} className="flex-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2">About Minora Financials</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a3028] mb-6">
              More Than Financial Advice—<br/>A Partnership for Life.
            </h2>
            <p className="font-serif text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
              I founded Minora Financials to help individuals and families—especially immigrants and young professionals—navigate the financial system with clarity and confidence.
            </p>
            <p className="font-serif text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
              My mission is to educate, protect, and empower you to build wealth that creates choices, security, and a legacy for generations to come.
            </p>
            <div className="font-mono text-xl italic text-gray-800 mb-1">Rani Minora</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Financial Advisor</div>
          </motion.div>

          {/* Icons Block */}
          <motion.div variants={fadeUpVariant} className="w-full md:w-64 flex flex-col justify-center space-y-8 bg-white p-8 border border-gray-100 shadow-sm shrink-0">
            <div className="flex items-center gap-4">
              <Users size={28} className="text-[#0a3028]" strokeWidth={1.5} />
              <p className="text-sm font-bold text-gray-800 leading-tight">Personalized Guidance</p>
            </div>
            <div className="flex items-center gap-4">
              <Shield size={28} className="text-[#0a3028]" strokeWidth={1.5} />
              <p className="text-sm font-bold text-gray-800 leading-tight">Protection for What Matters Most</p>
            </div>
            <div className="flex items-center gap-4">
              <BarChart3 size={28} className="text-[#0a3028]" strokeWidth={1.5} />
              <p className="text-sm font-bold text-gray-800 leading-tight">Strategies for Long-Term Wealth</p>
            </div>
            <div className="flex items-center gap-4">
              <Heart size={28} className="text-[#0a3028]" strokeWidth={1.5} />
              <p className="text-sm font-bold text-gray-800 leading-tight">A Legacy for Future Generations</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. STATISTICS BANNER (Dark Green) */}
      {/* <section className="bg-[#0a3028] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          <div className="flex flex-col items-center justify-center">
            <Users size={32} className="mb-2 text-[#d4af37]" strokeWidth={1.5} />
            <h4 className="text-2xl font-bold">300+</h4>
            <p className="text-xs uppercase tracking-widest opacity-80 mt-1">Families Served</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <GraduationCap size={32} className="mb-2 text-[#d4af37]" strokeWidth={1.5} />
            <h4 className="text-2xl font-bold">100+</h4>
            <p className="text-xs uppercase tracking-widest opacity-80 mt-1">Workshops Delivered</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Shield size={32} className="mb-2 text-[#d4af37]" strokeWidth={1.5} />
            <h4 className="text-2xl font-bold">10+</h4>
            <p className="text-xs uppercase tracking-widest opacity-80 mt-1">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Handshake size={32} className="mb-2 text-[#d4af37]" strokeWidth={1.5} />
            <h4 className="text-2xl font-bold">100%</h4>
            <p className="text-xs uppercase tracking-widest opacity-80 mt-1">Client Focused</p>
          </div>
        </div>
      </section> */}

      {/* 5. RESOURCES SECTION (Placeholder) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2">Resources & Education</h3>
              <h2 className="text-3xl font-extrabold text-[#0a3028] mb-2">Knowledge Builds Confidence</h2>
              <p className="font-serif text-gray-600">Explore our latest articles and resources to help you make smarter financial decisions.</p>
            </motion.div>
            <button className="hidden md:block border border-gray-300 text-gray-800 px-6 py-2 text-sm font-bold hover:border-[#0a3028]">
              Visit Resource Center
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Mockup Blog Cards */}
            <div className="border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 mb-4 w-full"> <img src={insurance} alt="Insurance" className="w-full h-full object-cover" /> </div>
              <p className="text-xs text-[#d4af37] font-bold uppercase mb-2">Insurance</p>
              <h4 className="font-bold text-[#0a3028] mb-2 leading-tight">Life Insurance 101: Protect What Matters Most</h4>
              <button className="text-xs text-gray-600 font-bold mt-2">Read More &rarr;</button>
            </div>
            <div className="border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 mb-4 w-full"> <img src={investing} alt="Investing" className="w-full h-full object-cover" /> </div>
              <p className="text-xs text-[#d4af37] font-bold uppercase mb-2">Investing</p>
              <h4 className="font-bold text-[#0a3028] mb-2 leading-tight">TFSA vs RRSP: Which One Is Right for You?</h4>
              <button className="text-xs text-gray-600 font-bold mt-2">Read More &rarr;</button>
            </div>
            <div className="border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 mb-4 w-full"> <img src={money} alt="Money Tips" className="w-full h-full object-cover" /> </div>
              <p className="text-xs text-[#d4af37] font-bold uppercase mb-2">Money Tips</p>
              <h4 className="font-bold text-[#0a3028] mb-2 leading-tight">7 Smart Money Habits for Young Professionals</h4>
              <button className="text-xs text-gray-600 font-bold mt-2">Read More &rarr;</button>
            </div>
            <div className="border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 mb-4 w-full"> <img src={family} alt="Family" className="w-full h-full object-cover" /> </div>
              <p className="text-xs text-[#d4af37] font-bold uppercase mb-2">Family</p>
              <h4 className="font-bold text-[#0a3028] mb-2 leading-tight">Teaching Kids About Money: Start Early, Win Big</h4>
              <button className="text-xs text-gray-600 font-bold mt-2">Read More &rarr;</button>
            </div>
          </div>
          
          <button className="md:hidden mt-8 border border-gray-300 text-gray-800 px-6 py-2 text-sm font-bold w-full hover:border-[#0a3028]">
            Visit Resource Center
          </button>
        </div>
      </section>

    </div>
  );
}
