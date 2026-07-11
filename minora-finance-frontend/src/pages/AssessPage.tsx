import { useNavigate } from 'react-router-dom';
import { 
  Search, ClipboardList, Target, Lightbulb, CheckCircle, 
  ClipboardCheck, Eye, ShieldAlert, Navigation, Heart, 
  User, DollarSign, Shield, TrendingUp, Calendar, ArrowRight, 
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import assessHero from '../assets/minora-pic2.jpg'; 

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AssessPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-20">
      
      {/* 1. HERO SECTION (Text Left, Image Right) */}
      <section className="relative flex flex-col md:flex-row min-h-[90vh] bg-[#f9f8f4]">
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 z-10"
          initial="hidden" animate="visible" variants={fadeUpVariant}
        >
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-4">Step 1 Of Your Journey</h3>
          
          {/* Highlighted text to match mockup */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 uppercase text-[#0a3028]">
            Assess With <span className="text-[#d4af37]">Clarity.</span><br /> 
            Plan With <span className="text-[#d4af37]">Purpose.</span>
          </h1>
          
          <p className="text-lg text-gray-800 mb-10 leading-relaxed font-serif max-w-lg">
            Before we build a plan, we take the time to understand you. Our assessment process gives you a clear picture of where you stand financially and what's possible for your future.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <button 
              onClick={() => navigate('/booking')}
              className="w-max bg-[#0a3028] text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-[#d4af37] transition-colors"
            >
              Start Your Assessment &rarr;
            </button>
            {/* <span className="text-sm font-bold text-gray-600 flex items-center gap-2">
              <Users size={18} className="text-gray-500" /> Trusted by 300+ Families
            </span> */}
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 relative bg-cover bg-center min-h-[400px]" style={{ backgroundImage: `url(${assessHero})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9f8f4] via-[#f9f8f4]/40 to-transparent" />
        </div>
      </section>

      {/* 2. 5-STEP PROCESS & OUTCOME */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-4">Our Assess Framework</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a3028] mb-4">
              A Clear 5-Step Process to Understand Your Financial Picture
            </h2>
            <p className="text-gray-600 font-serif mb-16">We go beyond numbers to understand your goals, your challenges, and your opportunities.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16 relative"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {/* Step 1 */}
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-full bg-[#0a3028] text-white flex items-center justify-center mb-6">
                <Search size={32} strokeWidth={1.5}/>
              </div>
              <h4 className="text-sm font-bold uppercase text-[#0a3028] mb-3">1. Discover</h4>
              <p className="text-xs font-serif text-gray-600 px-2 leading-relaxed">We learn about you—your life, goals, values, and what financial success looks like for you.</p>
              <ArrowRight className="hidden md:block absolute top-10 -right-6 text-[#d4af37]" strokeWidth={1} size={24} />
            </motion.div>
            
            {/* Step 2 */}
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-full bg-[#0a3028] text-white flex items-center justify-center mb-6">
                <ClipboardList size={32} strokeWidth={1.5}/>
              </div>
              <h4 className="text-sm font-bold uppercase text-[#0a3028] mb-3">2. Analyze</h4>
              <p className="text-xs font-serif text-gray-600 px-2 leading-relaxed">We review your current financial situation, including income, expenses, assets, liabilities, insurance, and investments.</p>
              <ArrowRight className="hidden md:block absolute top-10 -right-6 text-[#d4af37]" strokeWidth={1} size={24} />
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-full bg-[#0a3028] text-white flex items-center justify-center mb-6">
                <Target size={32} strokeWidth={1.5}/>
              </div>
              <h4 className="text-sm font-bold uppercase text-[#0a3028] mb-3">3. Identify</h4>
              <p className="text-xs font-serif text-gray-600 px-2 leading-relaxed">We identify gaps, risks, and opportunities that may be holding you back from achieving your goals.</p>
              <ArrowRight className="hidden md:block absolute top-10 -right-6 text-[#d4af37]" strokeWidth={1} size={24} />
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-full bg-[#0a3028] text-white flex items-center justify-center mb-6">
                <Lightbulb size={32} strokeWidth={1.5}/>
              </div>
              <h4 className="text-sm font-bold uppercase text-[#0a3028] mb-3">4. Strategize</h4>
              <p className="text-xs font-serif text-gray-600 px-2 leading-relaxed">We create personalized recommendations designed to strengthen your financial foundation.</p>
              <ArrowRight className="hidden md:block absolute top-10 -right-6 text-[#d4af37]" strokeWidth={1} size={24} />
            </motion.div>

            {/* Step 5 */}
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#0a3028] text-white flex items-center justify-center mb-6">
                <CheckCircle size={32} strokeWidth={1.5}/>
              </div>
              <h4 className="text-sm font-bold uppercase text-[#0a3028] mb-3">5. Review & Prioritize</h4>
              <p className="text-xs font-serif text-gray-600 px-2 leading-relaxed">We walk you through your plan, answer your questions, and help you prioritize the next steps.</p>
            </motion.div>
          </motion.div>

          {/* THE OUTCOME BANNER */}
          <motion.div 
            className="bg-[#fcfbf9] border border-[#d4af37]/30 py-5 px-8 rounded-md flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto shadow-sm"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            <ClipboardCheck className="text-[#d4af37]" size={28} strokeWidth={1.5} />
            <p className="text-sm text-gray-800">
              <strong className="font-bold">The Outcome:</strong> Clarity, confidence, and a customized roadmap built around your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. THE BENEFITS OF STARTING WITH ASSESS */}
      <section className="py-24 px-6 bg-[#fcfbf9]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>Why An Assessment Matters</motion.h3>
          <motion.h2 className="text-3xl md:text-4xl font-extrabold text-[#0a3028] mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            The Benefits of Starting With Assess
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center text-center px-4">
              <Eye className="text-[#d4af37] mb-4" size={40} strokeWidth={1} />
              <h4 className="font-bold text-[#0a3028] mb-2">Gain Clarity</h4>
              <p className="text-sm font-serif text-gray-600 leading-relaxed">See exactly where you stand financially.</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center text-center px-4">
              <ShieldAlert className="text-[#d4af37] mb-4" size={40} strokeWidth={1} />
              <h4 className="font-bold text-[#0a3028] mb-2">Reduce Risk</h4>
              <p className="text-sm font-serif text-gray-600 leading-relaxed">Uncover hidden gaps that could cost you later.</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center text-center px-4">
              <Navigation className="text-[#d4af37] mb-4" size={40} strokeWidth={1} />
              <h4 className="font-bold text-[#0a3028] mb-2">Get Direction</h4>
              <p className="text-sm font-serif text-gray-600 leading-relaxed">Receive a clear plan aligned with your goals.</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center text-center px-4">
              <Heart className="text-[#d4af37] mb-4" size={40} strokeWidth={1} />
              <h4 className="font-bold text-[#0a3028] mb-2">Build Confidence</h4>
              <p className="text-sm font-serif text-gray-600 leading-relaxed">Make informed decisions with peace of mind.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. PROMPTS TO REFLECT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>Prompts To Start Here</motion.h3>
          <motion.h2 className="text-3xl md:text-4xl font-extrabold text-[#0a3028] mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            Take a Moment to Reflect
          </motion.h2>
          <motion.p className="font-serif text-gray-600 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            These simple prompts will help you think about what matters most to you.
          </motion.p>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUpVariant} className="bg-white border border-[#f3eee5] p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border border-[#d4af37] bg-white flex items-center justify-center mb-6">
                <User size={24} strokeWidth={1} className="text-[#d4af37]" />
              </div>
              <p className="text-sm font-serif text-gray-700 leading-relaxed">What are your top financial priorities right now?</p>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="bg-white border border-[#f3eee5] p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border border-[#d4af37] bg-white flex items-center justify-center mb-6">
                <DollarSign size={24} strokeWidth={1} className="text-[#d4af37]" />
              </div>
              <p className="text-sm font-serif text-gray-700 leading-relaxed">Do you know how much you're saving (or losing) each month?</p>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="bg-white border border-[#f3eee5] p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border border-[#d4af37] bg-white flex items-center justify-center mb-6">
                <Shield size={24} strokeWidth={1} className="text-[#d4af37]" />
              </div>
              <p className="text-sm font-serif text-gray-700 leading-relaxed">Do you have the right insurance protection for you and your family?</p>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="bg-white border border-[#f3eee5] p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border border-[#d4af37] bg-white flex items-center justify-center mb-6">
                <TrendingUp size={24} strokeWidth={1} className="text-[#d4af37]" />
              </div>
              <p className="text-sm font-serif text-gray-700 leading-relaxed">Are your investments aligned with your goals and risk tolerance?</p>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="bg-white border border-[#f3eee5] p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border border-[#d4af37] bg-white flex items-center justify-center mb-6">
                <Heart size={24} strokeWidth={1} className="text-[#d4af37]" />
              </div>
              <p className="text-sm font-serif text-gray-700 leading-relaxed">What kind of life do you want to create for yourself and your family?</p>
            </motion.div>
          </motion.div>

          <p className="font-bold text-gray-800 text-sm md:text-base">Your answers are the first step toward a stronger financial future.</p>
        </div>
      </section>

      {/* 5. READY TO GET CLARITY (Final CTA) */}
      <section className="bg-white pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-[#0a3028] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-lg overflow-hidden relative"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            {/* Subtle decorative leaf accent */}
            <div className="absolute -bottom-8 -right-8 opacity-20 pointer-events-none">
               <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 md:mb-0 relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center shrink-0">
                <Calendar size={32} className="text-[#0a3028]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-normal mb-2">Ready to Get Clarity?</h2>
                <p className="font-serif text-sm text-gray-200">Book your free assessment and take the first step<br className="hidden md:block"/> toward financial confidence.</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-3 shrink-0 relative z-10 w-full md:w-auto">
              <button 
                onClick={() => navigate('/booking')}
                className="bg-[#d4af37] text-[#0a3028] px-8 py-3.5 text-sm font-bold hover:bg-white transition-colors w-full md:w-auto shadow-sm"
              >
                Book a Free Assessment
              </button>
              <button className="text-xs text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Or ask a question first &rarr;
              </button>
            </div>
          </motion.div>

          {/* TRUST INDICATORS FOOTER */}
          {/* <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-12 text-gray-500 text-sm">
            <div className="flex items-center gap-2"><Lock size={18} strokeWidth={1.5} /> 100% Confidential</div>
            <div className="flex items-center gap-2"><User size={18} strokeWidth={1.5} /> No Obligation</div>
            <div className="flex items-center gap-2"><Heart size={18} strokeWidth={1.5} /> Always in Your Best Interest</div>
          </div> */}
        </div>
      </section>

    </div>
  );
}