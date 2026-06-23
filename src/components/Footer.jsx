import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-8 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
          &copy; 2026 Erika Ayu Febrianti. All rights reserved.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Designed & Built with React, Vite, & Tailwind CSS v4.
        </p>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${
          showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
