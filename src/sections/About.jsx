import { motion } from 'framer-motion';
import { Code, ShieldCheck, Rocket } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: 'Technology Explorer',
      subtitle: 'CONTINUOUS LEARNING JOURNEY',
      description: 'From UI/UX design and web development to mobile applications and software engineering, continuously exploring new technologies and building practical solutions.',
      icon: <Code className="text-blue-600" size={24} />,
      badges: ['UI/UX', 'Web Dev', 'Flutter'],
      bgColor: 'bg-blue-50/50 hover:bg-blue-50/80 dark:bg-blue-950/20 dark:hover:bg-blue-950/30',
      borderColor: 'border-blue-100 dark:border-blue-900/30',
      badgeColor: 'bg-blue-100/70 text-blue-700 border-blue-200/50 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800/30',
      shadowColor: 'hover:shadow-blue-500/5',
      delay: 0.1,
    },
    {
      title: 'AI & Innovation',
      subtitle: 'EXPLORING INTELLIGENT TECHNOLOGIES',
      description: 'Learning machine learning and deep learning while discovering how intelligent systems can solve meaningful real-world challenges.',
      icon: <ShieldCheck className="text-teal-600" size={24} />,
      badges: ['Machine Learning', 'Deep Learning', 'Innovation'],
      bgColor: 'bg-teal-50/50 hover:bg-teal-50/80 dark:bg-teal-950/20 dark:hover:bg-teal-950/30',
      borderColor: 'border-teal-100 dark:border-teal-900/30',
      badgeColor: 'bg-teal-100/70 text-teal-700 border-teal-200/50 dark:bg-teal-900/40 dark:text-teal-300 dark:border-teal-800/30',
      shadowColor: 'hover:shadow-teal-500/5',
      delay: 0.25,
    },
    {
      title: 'Long-Term Vision',
      subtitle: 'BIOMEDICAL & HUMAN-CENTERED TECH',
      description: 'Passionate about the intersection of technology and human well-being, with a future goal of pursuing Biomedical Engineering and assistive innovation.',
      icon: <Rocket className="text-purple-600" size={24} />,
      badges: ['Biomedical Engineering', 'Healthcare Tech', 'Future Research'],
      bgColor: 'bg-purple-50/50 hover:bg-purple-50/80 dark:bg-purple-950/20 dark:hover:bg-purple-950/30',
      borderColor: 'border-purple-100 dark:border-purple-900/30',
      badgeColor: 'bg-purple-100/70 text-purple-700 border-purple-200/50 dark:bg-purple-900/40 dark:text-purple-300 dark:border-purple-800/30',
      shadowColor: 'hover:shadow-purple-500/5',
      delay: 0.4,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900/40 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary rounded-full" />
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">About Me</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
              I am an Information Systems student passionate about Artificial Intelligence, Software Engineering, UX Research, and Mobile Development. My journey started with UI/UX design and front-end development, then expanded into back-end development, machine learning, deep learning, and Flutter.
              I have completed the AI Engineer learning path and built projects in web, mobile, and AI development. Currently, I am strengthening my expertise in backend systems, artificial intelligence, and user-centered product development.

              My goal is to become an Intelligent Systems Engineer who bridges software, AI, and emerging technologies to create meaningful solutions for society, while pursuing future studies in Biomedical Engineering.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`border ${card.borderColor} ${card.bgColor} rounded-3xl p-8 text-left transition-all duration-300 shadow-sm flex flex-col justify-between h-full cursor-default group hover:-translate-y-2 hover:shadow-xl ${card.shadowColor}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: card.delay, duration: 0.5, type: 'spring' }}
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-white dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700 rounded-full px-3 py-1">
                    Core Focus
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 leading-snug">
                  {card.title}
                </h3>
                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-wider">
                  {card.subtitle}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Badges footer */}
              <div className="flex flex-wrap gap-2 pt-4">
                {card.badges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className={`text-xs font-bold px-3.5 py-1.5 rounded-xl border ${card.badgeColor}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}