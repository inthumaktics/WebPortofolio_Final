import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  FileText, 
  BookOpen, 
  Play, 
  Code 
} from 'lucide-react';
import { Github } from '../components/Icons';
import { projectsData } from '../data/projects';

// --- PROJECT CARD COMPONENT ---
function ProjectCard({ project, delay = 0 }) {
  // Determine if there are action buttons to display
  const hasButtons = 
    project.liveUrl || 
    project.githubUrl || 
    project.documentationUrl || 
    project.caseStudyUrl || 
    project.prototypeUrl || 
    project.videoUrl;

  return (
    <motion.div
      className="flex flex-col h-full w-[340px] sm:w-[360px] shrink-0 bg-slate-50/50 hover:bg-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Top Area: Thumbnail Container */}
      <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/80 shadow-sm mb-5 relative bg-slate-100 dark:bg-slate-950">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Optional Status Badge */}
        {project.status && (
          <span className={`absolute top-3 left-3 px-2.5 py-1 text-[9px] font-extrabold text-white border rounded-lg uppercase tracking-widest shadow-sm ${
            project.status === 'Completed'
              ? 'bg-emerald-600/80 border-emerald-500/30 dark:bg-emerald-700/80 dark:border-emerald-600/50'
              : project.status === 'In Progress'
              ? 'bg-blue-600/80 border-blue-500/30 dark:bg-blue-700/80 dark:border-blue-600/50'
              : 'bg-slate-900/75 dark:bg-slate-950/75 border-slate-700/30 dark:border-slate-800/50'
          }`}>
            {project.status}
          </span>
        )}
      </div>

      {/* Project Information */}
      <div className="flex flex-col flex-grow">
        {/* Project Name */}
        <h3 className="text-xl font-extrabold text-slate-950 dark:text-slate-100 mb-1 group-hover:text-primary transition-colors flex items-center justify-between">
          <span>{project.name}</span>
          {project.liveUrl && (
            <ArrowUpRight size={18} className="text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          )}
        </h3>

        {/* Short description (limited to max 2-3 lines using line-clamp) */}
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Role: Dedicated Recruiter-friendly Section */}
        <div className="mb-4">
          <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">
            My Role
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50/80 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30">
            {project.role}
          </span>
        </div>

        {/* Technology Stack Tags */}
        <div className="mb-5">
          <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2">
            Technologies
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 px-2.5 py-1 rounded-lg transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons at the Bottom */}
      {hasButtons && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
          {/* Primary CTA: Live Demo */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-blue-600/10 hover:shadow-blue-600/20 transition-all active:scale-95"
            >
              <span>Live Demo</span>
              <ArrowUpRight size={14} />
            </a>
          )}

          {/* Secondary CTAs */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 border border-slate-350 dark:border-slate-700 hover:border-slate-450 dark:hover:border-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-350 text-xs font-bold px-3 py-2.5 rounded-xl transition-all active:scale-95"
              aria-label="GitHub Repository"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          )}

          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 border border-slate-350 dark:border-slate-700 hover:border-slate-450 dark:hover:border-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-350 text-xs font-bold px-3 py-2.5 rounded-xl transition-all active:scale-95"
            >
              <BookOpen size={13} />
              <span>Case Study</span>
            </a>
          )}

          {project.documentationUrl && (
            <a
              href={project.documentationUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 border border-slate-350 dark:border-slate-700 hover:border-slate-450 dark:hover:border-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-350 text-xs font-bold px-3 py-2.5 rounded-xl transition-all active:scale-95"
            >
              <FileText size={13} />
              <span>Docs</span>
            </a>
          )}

          {project.prototypeUrl && (
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 border border-slate-350 dark:border-slate-700 hover:border-slate-450 dark:hover:border-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-350 text-xs font-bold px-3 py-2.5 rounded-xl transition-all active:scale-95"
            >
              <Code size={13} />
              <span>Prototype</span>
            </a>
          )}

          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 border border-slate-350 dark:border-slate-700 hover:border-slate-450 dark:hover:border-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-350 text-xs font-bold px-3 py-2.5 rounded-xl transition-all active:scale-95"
            >
              <Play size={13} />
              <span>Video Demo</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

// --- PROJECT SLIDER COMPONENT ---
function ProjectSlider({ projects }) {
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
  }, [projects]);

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
      const offset = direction === 'left' ? -380 : 380;
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
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.name}
              project={project}
              delay={idx * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// --- MAIN PROJECTS SECTION COMPONENT ---
export default function Projects() {
  // Filter projects by type
  const personalProjects = projectsData.filter((p) => p.projectType === 'personal');
  const teamProjects = projectsData.filter((p) => p.projectType === 'team');

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900/40 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Section Header */}
        <div className="flex items-center gap-2 mb-16">
          <span className="w-2.5 h-2.5 bg-primary rounded-full" />
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Projects</h2>
        </div>

        {/* --- PERSONAL PROJECTS SUBSECTION --- */}
        <div className="mb-20">
          <div className="mb-6 text-left">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-100 mb-2">
              Personal Projects
            </h3>
            <p className="text-sm text-slate-650 dark:text-slate-400 max-w-3xl leading-relaxed">
              Projects independently designed and developed to explore ideas, solve problems, and continuously improve technical skills.
            </p>
          </div>

          {/* Horizontal Slider Showcase */}
          <ProjectSlider projects={personalProjects} />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 dark:bg-slate-800/80 mb-20" />

        {/* --- TEAM PROJECTS SUBSECTION --- */}
        <div>
          <div className="mb-6 text-left">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-100 mb-2">
              Team Projects
            </h3>
            <p className="text-sm text-slate-650 dark:text-slate-400 max-w-3xl leading-relaxed">
              Projects developed collaboratively, highlighting teamwork, communication, and individual responsibilities.
            </p>
          </div>

          {/* Horizontal Slider Showcase */}
          <ProjectSlider projects={teamProjects} />
        </div>

      </div>
    </section>
  );
}
