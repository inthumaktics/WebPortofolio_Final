import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  BookOpen,
  Users,
  Building2,
  HeartHandshake,
  Microscope,
  Award,
  GraduationCap,
  Laptop,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { experiences } from '../data/experiences';

// Soft-filled badge colors matching requested palette
const categoryColors = {
  Internship: 'bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400',
  Work: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400',
  Organization: 'bg-orange-50 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400',
  Volunteer: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400',
  Assistant: 'bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400',
  Teaching: 'bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400',
  'Current Position': 'bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400',
  Future: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
};

// Text color class for category icons
const iconColors = {
  Internship: 'text-blue-500 dark:text-blue-400',
  Work: 'text-indigo-500 dark:text-indigo-400',
  Student: 'text-indigo-500 dark:text-indigo-400',
  Leadership: 'text-blue-500 dark:text-blue-400',
  Organization: 'text-orange-500 dark:text-orange-400',
  Volunteer: 'text-emerald-500 dark:text-emerald-400',
  Assistant: 'text-green-500 dark:text-green-400',
  Teaching: 'text-green-500 dark:text-green-400',
  'Current Position': 'text-green-500 dark:text-green-400',
  Future: 'text-slate-400 dark:text-slate-500'
};

// Status Badge colors - soft filled for premium minimal look
const statusColors = {
  Current: 'bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-300',
  Completed: 'bg-slate-100 text-slate-600 dark:bg-slate-800/80 dark:text-slate-400',
  Past: 'bg-slate-100 text-slate-600 dark:bg-slate-800/80 dark:text-slate-400',
  Future: 'bg-slate-100 text-slate-600 dark:bg-slate-800/80 dark:text-slate-400'
};

// Helper function to resolve category-specific icons
const getCategoryIcon = (category) => {
  switch (category) {
    case 'Internship':
      return <Briefcase size={16} />;
    case 'Work':
      return <Briefcase size={16} />;
    case 'Leadership':
      return <Users size={16} />;
    case 'Teaching':
      return <BookOpen size={16} />;
    case 'Organization':
      return <Building2 size={16} />;
    case 'Volunteer':
      return <HeartHandshake size={16} />;
    case 'Research':
      return <Microscope size={16} />;
    case 'Competition':
      return <Award size={16} />;
    case 'Assistant':
      return <GraduationCap size={16} />;
    case 'Current Position':
    default:
      return <Laptop size={16} />;
  }
};

export default function Experience() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Constants for desktop layout calculations
  const NODE_WIDTH = 260;
  const GAP = 48; // Space between nodes
  const timelineWidth = experiences.length * NODE_WIDTH + (experiences.length - 1) * GAP;

  // Helper function to check if an experience status is active (completed or ongoing)
  const isActiveStatus = (status) => {
    if (!status) return false;
    const s = status.toLowerCase();
    return s === 'completed' || s === 'ongoing' || s === 'current';
  };

  const lastActiveIdx = experiences.findLastIndex(item => isActiveStatus(item.status));

  // Helper function to calculate precise synced animation delay
  const getRevealDelay = (idx, lastActive, totalDuration = 1.5) => {
    if (lastActive <= 0) return 0;
    
    // For active/ongoing nodes, calculate based on the progress line's easeOut growth
    if (idx <= lastActive) {
      const x = idx / lastActive;
      // Map through quadratic easeOut inverse: t = 1 - sqrt(1 - x)
      const t = 1 - Math.sqrt(1 - x);
      return t * totalDuration;
    }
    
    // For future nodes, stagger them sequentially after the progress line finishes
    const overflow = idx - lastActive;
    return totalDuration + overflow * 0.2;
  };

  // Refs for dynamic DOM position calculation
  const itemRefs = useRef([]);

  // State to hold dynamically computed line styles
  const [lineStyles, setLineStyles] = useState(() => {
    const fallbackLeft = NODE_WIDTH / 2;
    const fallbackTotal = (experiences.length - 1) * (NODE_WIDTH + GAP);
    const fallbackActive = lastActiveIdx !== -1 ? lastActiveIdx * (NODE_WIDTH + GAP) : 0;
    return {
      left: fallbackLeft,
      totalWidth: fallbackTotal,
      activeWidth: fallbackActive
    };
  });

  // Calculate and update the line styles based on actual DOM measurements
  useLayoutEffect(() => {
    const calculateProgress = () => {
      const targetIdx = experiences.findLastIndex(item => isActiveStatus(item.status));
      const firstNode = itemRefs.current[0];
      const lastNode = itemRefs.current[experiences.length - 1];

      if (firstNode && lastNode) {
        const startPosition = firstNode.offsetLeft + firstNode.offsetWidth / 2;
        const totalWidth = (lastNode.offsetLeft + lastNode.offsetWidth / 2) - startPosition;

        let activeWidth = 0;
        if (targetIdx !== -1 && itemRefs.current[targetIdx]) {
          const currentNode = itemRefs.current[targetIdx];
          const centerPosition = currentNode.offsetLeft + currentNode.offsetWidth / 2;
          activeWidth = centerPosition - startPosition;
        }

        setLineStyles({
          left: startPosition,
          totalWidth,
          activeWidth
        });
      }
    };

    calculateProgress();

    // Event listeners to handle resizing and horizontal layout shifts
    window.addEventListener('resize', calculateProgress);

    const resizeObserver = new ResizeObserver(() => {
      calculateProgress();
    });
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => {
      window.removeEventListener('resize', calculateProgress);
      resizeObserver.disconnect();
    };
  }, [experiences]);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 5);
      setShowRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

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

      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        el.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
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
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -NODE_WIDTH - GAP : NODE_WIDTH + GAP;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900/60 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 text-left">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary rounded-full" />
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Experience</h2>
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-md md:text-right">
            Chronological roadmap of career growth, leadership, and achievements.
          </p>
        </div>

        {/* Desktop & Tablet Horizontal Timeline */}
        <div className="hidden md:block relative mt-8 group">
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
              className="absolute left-0 top-[190px] -translate-y-1/2 z-30 w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md rounded-full flex items-center justify-center text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Right Arrow Button */}
          {showRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-[190px] -translate-y-1/2 z-30 w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md rounded-full flex items-center justify-center text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Subtle fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-slate-900/60 to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-slate-900/60 to-transparent pointer-events-none z-20" />

          {/* Horizontal scroll wrapper - Added padding-top to pt-48 to prevent absolute tooltip clipping */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="overflow-x-auto scroll-smooth scrollbar-hide select-none cursor-grab active:cursor-grabbing pb-12 pt-64 px-12 relative"
          >
            <div
              className="relative h-[280px]"
              style={{ width: `${timelineWidth}px` }}
            >
              {/* Timeline Base Gray Line */}
              <div
                className="absolute top-[18px] h-[4px] bg-slate-400 dark:bg-slate-600 z-0 rounded-full"
                style={{
                  left: `${lineStyles.left}px`,
                  width: `${lineStyles.totalWidth}px`
                }}
              />

              {/* Animated Progress Blue Line Overlay */}
              {lineStyles.activeWidth > 0 && (
                <motion.div
                  className="absolute top-[18px] h-[4px] bg-primary z-0 rounded-full"
                  style={{
                    left: `${lineStyles.left}px`,
                    width: `${lineStyles.activeWidth}px`,
                    originX: 0
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
                />
              )}

              <div className="flex gap-12 relative z-10 items-start">
                {experiences.map((item, idx) => {
                  const isHovered = hoveredIndex === idx;
                  const isCurrent = item.status?.toLowerCase() === 'current' || item.status?.toLowerCase() === 'ongoing';
                  const isFuture = item.status?.toLowerCase() === 'future';
                  const isActive = !isFuture;

                  // Get precise animation delays synced with progress line easeOut growth
                  const nodeDelay = getRevealDelay(idx, lastActiveIdx, 1.5) + 0.1;
                  const contentDelay = nodeDelay + 0.15;

                  // Dynamic styles for the node based on status
                  const nodeSizeClass = isCurrent ? 'w-12 h-12 -mt-1' : 'w-10 h-10';

                  // Glow class for Current/Ongoing node
                  const glowClass = isCurrent
                    ? 'shadow-[0_0_15px_rgba(37,99,235,0.2)] dark:shadow-[0_0_20px_rgba(37,99,235,0.4)] border-primary/50 dark:border-primary/50'
                    : isActive
                      ? 'border-primary/30 dark:border-primary/30 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 shadow-sm';

                  const hoverGlow = isHovered
                    ? isCurrent
                      ? 'shadow-[0_0_18px_rgba(37,99,235,0.35)] dark:shadow-[0_0_24px_rgba(37,99,235,0.6)] border-primary'
                      : isFuture
                        ? 'shadow-md border-slate-350 dark:border-slate-700'
                        : 'shadow-[0_0_12px_rgba(37,99,235,0.2)] dark:shadow-[0_0_16px_rgba(37,99,235,0.4)] border-primary/50 dark:border-primary/50'
                    : glowClass;

                  return (
                    <div
                      key={idx}
                      ref={el => itemRefs.current[idx] = el}
                      className="flex flex-col items-center flex-shrink-0 relative"
                      style={{ width: `${NODE_WIDTH}px` }}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Timeline Circle Node */}
                      <div className="relative z-20">
                        <motion.div
                          className={`rounded-full border bg-white dark:bg-slate-900 flex items-center justify-center cursor-pointer transition-all duration-250 ease-out ${nodeSizeClass} ${hoverGlow}`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.08 }}
                          transition={{
                            scale: { duration: 0.25, ease: 'easeOut', delay: nodeDelay },
                            opacity: { duration: 0.25, ease: 'easeOut', delay: nodeDelay }
                          }}
                        >
                          <span className={iconColors[item.category] || 'text-slate-500 dark:text-slate-400'}>
                            {getCategoryIcon(item.category)}
                          </span>
                        </motion.div>

                        {/* Floating Detail Card (Tooltip style above node) */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              className="absolute bottom-[52px] left-1/2 -translate-x-1/2 w-80 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 shadow-xl z-50 text-left pointer-events-auto"
                              initial={{ opacity: 0, y: 8, scale: 0.96 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.96 }}
                              transition={{ duration: 0.2, ease: 'easeOut' }}
                            >
                              {/* Small triangle arrow at bottom of card */}
                              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-950 border-r border-b border-slate-200 dark:border-slate-800 rotate-45" />

                              {/* Position Title & Status */}
                              <div className="flex justify-between items-start gap-2 mb-0.5">
                                <h3 className="text-xs font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
                                  {item.title}
                                </h3>
                                <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-full ${statusColors[item.status] || statusColors.Completed}`}>
                                  {item.status}
                                </span>
                              </div>

                              {/* Org & Duration */}
                              <p className="text-[10px] font-semibold text-primary dark:text-blue-400 mb-0">
                                {item.organization}
                              </p>
                              <div className="flex items-center gap-1.5 text-[9px] text-slate-400 dark:text-slate-500 mb-1.5">
                                <Calendar size={9} />
                                <span>{item.duration}</span>
                              </div>

                              {/* 3 Responsibilities */}
                              <ul className="space-y-1 mb-1.5">
                                {item.description.map((bullet, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-1.5 text-[10px] leading-relaxed text-slate-600 dark:text-slate-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>

                              {/* Tech Tools Tags */}
                              {item.tools && item.tools.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                                  {item.tools.map((tool, tIdx) => (
                                    <span key={tIdx} className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-slate-55 dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 text-slate-500 dark:text-slate-400">
                                      {tool}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Optional Links */}
                              {(item.link || item.certificate) && (
                                <div className="flex gap-3 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                                  {item.certificate && (
                                    <a
                                      href={item.certificate}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[8px] font-bold text-primary dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                                    >
                                      <span>View Certificate</span>
                                      <ExternalLink size={8} />
                                    </a>
                                  )}
                                  {item.link && (
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[8px] font-bold text-primary dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                                    >
                                      <span>Website</span>
                                      <ExternalLink size={8} />
                                    </a>
                                  )}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Vertical Connector Line */}
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: nodeDelay + 0.05, duration: 0.25, ease: 'easeOut' }}
                        style={{ originY: 0 }}
                        className={`w-[2px] origin-top h-7 transition-colors duration-300 ${isActive
                            ? 'bg-primary'
                            : 'bg-slate-400 dark:bg-slate-600'
                          }`}
                      />

                      {/* Typography Hierarchy Content Block */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: contentDelay, duration: 0.4, ease: 'easeOut' }}
                        className="text-center flex flex-col items-center select-none"
                      >
                        <motion.div
                          animate={{ y: isHovered ? -4 : 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="flex flex-col items-center"
                        >
                          {/* 1. YEAR (small) */}
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                            {item.year}
                          </span>

                          {/* 2. TITLE (largest) */}
                          <h4 className={`font-extrabold text-slate-900 dark:text-slate-100 max-w-[220px] mt-2 leading-snug transition-all duration-300 ${isCurrent ? 'text-[17px] text-primary dark:text-blue-400 font-black' : 'text-[15px]'
                            }`}>
                            {item.title}
                          </h4>

                          {/* 3. Organization (gray) */}
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 max-w-[200px] truncate">
                            {item.organization}
                          </p>

                          {/* 4. Role Badge (soft filled) */}
                          <span className={`inline-block mt-3 text-[9px] font-semibold uppercase px-2.5 py-0.5 rounded-full transition-all duration-200 ${categoryColors[item.category] || categoryColors.Work
                            } ${isHovered ? 'brightness-105 dark:brightness-110 contrast-105' : ''}`}>
                            {item.category}
                          </span>
                        </motion.div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden relative pl-8 py-2 text-left mt-8">
          <div className="flex flex-col relative z-10">
            {experiences.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              const isCurrent = item.status?.toLowerCase() === 'current' || item.status?.toLowerCase() === 'ongoing';
              const isFuture = item.status?.toLowerCase() === 'future';
              const isActive = !isFuture;

              // Glow on current/ongoing node
              const glowClass = isCurrent
                ? 'shadow-[0_0_12px_rgba(37,99,235,0.2)] dark:shadow-[0_0_16px_rgba(37,99,235,0.4)] border-primary/50 dark:border-primary/50'
                : isActive
                  ? 'border-primary/30 dark:border-primary/30 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 shadow-sm';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
                  className="relative flex flex-col pb-8"
                >
                  {/* Progress Line Segments */}
                  {idx < experiences.length - 1 && (
                    <motion.div
                      className={`absolute left-[21px] top-[24px] bottom-0 w-[2px] z-0 ${idx < lastActiveIdx
                          ? 'bg-primary'
                          : 'bg-slate-400 dark:bg-slate-600'
                        }`}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.08 }}
                      style={{ originY: 0 }}
                    />
                  )}
                  {idx > 0 && (
                    <motion.div
                      className={`absolute left-[21px] top-0 h-[24px] w-[2px] z-0 ${idx <= lastActiveIdx
                          ? 'bg-primary'
                          : 'bg-slate-400 dark:bg-slate-600'
                        }`}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.15, ease: 'easeOut', delay: idx * 0.08 }}
                      style={{ originY: 0 }}
                    />
                  )}

                  {/* Timeline Circle Node & Header */}
                  <div className="flex items-center gap-4 relative">
                    <div className={`absolute -left-[28px] top-1/2 -translate-y-1/2 flex items-center justify-center bg-white dark:bg-slate-900 border rounded-full shadow-sm z-10 ${isCurrent ? 'w-8 h-8 -left-[29px]' : 'w-7 h-7'
                      } ${glowClass}`}>
                      <span className={iconColors[item.category] || 'text-slate-500 dark:text-slate-400'}>
                        {getCategoryIcon(item.category)}
                      </span>
                    </div>

                    <div
                      onClick={() => toggleExpand(idx)}
                      className="flex-1 flex justify-between items-center bg-slate-50/50 hover:bg-slate-50 dark:bg-slate-900/30 dark:hover:bg-slate-900/50 border border-slate-100 dark:border-slate-800/60 rounded-xl p-3.5 pl-6 cursor-pointer transition-all duration-200"
                    >
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                          {item.year}
                        </span>
                        <h3 className={`font-bold text-slate-900 dark:text-slate-100 mt-0.5 leading-snug truncate ${isCurrent ? 'text-sm text-primary dark:text-blue-400' : 'text-xs'
                          }`}>
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-slate-500 dark:text-slate-455 truncate">
                          {item.organization}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                        <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-full ${categoryColors[item.category] || categoryColors.Work}`}>
                          {item.category}
                        </span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-slate-400 dark:text-slate-500"
                        >
                          <ChevronDown size={14} />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details Card */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 pl-4 border-l border-slate-100 dark:border-slate-800/80 pt-3 pb-2 space-y-3">
                          {/* Duration and Status */}
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500">
                              <Calendar size={10} />
                              <span>{item.duration}</span>
                            </div>
                            <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-full ${statusColors[item.status] || statusColors.Completed}`}>
                              {item.status}
                            </span>
                          </div>

                          {/* Responsibilities */}
                          <ul className="space-y-1.5">
                            {item.description.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-1.5 text-[11px] leading-relaxed text-slate-600 dark:text-slate-455">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tools */}
                          {item.tools && item.tools.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {item.tools.map((tool, tIdx) => (
                                <span key={tIdx} className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Optional Links */}
                          {(item.link || item.certificate) && (
                            <div className="flex gap-3 pt-1">
                              {item.certificate && (
                                <a
                                  href={item.certificate}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[9px] font-bold text-primary dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                                >
                                  <span>View Certificate</span>
                                  <ExternalLink size={8} />
                                </a>
                              )}
                              {item.link && (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[9px] font-bold text-primary dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                                >
                                  <span>Website</span>
                                  <ExternalLink size={8} />
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
