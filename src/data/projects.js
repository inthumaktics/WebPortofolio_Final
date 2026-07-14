// Import Project Thumbnails
import lifeupMockup from '../assets/projects/life-up_app.png';
import portofolioMockup from '../assets/projects/portofolio_web.png';
import xploroMockup from '../assets/projects/xploro_app.png';
import dedkostMockup from '../assets/projects/ded-kost_web.png';
import dreamteamMockup from '../assets/projects/dreamteam_web.png';
import performMockup from '../assets/projects/readytoperform_web.png';
import gotouristMockup from '../assets/projects/Go-Tourist_Mockup.png';
import motiefyMockup from '../assets/projects/motiefy_mockup.png';
import lifeupMockupWebVer from '../assets/projects/life-up_web.png';
import prismaWeb from '../assets/projects/prisma_web.png'


export const projectsData = [
  // --- PERSONAL PROJECTS ---
  {
    name: 'Life-Up Mobile Version',
    description: 'A comprehensive self-management web application featuring schedule planners, habit trackers, and progress analytics dashboards.',
    thumbnail: lifeupMockup,
    techStack: ['Flutter', 'Dart', 'Firebase', 'Node.js'],
    role: 'Mobile Developer',
    projectType: 'personal',
    status: 'In Progress',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    documentationUrl: 'https://github.com'
  },
    {
    name: 'Portofolio Website',
    description: 'A modern personal portofolio website designed to showcase my projects, learning journey, achievements, certifications, and professional experience. Built with a clean, responsive, and storytelling-focused design to strengthen my personal brand as an Information Systems student pursuing software engineering, artificial intelligence, and biomedical engineering.',
    thumbnail: portofolioMockup,
    techStack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'React Router', 'Lucide React', 'Vercel'],
    role: 'Frontend Developer & Designer',
    projectType: 'personal',
    status: 'Completed',
    githubUrl: 'https://github.com/inthumaktics/WebPortofolio_Final',
    liveUrl: 'https://erikayfebti.vercel.app/'
  },
  {
    name: 'Life-Up Web Version',
    description: 'A comprehensive self-management web application featuring schedule planners, habit trackers, and progress analytics dashboards.',
    thumbnail: lifeupMockupWebVer,
    techStack: ['React', 'Tailwind CSS', 'Next.js', 'Lucide'],
    role: 'Full Stack Developer',
    projectType: 'personal',
    status: 'Completed',
    githubUrl: 'https://github.com/inthumaktics/PROJECT_Life-UP_Web',
    liveUrl: 'https://life-up-web-ver.vercel.app'
  },

  // --- TEAM PROJECTS ---
  {
    name: 'XPLORO',
    description: 'An AI-powered smart tourism platform for international visitors in Indonesia. Features real-time guide translation and customized itineraries.',
    thumbnail: xploroMockup,
    techStack: ['Dart', 'Flutter', 'PWA'],
    role: 'Project Lead',
    projectType: 'team',
    status: 'In Progress',
    githubUrl: 'https://github.com/inthumaktics/XPLORO_TEKWEB',
    liveUrl: 'https://github.com',
    // videoUrl: 'https://github.com'
  },
    {
    name: 'Ready To Perform',
    description: 'A performance analytics mobile app for track-and-field athletes to monitor daily physical readiness, recovery levels, and fatigue markers.',
    thumbnail: performMockup,
    techStack: ['React', 'React Router', 'Vite', 'Vercel', 'TensorFlow', 'Scikit-Learn','DL Multi-Input Neural Network'],
    role: 'AI Engineer',
    projectType: 'team',
    status: 'Completed',
    liveUrl: 'https://capstone-project-main-six.vercel.app/',
    githubUrl: 'https://github.com/CC26-PSU078/Capstone-Project',
  },
  {
    name: 'Prisma',
    description: 'A digital platform designed to assess ESG credibility by cross-verifying corporate sustainability reports with trusted external data sources, helping investors and regulators identify potential greenwashing.',
    thumbnail: prismaWeb,
    techStack: ['Tailwind CSS', 'React', 'Vite', 'Vercel'],
    role: 'Front-end Developer',
    projectType: 'team',
    status: 'In Progress',
    githubUrl: 'https://github.com/inthumaktics/prisma',
    liveUrl: 'https://prisma-esg-credibility.vercel.app/'
  },
  {
    name: 'DED-Kost',
    description: 'A responsive front-end boarding house rental website featuring property search, recommendations, WhatsApp booking integration, and an admin panel for listing management.',
    thumbnail: dedkostMockup,
    techStack: ['Tailwind CSS', 'React', 'Next.js', 'Vite', 'Vercel'],
    role: 'Front-end User Developer',
    projectType: 'team',
    status: 'Completed',
    githubUrl: 'https://github.com/inthumaktics/DED-kost_Project_TEKWEB',
    liveUrl: 'https://ded-kost-project-tekweb.vercel.app/'
  },
  {
    name: 'Dream Team Manager - IS Mini Hackathon 2025 ',
    description: 'A collaboration board and matching portal designed for academic cohorts to find teammates, align skills, and assign project roles.',
    thumbnail: dreamteamMockup,
    techStack: ['React','Vite', 'Tailwind CSS', 'Vercel'],
    role: 'Front-end Developer',
    projectType: 'team',
    status: 'Completed',
    githubUrl: 'https://github.com/inthumaktics/DREAM-TEAM-MANAGER_TEKWEB',
    liveUrl: 'https://dream-team-manager-tekweb.vercel.app/'
  },

    {
    name: 'Motiefy',
    description: 'A collaborative UI/UX design project for a digital marketplace that empowers Indonesian batik artisans and promotes sustainable fashion. The platform connects customers with authentic batik products, recycled batik crafts, custom batik services, AI-powered virtual try-on, and educational content to support local UMKM and preserve Indonesia\'s cultural heritage.',
    thumbnail: motiefyMockup,
    techStack: ['Figma', 'Canva'],
    role: 'UI/UX Designer',
    projectType: 'team',
    status: 'Completed',
    prototypeUrl: 'https://www.figma.com/proto/ZrW8MQODIp5H7p2DRUdAsy/BATIK?node-id=479-1274&t=1We6X17Dq5FuPl6S-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=137%3A236&show-proto-sidebar=1'
  },

    {
    name: 'Go Tourist',
    description: 'A collaborative trip planner web application featuring shared expense tracking, destination voting, and interactive joint packing check-lists.',
    thumbnail: gotouristMockup,
    techStack: ['Figma', 'Canva'],
    role: 'UI/UX Designer',
    projectType: 'team',
    status: 'Completed',
    prototypeUrl: 'https://www.figma.com/proto/REqASWKiufUrW2m0eQNFQr/Go-Tourist-New?node-id=212-282&t=TCfW2gwL2hIrLfTz-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=214%3A113'
  },

];
