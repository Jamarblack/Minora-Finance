import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  slug: string;
  image_url: string;
  created_at: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPublishedPosts();
  }, []);

  const fetchPublishedPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('id, title, slug, image_url, created_at')
      .eq('published', true) // ONLY fetch published posts
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data || []);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full bg-[#fcfbf9] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-4">Minora Insights</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-[#0a3028] tracking-tight mb-6">
            Financial Clarity <br className="hidden md:block" /> & Education
          </h1>
          <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
            Explore our latest articles, guides, and insights designed to help you protect your wealth and plan with purpose.
          </p>
        </div>

        {/* Blog Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-[#0a3028]" size={40} />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 border border-[#e5e0d8] bg-white">
            <p className="font-serif text-gray-500 text-lg">Check back soon for our first article.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-[#e5e0d8] shadow-sm flex flex-col h-full group hover:shadow-md transition-shadow"
              >
                {/* Cover Image */}
                <div className="w-full h-56 bg-gray-100 overflow-hidden relative">
                  {post.image_url ? (
                    <img 
                      src={post.image_url} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#0a3028]/5">
                      <span className="text-[#0a3028] opacity-20 font-serif">Minora Financials</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="text-xs font-mono text-gray-400 mb-4 block">
                    {new Date(post.created_at).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <h2 className="text-xl font-bold text-[#0a3028] mb-6 leading-snug font-serif">
                    {post.title}
                  </h2>
                  
                  {/* Push button to bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#d4af37] hover:text-[#0a3028] transition-colors uppercase tracking-widest"
                    >
                      Read Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}