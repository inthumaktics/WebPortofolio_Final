import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Code, Monitor, Smartphone, Activity, Globe, BookOpen, Rocket, Zap, GraduationCap, Laptop, X } from 'lucide-react';

// Import Certificate Mockup Images
import certificateAward from '../assets/certificate_award.png';
import certificateProfessional from '../assets/certificate_professional.png';
import certificateCompletion from '../assets/certificate_completion.png';
import logoCodepolitan from '../assets/logo-codepolitan.png';
import logoDicoding from '../assets/logo-dicoding.png';

// Platform logo inline SVGs
const GoogleLogo = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.86-4.53-5.84-4.53z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

const CourseraLogo = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#0056B3" />
    <path d="M16 14c-2.2 0-4 1.8-4 4s1.8 4 4 4h8c2.2 0 4-1.8 4-4s-1.8-4-4-4h-8z" fill="#FFF" opacity="0.8"/>
    <circle cx="20" cy="20" r="3" fill="#FFF" />
  </svg>
);

const renderNodeIcon = (item) => {
  if (item.type === 'academic') {
    if (item.icon === 'cap') return <GraduationCap className="text-white" size={16} />;
    return <BookOpen className="text-white" size={16} />;
  } else {
    if (item.icon === 'codepolitan') return <img src={logoCodepolitan} alt="Codepolitan" className="w-5 h-5 object-contain rounded-full" />;
    if (item.icon === 'dicoding') return <img src={logoDicoding} alt="Dicoding" className="w-5 h-5 object-contain rounded-full" />;
    if (item.icon === 'google') return <GoogleLogo size={14} />;
    if (item.icon === 'coursera') return <CourseraLogo size={18} />;
    return <Laptop className="text-white" size={14} />;
  }
};

export default function Journey() {
  const [selectedCert, setSelectedCert] = useState(null);
  
  const timelineItems = [
    {
      type: 'academic',
      date: 'Sept 2024',
      title: 'Started Information Systems',
      subtitle: 'Academic Foundations — Semester 1',
      icon: 'cap',
      topics: [
        'Information Systems Foundations',
        'Programming Fundamentals',
        'Mathematical Thinking',
        'Leadership & Communication'
      ],
      relatedProject: false,
      badgeColor: 'bg-blue-600',
      delay: 0.1
    },
    {
      type: 'independent',
      date: 'Nov 2024',
      title: 'Python Programming',
      subtitle: 'Codepolitan',
      icon: 'codepolitan',
      topics: [
        'Python Basics',
        'Object-Oriented Programming',
        'Functions & Modules',
        'Problem Solving'
      ],
      status: 'Completed',
      certificate: certificateCompletion,
      relatedProject: false,
      badgeColor: 'bg-amber-500',
      delay: 0.15
    },
    {
      type: 'academic',
      date: 'Feb 2025',
      title: 'Exploring Systems & UI/UX',
      subtitle: 'Semester 2',
      icon: 'book',
      topics: [
        'Algorithms & Programming',
        'Database Concepts',
        'Business Process Analysis',
        'UI/UX Design',
        'Design Thinking'
      ],
      relatedProject: true,
      badgeColor: 'bg-purple-600',
      delay: 0.2
    },
    {
      type: 'independent',
      date: 'Jun 2025',
      title: 'Frontend Development',
      subtitle: 'Codepolitan',
      icon: 'codepolitan',
      topics: [
        'HTML5 & CSS3 Essentials',
        'JavaScript DOM Manipulation',
        'Responsive Web Design',
        'Web Accessibility (a11y)'
      ],
      status: 'Completed',
      certificate: certificateCompletion,
      relatedProject: true,
      badgeColor: 'bg-cyan-500',
      delay: 0.25
    },
    {
      type: 'academic',
      date: 'Sept 2025',
      title: 'Entering Web Development',
      subtitle: 'Semester 3',
      icon: 'cap',
      topics: [
        'Software Development',
        'Web Technologies',
        'Database Systems',
        'AI Concepts',
        'Front-end Web Development'
      ],
      relatedProject: true,
      badgeColor: 'bg-green-600',
      delay: 0.3
    },
    {
      type: 'independent',
      date: 'Jan 2026',
      title: 'AI Engineer - Coding Camp Powered by DBS Foundation',
      subtitle: 'Dicoding',
      icon: 'dicoding',
      topics: [
        'Machine Learning Essentials',
        'Deep Learning Foundations',
        'Python for Data Science',
        'TensorFlow Integration'
      ],
      status: 'Completed',
      certificate: certificateProfessional,
      relatedProject: true,
      badgeColor: 'bg-rose-500',
      delay: 0.35
    },
    {
      type: 'academic',
      date: 'Feb 2026',
      title: 'Building Real-World Applications',
      subtitle: 'Semester 4',
      icon: 'book',
      topics: [
        'Information Systems Design',
        'UX Research & Design',
        'Mobile Development',
        'Computer Networks & Security',
        'Enterprise Architecture'
      ],
      relatedProject: true,
      badgeColor: 'bg-orange-600',
      delay: 0.4
    },
    {
      type: 'academic',
      date: 'Current Focus',
      title: 'Technology, Research & Product Building',
      subtitle: 'Current Focus',
      icon: 'cap',
      topics: [
        'Building Digital Products',
        'Full-stack Development',
        'Machine Learning & Deep Learning',
        'English Speaking',
        'Biomedical Engineering Exploration'
      ],
      relatedProject: true,
      badgeColor: 'bg-red-600',
      delay: 0.45,
      isCurrent: true
    },
    {
      type: 'academic',
      date: 'Future Goals',
      title: 'Impact Through Technology',
      subtitle: 'Vision & Aspirations',
      icon: 'book',
      topics: [
        'Software Engineering Experience',
        'Research & Innovation',
        'Biomedical Engineering Master\'s',
        'Healthcare Tech Solutions',
        'Assistive Tech Development'
      ],
      relatedProject: false,
      badgeColor: 'bg-indigo-600',
      delay: 0.5,
      isFuture: true
    }
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

  const getCardWidth = (item) => {
    return item.type === 'academic' ? 290 : 240;
  };
  
  const GAP = 32;

  const timelineWidth = timelineItems.reduce((acc, item, idx) => {
    return acc + getCardWidth(item) + (idx < timelineItems.length - 1 ? GAP : 0);
  }, 0);

  const firstCardWidth = timelineItems.length > 0 ? getCardWidth(timelineItems[0]) : 0;
  const lastCardWidth = timelineItems.length > 0 ? getCardWidth(timelineItems[timelineItems.length - 1]) : 0;
  const lineWidth = timelineWidth - (firstCardWidth / 2) - (lastCardWidth / 2);

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
              className="absolute left-0 top-[220px] -translate-y-1/2 z-30 w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md rounded-full flex items-center justify-center text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Right Arrow Button */}
          {showRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-[220px] -translate-y-1/2 z-30 w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md rounded-full flex items-center justify-center text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 active:scale-95 transition-all cursor-pointer"
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
                  left: `${firstCardWidth / 2}px`,
                  width: `${lineWidth}px`,
                }}
              />

              <div className="flex gap-8 relative z-10 items-start">
              {timelineItems.map((item, idx) => {
                const cardWidth = getCardWidth(item);
                const isAcademic = item.type === 'academic';
                
                return (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center flex-shrink-0"
                    style={{ width: `${cardWidth}px` }}
                  >
                    {/* Year Label */}
                    <motion.span
                      className={`text-sm font-bold text-white px-4 py-1.5 rounded-full ${item.badgeColor} shadow-md mb-4`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: item.delay, duration: 0.3 }}
                    >
                      {item.date}
                    </motion.span>

                    {/* Timeline Circle Node */}
                    <motion.div
                      className={isAcademic 
                        ? `w-8 h-8 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-lg relative ${item.badgeColor}`
                        : "w-7 h-7 rounded-full border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-center shadow-md relative"
                      }
                      initial={{ scale: 0.3, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: item.delay + 0.1, duration: 0.4, type: 'spring' }}
                    >
                      {renderNodeIcon(item)}
                    </motion.div>

                    {/* Vertical Dashed Drop Line */}
                    <div className="h-10 w-0.5 border-r-2 border-dashed border-slate-300 dark:border-slate-800 my-2" />

                    {/* Description Card */}
                    {isAcademic ? (
                      /* Academic Milestone Card (Type A) */
                      <motion.div
                        className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-md text-left w-full hover:shadow-lg transition-all duration-300 flex-grow flex flex-col"
                        style={{ minHeight: '305.25px' }}
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
                            {item.topics.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 mt-1.5 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {item.relatedProject && (
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
                    ) : (
                      /* Independent Learning Milestone Card (Type B) */
                      <motion.div
                        className="bg-slate-50/50 hover:bg-slate-100/50 dark:bg-slate-900/25 dark:hover:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm text-left w-full hover:shadow-md transition-all duration-300 flex-grow flex flex-col min-h-[200px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: item.delay + 0.2, duration: 0.4 }}
                      >
                        {/* Platform & Status */}
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[10px] font-extrabold text-slate-550 dark:text-slate-400 uppercase tracking-wider">
                            {item.subtitle}
                          </span>
                          {/* Status Badge */}
                          <span className={`inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full ${
                            item.status === 'Completed'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-450 dark:border-emerald-900/30'
                              : 'bg-amber-50 text-amber-700 border border-amber-100 dark:bg-amber-950/30 dark:text-amber-450 dark:border-amber-900/30'
                          }`}>
                            <span className={`w-1 h-1 rounded-full ${item.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                            {item.status}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 leading-snug mb-3">
                          {item.title}
                        </h3>

                        {/* Topics */}
                        <div className="flex-grow flex flex-col justify-between">
                          <ul className="space-y-1.5">
                            {item.topics.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mt-1.5 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Action Buttons */}
                          <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-slate-200/40 dark:border-slate-800/40">
                            {item.relatedProject && (
                              <button
                                onClick={handleScrollToProjects}
                                className="text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors uppercase tracking-wider flex items-center gap-1 group/link cursor-pointer w-full text-left"
                              >
                                <span>View Related Projects</span>
                                <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                              </button>
                            )}

                            {item.certificate && (
                              <button
                                onClick={() => setSelectedCert({ title: item.title, subtitle: item.subtitle, image: item.certificate })}
                                className="text-[10px] font-bold text-primary dark:text-blue-400 hover:text-primary-hover dark:hover:text-blue-300 transition-colors uppercase tracking-wider flex items-center gap-1 group/cert cursor-pointer w-full text-left"
                              >
                                <span>View Certificate</span>
                                <span className="transition-transform group-hover/cert:translate-x-0.5">→</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden relative pl-8 py-2 text-left">
          {/* Main Vertical Dashed Line */}
          <div className="absolute top-0 bottom-0 left-[21px] w-0.5 border-l-2 border-dashed border-slate-300 dark:border-slate-800 z-0" />

          <div className="flex flex-col gap-10 relative z-10">
            {timelineItems.map((item, idx) => {
              const isAcademic = item.type === 'academic';
              
              return (
                <div key={idx} className="relative flex flex-col gap-4">

                  {/* Timeline Circle Node & Year */}
                  {isAcademic ? (
                    <div className="absolute -left-[28px] top-1.5 flex items-center justify-center w-9 h-9">
                      <motion.div
                        className={`w-9 h-9 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center shadow-md ${item.badgeColor}`}
                        initial={{ scale: 0.3, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {renderNodeIcon(item)}
                      </motion.div>
                    </div>
                  ) : (
                    <div className="absolute -left-[24px] top-2 flex items-center justify-center w-7 h-7">
                      <motion.div
                        className="w-7 h-7 rounded-full border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm"
                        initial={{ scale: 0.3, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {renderNodeIcon(item)}
                      </motion.div>
                    </div>
                  )}

                  {/* Timeline Details Card */}
                  {isAcademic ? (
                    /* Academic Card (Type A) */
                    <motion.div
                      className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-md flex-1 ml-4 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-[10px] font-bold text-white px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                          {item.date}
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
                          {item.topics.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 mt-1.5 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {item.relatedProject && (
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
                  ) : (
                    /* Independent Learning Card (Type B) */
                    <motion.div
                      className="bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm flex-1 ml-4 hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold text-white px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                            {item.date}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                            {item.title}
                          </h3>
                        </div>

                        {/* Status Badge */}
                        <span className={`inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full ${
                          item.status === 'Completed'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-450 dark:border-emerald-900/30'
                            : 'bg-amber-50 text-amber-700 border border-amber-100 dark:bg-amber-950/30 dark:text-amber-450 dark:border-amber-900/30'
                        }`}>
                          <span className={`w-1 h-1 rounded-full ${item.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                          {item.status}
                        </span>
                      </div>

                      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
                        {item.subtitle}
                      </h4>
                      <div>
                        <ul className="space-y-1.5">
                          {item.topics.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-650 mt-1.5 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Action buttons on mobile */}
                        <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-slate-200/40 dark:border-slate-800/40">
                          {item.relatedProject && (
                            <button
                              onClick={handleScrollToProjects}
                              className="text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors uppercase tracking-wider flex items-center gap-1 group/link cursor-pointer w-full text-left"
                            >
                              <span>View Related Projects</span>
                              <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                            </button>
                          )}

                          {item.certificate && (
                            <button
                              onClick={() => setSelectedCert({ title: item.title, subtitle: item.subtitle, image: item.certificate })}
                              className="text-[10px] font-bold text-primary dark:text-blue-400 hover:text-primary-hover dark:hover:text-blue-300 transition-colors uppercase tracking-wider flex items-center gap-1 group/cert cursor-pointer w-full text-left"
                            >
                              <span>View Certificate</span>
                              <span className="transition-transform group-hover/cert:translate-x-0.5">→</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Certificate Modal */}
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
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 flex flex-col items-center gap-6"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>

              <div className="text-center">
                <h3 className="text-lg font-extrabold text-slate-950 dark:text-slate-100 mb-1">
                  Certificate of Completion
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedCert.title} — {selectedCert.subtitle}
                </p>
              </div>

              <div className="w-full aspect-[16/10] bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden flex items-center justify-center shadow-inner">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[450px] object-contain select-none pointer-events-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
