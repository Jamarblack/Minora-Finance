import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Loader2 } from 'lucide-react';

interface Post {
  title: string;
  content: string;
  image_url: string;
  created_at: string;
}

export default function SinglePostPage() {
  // Grab the slug from the URL (e.g., "new-post")
  const { slug } = useParams<{ slug: string }>();
  
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single(); // We only want one post!

      if (error) {
        console.error('Error fetching post:', error);
      } else {
        setPost(data);
      }
      setIsLoading(false);
    };

    if (slug) fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#fcfbf9] pt-32 flex justify-center">
        <Loader2 className="animate-spin text-[#0a3028]" size={40} />
      </div>
    );
  }

  // If someone types in a bad URL or the post was unpublished
  if (!post) {
    return (
      <div className="min-h-screen bg-[#fcfbf9] pt-40 px-6 text-center">
        <h1 className="text-3xl font-serif text-[#0a3028] mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8 font-serif">The article you are looking for doesn't exist or has been unpublished.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#d4af37] hover:text-[#0a3028] transition-colors uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fcfbf9] min-h-screen pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto">
        
        {/* Back Link */}
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-bold text-[#d4af37] hover:text-[#0a3028] transition-colors uppercase tracking-widest mb-10">
          <ArrowLeft size={16} /> Back to Minora Resources
        </Link>

        {/* Article Header */}
        <header className="mb-10 text-center md:text-left">
          <span className="text-sm font-mono text-gray-500 mb-4 block">
            {new Date(post.created_at).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-[#0a3028] tracking-tight leading-tight mb-8">
            {post.title}
          </h1>
        </header>

        {/* Cover Image */}
        {post.image_url && (
          <div className="w-full h-[40vh] md:h-[60vh] mb-12 bg-gray-100 overflow-hidden shadow-sm">
            <img 
              src={post.image_url} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        {/* whitespace-pre-wrap ensures your line breaks show up properly */}
        <div className="text-lg text-gray-800 font-serif leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
        
      </article>
    </div>
  );
}