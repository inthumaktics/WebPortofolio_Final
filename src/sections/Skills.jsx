import { motion } from 'framer-motion';
import { Layout, Server, Settings } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="text-blue-600" size={22} />,
      bgColor: 'bg-blue-50/40 border-blue-100 dark:bg-blue-950/10 dark:border-blue-900/30',
      skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-teal-600" size={22} />,
      bgColor: 'bg-teal-50/40 border-teal-100 dark:bg-teal-950/10 dark:border-teal-900/30',
      skills: ['Node.js', 'Express', 'MySQL', 'RESTful API', 'JSON Web Tokens', 'Laravel', 'PHP'],
    },
    {
      title: 'Tools & Workflows',
      icon: <Settings className="text-purple-600" size={22} />,
      bgColor: 'bg-purple-50/40 border-purple-100 dark:bg-purple-950/10 dark:border-purple-900/30',
      skills: ['Git', 'GitHub', 'Figma (UI/UX)', 'VS Code', 'Linux OS', 'Postman API', 'Docker'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-16">
          <span className="w-2.5 h-2.5 bg-primary rounded-full" />
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Skills & Technologies</h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              className={`bg-white dark:bg-slate-900 border ${cat.bgColor} rounded-3xl p-8 text-left shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15, duration: 0.4 }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {cat.title}
                  </h3>
                </div>

                {/* Subtitle / Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  Proficiencies, frameworks, and methodologies acquired through academic coursework, bootcamps, and projects.
                </p>

                {/* Tags Layout */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-semibold text-blue-700 dark:text-white-300 bg-blue-100 dark:bg-blue-850 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800 px-3.5 py-1.5 rounded-xl transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
