import { useNavigate } from 'react-router-dom';
import { 
  Target, Eye, Heart, CheckCircle2, 
  BadgeCheck, GraduationCap, Users, ShieldCheck, Calendar 
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

// TODO: Import your specific images
import aboutHero from '../assets/about.png'; 
import storyImg from '../assets/vision.png'; // Use the image of her looking out the window

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-20">
      
      {/* 1. HERO SECTION (Text Left, Image Right) */}
      <section className="relative flex flex-col md:flex-row min-h-[90vh] bg-[#f9f8f4]">
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 z-10"
          initial="hidden" animate="visible" variants={fadeUpVariant}
        >
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-4">About Minora Financials</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 uppercase text-[#0a3028]">
            More Than Financial Advice—<br/>A Partnership for Life.
          </h1>
          <p className="text-lg text-gray-800 mb-10 leading-relaxed font-serif">
            I believe everyone deserves clarity, confidence, and choices when it comes to their financial future. My mission is to make financial knowledge simple and accessible so you can build a life of security, freedom, and legacy.
          </p>
          
          <div className="mt-4">
           <div className="font-mono text-xl text-gray-800 mb-1">Temi K</div>
            <div className="font-mono text-sm italic text-gray-800 mb-1"> CEO Minora Financials</div>
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 relative bg-cover bg-center min-h-[400px]" style={{ backgroundImage: `url(${aboutHero})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9f8f4] via-[#f9f8f4]/40 to-transparent" />
        </div>
      </section>

      {/* 2. MY STORY SECTION (Image Left with Quote, Text Right) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full lg:w-1/2 relative rounded-lg overflow-hidden shadow-xl min-h-[500px] bg-cover bg-center"
            style={{ backgroundImage: `url(${storyImg})` }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            {/* The Quote Overlay on the image */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-white">
              <span className="text-6xl text-[#d4af37] font-serif leading-none mb-4">"</span>
              <p className="font-serif text-xl md:text-2xl leading-relaxed max-w-sm">
                I know what it's like to start from scratch, work hard, and still feel financially uncertain.<br/><br/>
                That's why I do what I do.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 flex flex-col justify-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.h3 variants={fadeUpVariant} className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2">My Story</motion.h3>
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-extrabold uppercase text-[#0a3028] mb-8">
              From My Journey to Yours
            </motion.h2>
            
            <motion.div variants={fadeUpVariant} className="space-y-6 font-serif text-gray-700 leading-relaxed">
              <p>
                I came to Canada with big dreams, a strong work ethic, and the hope of building a better future. Like many immigrants, I worked hard, built my career, and focused on taking care of my family.
              </p>
              <p>
                But no matter how much I earned, I realized something was missing—a clear financial plan, the right guidance, and the confidence to make decisions for my future.
              </p>
              <p>
                I educated myself, learned the system, and discovered the power of financial planning. That journey changed my life—and it's the reason I started Minora Financials.
              </p>
              <p>
                Now, I help individuals and families—especially immigrants and young professionals—navigate the financial system with clarity and confidence so they can build wealth, protect what matters, and create a legacy.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 3. MISSION, VISION, VALUES (3 Columns) */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#fdfbf7] p-8 md:p-12 rounded-xl shadow-sm border border-[#d4af37]/20"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {/* Mission */}
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center text-center px-4">
              <Target size={40} strokeWidth={1} className="text-[#d4af37] mb-6" />
              <h4 className="text-2xl font-bold text-[#0a3028] mb-4">My Mission</h4>
              <p className="font-serif text-gray-600 text-sm leading-relaxed">
                To educate, protect, and empower individuals and families to make confident financial decisions and create lasting financial freedom.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center text-center px-4 md:border-x border-gray-200">
              <Eye size={40} strokeWidth={1} className="text-[#d4af37] mb-6" />
              <h4 className="text-2xl font-bold text-[#0a3028] mb-4">My Vision</h4>
              <p className="font-serif text-gray-600 text-sm leading-relaxed">
                A world where every family has financial clarity, confidence, and the freedom to live life on their own terms.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div variants={fadeUpVariant} className="flex flex-col items-center text-center px-4">
              <Heart size={40} strokeWidth={1} className="text-[#d4af37] mb-6" />
              <h4 className="text-2xl font-bold text-[#0a3028] mb-4">My Values</h4>
              <ul className="space-y-3 font-serif text-gray-700 text-sm text-left w-full max-w-[200px]">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0" /> Integrity & Transparency</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0" /> Education & Empowerment</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0" /> Client-Centered Approach</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0a3028] shrink-0" /> Long-Term Relationships</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. EXPERIENCE YOU CAN TRUST */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          <motion.div 
            className="w-full lg:w-2/3"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.h3 variants={fadeUpVariant} className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2">Experience You Can Trust</motion.h3>
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-extrabold text-[#0a3028] mb-12">
              Professional. Knowledgeable. Committed to You.
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
                <BadgeCheck size={36} strokeWidth={1.5} className="text-[#0a3028] mb-4" />
                <p className="font-serif text-sm text-gray-700">Licensed Financial Advisor in Canada</p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
                <GraduationCap size={36} strokeWidth={1.5} className="text-[#0a3028] mb-4" />
                <p className="font-serif text-sm text-gray-700">Continuous Education & Industry Training</p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
                <Users size={36} strokeWidth={1.5} className="text-[#0a3028] mb-4" />
                <p className="font-serif text-sm text-gray-700">Hundreds of Families Served</p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
                <ShieldCheck size={36} strokeWidth={1.5} className="text-[#0a3028] mb-4" />
                <p className="font-serif text-sm text-gray-700">Trusted Guidance Every Step of the Way</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/3 bg-[#fdfbf7] p-10 flex flex-col justify-center border border-gray-100 shadow-sm"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            <span className="text-5xl text-[#0a3028] font-serif leading-none mb-4">"</span>
            <p className="font-serif text-lg leading-relaxed text-gray-800 mb-8">
              My goal is simple: to make finances less overwhelming and life more fulfilling.
            </p>
           <div className="font-mono text-xl text-gray-800 mb-1">Temi K</div>
            <div className="font-mono text-sm italic text-gray-800 mb-1"> CEO Minora Financials</div>
          </motion.div>

        </div>
      </section>

      {/* 5. CTA BANNER (Dark Green) */}
      <section className="bg-[#0a3028] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-white gap-8">
          
          <motion.div 
            className="flex items-center gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center shrink-0">
              <Calendar size={32} className="text-[#0a3028]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Let's Build Your Financial Future—Together</h2>
              <p className="font-serif text-gray-200">Your story matters, and I'm here to help you write the next chapter with confidence.</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center md:items-end gap-3 shrink-0"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            <button 
              onClick={() => navigate('/booking')}
              className="bg-[#d4af37] text-[#0a3028] px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors w-full md:w-auto"
            >
              Book a Free Assessment
            </button>
            <button className="text-sm font-serif text-gray-300 hover:text-white hover:underline">
              Learn More About My Services &rarr;
            </button>
          </motion.div>

        </div>
      </section>

    </div>
  );
}