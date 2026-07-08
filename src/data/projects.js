// Import Project Thumbnails
import lifeupMockup from '../assets/lifeup_mockup.png';
import refocusMockup from '../assets/refocus_mockup.png';
import portfolioMockup from '../assets/portfolio_mockup.png';
import aiProjectsMockup from '../assets/ai_projects_mockup.png';
import biomedicalProjectsMockup from '../assets/biomedical_projects_mockup.png';
import xploroMockup from '../assets/xploro_mockup.png';
import dedkostMockup from '../assets/dedkost_mockup.png';
import dreamteamMockup from '../assets/dreamteam_mockup.png';
import performMockup from '../assets/perform_mockup.png';
import gotouristMockup from '../assets/gotourist_mockup.png';
import imaniqMockup from '../assets/imaniq_mockup.png';
import internshipMockup from '../assets/internship_mockup.png';
import researchMockup from '../assets/research_mockup.png';

export const projectsData = [
  // --- PERSONAL PROJECTS ---
  {
    name: 'Life-Up',
    description: 'A comprehensive self-management web application featuring schedule planners, habit trackers, and progress analytics dashboards.',
    thumbnail: lifeupMockup,
    techStack: ['React', 'Tailwind CSS', 'Zustand', 'LocalStorage'],
    role: 'Full Stack Developer',
    projectType: 'personal',
    status: 'Completed',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    documentationUrl: 'https://github.com'
  },
  {
    name: 'ReFocus',
    description: 'A minimalist Pomodoro focus timer and site blocker dashboard designed to eliminate digital distractions and maximize deep work efficiency.',
    thumbnail: refocusMockup,
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Web Storage'],
    role: 'Frontend Developer',
    projectType: 'personal',
    status: 'Completed',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com'
  },
  {
    name: 'Portfolio Website',
    description: 'A premium, highly interactive developer portfolio website highlighting project categories, learning journeys, and visual design aesthetics.',
    thumbnail: portfolioMockup,
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    role: 'Frontend Developer & Designer',
    projectType: 'personal',
    status: 'Completed',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com'
  },
  {
    name: 'Future AI Projects',
    description: 'Conceptual prototypes and research exploring neural network architectures, machine learning models, and predictive algorithms.',
    thumbnail: aiProjectsMockup,
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'Flask', 'React'],
    role: 'Machine Learning Engineer',
    projectType: 'personal',
    status: 'Research',
    githubUrl: 'https://github.com',
    prototypeUrl: 'https://github.com'
  },
  {
    name: 'Future Biomedical Projects',
    description: 'Exploring physiological signal analysis (ECG/EEG), medical sensor integration, and interactive data visualization for healthcare applications.',
    thumbnail: biomedicalProjectsMockup,
    techStack: ['Signal Processing', 'Python', 'Arduino', 'React', 'Chart.js'],
    role: 'Research & UX',
    projectType: 'personal',
    status: 'Research',
    documentationUrl: 'https://github.com'
  },

  // --- TEAM PROJECTS ---
  {
    name: 'XPLORO',
    description: 'An AI-powered smart tourism platform for international visitors in Indonesia. Features real-time guide translation and customized itineraries.',
    thumbnail: xploroMockup,
    techStack: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS', 'OpenAI API'],
    role: 'Project Lead',
    projectType: 'team',
    status: 'Completed',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    videoUrl: 'https://github.com'
  },
  {
    name: 'DED-Kost',
    description: 'A digital boarding house management system facilitating room availability tracking, digital payment history, and tenant-landlord communication.',
    thumbnail: dedkostMockup,
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Bootstrap'],
    role: 'Backend Developer',
    projectType: 'team',
    status: 'Completed',
    githubUrl: 'https://github.com',
    caseStudyUrl: 'https://github.com'
  },
  {
    name: 'Dream Team Manager',
    description: 'A collaboration board and matching portal designed for academic cohorts to find teammates, align skills, and assign project roles.',
    thumbnail: dreamteamMockup,
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    role: 'Full Stack Developer',
    projectType: 'team',
    status: 'Academic',
    githubUrl: 'https://github.com',
    documentationUrl: 'https://github.com'
  },
  {
    name: 'Ready To Perform',
    description: 'A performance analytics mobile app for track-and-field athletes to monitor daily physical readiness, recovery levels, and fatigue markers.',
    thumbnail: performMockup,
    techStack: ['Flutter', 'Dart', 'Firebase', 'Node.js'],
    role: 'Mobile Developer',
    projectType: 'team',
    status: 'Prototype',
    prototypeUrl: 'https://github.com',
    videoUrl: 'https://github.com'
  },
  {
    name: 'Go Tourist',
    description: 'A collaborative trip planner web application featuring shared expense tracking, destination voting, and interactive joint packing check-lists.',
    thumbnail: gotouristMockup,
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'Node.js', 'Express'],
    role: 'Frontend Developer',
    projectType: 'team',
    status: 'Academic',
    githubUrl: 'https://github.com',
    prototypeUrl: 'https://github.com'
  },
  {
    name: 'ImanIQ',
    description: 'A gamified Islamic education and daily prayer tracking mobile app. Features location-based prayer times, Salah reminders, and Quranic quizzes.',
    thumbnail: imaniqMockup,
    techStack: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Firebase'],
    role: 'Mobile Developer & UI/UX',
    projectType: 'team',
    status: 'Competition',
    githubUrl: 'https://github.com',
    videoUrl: 'https://github.com',
    caseStudyUrl: 'https://github.com'
  },
  {
    name: 'Future Internship Projects',
    description: 'Upcoming collaborative software engineering engagements focused on enterprise system architectures, CI/CD, and agile sprint workflows.',
    thumbnail: internshipMockup,
    techStack: ['TypeScript', 'React', 'Docker', 'Git', 'Agile'],
    role: 'Full Stack Developer',
    projectType: 'team',
    status: 'In Progress'
  },
  {
    name: 'Future Research Projects',
    description: 'Collaborative academic research and software prototyping exploring human-computer interaction, web accessibility, and health informatics.',
    thumbnail: researchMockup,
    techStack: ['Data Analysis', 'Python', 'React', 'Jupyter', 'R'],
    role: 'Research & UX',
    projectType: 'team',
    status: 'Research',
    documentationUrl: 'https://github.com'
  }
];
