import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Lock, Mail, Loader2, AlertTriangle } from 'lucide-react';
import logo from "../assets/logo.png";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        navigate('/admin/dashboard'); // We will build this page next!
      }
    } catch (err: any) {
      setError(err.message || 'Failed to sign in.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f8f4] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
        <div className="text-center mb-8">
          <div className=" text-[#d4af37]  flex items-center justify-center mx-auto mb-4">
            <img src={logo} alt="Minora-logo" className="w-30 rounded-full  shadow-lg" />
          </div>
          <h1 className="text-2xl font-extrabold uppercase text-[#0a3028]">Admin Access</h1>
          <p className="text-sm font-serif text-gray-500 mt-2">Sign in to manage your blog posts.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-sm text-sm flex items-start gap-3 font-serif mb-6">
            <AlertTriangle size={18} className="shrink-0 mt-0.5 text-red-500" />
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-[#0a3028] mb-2 uppercase tracking-wider">Admin Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400" />
              </div>
              <input
                type="email"
                required
                className="w-full pl-12 pr-4 py-3 bg-[#f9f8f4] border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all font-serif text-sm"
                placeholder='admin@........'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0a3028] mb-2 uppercase tracking-wider">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-400" />
              </div>
              <input
                type="password"
                required
                className="w-full pl-12 pr-4 py-3 bg-[#f9f8f4] border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all font-serif text-sm"
                placeholder='*******'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#0a3028] text-white py-3.5 uppercase tracking-widest text-sm font-bold hover:bg-[#d4af37] transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
          >
            {isLoading ? <Loader2 className="animate-spin" size={18} /> : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}