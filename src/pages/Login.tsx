import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import Navbar from '../components/NavBar';
import { FiEye, FiEyeOff, FiMail, FiLock } from 'react-icons/fi';
import { toast } from '@/components/ui/use-toast';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
        toast({ title: 'Login Successful', description: 'Welcome back!' });
      } else {
        await signup(email, password, name);
        toast({ title: 'Signup Successful', description: 'You are now registered!' });
      }
      navigate('/');
    } catch (err) {
      // No error shown to user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col dark:bg-[hsl(var(--category-bg))]">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-grow flex items-center justify-center px-4 py-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md p-8 bg-white border border-gray-200 shadow-2xl rounded-3xl space-y-6 dark:bg-[#111622] dark:text-white relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center text-gray-800 dark:text-white tracking-tight"
          >
            {isLogin ? 'Welcome Back 👋' : 'Join Us 🚀'}
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm bg-white/70 dark:bg-white/20 dark:text-white"
                />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="relative"
            >
              <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm bg-white/70 dark:bg-white/20 dark:text-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm bg-white/70 dark:bg-white/20 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
            >
              {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Sign Up'}
            </motion.button>
          </form>

          <motion.div
            className="text-sm text-center text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {isLogin ? "Don't have an account?" : 'Already registered?'}{' '}
            <button
              type="button"
              className="text-blue-500 hover:text-blue-600 font-medium ml-1 transition"
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;