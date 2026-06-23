import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Bookmark, Users, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [startIndex, setStartIndex] = useState(0);
  const sliderRef = useRef(null);

  const filters = ['All', 'Certificate', 'Competition', 'Organization', 'Bootcamp'];

  const achievements = [
    {
      title: 'Dicoding Web Developer Certificate',
      category: 'Certificate',
      subtitle: 'Issued by Dicoding Indonesia',
      description: 'Completed comprehensive courses in responsive web development, JavaScript programming, and performance optimization.',
      icon: <Bookmark className="text-blue-600" size={20} />,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-900/30',
    },
    {
      title: 'Best Innovation Project Award',
      category: 'Competition',
      subtitle: 'UGM Student Hackathon',
      description: 'Won the top prize in UGM Ideation Day for building a mock assistive device tracking system using IoT sensors and React dashboards.',
      icon: <Trophy className="text-yellow-600" size={20} />,
      badgeColor: 'bg-yellow-50 text-yellow-700 border-yellow-100 dark:bg-yellow-950/30 dark:text-yellow-300 dark:border-yellow-900/30',
    },
    {
      title: 'Bangkit Academy Cohort Graduate',
      category: 'Bootcamp',
      subtitle: 'Google, GoTo, Traveloka Initiative',
      description: 'Completed rigorous 900+ hour curriculum in mobile development, soft skills, and cloud computing architectures.',
      icon: <Sparkles className="text-purple-600" size={20} />,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-900/30',
    },
    {
      title: 'IS Student Association (HMIG)',
      category: 'Organization',
      subtitle: 'Member of R&D Division',
      description: 'Active member organizing national seminars, conducting coding workshops, and contributing to regional community services.',
      icon: <Users className="text-teal-600" size={20} />,
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-100 dark:bg-teal-950/30 dark:text-teal-300 dark:border-teal-900/30',
    },
    {
      title: 'BioMed Tech Seminar Speaker',
      category: 'Competition',
      subtitle: 'National Healthcare Forum',
      description: 'Delivered research presentation on the application of smart dashboards for patient monitoring system integrations.',
      icon: <Award className="text-red-600" size={20} />,
      badgeColor: 'bg-red-50 text-red-700 border-red-100 dark:bg-red-950/30 dark:text-red-300 dark:border-red-900/30',
    },
  ];

  // Filter items
  const filteredAchievements = activeFilter === 'All'
    ? achievements
    : achievements.filter(item => item.category === activeFilter);

  // Reset slider index when filter changes
  useEffect(() => {
    setStartIndex(0);
  }, [activeFilter]);

  const cardsToShow = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };

  const handleNext = () => {
    if (startIndex < filteredAchievements.length - 1) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-slate-900/60 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Slider Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 text-left">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary rounded-full" />
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Achievements</h2>
          </div>

          {/* Carousel Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 cursor-pointer ${
                startIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-100'
              }`}
              aria-label="Previous Achievement"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= filteredAchievements.length - 1 || filteredAchievements.length <= 1}
              className={`p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 cursor-pointer ${
                startIndex >= filteredAchievements.length - 1 || filteredAchievements.length <= 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'opacity-100'
              }`}
              aria-label="Next Achievement"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 justify-start mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 border cursor-pointer ${
                activeFilter === filter
                  ? 'bg-primary border-primary text-white shadow-md shadow-blue-600/10'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-350 dark:hover:border-slate-700 shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Slider Window */}
        <div className="overflow-hidden py-2" ref={sliderRef}>
          <motion.div 
            className="flex gap-6 w-full"
            animate={{ x: `-${startIndex * 320}px` }} // Approximate width shift
            transition={{ type: 'spring', stiffness: 90, damping: 15 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredAchievements.map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="min-w-[280px] md:min-w-[320px] max-w-[320px] border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl p-6 text-left flex flex-col justify-between h-[280px] shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300 group cursor-default"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 rounded-xl group-hover:scale-105 group-hover:bg-blue-50/50 dark:group-hover:bg-blue-950/20 transition-all">
                        {item.icon}
                      </div>
                      <span className={`text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                        {item.category}
                      </span>
                    </div>

                    {/* Metadata */}
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors leading-snug mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                      {item.subtitle}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-450 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlight bar */}
                  <div className="h-1 w-0 bg-primary group-hover:w-16 transition-all duration-300 rounded-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
