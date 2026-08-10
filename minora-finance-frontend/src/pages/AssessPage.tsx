import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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

  const processSteps = [
    "Protection Review",
    "Gap Summary",
    "Recommendations",
    "Implementation",
    "Annual Review"
  ];

  return (
    <div className="w-full pt-20 bg-[#f9f8f4]">
      
      {/* 1. HERO SECTION (Intact) */}
      <section className="relative flex flex-col md:flex-row min-h-[90vh] bg-[#f9f8f4]">
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 z-10"
          initial="hidden" animate="visible" variants={fadeUpVariant}
        >
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-4">Step 1 Of Your Journey</h3>
          
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
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 relative bg-cover bg-center min-h-[400px]" style={{ backgroundImage: `url(${assessHero})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9f8f4] via-[#f9f8f4]/40 to-transparent" />
        </div>
      </section>

      {/* 2. WE STAND BY ONE BELIEF (From Mockup) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          className="relative"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        >
          {/* Subtle accent text on the left mimicking the mockup's vertical text */}
          <div className="hidden lg:block absolute -left-12 top-2 origin-top-left -rotate-90 text-[10px] tracking-[0.2em] text-gray-400 font-mono uppercase">
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-[#0a3028] mb-6">We stand by one belief</h2>
          <p className="text-lg text-gray-700 font-sans max-w-3xl leading-relaxed mb-16">
            If you spend a little time with us, you'll sleep a whole lot better. We evaluate your needs, manage your risk, educate you along the way, and check in every year to make sure you're still on track and still protected.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          {/* Card 1 */}
          <motion.div variants={fadeUpVariant} className="border border-[#e5e0d8] bg-white p-8 md:p-10 flex flex-col h-full shadow-sm">
            <span className="text-xs font-mono text-gray-400 mb-6 block">01</span>
            <h3 className="text-xl font-bold text-[#0a3028] mb-4">Security for your family</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Remove the burden of uncertainty with life, health, and financial protection built around your household.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUpVariant} className="border border-[#e5e0d8] bg-white p-8 md:p-10 flex flex-col h-full shadow-sm">
            <span className="text-xs font-mono text-gray-400 mb-6 block">02</span>
            <h3 className="text-xl font-bold text-[#0a3028] mb-4">Growth on your terms</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              TFSA, RRSP, and RESP strategy that puts compound interest to work for your goals, not someone else's.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUpVariant} className="border border-[#e5e0d8] bg-white p-8 md:p-10 flex flex-col h-full shadow-sm">
            <span className="text-xs font-mono text-gray-400 mb-6 block">03</span>
            <h3 className="text-xl font-bold text-[#0a3028] mb-4">Income protection</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Disability and critical illness coverage that reflects how you actually earn — employee or business owner.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. START WHERE YOU ARE (From Mockup) */}
      <section className="py-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto relative">
        <motion.div 
          className="relative"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
        >
          {/* Subtle accent text */}
          <div className="hidden lg:block absolute -left-12 top-2 origin-top-left -rotate-90 text-[10px] tracking-[0.2em] text-gray-400 font-mono uppercase">
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-[#0a3028] mb-4">Start where you are</h2>
          <p className="text-gray-600 font-sans mb-10">Not ready for a full review? Start with something small.</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/booking')}
              className="bg-[#b79339] text-[#0a3028] px-8 py-4 text-sm font-bold hover:bg-[#0a3028] hover:text-white transition-colors"
            >
              Book a Financial Wellness Review
            </button>
            <button 
              className="border border-gray-300 bg-transparent text-gray-700 px-8 py-4 text-sm font-bold hover:border-[#0a3028] hover:text-[#0a3028] transition-colors"
            >
              Get the Free Checklist
            </button>
          </div>
        </motion.div>
      </section>

      {/* 4. HOW IT WORKS / FLOWCHART (From Mockup) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-[#e5e0d8] mt-12 mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">
            {processSteps.map((step, index) => (
              <span key={`text-${index}`} className="flex items-center gap-2">
                {step} {index !== processSteps.length - 1 && <ArrowRight size={12} />}
              </span>
            ))}
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-[#0a3028] mb-12">How it works</h2>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row flex-wrap xl:flex-nowrap items-center gap-4 md:gap-2 lg:gap-4"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          {processSteps.map((step, index) => (
            <div key={`box-${index}`} className="flex flex-col md:flex-row items-center gap-4 md:gap-2 lg:gap-4 w-full md:w-auto">
              <motion.div 
                variants={fadeUpVariant} 
                className="w-full md:w-auto border border-[#e5e0d8] bg-white px-6 py-5 text-sm font-sans text-gray-700 whitespace-nowrap text-center shadow-sm"
              >
                {step}
              </motion.div>
              
              {/* Arrow separator (hidden on the last item and hidden on mobile) */}
              {index !== processSteps.length - 1 && (
                <ArrowRight size={16} className="hidden md:block text-gray-400 shrink-0" />
              )}
              {/* Down arrow for mobile */}
              {index !== processSteps.length - 1 && (
                <ArrowRight size={16} className="md:hidden text-gray-400 shrink-0 rotate-90" />
              )}
            </div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}