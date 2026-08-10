import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  Search, BookOpen, Leaf, CheckCircle, 
  Users, Shield, BarChart3, Heart,
} from 'lucide-react';

import homeHero from '../assets/minora-pic.jpg'; 
import aboutTeaserImg from '../assets/about.png'; 
import insurance from "../assets/insurance.png";
import investing from "../assets/investing.png";
import family from "../assets/family.png";
import money from "../assets/money-tips.png";

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
  
  // NOTE: State must be inside the component!
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const resourceArticles = [
    {
      id: 1,
      category: "Insurance",
      title: "Life Insurance 101: Protect What Matters Most",
      image: insurance,
      content: "Life insurance isn't just about leaving a legacy; it's about protecting your family's current standard of living. If the unexpected happens, the right coverage ensures your mortgage is paid, your children's education is funded, and your spouse isn't burdened with sudden debt. It is the foundation of any secure financial plan."
    },
    {
      id: 2,
      category: "Investing",
      title: "TFSA vs RRSP: Which One Is Right for You?",
      image: investing,
      content: "This is the most common question in Canadian personal finance. An RRSP provides a tax deduction today, making it ideal for high-income earners saving for retirement. A TFSA doesn't give a tax break upfront, but your money grows completely tax-free and can be withdrawn anytime without penalty. Often, the best strategy utilizes both."
    },
    {
      id: 3,
      category: "Money Tips",
      title: "7 Smart Money Habits for Young Professionals",
      image: money,
      content: "Building wealth starts with automation. By setting up automatic transfers to your savings and investment accounts every payday, you pay yourself first. Combine this with tracking your cash flow, building a 3-month emergency fund, and avoiding high-interest consumer debt, and you will put yourself years ahead of your peers."
    },
    {
      id: 4,
      category: "Family",
      title: "Teaching Kids About Money: Start Early, Win Big",
      image: family,
      content: "Financial literacy starts at home. Introduce the concepts of earning, saving, and spending through a structured allowance system. As they get older, introduce the magic of compound interest. Children who learn to manage small amounts of money early on develop the discipline needed to handle larger wealth in adulthood."
    }
  ];

  return (
    <div className="w-full pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col md:flex-row min-h-[90vh] bg-[#f9f8f4]">
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 z-10"
          initial="hidden" animate="visible" variants={fadeUpVariant}
        >
          <div className="hidden lg:block absolute top-24 right-[45%] font-serif italic text-2xl text-gray-500 opacity-60 z-20">
            Plan today.<br/>Live tomorrow.<br/>Leave a legacy.
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-[#0a3028]">
            You built the Income, <br /> Let’s make sure <br /> it’s protected <span className="text-[#d4af37]"> not just earned. </span>
          </h1>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed font-serif max-w-lg">
           Every financial decision you make today shapes the life you'll live tomorrow. At Minora Financials, we help you build wealth with confidence through personalized financial frameworks designed to support your goals today and a legacy tomorrow
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button 
              onClick={() => navigate('/booking')}
              className="bg-[#0a3028] text-white px-8 py-3.5 font-bold hover:bg-[#d4af37] transition-colors text-sm"
            >
              Get the Free Checklist
            </button>

          </div>
        </motion.div>

        <div className="w-full md:w-1/2 relative bg-cover bg-center min-h-[400px]" style={{ backgroundImage: `url(${homeHero})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9f8f4] via-[#f9f8f4]/40 to-transparent" />
        </div>
      </section>

      {/* 2. FRAMEWORK SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            Our Framework
          </motion.h3>
          <motion.h2 className="text-4xl md:text-5xl font-extrabold text-[#0a3028] mb-4 tracking-tight" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            Assess. Empower. Freedom.
          </motion.h2>
          <motion.p className="font-serif text-gray-600 mb-16 max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            A simple, proven pathway to help you build confidence, make better decisions, and create the life you deserve.
          </motion.p>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            
            {/* ASSESS */}
            <motion.div variants={fadeUpVariant} className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#0a3028] text-white flex items-center justify-center shrink-0"><Search size={28} strokeWidth={1.5} /></div>
                <h4 className="text-2xl font-bold text-[#0a3028]">1. ASSESS</h4>
              </div>
              <p className="font-serif text-gray-600 mb-6 min-h-[60px]">We evaluate your current financial situation and create a personalized plan for your goals.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-700 font-serif flex-grow">
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Financial Needs Analysis</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Insurance Review</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Budget & Cash Flow Review</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Investment & Debt Assessment</li>
              </ul>
              <button 
              onClick={() => navigate('/assess')}
              className="border border-[#0a3028] text-[#0a3028] px-6 py-2.5 text-sm font-bold w-max hover:bg-[#0a3028] hover:text-white transition-colors">Learn More</button>
            </motion.div>

            {/* EMPOWER */}
            <motion.div variants={fadeUpVariant} className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] text-white flex items-center justify-center shrink-0"><BookOpen size={28} strokeWidth={1.5} /></div>
                <h4 className="text-2xl font-bold text-[#d4af37]">2. EMPOWER</h4>
              </div>
              <p className="font-serif text-gray-600 mb-6 min-h-[60px]">We educate and equip you with the knowledge to make confident financial decisions.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-700 font-serif flex-grow">
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Financial Education</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Insurance Literacy</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Investment Education</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Workshops & Youth Programs</li>
              </ul>
              <button 
              onClick={() => navigate('/assess')}
              className="border border-[#d4af37] text-[#d4af37] px-6 py-2.5 text-sm font-bold w-max hover:bg-[#d4af37] hover:text-white transition-colors">Learn More</button>
            </motion.div>

            {/* FREEDOM */}
            <motion.div variants={fadeUpVariant} className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#0a3028] text-white flex items-center justify-center shrink-0"><Leaf size={28} strokeWidth={1.5} /></div>
                <h4 className="text-2xl font-bold text-[#0a3028]">3. FREEDOM</h4>
              </div>
              <p className="font-serif text-gray-600 mb-6 min-h-[60px]">We help you build long-term wealth so you can live life on your terms.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-700 font-serif flex-grow">
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Wealth Building</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Retirement Planning</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Segregated Funds</li>
                <li className="flex items-start gap-3"><CheckCircle size={18} className="text-[#0a3028] shrink-0 mt-0.5" strokeWidth={1.5}/> Estate & Legacy Planning</li>
              </ul>
              <button 
                onClick={() => navigate('/assess')}
                className="border border-[#0a3028] text-[#0a3028] px-6 py-2.5 text-sm font-bold w-max hover:bg-[#0a3028] hover:text-white transition-colors"
              >
                Learn More
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT TEASER SECTION */}
      <section className="relative flex flex-col lg:flex-row min-h-[80vh] bg-[#f9f8f4]">
        <div className="w-full lg:w-2/5 relative bg-cover bg-top min-h-[400px]" style={{ backgroundImage: `url(${aboutTeaserImg})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f9f8f4]/40 to-[#f9f8f4]" />
        </div>
        
        <motion.div 
          className="w-full lg:w-3/5 flex flex-col md:flex-row p-8 lg:p-16 z-10 gap-12"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="flex-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2">About Minora Financials</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a3028] mb-6">
              More Than Financial Advice:<br/>A Partnership for Life.
            </h2>
            <p className="font-serif text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
              I started Minora Financials to help you, especially professionals and business owners, navigate the financial system with clarity.
            </p>
            <p className="font-serif text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
              My mission is to educate, protect, and empower you to build wealth that creates choices, security, and a legacy for generations to come.
            </p>
            <div className="font-mono text-xl text-gray-800 mb-1">Temi K</div>
            <div className="font-mono text-sm italic text-gray-800 mb-1"> CEO Minora Financials</div>
          </motion.div>

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

     

      {/* 5. RESOURCES SECTION (Expandable) */}
      <section className="py-24 px-6 bg-[#f9f8f4]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2">Resources & Education</h3>
              <h2 className="text-3xl font-extrabold text-[#0a3028] mb-2">Knowledge Builds Confidence</h2>
              <p className="font-serif text-gray-600">Explore our latest articles and resources to help you make smarter financial decisions.</p>
            </motion.div>
            <button className="hidden md:block border border-gray-300 bg-white text-gray-800 px-6 py-2.5 text-sm font-bold hover:border-[#0a3028] transition-colors">
              Visit Resource Center
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {resourceArticles.map((article) => (
              <div key={article.id} className="border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col h-full">
                <div className="h-40 mb-6 w-full overflow-hidden bg-gray-100 rounded-sm"> 
                  <img src={article.image} alt={article.category} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" /> 
                </div>
                
                <p className="text-xs text-[#d4af37] font-bold uppercase tracking-wider mb-3">{article.category}</p>
                <h4 className="text-lg font-extrabold text-[#0a3028] mb-4 leading-tight">{article.title}</h4>
                
                <AnimatePresence>
                  {expandedCard === article.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm font-serif text-gray-600 leading-relaxed mb-6">
                        {article.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-auto pt-2">
                  <button 
                    onClick={() => setExpandedCard(expandedCard === article.id ? null : article.id)}
                    className="text-xs text-gray-800 font-bold hover:text-[#d4af37] transition-colors flex items-center gap-1"
                  >
                    {expandedCard === article.id ? 'Read Less' : 'Read More'} 
                    <span className="text-[#d4af37] ml-1">{expandedCard === article.id ? '↑' : '→'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="md:hidden mt-10 border border-gray-300 bg-white text-gray-800 px-6 py-3 text-sm font-bold w-full hover:border-[#0a3028] transition-colors">
            Visit Resource Center
          </button>
        </div>
      </section>

    </div>
  );
}