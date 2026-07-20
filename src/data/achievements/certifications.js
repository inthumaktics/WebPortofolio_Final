import certificateProfessional from '../../assets/prof_skills/certificate_professional.png';
import certificateCompletion from '../../assets/prof_skills/certificate_completion.png';

export const certificationsData = [
  {
    id: 'frontend',
    title: 'Front-End Development',
    iconName: 'Layout',
    description: 'Professional credentials in responsive web design, interactive single-page applications, and modern frontend frameworks.',
    techStack: ['HTML5/CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
    providers: ['Codepolitan'],
    certificates: [
      {
        title: 'Belajar Membuat Aplikasi Web dengan React',
        issuer: 'Dicoding Indonesia',
        issueDate: 'August 2024',
        thumbnail: certificateProfessional,
        fullImage: certificateProfessional,
        credentialUrl: 'https://credential.dicoding.com/BELAJAR-REACT-123',
        credentialId: 'DIC-REACT-98754'
      },
      {
        title: 'Belajar Membuat Front-End Web untuk Pemula',
        issuer: 'Dicoding Indonesia',
        issueDate: 'July 2024',
        thumbnail: certificateCompletion,
        fullImage: certificateCompletion,
        credentialUrl: 'https://credential.dicoding.com/FRONTEND-PEMULA-456',
        credentialId: 'DIC-FE-PEMULA'
      },
      {
        title: 'Belajar Dasar Pemrograman Web',
        issuer: 'Dicoding Indonesia',
        issueDate: 'June 2024',
        thumbnail: certificateCompletion,
        fullImage: certificateCompletion,
        credentialUrl: 'https://credential.dicoding.com/DASAR-WEB-789',
        credentialId: 'DIC-WEB-DASAR'
      },
      {
        title: 'Front-End Web Developer Track',
        issuer: 'Codepolitan',
        issueDate: 'May 2024',
        thumbnail: certificateProfessional,
        fullImage: certificateProfessional,
        credentialUrl: 'https://codepolitan.com/cert/FE-DEV-999',
        credentialId: 'CP-FEDEV-999'
      }
    ]
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    iconName: 'Cpu',
    description: 'Certifications covering machine learning algorithms, deep learning neural networks, and Python-based data science pipelines.',
    techStack: ['Python', 'TensorFlow', 'Scikit-Learn', 'Pandas'],
    providers: ['Dicoding Indonesia'],
    certificates: [
      {
        title: 'Machine Learning Specialization',
        issuer: 'DeepLearning.AI & Stanford University',
        issueDate: 'September 2024',
        thumbnail: certificateProfessional,
        fullImage: certificateProfessional,
        credentialUrl: 'https://coursera.org/verify/specialization/ML-SPECIAL',
        credentialId: 'COURSERA-ML-SPEC'
      },
      {
        title: 'Belajar Dasar Visualisasi Data',
        issuer: 'Dicoding Indonesia',
        issueDate: 'September 2024',
        thumbnail: certificateCompletion,
        fullImage: certificateCompletion,
        credentialUrl: 'https://credential.dicoding.com/VISUALISASI-DATA-111',
        credentialId: 'DIC-VIS-DATA'
      },
      {
        title: 'Python for Data Science and AI',
        issuer: 'IBM on Coursera',
        issueDate: 'August 2024',
        thumbnail: certificateProfessional,
        fullImage: certificateProfessional,
        credentialUrl: 'https://coursera.org/verify/IBM-PYTHON-AI',
        credentialId: 'IBM-PY-AI-44'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    iconName: 'Smartphone',
    description: 'Credentials in native and cross-platform mobile application development, state management, and deployment pipelines.',
    techStack: ['Dart', 'Flutter', 'Android SDK', 'BLoC / Provider'],
    providers: ['Dicoding Indonesia', 'Udemy'],
    certificates: [
      {
        title: 'Menjadi Flutter Developer Expert',
        issuer: 'Dicoding Indonesia',
        issueDate: 'October 2024',
        thumbnail: certificateProfessional,
        fullImage: certificateProfessional,
        credentialUrl: 'https://credential.dicoding.com/FLUTTER-EXPERT',
        credentialId: 'DIC-FLUTTER-EXP'
      },
      {
        title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
        issuer: 'Dicoding Indonesia',
        issueDate: 'September 2024',
        thumbnail: certificateCompletion,
        fullImage: certificateCompletion,
        credentialUrl: 'https://credential.dicoding.com/FLUTTER-PEMULA',
        credentialId: 'DIC-FLUTTER-PEM'
      },
      {
        title: 'Belajar Dasar Pemrograman Dart',
        issuer: 'Dicoding Indonesia',
        issueDate: 'August 2024',
        thumbnail: certificateCompletion,
        fullImage: certificateCompletion,
        credentialUrl: 'https://credential.dicoding.com/DASAR-DART',
        credentialId: 'DIC-DART-DASAR'
      }
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    iconName: 'Palette',
    description: 'Certifications covering user research, information architecture, wireframing, high-fidelity prototyping, and usability testing.',
    techStack: ['Figma', 'Wireframing', 'User Research', 'Prototyping'],
    providers: ['Google on Coursera', 'Dicoding Indonesia'],
    certificates: [
      {
        title: 'Google UX Design Professional Certificate',
        issuer: 'Google on Coursera',
        issueDate: 'November 2024',
        thumbnail: certificateProfessional,
        fullImage: certificateProfessional,
        credentialUrl: 'https://coursera.org/verify/professional-cert/GOOGLE-UX',
        credentialId: 'G-UX-PROF-777'
      },
      {
        title: 'Belajar Dasar UX Design',
        issuer: 'Dicoding Indonesia',
        issueDate: 'October 2024',
        thumbnail: certificateCompletion,
        fullImage: certificateCompletion,
        credentialUrl: 'https://credential.dicoding.com/DASAR-UX',
        credentialId: 'DIC-UX-DASAR'
      },
      {
        title: 'UI/UX Design Bootcamp Certification',
        issuer: 'Codepolitan',
        issueDate: 'July 2024',
        thumbnail: certificateProfessional,
        fullImage: certificateProfessional,
        credentialUrl: 'https://codepolitan.com/cert/UIUX-BOOT',
        credentialId: 'CP-UIUX-BOOT'
      }
    ]
  },
  {
    id: 'software-eng',
    title: 'Software Engineering & Cloud',
    iconName: 'Layers',
    description: 'Core computing credentials covering version control, cloud computing platforms, database architecture, and backend systems.',
    techStack: ['Git & GitHub', 'AWS', 'Google Cloud', 'SQL'],
    providers: ['Google Cloud Academy', 'AWS Academy', 'Dicoding Indonesia', 'Oracle Academy'],
    certificates: [
      {
        title: 'Associate Cloud Engineer Certification',
        issuer: 'Google Cloud Academy',
        issueDate: 'September 2024',
        thumbnail: certificateProfessional,
        fullImage: certificateProfessional,
        credentialUrl: 'https://google.acredly.com/verify/GCP-ACE-12345',
        credentialId: 'GCP-ACE-12345'
      },
      {
        title: 'Architecting on AWS Foundations',
        issuer: 'AWS Academy',
        issueDate: 'October 2024',
        thumbnail: certificateProfessional,
        fullImage: certificateProfessional,
        credentialUrl: 'https://aws.amazon.com/verify/AWS-ARCH',
        credentialId: 'AWS-ARCH-FOUND'
      },
      {
        title: 'Belajar Dasar Pemrograman JavaScript',
        issuer: 'Dicoding Indonesia',
        issueDate: 'June 2024',
        thumbnail: certificateCompletion,
        fullImage: certificateCompletion,
        credentialUrl: 'https://credential.dicoding.com/DASAR-JS',
        credentialId: 'DIC-JS-DASAR'
      },
      {
        title: 'Belajar Dasar Git dengan GitHub',
        issuer: 'Dicoding Indonesia',
        issueDate: 'June 2024',
        thumbnail: certificateCompletion,
        fullImage: certificateCompletion,
        credentialUrl: 'https://credential.dicoding.com/DASAR-GIT',
        credentialId: 'DIC-GIT-DASAR'
      }
    ]
  }
];
