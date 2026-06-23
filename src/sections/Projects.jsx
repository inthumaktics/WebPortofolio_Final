import { motion } from 'framer-motion';
import { ArrowUpRight, CheckSquare, ShieldAlert, FileCode, FolderGit, Timer } from 'lucide-react';
import { Github } from '../components/Icons';
import xploroMockup from '../assets/xploro_mockup.png';
import imaniqMockup from '../assets/imaniq_mockup.png';

export default function Projects() {
  const featuredProjects = [
    {
      title: 'XPLORO',
      subtitle: 'Tourism Platform for Foreign Tourists',
      description: 'An AI-powered smart tourism assistant for international tourists visiting Indonesia. Offers real-time local guide translations, personalized itinerary generation, and context-aware destination exploration.',
      tech: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      image: xploroMockup,
    },
    {
      title: 'ImanIQ',
      subtitle: 'Islamic Education & Prayer Tracker App',
      description: 'A mobile application designed to strengthen daily faith. Features location-based prayer times, timely Salah reminders, interactive Quranic quizzes, and gamified progress tracking to enhance Islamic knowledge.',
      tech: ['Kotlin', 'Android SDK', 'Firebase', 'Jetpack Compose'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      image: imaniqMockup,
    }
  ];

  const otherProjects = [
    {
      title: 'Life-Up',
      subtitle: 'Schedule & Habit Tracker',
      description: 'Self-management web app with Zustand state management and LocalStorage persistence.',
      icon: <CheckSquare className="text-emerald-600" size={20} />,
      bgColor: 'bg-emerald-50/50 hover:bg-emerald-50/80 dark:bg-emerald-950/10 dark:hover:bg-emerald-950/20',
      borderColor: 'border-emerald-100 dark:border-emerald-900/30',
      hoverBorder: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-800',
      githubUrl: 'https://github.com',
    },
    {
      title: 'ReFocus',
      subtitle: 'Focus & Productivity Timer',
      description: 'Minimalist Pomodoro timer and site blocker to maximize productivity during deep work.',
      icon: <Timer className="text-rose-600" size={20} />,
      bgColor: 'bg-rose-50/50 hover:bg-rose-50/80 dark:bg-rose-950/10 dark:hover:bg-rose-950/20',
      borderColor: 'border-rose-100 dark:border-rose-900/30',
      hoverBorder: 'group-hover:border-rose-300 dark:group-hover:border-rose-800',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Disaster Monitoring Website',
      subtitle: 'Seismic & Weather Alerts',
      description: 'Real-time dashboard for mapping geographical hazards and sending automated email warnings.',
      icon: <ShieldAlert className="text-amber-600" size={20} />,
      bgColor: 'bg-amber-50/50 hover:bg-amber-50/80 dark:bg-amber-950/10 dark:hover:bg-amber-950/20',
      borderColor: 'border-amber-100 dark:border-amber-900/30',
      hoverBorder: 'group-hover:border-amber-300 dark:group-hover:border-amber-800',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Personal Branding Site',
      description: 'Modern personal developer portfolio demonstrating projects, skills, and design aesthetics.',
      icon: <FileCode className="text-blue-600" size={20} />,
      bgColor: 'bg-blue-50/50 hover:bg-blue-50/80 dark:bg-blue-950/10 dark:hover:bg-blue-950/20',
      borderColor: 'border-blue-100 dark:border-blue-900/30',
      hoverBorder: 'group-hover:border-blue-300 dark:group-hover:border-blue-800',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Academic Projects',
      subtitle: 'CS & IS Coursework',
      description: 'Curated repository containing algorithm analyses, system designs, and database structures.',
      icon: <FolderGit className="text-indigo-600" size={20} />,
      bgColor: 'bg-indigo-50/50 hover:bg-indigo-50/80 dark:bg-indigo-950/10 dark:hover:bg-indigo-950/20',
      borderColor: 'border-indigo-100 dark:border-indigo-900/30',
      hoverBorder: 'group-hover:border-indigo-300 dark:group-hover:border-indigo-800',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900/40 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-16">
          <span className="w-2.5 h-2.5 bg-primary rounded-full" />
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Projects</h2>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Featured Project (Dominant Card) */}
          <div className="lg:col-span-7 flex flex-col text-left gap-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                Highlight
              </span>
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
            </div>

            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image Column */}
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group-hover:scale-[1.02] transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover max-h-[220px]"
                  />
                </div>

                {/* Info Column */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                  <span className="text-xs font-bold text-primary dark:text-blue-400 mb-1 tracking-wider uppercase">
                    Featured Project
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-1 flex items-center gap-1.5 group-hover:text-primary transition-colors">
                    {project.title}
                    <ArrowUpRight size={18} className="text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 leading-snug">
                    {project.subtitle}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-lg transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-blue-600/10 hover:shadow-blue-600/20 transition-all active:scale-95"
                    >
                      View Project
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 p-2.5 rounded-xl transition-all active:scale-95 text-slate-600 dark:text-slate-400"
                      aria-label="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Other Projects (Grid) */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                Other Works
              </span>
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherProjects.map((project, idx) => (
                <motion.a
                  key={idx}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`border ${project.borderColor} ${project.bgColor} rounded-2xl p-5 text-left flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-md cursor-pointer`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  <div>
                    {/* Header: Icon & GitHub link */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-sm group-hover:scale-105 transition-transform duration-200">
                        {project.icon}
                      </div>
                      <ArrowUpRight size={16} className="text-slate-400 group-hover:text-slate-950 dark:group-hover:text-slate-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    {/* Meta */}
                    <h3 className="text-sm font-bold text-slate-950 dark:text-slate-100 mb-0.5">
                      {project.title}
                    </h3>
                    <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider mb-2">
                      {project.subtitle}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                      {project.description}
                    </p>
                  </div>

                  <span className="text-[10px] font-bold text-primary dark:text-blue-400 group-hover:underline flex items-center gap-1 mt-3">
                    View Repository
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
