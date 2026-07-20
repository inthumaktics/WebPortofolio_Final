import { awardsData } from './awards';
import { certificationsData } from './certifications';
import { learningData } from './learning';
import { leadershipData } from './leadership';
import { publicationsData } from './publications';

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

// Flatten certifications to be compatible with PrintPortfolio and All category
const flatCertifications = certificationsData.flatMap(domain =>
  domain.certificates.map(cert => ({
    ...cert,
    category: 'professional'
  }))
);

export const achievementsData = [
  ...awardsData,
  ...flatCertifications,
  ...learningData,
  ...leadershipData,
  ...publicationsData
];

export { awardsData, certificationsData, learningData, leadershipData, publicationsData };
