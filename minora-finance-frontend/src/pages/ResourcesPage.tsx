import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft, Sparkles } from 'lucide-react';

export default function ResourcesPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f9f8f4] min-h-[90vh] pt-32 pb-20 flex flex-col items-center justify-center px-6">
      
      <motion.div 
        className="max-w-2xl mx-auto text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Icon & Badge */}
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-full bg-[#0a3028] text-[#d4af37] flex items-center justify-center shadow-lg">
            <BookOpen size={36} strokeWidth={1.5} />
          </div>
          <motion.div 
            className="absolute -top-2 -right-2 text-[#d4af37]"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Sparkles size={24} />
          </motion.div>
        </div>

        {/* Heading */}
        <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-4">
          Minora Hub
        </h3>
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-[#0a3028] tracking-tight mb-6">
          Resources <br className="md:hidden" /> Coming Soon
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700 font-serif mb-12 max-w-lg leading-relaxed">
          We are currently curating a collection of high-value financial guides, checklists, and tools to help you build confidence and protect your wealth. 
        </p>

        {/* Return Button */}
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-3 bg-transparent border-2 border-[#0a3028] text-[#0a3028] px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-[#0a3028] hover:text-white transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Return to Homepage
        </button>
      </motion.div>
      
    </div>
  );
}