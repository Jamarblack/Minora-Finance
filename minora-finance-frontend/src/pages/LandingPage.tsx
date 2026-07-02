import { useNavigate } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import hero from '../assets/minora pic.jpg';
import about from '../assets/about.png';
import todo from '../assets/minora pic2.jpg';
import vision from '../assets/vision.png';

// Reusable animation variants to keep the code clean
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-screen flex items-center px-6 md:px-12 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Gradient overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-0" />
        
        <motion.div 
          className="relative z-10 max-w-2xl mt-20"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 uppercase">
            Financial Planning <br/> For Young <br/> Professionals
          </h1>
          <p className="text-lg text-gray-800 mb-10 max-w-md leading-relaxed font-serif">
            Most people aren't taught how money really works. At <strong>Minora Financials</strong>, we give you the strategy, protection, and knowledge to build a stronger financial future.
          </p>
          <button 
          onClick={() => navigate('/service')}
          className="border border-black px-8 py-4 uppercase tracking-widest text-sm font-mono hover:bg-black hover:text-white transition-colors"
          >
            Start A Plan &rarr;
          </button>
        </motion.div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section 
        className="relative py-24 md:py-32 px-6 md:px-12 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${about})` }}
      >
        {/* Solid dark overlay so the white text pops */}
        <div className="absolute inset-0 bg-black/75 z-0" />

        <motion.div 
          className="relative z-10 max-w-3xl mx-auto text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 uppercase tracking-tight">About Us</h2>
          <p className="font-serif leading-relaxed mb-10 text-lg md:text-xl opacity-90">
            At Minora Financials, we realized that the traditional education system teaches us how to work for a paycheck, but never how to make that paycheck work for us. We noticed a gap where young, high-achieving professionals were earning well but lacked the "financial engine" to turn that income into lasting freedom. We founded Minora to close that gap.
          </p>
          <button 
            className="border border-white px-8 py-4 uppercase tracking-widest text-sm font-mono hover:bg-white hover:text-black transition-colors"
            onClick={() => navigate('/service')}
          >
            View services &rarr;
          </button>
        </motion.div>
      </section>

     {/* 3. THE THREE PILLARS (WHAT WE DO) */}
      <section 
        className="relative py-24 md:py-32 px-6 md:px-12 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${todo})` }} 
      >
        {/* Soft cream overlay to maintain the brand colors */}
        <div className="absolute inset-0 bg-[#f9f8f4]/90 z-0" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div 
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">What We Do</h2>
            <h3 className="text-xl md:text-2xl font-bold uppercase mt-2 text-[#4a3b32]">The Three Pillars Of Minora Financials</h3>
          </motion.div>

          {/* Pillars Container - Stacking the 3 cards closely together */}
          <div className="flex flex-col gap-6 md:gap-8">
            
            {/* PILLAR 1: INVESTMENT */}
            <motion.div 
              className="bg-white/60 backdrop-blur-md p-6 md:p-10 rounded-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h4 variants={fadeUpVariant} className="text-2xl md:text-3xl font-extrabold uppercase mb-3">Investment</motion.h4>
              <motion.p variants={fadeUpVariant} className="font-serif text-gray-800 mb-8 max-w-4xl text-base md:text-lg">
                <strong>Income alone rarely creates wealth. Assets do.</strong><br/>
                At Minora Financials, we help young professionals move beyond saving and start strategically investing. We help them build their financial engine by creating portfolios that grow through:
              </motion.p>
              
              {/* Space-Saving Inline Bullets */}
              <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">🪙</span><p className="text-sm font-serif font-semibold leading-tight">RRSP & TFSA investment strategies</p></motion.div>
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">📈</span><p className="text-sm font-serif font-semibold leading-tight">Long-term wealth accumulation</p></motion.div>
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">🧮</span><p className="text-sm font-serif font-semibold leading-tight">Tax-efficient investment planning</p></motion.div>
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">📊</span><p className="text-sm font-serif font-semibold leading-tight">Asset diversification</p></motion.div>
              </motion.div>
            </motion.div>

            {/* PILLAR 2: INSURANCE */}
            <motion.div 
              className="bg-white/60 backdrop-blur-md p-6 md:p-10 rounded-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h4 variants={fadeUpVariant} className="text-2xl md:text-3xl font-extrabold uppercase mb-3">Insurance</motion.h4>
              <motion.p variants={fadeUpVariant} className="font-serif text-gray-800 mb-8 max-w-4xl text-base md:text-lg">
                <strong>Building wealth without protection is like building a house without a foundation.</strong><br/>
                As life happens, insurance ensures that the assets and life you are building remain protected no matter what happens. We help clients design protection strategies including:
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">🛡️</span><p className="text-sm font-serif font-semibold leading-tight">Life insurance</p></motion.div>
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">🏥</span><p className="text-sm font-serif font-semibold leading-tight">Critical illness coverage</p></motion.div>
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">☂️</span><p className="text-sm font-serif font-semibold leading-tight">Income protection strategies</p></motion.div>
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">🤝</span><p className="text-sm font-serif font-semibold leading-tight">Insurance integrated into wealth plans</p></motion.div>
              </motion.div>
            </motion.div>

            {/* PILLAR 3: EDUCATE */}
            <motion.div 
              className="bg-white/60 backdrop-blur-md p-6 md:p-10 rounded-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h4 variants={fadeUpVariant} className="text-2xl md:text-3xl font-extrabold uppercase mb-3">Educate</motion.h4>
              <motion.p variants={fadeUpVariant} className="font-serif text-gray-800 mb-8 max-w-4xl text-base md:text-lg">
                <strong>Real wealth is not just what you build, it’s what your children understand about money.</strong><br/>
                At Minora Financials, education is not an afterthought, it is one of our core missions. We help families:
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">💡</span><p className="text-sm font-serif font-semibold leading-tight">Understand how money works</p></motion.div>
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">🌱</span><p className="text-sm font-serif font-semibold leading-tight">Teach children financial literacy early</p></motion.div>
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">🎓</span><p className="text-sm font-serif font-semibold leading-tight">Build education funds like RESPs</p></motion.div>
                <motion.div variants={fadeUpVariant} className="flex items-start gap-3"><span className="text-2xl leading-none">🧠</span><p className="text-sm font-serif font-semibold leading-tight">Develop lifelong money habits</p></motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section 
        className="relative py-24 md:py-32 px-6 md:px-12 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${vision})` }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-[#3e2723]/85 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-16 text-white">
          <motion.div 
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold uppercase mb-6 border-b border-white/30 pb-4">Our Mission</h3>
            <p className="font-serif text-lg leading-relaxed opacity-90">
              Build assets, protect those assets, and raise financially confident families.<br/><br/>
              We believe financial planning should feel clear, empowering, and practical, not confusing or intimidating. To educate, protect, and empower individuals and families to make confident financial decisions and create lasting financial freedom.
            </p>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold uppercase mb-6 border-b border-white/30 pb-4">Our Vision</h3>
            <p className="font-serif text-lg leading-relaxed opacity-90 mb-10">
              A world where every family has financial clarity, confidence, and the freedom to live life on their own terms.
            </p>
            
            <h3 className="text-xl md:text-2xl font-extrabold uppercase mb-4">Our Values</h3>
            <ul className="list-disc list-inside font-serif text-lg opacity-90 space-y-2">
              <li>Integrity & Transparency</li>
            </ul>
          </motion.div>
        </div>
      </section>

    </div>
  );
}