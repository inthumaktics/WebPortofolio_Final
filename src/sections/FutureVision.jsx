import { motion } from 'framer-motion';
import { Compass, GraduationCap, Globe } from 'lucide-react';

export default function FutureVision() {
  const steps = [
    {
      icon: <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />,
      title: 'Master\'s Degree in Japan',
      desc: 'Pursuing advanced research in Biomedical Engineering, specializing in healthcare software solutions and biosensors.',
    },
    {
      icon: <Compass size={18} className="text-blue-600 dark:text-blue-400" />,
      title: 'Biomedical Innovation',
      desc: 'Developing assistive software, diagnostic interfaces, and health-monitoring systems to elevate patient care standards.',
    },
    {
      icon: <Globe size={18} className="text-blue-600 dark:text-blue-400" />,
      title: 'Global Research Impact',
      desc: 'Collaborating with international research laboratories to publish findings and build life-improving open-source medical tools.',
    },
  ];

  return (
    <section id="future" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-200/10 dark:bg-purple-900/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-16">
          <span className="w-2.5 h-2.5 bg-primary rounded-full" />
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Future Vision</h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Vision Details */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight mb-4">
              Where I'm Heading
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              My long-term goal is to contribute to healthcare innovation through software engineering and biomedical technology. 
              I aspire to pursue a Master’s degree in Biomedical Engineering in Japan, focusing on developing assistive technologies 
              that can directly improve people's quality of life.
            </p>

            {/* List of sub-visions */}
            <div className="flex flex-col gap-6">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.4 }}
                >
                  <div className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-505 dark:text-slate-400 leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Custom SVG Japanese Landscape */}
          <motion.div 
            className="lg:col-span-6 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-[450px] aspect-[5/4] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <svg 
                viewBox="0 0 500 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  {/* Linear gradient for sun / moon */}
                  <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FDA4AF" className="sun-grad-stop-1" />
                    <stop offset="100%" stopColor="#F59E0B" className="sun-grad-stop-2" />
                  </linearGradient>
                  {/* Sky Gradient */}
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EFF6FF" className="sky-grad-stop-1" />
                    <stop offset="100%" stopColor="#FFFFFF" className="sky-grad-stop-2" />
                  </linearGradient>
                  {/* Pagoda roof color */}
                  <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E11D48" className="roof-grad-stop-1" />
                    <stop offset="100%" stopColor="#9F1239" className="roof-grad-stop-2" />
                  </linearGradient>
                </defs>

                {/* Sky background */}
                <rect width="500" height="400" rx="24" fill="url(#skyGrad)" />

                {/* Soft Clouds */}
                <path d="M50 80 Q75 60 100 80 T150 80 L150 100 L50 100 Z" className="cloud-path" opacity="0.3" />
                <path d="M350 110 Q375 90 400 110 T450 110 L450 130 L350 130 Z" className="cloud-path" opacity="0.3" />

                {/* The Sun / Moon */}
                <circle cx="280" cy="180" r="70" fill="url(#sunGrad)" opacity="0.85" />

                {/* Mount Fuji (Background) */}
                {/* Silhouette body */}
                <path d="M120 330 C190 310 210 180 250 120 C290 180 310 310 380 330 Z" className="fuji-body" />
                {/* Snow Cap */}
                <path d="M228 153 C238 150 245 158 250 152 C255 158 262 150 272 153 C265 137 258 126 250 120 C242 126 235 137 228 153 Z" className="fuji-cap" />

                {/* Silhouette Hills */}
                <path d="M0 320 Q120 270 240 330 T480 310 L500 310 L500 400 L0 400 Z" className="hill-1" opacity="0.95" />
                <path d="M0 350 Q160 300 320 360 T500 330 L500 400 L0 400 Z" className="hill-2" />

                {/* Traditional Japanese Pagoda (Middle-Right) */}
                <g transform="translate(370, 200) scale(0.65)" opacity="0.95">
                  {/* Base pillars */}
                  <rect x="40" y="160" width="4" height="40" className="japanese-red" />
                  <rect x="76" y="160" width="4" height="40" className="japanese-red" />
                  <rect x="44" y="160" width="32" height="30" className="japanese-dark-wood" />

                  {/* Level 1 Roof */}
                  <path d="M20 160 C35 155 85 155 100 160 L92 145 H28 Z" fill="url(#roofGrad)" />
                  <rect x="48" y="125" width="24" height="20" className="japanese-dark-wood" />
                  <rect x="58" y="125" width="4" height="20" className="japanese-red" />

                  {/* Level 2 Roof */}
                  <path d="M24 125 C37 121 83 121 96 125 L88 110 H32 Z" fill="url(#roofGrad)" />
                  <rect x="52" y="95" width="16" height="15" className="japanese-dark-wood" />

                  {/* Level 3 Roof */}
                  <path d="M28 95 C39 91 81 91 92 95 L84 82 H36 Z" fill="url(#roofGrad)" />
                  <rect x="55" y="70" width="10" height="12" className="japanese-dark-wood" />

                  {/* Level 4 Roof */}
                  <path d="M32 70 C41 67 79 67 88 70 L80 60 H40 Z" fill="url(#roofGrad)" />

                  {/* Spire (Sorin) */}
                  <line x1="60" y1="60" x2="60" y2="20" stroke="#F59E0B" strokeWidth="3" />
                  <circle cx="60" cy="30" r="4" fill="#F59E0B" />
                  <circle cx="60" cy="40" r="5" fill="#F59E0B" />
                  <circle cx="60" cy="50" r="6" fill="#F59E0B" />
                </g>

                {/* Torii Gate (Far-Left background) */}
                <g transform="translate(40, 275) scale(0.4)" opacity="0.8">
                  <rect x="20" y="20" width="60" height="8" className="japanese-red" rx="2" />
                  <rect x="15" y="10" width="70" height="10" className="japanese-red" rx="2" />
                  <rect x="25" y="35" width="50" height="6" className="japanese-red" />
                  <rect x="30" y="20" width="8" height="80" className="japanese-red" />
                  <rect x="62" y="20" width="8" height="80" className="japanese-red" />
                  <rect x="27" y="90" width="14" height="10" className="japanese-dark-wood" />
                  <rect x="59" y="90" width="14" height="10" className="japanese-dark-wood" />
                </g>

                {/* Cherry Blossom Branch (Top Left overlay) */}
                <path d="M 0 0 C 80 50 150 20 200 60" className="cherry-branch" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M 120 33 C 140 50 160 55 175 75" className="cherry-branch" strokeWidth="3" strokeLinecap="round" fill="none" />
                
                {/* Cherry Blossom Flowers (Petals/Circles) */}
                <circle cx="70" cy="35" r="5" className="cherry-petal-light" />
                <circle cx="75" cy="39" r="4" className="cherry-petal-dark" />
                
                <circle cx="120" cy="33" r="6" className="cherry-petal-light" />
                <circle cx="126" cy="30" r="4.5" className="cherry-petal-dark" />
                
                <circle cx="150" cy="45" r="5.5" className="cherry-petal-light" />
                <circle cx="154" cy="50" r="4" className="cherry-petal-dark" />
                
                <circle cx="180" cy="62" r="6.5" className="cherry-petal-light" />
                <circle cx="184" cy="58" r="5" className="cherry-petal-dark" />
                
                <circle cx="205" cy="65" r="5" className="cherry-petal-light" />
              </svg>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
