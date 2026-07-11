import { motion, type Variants } from 'framer-motion';
import { Search, ClipboardList, Target, Lightbulb, CheckCircle, Calendar, AlertCircle } from 'lucide-react';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function BookingPage() {
  return (
    <div className="w-full bg-[#f9f8f4] min-h-screen pt-24 pb-20">
      
      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-[#0a3028] tracking-tight mb-6 mt-10">
            Assess With Clarity. <br /> Plan With Purpose.
          </h1>
          <h2 className="text-xl md:text-2xl font-serif text-[#d4af37] mb-6">
            Find out what is protected, what is growing, and what financial gaps are costing you.
          </h2>
          <p className="text-lg text-gray-700 font-serif mb-8 bg-white/60 p-6 border border-gray-200 inline-block shadow-sm">
            <strong>The reality:</strong> You can be earning well and still be financially exposed.
          </p>
        </motion.div>
      </section>

      {/* 5-STEP PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-2">Our Assess Framework</h3>
          <h2 className="text-3xl font-extrabold uppercase text-[#0a3028]">A Clear 5-Step Process</h2>
          <p className="font-serif text-gray-600 mt-2">We go beyond numbers to understand your goals, your challenges, and your opportunities.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* STEP 1 */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#0a3028] text-white flex items-center justify-center mb-4 shadow-md">
              <Search size={28} strokeWidth={1.5} />
            </div>
            <h4 className="font-bold uppercase text-[#0a3028] mb-2">1. Discover</h4>
            <p className="text-sm font-serif text-gray-600">We learn about you—your life, goals, values, and what financial success looks like for you.</p>
          </motion.div>
          {/* STEP 2 */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#0a3028] text-[#0a3028] flex items-center justify-center mb-4 shadow-md bg-white">
              <ClipboardList size={28} strokeWidth={1.5} />
            </div>
            <h4 className="font-bold uppercase text-[#0a3028] mb-2">2. Analyze</h4>
            <p className="text-sm font-serif text-gray-600">We review your current financial situation, including income, expenses, assets, liabilities, and insurance.</p>
          </motion.div>
          {/* STEP 3 */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#0a3028] text-white flex items-center justify-center mb-4 shadow-md">
              <Target size={28} strokeWidth={1.5} />
            </div>
            <h4 className="font-bold uppercase text-[#0a3028] mb-2">3. Identify</h4>
            <p className="text-sm font-serif text-gray-600">We identify gaps, risks, and opportunities that may be holding you back from achieving your goals.</p>
          </motion.div>
          {/* STEP 4 */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#0a3028] text-[#0a3028] flex items-center justify-center mb-4 shadow-md bg-white">
              <Lightbulb size={28} strokeWidth={1.5} />
            </div>
            <h4 className="font-bold uppercase text-[#0a3028] mb-2">4. Strategize</h4>
            <p className="text-sm font-serif text-gray-600">We create personalized recommendations designed to strengthen your financial foundation.</p>
          </motion.div>
          {/* STEP 5 */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#0a3028] text-white flex items-center justify-center mb-4 shadow-md">
              <CheckCircle size={28} strokeWidth={1.5} />
            </div>
            <h4 className="font-bold uppercase text-[#0a3028] mb-2">5. Review & Prioritize</h4>
            <p className="text-sm font-serif text-gray-600">We walk you through your plan, answer your questions, and help you prioritize the next steps.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* THE OFFER: FINANCIAL WELLNESS REVIEW */}
      <section className="max-w-5xl mx-auto px-6">
        <motion.div 
          className="bg-white p-8 md:p-12 shadow-xl border border-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#0a3028] mb-4">
              Book Your Minora Financial Wellness Review
            </h2>
            <p className="text-lg font-serif text-gray-700 max-w-3xl mx-auto">
              You work hard for your money. Now let’s make sure your money, income, family, and future are properly protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold uppercase text-[#d4af37] mb-4 border-b pb-2">What is it?</h3>
              <p className="font-serif text-gray-700 mb-4">
                The Minora Financial Wellness Review is a personalized 45-minute session designed for professionals and high-income families who want clarity, protection, and confidence in their financial life.
              </p>
              <p className="font-serif text-gray-700">
                The goal is to help you understand what is working, what may be missing, and what steps you can take to protect your income, grow your money, and build financial confidence.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase text-[#d4af37] mb-4 border-b pb-2">This review is for you if:</h3>
              <ul className="space-y-3 font-serif text-gray-700">
                <li className="flex items-start gap-2"><AlertCircle className="text-[#0a3028] shrink-0 mt-1" size={18} /> You have employer benefits, but no personal coverage.</li>
                <li className="flex items-start gap-2"><AlertCircle className="text-[#0a3028] shrink-0 mt-1" size={18} /> You have savings, but no clear investment structure.</li>
                <li className="flex items-start gap-2"><AlertCircle className="text-[#0a3028] shrink-0 mt-1" size={18} /> You have children, but no RESP strategy.</li>
                <li className="flex items-start gap-2"><AlertCircle className="text-[#0a3028] shrink-0 mt-1" size={18} /> You have a mortgage, but not enough life insurance.</li>
                <li className="flex items-start gap-2"><AlertCircle className="text-[#0a3028] shrink-0 mt-1" size={18} /> You have income, but no critical illness protection.</li>
                <li className="flex items-start gap-2"><AlertCircle className="text-[#0a3028] shrink-0 mt-1" size={18} /> You are an immigrant or first-generation wealth builder trying to balance responsibilities here and back home.</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f9f8f4] p-6 mb-10 border-l-4 border-[#d4af37]">
            <h3 className="font-bold uppercase text-[#0a3028] mb-3">During this review, we will discuss:</h3>
            <p className="font-serif text-gray-700 text-sm md:text-base leading-relaxed">
              Your income protection & coverages • Employer benefits • TFSA, RRSP, and RESP planning • Family responsibilities • Savings and investment goals • Debt and mortgage exposure • Beneficiary and legacy considerations • <strong>Your next best financial steps.</strong>
            </p>
          </div>

          {/* CALENDAR / INTAKE PLACEHOLDER */}
          <div className="bg-[#0a3028] text-white p-10 text-center flex flex-col items-center">
            <Calendar size={48} className="mb-4 text-[#d4af37]" />
            <h3 className="text-2xl font-bold uppercase mb-4">Ready to Get Clarity?</h3>
            <p className="font-serif mb-8 max-w-xl mx-auto">
              You will walk away with more clarity on what is working, what may be missing, and what actions may help you feel more financially confident.
            </p>
            
            {/* 
              TODO: This is where we will embed the Calendly or Squarespace booking widget 
              For now, it's a placeholder button that could link to an external booking form
            */}
            <button className="bg-[#d4af37] text-[#0a3028] px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors w-full md:w-auto">
              Book Your Free Assessment Now
            </button>
          </div>

          {/* DISCLAIMER */}
          <div className="mt-8 text-center text-xs text-gray-500 font-serif px-4">
            This session is not a full financial plan, legal advice, tax advice, or a guarantee of approval for any product or strategy. It is a starting point to help you understand your options and make informed decisions.
          </div>

        </motion.div>
      </section>

    </div>
  );
}