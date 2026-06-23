import { motion } from 'framer-motion';
import { BookOpen, UserCheck, Users, Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Practical Assistant',
      company: 'Universitas Ahmad Dahlan',
      status: 'Current',
      icon: <BookOpen className="text-blue-600" size={22} />,
      bgColor: 'bg-blue-50/40 border-blue-100 hover:border-blue-300 dark:bg-blue-950/10 dark:border-blue-900/30 dark:hover:border-blue-800',
      description: [
        'Assisting laboratory sessions and practical coursework.',
        'Helping students understand programming, databases, and system analysis materials.',
        'Supporting lecturers in grading, managing class dynamics, and executing learning activities.'
      ]
    },
    {
      role: 'Student Counselor',
      company: 'Academic Peer Support',
      status: 'Current',
      icon: <UserCheck className="text-emerald-600" size={22} />,
      bgColor: 'bg-emerald-50/40 border-emerald-100 hover:border-emerald-300 dark:bg-emerald-950/10 dark:border-emerald-900/30 dark:hover:border-emerald-800',
      description: [
        'Providing empathetic peer support, mentoring, and academic guidance.',
        'Facilitating student communication, problem-solving, and adaptation activities.',
        'Conducting regular check-ins to support student well-being and growth.'
      ]
    },
    {
      role: 'Organization Experience',
      company: 'Information Systems Student Association (HMIG)',
      status: 'Past / Current',
      icon: <Users className="text-purple-600" size={22} />,
      bgColor: 'bg-purple-50/40 border-purple-100 hover:border-purple-300 dark:bg-purple-950/10 dark:border-purple-900/30 dark:hover:border-purple-800',
      description: [
        'Collaborating in team settings to organize national seminars and technology workshops.',
        'Conducting leadership development sessions and regional community service programs.',
        'Managing public relations, event logistics, and cross-divisional initiatives.'
      ]
    },
    {
      role: 'Future Aspirations',
      company: 'Upcoming Milestones',
      status: 'Future Focus',
      icon: <Briefcase className="text-slate-500" size={22} />,
      bgColor: 'bg-slate-50/30 border-dashed border-slate-350 hover:bg-slate-50/80 dark:bg-slate-900/20 dark:border-slate-800 dark:hover:bg-slate-900/50',
      description: [
        'Seeking Software Engineering & Web Development Internships.',
        'Exploring Research Assistant roles in Biomedical Engineering.',
        'Participating in Volunteer Work and tech-for-good Community Projects.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900/60 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 text-left">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary rounded-full" />
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Experience</h2>
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-md md:text-right">
            Activities, leadership, mentoring, and professional growth.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`bg-white dark:bg-slate-900 border ${exp.bgColor} rounded-3xl p-8 text-left shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm group-hover:scale-105 transition-transform duration-200">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full border ${
                    exp.status === 'Current' 
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-350 dark:border-emerald-900/30'
                      : exp.status === 'Past / Current'
                      ? 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/30 dark:text-blue-350 dark:border-blue-900/30'
                      : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                  }`}>
                    {exp.status}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3.5">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-450">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
