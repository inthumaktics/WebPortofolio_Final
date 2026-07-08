// Import Certificate Mockup Images
import certificateAward from '../assets/certificate_award.png';
import certificateProfessional from '../assets/certificate_professional.png';
import certificateCompletion from '../assets/certificate_completion.png';

export const achievementsCategories = [
  {
    id: 'awards',
    name: '🏆 Awards & Achievements',
    description: 'Competitions, awards, and academic achievements.'
  },
  {
    id: 'professional',
    name: '📜 Professional Certifications',
    description: 'Professional certifications, hard skills credentials, and language proficiencies.'
  },
  {
    id: 'learning',
    name: '🎓 Learning & Development',
    description: 'Specialized training, workshops, and educational cohorts.'
  },
  {
    id: 'leadership',
    name: '👥 Leadership & Experience',
    description: 'Student organizations, committees, internships, and volunteer roles.'
  },
  {
    id: 'publications',
    name: '📚 Publications & Presentations',
    description: 'Research papers, publications, and presentations in scientific forums.'
  }
];

export const achievementsData = [
  // --- 1. Awards & Achievements ---
  {
    title: 'Best Innovation Project Award',
    category: 'awards',
    issuer: 'UGM Student Hackathon Committee',
    issueDate: 'October 2024',
    thumbnail: certificateAward,
    fullImage: certificateAward,
    credentialUrl: 'https://github.com',
    credentialId: 'HACK-2024-089'
  },
  {
    title: "Dean's List Academic Excellence",
    category: 'awards',
    issuer: 'Universitas Gadjah Mada',
    issueDate: 'Semester 1 - 6 (Continuous)',
    thumbnail: certificateAward,
    fullImage: certificateAward,
    credentialId: 'DL-UGM-2024'
  },

  // --- 2. Professional Certifications ---
  {
    title: 'Dicoding Web Developer Certificate',
    category: 'professional',
    issuer: 'Dicoding Indonesia',
    issueDate: 'August 2024',
    thumbnail: certificateProfessional,
    fullImage: certificateProfessional,
    credentialUrl: 'https://github.com',
    credentialId: 'DIC-WEB-98754'
  },
  {
    title: 'Associate Cloud Engineer Certification',
    category: 'professional',
    issuer: 'Google Cloud Academy',
    issueDate: 'September 2024',
    thumbnail: certificateProfessional,
    fullImage: certificateProfessional,
    credentialUrl: 'https://github.com',
    credentialId: 'GCP-ACE-12345'
  },

  // --- 3. Learning & Development ---
  {
    title: 'Bangkit Academy Graduate',
    category: 'learning',
    issuer: 'Google, GoTo, Traveloka Initiative',
    issueDate: 'July 2024',
    thumbnail: certificateCompletion,
    fullImage: certificateCompletion,
    credentialUrl: 'https://github.com',
    credentialId: 'BANGKIT-2024-ML'
  },
  {
    title: 'Advanced Machine Learning Workshop',
    category: 'learning',
    issuer: 'UGM Artificial Intelligence Laboratory',
    issueDate: 'May 2024',
    thumbnail: certificateCompletion,
    fullImage: certificateCompletion
  },

  // --- 4. Leadership & Experience ---
  {
    title: 'IS Student Association (HMIG) Member',
    category: 'leadership',
    issuer: 'R&D Division Lead',
    issueDate: '2023 - 2024',
    thumbnail: certificateCompletion,
    fullImage: certificateCompletion
  },
  {
    title: 'Google Developer Student Clubs Core Team',
    category: 'leadership',
    issuer: 'GDSC UGM Chapter',
    issueDate: '2023 - 2024',
    thumbnail: certificateCompletion,
    fullImage: certificateCompletion
  },

  // --- 5. Publications & Presentations ---
  {
    title: 'BioMed Tech Seminar Speaker',
    category: 'publications',
    issuer: 'National Healthcare Forum',
    issueDate: 'November 2024',
    thumbnail: certificateCompletion,
    fullImage: certificateCompletion
  },
  {
    title: 'IoT Patient Monitoring Interface Publication',
    category: 'publications',
    issuer: 'IEEE International Conference on Biomedical Engineering',
    issueDate: 'December 2024',
    thumbnail: certificateCompletion,
    fullImage: certificateCompletion,
    credentialUrl: 'https://github.com',
    credentialId: 'IEEE-BIOMED-2024'
  }
];
