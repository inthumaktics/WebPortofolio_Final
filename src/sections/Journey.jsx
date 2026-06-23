import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Code, Monitor, Smartphone, Activity, Globe, BookOpen, Rocket, Zap } from 'lucide-react';

export default function Journey() {
const timelineItems = [
  {
    year: 'Sept 2024',
    title: 'Started Information Systems',
    subtitle: 'Academic Foundations — Semester 1',
    items: [
      'Information Systems Foundations',
      'Programming Fundamentals',
      'Mathematical Thinking',
      'Leadership & Communication',
      'Python Self-Learning'
    ],
    icon: <Calendar className="text-white" size={16} />,
    badgeColor: 'bg-blue-600',
    delay: 0.1,
    type: 'academic',
  },
  {
    year: 'Feb 2025',
    title: 'Exploring Systems & UI/UX',
    subtitle: 'Semester 2',
    items: [
      'Algorithms & Programming',
      'Database Concepts',
      'Business Process Analysis',
      'UI/UX Design',
      'Design Thinking'
    ],
    hasProjects: true,
    icon: <Code className="text-white" size={16} />,
    badgeColor: 'bg-purple-600',
    delay: 0.2,
    type: 'exploring',
  },
  {
    year: 'Sept 2025',
    title: 'Entering Web Development',
    subtitle: 'Semester 3',
    items: [
      'Software Development',
      'Web Technologies',
      'Database Systems',
      'AI Concepts',
      'Front-end Web Development'
    ],
    hasProjects: true,
    icon: <Monitor className="text-white" size={16} />,
    badgeColor: 'bg-green-600',
    delay: 0.3,
    type: 'web',
  },
  {
    year: 'Feb 2026',
    title: 'Building Real-World Applications',
    subtitle: 'Semester 4',
    items: [
      'Information Systems Design',
      'UX Research & Design',
      'Mobile Development',
      'Computer Networks & Security',
      'Enterprise Architecture',
      'AI Engineer'
    ],
    hasProjects: true,
    icon: <Smartphone className="text-white" size={16} />,
    badgeColor: 'bg-orange-600',
    delay: 0.4,
    type: 'application',
  },
  {
    year: 'Current Focus',
    title: 'Technology, Research & Product Building',
    subtitle: 'Current Focus',
    items: [
      'Building Digital Products',
      'Full-stack Development',
      'Machine Learning & Deep Learning',
      'English Speaking',
      'Biomedical Engineering Exploration'
    ],
    hasProjects: true,
    icon: <Activity className="text-white" size={16} />,
    badgeColor: 'bg-red-600',
    delay: 0.5,
    isCurrent: true,
    type: 'current',
  },
  {
    year: 'Future Goals',
    title: 'Impact Through Technology',
    subtitle: 'Vision & Aspirations',
    items: [
      'Software Engineering Experience',
      'Research & Innovation',
      'Biomedical Engineering Master\'s Degree',
      'Healthcare Technology Solutions',
      'Assistive Technology Development'
    ],
    icon: <Globe className="text-white" size={16} />,
    badgeColor: 'bg-indigo-600',
    delay: 0.6,
    isFuture: true,
    type: 'future',
    goals: true,
  },
];

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };


  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
  }, [timelineItems]);

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
      const offset = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const CARD_WIDTH = 290;
  const GAP = 32;

  const timelineWidth =
    timelineItems.length * CARD_WIDTH +
    (timelineItems.length - 1) * GAP;

  return (
    <section id="journey" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-16">
          <span className="w-2.5 h-2.5 bg-primary rounded-full" />
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Learning Journey</h2>
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
              className="absolute left-0 top-[220px] -translate-y-1/2 z-30 w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Right Arrow Button */}
          {showRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-[220px] -translate-y-1/2 z-30 w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Subtle fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none z-20" />

          {/* Horizontal scroll wrapper */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="overflow-x-auto scroll-smooth scrollbar-hide select-none cursor-grab active:cursor-grabbing pb-8 pt-4 px-12"
          >
            <div
              className="relative"
              style={{ width: `${timelineWidth}px` }}
            >
              {/* Continuous Timeline Line */}
              <div
                className="absolute top-[88px] border-t-2 border-dashed border-slate-300 dark:border-slate-800 z-0"
                style={{
                  left: '145px',
                  width: `${timelineWidth - 290}px`,
                }}
              />

              <div className="flex gap-8 relative z-10 items-stretch">
              {timelineItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center flex-shrink-0 w-[290px]">

                  {/* Year Label */}
                  <motion.span
                    className={`text-sm font-bold text-white px-4 py-1.5 rounded-full ${item.badgeColor} shadow-md mb-4`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay, duration: 0.3 }}
                  >
                    {item.year}
                  </motion.span>

                  {/* Timeline Circle Node */}
                  <motion.div
                    className={`w-8 h-8 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-lg relative ${item.badgeColor}`}
                    initial={{ scale: 0.3, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay + 0.1, duration: 0.4, type: 'spring' }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Vertical Dashed Drop Line */}
                  <div className="h-10 w-0.5 border-r-2 border-dashed border-slate-300 dark:border-slate-800 my-2" />

                  {/* Description Card */}
                  <motion.div
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm text-left w-full hover:shadow-md transition-all duration-300 flex-grow flex flex-col min-h-[220px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay + 0.2, duration: 0.4 }}
                  >
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug mb-0.5">
                      {item.title}
                    </h3>
                    <h4 className="text-xs font-semibold text-primary dark:text-blue-400 mb-3">
                      {item.subtitle}
                    </h4>
                    <div className="flex-grow flex flex-col justify-between">
                      <ul className="space-y-1.5">
                        {item.items.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {item.hasProjects && (
                        <button
                          onClick={handleScrollToProjects}
                          className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors uppercase tracking-wider flex items-center gap-1 group/link cursor-pointer w-full text-left"
                        >
                          <span>View Related Projects</span>
                          <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                        </button>
                      )}
                    </div>
                  </motion.div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden relative pl-8 py-2 text-left">
          {/* Main Vertical Dashed Line */}
          <div className="absolute top-0 bottom-0 left-[19px] w-0.5 border-l-2 border-dashed border-slate-300 dark:border-slate-800 z-0" />

          <div className="flex flex-col gap-10 relative z-10">
            {timelineItems.map((item, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-4 md:gap-8">

                {/* Timeline Circle Node & Year */}
                <div className="absolute -left-[28px] top-1.5 flex items-center justify-center">
                  <motion.div
                    className={`w-9 h-9 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center shadow-md ${item.badgeColor}`}
                    initial={{ scale: 0.3, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Timeline Details Card */}
                <motion.div
                  className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex-1 ml-4 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-[10px] font-bold text-white px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h3>
                  </div>
                  <h4 className="text-xs font-semibold text-primary dark:text-blue-400 mb-3">
                    {item.subtitle}
                  </h4>
                  <div>
                    <ul className="space-y-1.5">
                      {item.items.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {item.hasProjects && (
                      <button
                        onClick={handleScrollToProjects}
                        className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors uppercase tracking-wider flex items-center gap-1 group/link cursor-pointer w-full text-left"
                      >
                        <span>View Related Projects</span>
                        <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                      </button>
                    )}
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
