import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { achievementsData } from '../data/achievements';

const filterCategories = [
  { id: 'all', name: 'All' },
  { id: 'awards', name: 'Awards' },
  { id: 'professional', name: 'Professional Certifications' },
  { id: 'learning', name: 'Learning & Development' },
  { id: 'leadership', name: 'Leadership & Experience' },
  { id: 'publications', name: 'Publications' }
];

// --- CERTIFICATE CARD COMPONENT ---
function CertificateCard({ cert, onPreview }) {
  return (
    <motion.div
      className="flex flex-col h-full w-[290px] sm:w-[310px] shrink-0 bg-slate-50/50 hover:bg-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Section: Thumbnail Preview */}
      <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/80 shadow-sm mb-4 relative bg-slate-100 dark:bg-slate-950">
        <img
          src={cert.thumbnail}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
          loading="lazy"
        />
      </div>

      {/* Information */}
      <div className="flex flex-col flex-grow text-left mb-4">
        <h3 className="text-sm font-extrabold text-slate-950 dark:text-slate-100 mb-1 group-hover:text-primary transition-colors leading-snug">
          {cert.title}
        </h3>
        <p className="text-[10px] font-semibold text-slate-450 dark:text-slate-505 uppercase tracking-wider mb-0.5">
          {cert.issuer}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {cert.issueDate}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
        {/* Preview Button */}
        <button
          onClick={() => onPreview(cert)}
          className="flex-grow flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-md shadow-blue-600/10 hover:shadow-blue-600/20 transition-all active:scale-95 cursor-pointer"
        >
          Preview
        </button>

        {/* Verify Button */}
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-grow flex items-center justify-center border border-slate-350 dark:border-slate-700 hover:border-slate-450 dark:hover:border-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-350 text-xs font-bold py-2.5 px-3 rounded-xl transition-all active:scale-95 text-center"
          >
            Verify Credential
          </a>
        )}
      </div>
    </motion.div>
  );
}

// --- ACHIEVEMENT SLIDER COMPONENT ---
function AchievementSlider({ certificates, onPreview }) {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 5);
      setShowRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    // Reset scroll to left when certificates list changes (e.g. filter changed)
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      checkScroll();
    }
  }, [certificates]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);

      // Handle horizontal mouse wheel scroll
      const handleWheel = (e) => {
        if (e.deltaY !== 0) {
          const { scrollLeft, scrollWidth, clientWidth } = el;
          const isAtLeft = scrollLeft <= 0 && e.deltaY < 0;
          const isAtRight = scrollLeft >= scrollWidth - clientWidth && e.deltaY > 0;
          if (!isAtLeft && !isAtRight) {
            e.preventDefault();
            el.scrollLeft += e.deltaY;
          }
        }
      };
      el.addEventListener('wheel', handleWheel, { passive: false });

      // Check scroll status after images/assets load
      const timeoutId = setTimeout(checkScroll, 500);

      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        el.removeEventListener('wheel', handleWheel);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed factor
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -330 : 330;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-4 group/slider">
      {/* Scrollbar hide styling */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Left Arrow Button */}
      {showLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md rounded-full flex items-center justify-center text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 active:scale-95 transition-all cursor-pointer"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Right Arrow Button */}
      {showRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md rounded-full flex items-center justify-center text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 active:scale-95 transition-all cursor-pointer"
          aria-label="Scroll Right"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Subtle fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white dark:from-slate-900/40 to-transparent pointer-events-none z-20 transition-all duration-300 group-hover/slider:opacity-100" />
      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white dark:from-slate-900/40 to-transparent pointer-events-none z-20 transition-all duration-300 group-hover/slider:opacity-100" />

      {/* Horizontal scroll wrapper */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="overflow-x-auto scroll-smooth scrollbar-hide select-none cursor-grab active:cursor-grabbing pb-8 pt-4 px-2"
      >
        <div className="flex gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {certificates.map((cert) => (
              <CertificateCard
                key={cert.title}
                cert={cert}
                onPreview={onPreview}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// --- MAIN ACHIEVEMENTS SECTION COMPONENT ---
export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCloseModal = () => setSelectedCert(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCerts = activeFilter === 'all'
    ? achievementsData
    : achievementsData.filter(cert => cert.category === activeFilter);

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-slate-900/40 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-primary rounded-full" />
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Achievements</h2>
        </div>
        
        {/* Subtitle */}
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl text-left leading-relaxed mb-10">
          A collection of certifications, achievements, leadership experiences, and continuous learning throughout my academic and professional journey.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 justify-start mb-12">
          {filterCategories.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-250 border cursor-pointer select-none ${
                activeFilter === filter.id
                  ? 'bg-primary border-primary text-white shadow-md shadow-blue-600/15'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Single Slider Container */}
        {filteredCerts.length > 0 ? (
          <AchievementSlider 
            certificates={filteredCerts} 
            onPreview={setSelectedCert}
          />
        ) : (
          <div className="py-16 text-center text-slate-500 dark:text-slate-400">
            No achievements found in this category.
          </div>
        )}

      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 text-left"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>

              {/* Left Column: Full Certificate Image */}
              <div className="w-full md:w-3/5 aspect-[16/10] md:aspect-auto md:h-[400px] bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                <img
                  src={selectedCert.fullImage}
                  alt={selectedCert.title}
                  className="max-w-full max-h-full object-contain select-none pointer-events-none"
                />
              </div>

              {/* Right Column: Metadata & CTAs */}
              <div className="w-full md:w-2/5 flex flex-col justify-between py-2">
                <div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100/50 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900/30">
                    {selectedCert.category === 'awards' ? 'Award' :
                     selectedCert.category === 'professional' ? 'Professional Certification' :
                     selectedCert.category === 'learning' ? 'Learning & Development' :
                     selectedCert.category === 'leadership' ? 'Leadership & Experience' :
                     'Publication'}
                  </span>

                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-950 dark:text-slate-100 mt-4 mb-4 leading-snug">
                    {selectedCert.title}
                  </h3>
                  
                  <p className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest block mb-1">
                    Issuer
                  </p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-350 mb-4">
                    {selectedCert.issuer}
                  </p>

                  <p className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest block mb-1">
                    Date of Issue
                  </p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-350 mb-4">
                    {selectedCert.issueDate}
                  </p>

                  {selectedCert.credentialId && (
                    <>
                      <p className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest block mb-1">
                        Credential ID
                      </p>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-350 font-mono">
                        {selectedCert.credentialId}
                      </p>
                    </>
                  )}
                </div>

                {/* Verify Button in Modal */}
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 transition-all active:scale-95 w-full text-center"
                  >
                    Verify Credential
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
