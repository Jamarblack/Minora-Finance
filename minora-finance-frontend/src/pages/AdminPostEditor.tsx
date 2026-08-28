import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Save, Image as ImageIcon, Loader2, AlertTriangle } from 'lucide-react';

export default function AdminPostEditor() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  // Auto-generate a URL-friendly slug when the title changes
  useEffect(() => {
    setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
  }, [title]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError('');

    try {
      let imageUrl = '';

      // 1. Upload the image to Supabase Storage if one was selected
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(fileName, imageFile);

        if (uploadError) throw uploadError;

        // Get the public URL to save in the database
        const { data } = supabase.storage.from('blog-images').getPublicUrl(fileName);
        imageUrl = data.publicUrl;
      }

      // 2. Save the post data to the database
      const { error: insertError } = await supabase.from('posts').insert([
        { 
          title, 
          slug, 
          content, 
          published, 
          image_url: imageUrl || null 
        }
      ]);

      if (insertError) throw insertError;

      // 3. Go back to dashboard on success
      navigate('/admin/dashboard');
      
    } catch (err: any) {
      setError(err.message || 'Error saving post.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f8f4] pt-20">
      {/* Admin Navbar */}
      <nav className="bg-[#0a3028] text-white p-4 px-6 shadow-md flex items-center justify-between">
        <button 
          onClick={() => navigate('/admin/dashboard')}
          className="flex items-center gap-2 text-sm hover:text-[#d4af37] transition-colors"
        >
          <ArrowLeft size={18} /> Back to Dashboard
        </button>
      </nav>

      <main className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-3xl font-serif text-[#0a3028] mb-8">Create New Post</h1>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 mb-6 flex items-start gap-3 border border-red-200">
            <AlertTriangle size={20} className="shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6 bg-white p-8 border border-[#e5e0d8] shadow-sm">
          
          {/* Title & Slug */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-[#0a3028] mb-2 uppercase">Post Title</label>
              <input
                type="text"
                required
                className="w-full p-3 bg-[#f9f8f4] border border-gray-200 focus:border-[#d4af37] outline-none text-sm font-serif"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="E.g., The Hidden Costs of..."
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0a3028] mb-2 uppercase">URL Slug (Auto-generated)</label>
              <input
                type="text"
                required
                className="w-full p-3 bg-gray-50 border border-gray-200 outline-none text-sm font-mono text-gray-500"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-xs font-bold text-[#0a3028] mb-2 uppercase">Cover Image</label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer bg-[#f9f8f4] border border-gray-200 px-4 py-3 flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                <ImageIcon size={18} />
                <span>{imageFile ? imageFile.name : 'Choose Image File'}</span>
                <input 
                  type="file" 
                  accept="image/*"
                  className="hidden" 
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="block text-xs font-bold text-[#0a3028] mb-2 uppercase">Article Content</label>
            <textarea
              required
              rows={15}
              className="w-full p-4 bg-[#f9f8f4] border border-gray-200 focus:border-[#d4af37] outline-none text-sm font-serif leading-relaxed resize-y"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your article here..."
            />
          </div>

          {/* Publish Toggle & Submit */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-5 h-5 accent-[#0a3028]"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
              />
              <span className="text-sm font-bold text-[#0a3028]">Publish immediately</span>
            </label>

            <button
              type="submit"
              disabled={isSaving}
              className="bg-[#0a3028] text-white px-8 py-3 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#d4af37] transition-colors disabled:opacity-70"
            >
              {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
              {isSaving ? 'Saving...' : 'Save Post'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}