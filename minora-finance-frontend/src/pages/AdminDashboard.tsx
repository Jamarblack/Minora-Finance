import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { LogOut, Plus, Edit, Trash2, FileText, Loader2 } from 'lucide-react';


interface Post {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  created_at: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);


  useEffect(() => {
    checkUserAndFetchPosts();
  }, []);

  const checkUserAndFetchPosts = async () => {
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin');
      return;
    }

    const { data, error } = await supabase
      .from('posts')
      .select('id, title, slug, published, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data || []);
    }
    
    setIsLoading(false);
  };


  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  
  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    setIsDeleting(id);
    const { error } = await supabase.from('posts').delete().eq('id', id);
    
    if (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post.');
    } else {
     
      setPosts(posts.filter(post => post.id !== id));
    }
    setIsDeleting(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f9f8f4] flex items-center justify-center">
        <Loader2 className="animate-spin text-[#0a3028]" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f8f4]">
      {/* Top Navigation */}
      <nav className="bg-[#0a3028] text-white p-4 px-6 md:px-12 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <FileText className="text-[#d4af37]" />
          <span className="font-extrabold uppercase tracking-widest text-sm">Minora Admin</span>
        </div>
        <button 
          onClick={handleSignOut}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
        >
          <LogOut size={16} /> Sign Out
        </button>
      </nav>

      {/* Main Dashboard Content */}
      <main className="max-w-6xl mx-auto p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-serif text-[#0a3028] mb-1">Blog Posts</h1>
            <p className="text-sm text-gray-600 font-sans">Manage your articles, edit content, and publish new pieces.</p>
          </div>
          <button 
            onClick={() => navigate('/admin/posts/new')}
            className="bg-[#d4af37] text-[#0a3028] px-6 py-3 text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#0a3028] hover:text-white transition-colors shadow-sm"
          >
            <Plus size={18} /> Create New Post
          </button>
        </div>

        {/* Posts Table */}
        <div className="bg-white border border-[#e5e0d8] shadow-sm rounded-sm overflow-hidden">
          {posts.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center justify-center text-gray-500">
              <FileText size={48} className="text-gray-300 mb-4" />
              <p className="font-serif">No posts found.</p>
              <p className="text-sm mt-1">Click "Create New Post" to write your first article.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#fcfbf9] border-b border-[#e5e0d8] text-xs uppercase tracking-widest text-gray-500 font-bold">
                    <th className="p-4 pl-6 font-medium">Title</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 pr-6 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e0d8]">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-[#fcfbf9] transition-colors">
                      <td className="p-4 pl-6">
                        <p className="font-bold text-[#0a3028]">{post.title}</p>
                        <p className="text-xs text-gray-400 mt-1">/{post.slug}</p>
                      </td>
                      <td className="p-4">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                          post.published 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {new Date(post.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button 
                            onClick={() => navigate(`/admin/posts/${post.id}`)}
                            className="text-gray-400 hover:text-[#0a3028] transition-colors p-1"
                            title="Edit"
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => handleDelete(post.id)}
                            disabled={isDeleting === post.id}
                            className="text-gray-400 hover:text-red-600 transition-colors p-1 disabled:opacity-50"
                            title="Delete"
                          >
                            {isDeleting === post.id ? <Loader2 className="animate-spin" size={18} /> : <Trash2 size={18} />}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}