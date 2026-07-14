import React from 'react';
import { timelineItems } from './data/journey';
import { projectsData } from './data/projects';
import { experiences } from './data/experiences';
import { achievementsData } from './data/achievements';
import erikaProfile from './assets/fotocv3_erika.png';
import { Mail, Globe, MapPin, GraduationCap, BookOpen, Award, Briefcase, ExternalLink, Printer, Code } from 'lucide-react';
import { Github, Linkedin } from './components/Icons';

export default function PrintPortfolio() {
  const personalProjects = projectsData.filter((p) => p.projectType === 'personal');
  const teamProjects = projectsData.filter((p) => p.projectType === 'team');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 print:py-0 print:bg-white text-slate-800 antialiased selection:bg-blue-600/10">
      
      {/* Top Banner - Interactive Web UI only, hidden in print */}
      <div className="max-w-4xl mx-auto mb-6 px-4 print:hidden">
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-left">
            <h1 className="text-base font-bold text-slate-900">Print & PDF Export Mode</h1>
            <p className="text-xs text-slate-500">This view is optimized for A4 paper layout (Ctrl + P). Set margins to "None" or "Default" in your print dialog.</p>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md cursor-pointer transition-all active:scale-95 whitespace-nowrap"
          >
            <Printer size={15} />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Main Print Container (A4 layout constraint) */}
      <div className="max-w-[210mm] mx-auto bg-white border border-slate-200 shadow-lg print:border-none print:shadow-none print:max-w-none">
        
        {/* ==================== PAGE 1: HERO & ABOUT ==================== */}
        <section className="print-page p-[15mm] border-b border-slate-200/50 print:border-none flex flex-col justify-between min-h-[297mm] h-auto relative bg-white">
          <div>
            {/* Header info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-100 pb-6 mb-8 gap-4">
              <div className="text-left flex-grow">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-1">
                  Erika Ayu Febrianti
                </h1>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                  Information Systems Student | Aspiring Intelligent Systems Engineer
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3 text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-slate-400" /> Yogyakarta, Indonesia
                  </span>
                  <span className="flex items-center gap-1">
                    <GraduationCap size={13} className="text-slate-400" /> Universitas Ahmad Dahlan
                  </span>
                </div>
              </div>
              <div className="w-18 h-18 rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0 bg-slate-55">
                <img
                  src={erikaProfile}
                  alt="Erika Ayu Febrianti"
                  className="w-full h-full object-cover scale-[1.05]"
                />
              </div>
            </div>

            {/* About text */}
            <div className="text-left mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">About Me</h2>
              </div>
              <p className="text-xs text-slate-650 leading-relaxed text-justify">
                I am an Information Systems student passionate about Artificial Intelligence, Software Engineering, UX Research, and Mobile Development. My journey started with UI/UX design and front-end development, then expanded into back-end development, machine learning, deep learning, and Flutter.
                I have completed the AI Engineer learning path and built projects in web, mobile, and AI development. Currently, I am strengthening my expertise in backend systems, artificial intelligence, and user-centered product development.
                My goal is to become an Intelligent Systems Engineer who bridges software, AI, and emerging technologies to create meaningful solutions for society, while pursuing future studies in Biomedical Engineering.
              </p>
            </div>

            {/* Bento Grid layout */}
            <div className="grid grid-cols-3 gap-4 text-left">
              {/* Card 1 */}
              <div className="border border-blue-100 bg-blue-50/20 rounded-2xl p-4 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[9px] font-bold text-blue-600 uppercase tracking-wider block mb-2">Focus 1</span>
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Technology Explorer</h3>
                  <p className="text-[10px] text-slate-650 leading-normal">
                    From UI/UX design and web dev to mobile apps, continuously exploring new technologies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-100/50 text-blue-700">UI/UX</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-100/50 text-blue-700">Web Dev</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-teal-100 bg-teal-50/20 rounded-2xl p-4 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[9px] font-bold text-teal-600 uppercase tracking-wider block mb-2">Focus 2</span>
                  <h3 className="text-xs font-bold text-slate-900 mb-1">AI & Innovation</h3>
                  <p className="text-[10px] text-slate-650 leading-normal">
                    Learning ML and DL while discovering how intelligent systems solve real-world challenges.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-teal-100/50 text-teal-700">ML</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-teal-100/50 text-teal-700">Deep Learning</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-purple-100 bg-purple-50/20 rounded-2xl p-4 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[9px] font-bold text-purple-600 uppercase tracking-wider block mb-2">Focus 3</span>
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Long-Term Vision</h3>
                  <p className="text-[10px] text-slate-650 leading-normal">
                    Passionate about the intersection of tech and well-being, pursuing Biomedical tech.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-100/50 text-purple-700">BioMed</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-100/50 text-purple-700">Healthcare</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold border-t border-slate-100 pt-3 mt-auto">
            <span>Portfolio of Erika Ayu Febrianti</span>
            <span>Page 1 of 6</span>
          </div>
        </section>

        {/* ==================== PAGE 2: LEARNING JOURNEY ==================== */}
        <section className="print-page p-[15mm] border-b border-slate-200/50 print:border-none flex flex-col justify-between min-h-[297mm] h-auto relative bg-white">
          <div>
            <div className="flex items-center gap-2 mb-6 text-left">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Learning Journey</h2>
            </div>

            {/* Vertical timeline representation of all 9 items */}
            <div className="relative pl-6 text-left border-l border-slate-200 space-y-4">
              {timelineItems.map((item, idx) => (
                <div key={idx} className="relative pb-1 last:pb-0 no-break-inside">
                  {/* Timeline dot */}
                  <div className="absolute -left-[30px] top-1.5 flex items-center justify-center w-4 h-4 bg-white rounded-full border-2 border-blue-600 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  </div>
                  
                  {/* Timeline content details */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest">{item.date}</span>
                      <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400">{item.subtitle}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.topics.map((topic, tIdx) => (
                      <span key={tIdx} className="text-[9px] text-slate-650 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold border-t border-slate-100 pt-3 mt-auto">
            <span>Portfolio of Erika Ayu Febrianti</span>
            <span>Page 2 of 6</span>
          </div>
        </section>

        {/* ==================== PAGE 3: PERSONAL PROJECTS ==================== */}
        <section className="print-page p-[15mm] border-b border-slate-200/50 print:border-none flex flex-col justify-between min-h-[297mm] h-auto relative bg-white">
          <div>
            <div className="flex items-center gap-2 mb-6 text-left">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Personal Projects</h2>
            </div>

            {/* Responsive grid: two project cards per row */}
            <div className="grid grid-cols-2 gap-4 text-left">
              {personalProjects.map((project, idx) => (
                <div key={idx} className="border border-slate-200/80 rounded-2xl p-4 flex flex-col h-full justify-between no-break-inside bg-slate-50/20">
                  <div>
                    {/* Aspect Ratio limited image */}
                    <div className="w-full aspect-video rounded-xl overflow-hidden border border-slate-100 shadow-sm mb-3 bg-slate-50">
                      <img src={project.thumbnail} alt={project.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 mb-1">{project.name}</h3>
                    <p className="text-[10px] text-slate-600 mb-2 line-clamp-3 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-2">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Role</span>
                      <span className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100/50">
                        {project.role}
                      </span>
                    </div>

                    <div className="mb-3">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Technologies</span>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-[9px] bg-white border border-slate-200 text-slate-550 px-1.5 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links replacing buttons */}
                  <div className="pt-2 border-t border-slate-100 flex flex-col gap-1 text-[9px] font-bold text-slate-500">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="hover:text-blue-600 flex items-center gap-1">
                        <Github size={10} /> <span>GitHub: {project.githubUrl.replace('https://', '')}</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="hover:text-blue-600 flex items-center gap-1">
                        <Globe size={10} /> <span>Live Demo: {project.liveUrl.replace('https://', '')}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold border-t border-slate-100 pt-3 mt-auto">
            <span>Portfolio of Erika Ayu Febrianti</span>
            <span>Page 3 of 6</span>
          </div>
        </section>

        {/* ==================== PAGE 4: TEAM PROJECTS ==================== */}
        <section className="print-page p-[15mm] border-b border-slate-200/50 print:border-none flex flex-col justify-between min-h-[297mm] h-auto relative bg-white">
          <div>
            <div className="flex items-center gap-2 mb-4 text-left">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Team Projects</h2>
            </div>

            {/* Responsive grid: two project cards per row, extremely space optimized */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-left">
              {teamProjects.map((project, idx) => (
                <div key={idx} className="border border-slate-200/80 rounded-2xl p-3 flex flex-row gap-3 h-full justify-between no-break-inside bg-slate-50/20">
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-start gap-1 mb-1">
                        <h3 className="text-[11px] font-bold text-slate-900 leading-snug">{project.name}</h3>
                        <span className="text-[8px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full shrink-0 border border-blue-100/50">
                          {project.role}
                        </span>
                      </div>
                      <p className="text-[9px] text-slate-600 line-clamp-2 leading-relaxed mb-2">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-0.5 mb-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-[8px] bg-white border border-slate-200 text-slate-500 px-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-1.5 border-t border-slate-100 flex flex-col gap-0.5 text-[8px] font-bold text-slate-450">
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="hover:text-blue-600 truncate max-w-[170px]">
                          GitHub: {project.githubUrl.replace('https://', '')}
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="hover:text-blue-600 truncate max-w-[170px]">
                          Live: {project.liveUrl.replace('https://', '')}
                        </a>
                      )}
                      {project.prototypeUrl && (
                        <a href={project.prototypeUrl} className="hover:text-blue-600 truncate max-w-[170px]">
                          Prototype: {project.prototypeUrl.replace('https://', '')}
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Thumbnail on the right */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-slate-100 shadow-sm bg-slate-50 shrink-0 self-center">
                    <img src={project.thumbnail} alt={project.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold border-t border-slate-100 pt-3 mt-auto">
            <span>Portfolio of Erika Ayu Febrianti</span>
            <span>Page 4 of 6</span>
          </div>
        </section>

        {/* ==================== PAGE 5: EXPERIENCE & ACHIEVEMENTS ==================== */}
        <section className="print-page p-[15mm] border-b border-slate-200/50 print:border-none flex flex-col justify-between min-h-[297mm] h-auto relative bg-white">
          <div className="text-left flex flex-col gap-6">
            
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
                <h2 className="text-base font-extrabold text-slate-900 tracking-tight">Experience</h2>
              </div>
              
              <div className="relative pl-4 border-l border-slate-200 space-y-3">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pb-0.5 last:pb-0 no-break-inside">
                    {/* Node Dot */}
                    <div className="absolute -left-[22px] top-1 w-2.5 h-2.5 bg-white border border-blue-600 rounded-full" />
                    
                    <div className="flex justify-between items-start gap-2 flex-wrap mb-0.5">
                      <div>
                        <h3 className="text-xs font-bold text-slate-900">{exp.title}</h3>
                        <p className="text-[10px] font-semibold text-slate-450">{exp.organization}</p>
                      </div>
                      <span className="text-[9px] font-extrabold text-blue-600 uppercase tracking-widest">{exp.duration}</span>
                    </div>
                    
                    <ul className="list-disc pl-3 text-[9px] text-slate-600 space-y-0.5 leading-relaxed">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
                <h2 className="text-base font-extrabold text-slate-900 tracking-tight">Achievements & Awards</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {achievementsData.map((cert, idx) => (
                  <div key={idx} className="border border-slate-200/80 rounded-2xl p-3 flex gap-3 items-center no-break-inside bg-slate-50/20">
                    <div className="w-16 aspect-[4/3] rounded-lg overflow-hidden border border-slate-100 shadow-sm bg-slate-50 shrink-0">
                      <img src={cert.thumbnail} alt={cert.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-slate-900 leading-snug">{cert.title}</h3>
                      <p className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{cert.issuer}</p>
                      <p className="text-[9px] text-slate-500">{cert.issueDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold border-t border-slate-100 pt-3 mt-auto">
            <span>Portfolio of Erika Ayu Febrianti</span>
            <span>Page 5 of 6</span>
          </div>
        </section>

        {/* ==================== PAGE 6: CONTACT ==================== */}
        <section className="print-page p-[15mm] flex flex-col justify-between min-h-[297mm] h-auto relative bg-white">
          <div className="flex-grow flex flex-col justify-center items-center py-12 text-center">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Get in Touch</h2>
            <p className="text-xs text-slate-550 max-w-sm mb-12">
              Feel free to reach out for internship opportunities, collaborations, or research discussions.
            </p>

            {/* QR Code Container */}
            <div className="border border-slate-200 shadow-md rounded-3xl p-6 bg-white mb-12 no-break-inside flex flex-col items-center">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://erikayfebti.vercel.app/"
                alt="Portfolio QR Code"
                className="w-36 h-36 mb-4"
              />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Scan to View Online
              </span>
            </div>

            {/* Contact Details List */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left max-w-md w-full">
              <div className="flex items-center gap-3 border border-slate-100 rounded-xl p-3 bg-slate-50/30">
                <Mail size={16} className="text-blue-600 shrink-0" />
                <div className="flex flex-col truncate">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Email</span>
                  <a href="mailto:erikaayufebrianti@gmail.com" className="text-[10px] font-semibold text-slate-800 hover:text-blue-600 truncate">
                    erikaayufebrianti@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border border-slate-100 rounded-xl p-3 bg-slate-50/30">
                <Linkedin size={16} className="text-blue-600 shrink-0" />
                <div className="flex flex-col truncate">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/erika-ayu-febrianti" className="text-[10px] font-semibold text-slate-800 hover:text-blue-600 truncate">
                    linkedin.com/in/erika-ayu-febrianti
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border border-slate-100 rounded-xl p-3 bg-slate-50/30">
                <Github size={16} className="text-blue-600 shrink-0" />
                <div className="flex flex-col truncate">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">GitHub</span>
                  <a href="https://github.com/inthumaktics" className="text-[10px] font-semibold text-slate-800 hover:text-blue-600 truncate">
                    github.com/inthumaktics
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border border-slate-100 rounded-xl p-3 bg-slate-50/30">
                <Globe size={16} className="text-blue-600 shrink-0" />
                <div className="flex flex-col truncate">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Website</span>
                  <a href="https://erikayfebti.vercel.app/" className="text-[10px] font-semibold text-slate-800 hover:text-blue-600 truncate">
                    erikayfebti.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold border-t border-slate-100 pt-3 mt-auto">
            <span>Portfolio of Erika Ayu Febrianti</span>
            <span>Page 6 of 6</span>
          </div>
        </section>

      </div>
    </div>
  );
}
