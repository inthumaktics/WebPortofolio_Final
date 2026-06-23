import { motion } from 'framer-motion';
import { MapPin, GraduationCap, BrainCircuit, Smartphone, ArrowRight, CodeXml, Terminal} from 'lucide-react';
import { Github, Linkedin, Instagram } from '../components/Icons';
import erikaProfile from '../assets/fotocv3_erika.png';

export default function Hero() {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/inthumaktics' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/erika-ayu-febrianti-32a024286/' },
    { name: 'Instagram', icon: <Instagram size={18} />, url: 'https://instagram.com/inthumaktics' },
  ];

  const floatingItems = [
    { icon: <MapPin className="text-blue-600" size={16} />, text: 'Yogyakarta, Indonesia' },
    { icon: <GraduationCap className="text-blue-600" size={16} />, text: 'Information Systems Student' },
    { icon: <BrainCircuit className="text-blue-600" size={16} />, text: 'AI & Intelligent Systems' },
    { icon: <Smartphone className="text-blue-600" size={16} />, text: 'Flutter App Developer' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const handleScrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">

        {/* Left Column - Intro Details */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/40 text-primary dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            Hi there 👋
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 leading-tight tracking-tight mb-4"
          >
            Hi, I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">Erika Ayu Febrianti</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-xl font-bold text-slate-700 dark:text-slate-350 mb-6 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2"
          >
            <span>Information Systems Student</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
            <span className="text-primary dark:text-blue-400">Aspiring Intelligent Systems Engineer</span>
          </motion.h2>

          {/* Paragraph Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-8"
          >
            Information Systems student exploring AI, software development, and human-centered technology to build intelligent solutions that create meaningful impact.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={() => handleScrollTo('#projects')}
              className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/15 hover:shadow-blue-600/25 active:scale-95 group cursor-pointer"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleScrollTo('#journey')}
              className="flex items-center gap-2 border border-slate-300 dark:border-slate-800 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 bg-white dark:bg-slate-900 shadow-sm active:scale-95 group cursor-pointer"
            >
              My Journey
              <ArrowRight size={16} className="text-slate-400 group-hover:text-primary transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6"
          >
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Follow Me On</span>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm font-semibold transition-colors duration-200"
                >
                  <span className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200/60 dark:border-slate-800 shadow-sm text-slate-600 dark:text-slate-400 hover:text-primary hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors">
                    {link.icon}
                  </span>
                  <span className="hidden sm:inline">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Image & Floating Cards */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.25 }}
        >
          {/* Main Blobs Background */}
          <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full opacity-10 blur-xl animate-pulse" />

          <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[380px] flex items-center justify-center">
            {/* Custom Shield/Blob mask for image */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl shadow-slate-900/10 z-10 bg-slate-100 dark:bg-slate-800">
              <img
                src={erikaProfile}
                alt="Erika Ayu Febrianti"
                className="w-full h-full object-cover scale-[1.05]"
              />
            </div>

            {/* Floating Profile Details Card */}
            <motion.div
              className="absolute -left-12 bottom-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 dark:border-slate-800 z-20 max-w-[210px] hidden md:block transition-colors duration-305"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <ul className="flex flex-col gap-2.5 text-left">
                {floatingItems.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <span className="mt-0.5 p-1 bg-blue-50 dark:bg-blue-950/50 rounded-md shrink-0">
                      {item.icon}
                    </span>
                    <span className="leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Decorative Tech Icon: Code bracket */}
            <motion.div
              className="absolute -top-4 -right-4 p-3 bg-blue-600 text-white rounded-2xl shadow-lg z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <CodeXml size={20} />
            </motion.div>

            {/* Decorative Biomedical Icon: DNA */}
            <motion.div
              className="absolute top-1/2 -right-8 p-3 bg-teal-500 text-white rounded-2xl shadow-lg z-20"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            >
              <Terminal size={20} />
            </motion.div>

            {/* Decorative Dots Pattern */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px] opacity-70 z-0 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
