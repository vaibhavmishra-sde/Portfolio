export interface Project {
  id: string;
  number: string;
  name: string;
  technologies: string[];
  description: string;
  details: string;
  outcomes: string[];
  githubUrl?: string;
  demoUrl?: string;
  visualType: 'web_app' | 'data_platform' | 'financial_dashboard' | 'customer_segmentation' | 'bal_kavach';
}

export interface SkillCategory { category: string; skills: string[]; icon: string; }
export interface Certification { title: string; issuer: string; status: 'Completed' | 'Pursuing'; date?: string; badgeColor: string; }
export interface JourneyMilestone { year: string; title: string; description: string; tag: string; }

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Vaibhav Mishra',
    role: 'Software Engineer',
    secondaryRole: 'JavaScript • React • TypeScript • Python • SQL',
    heroBadge: 'OPEN TO SOFTWARE ENGINEER INTERNSHIPS',
    tagline: 'Building thoughtful, reliable software for real-world problems.',
    heroDescription: 'BCA student at Parul University focused on building clean web experiences, practical applications, and developer-friendly solutions with modern JavaScript, React, TypeScript, Python, and SQL.',
    email: 'vaibhavmishra9679@gmail.com', phone: '+91 9679577062', location: 'Vadodara, Gujarat, India',
    linkedin: 'https://linkedin.com/in/vaibhav-mishra-369488322', github: 'https://github.com/vaibhavmishra-sde',
    typingPhrases: [
      'Full-Stack Web Applications',
      'React & TypeScript Interfaces',
      'Data-Driven Python Solutions',
      'RESTful API Integrations',
      'Open Source Contributions',
    ],
  },
  quickFacts: { education: 'BCA — Parul University', duration: '2025 – 2028', cgpa: '7.61 / 10', focus: 'Software Engineering & Problem Solving', location: 'Vadodara, Gujarat, India', currentGoal: 'Software Engineer Internship' },
  services: [
    { title: 'Frontend Development', description: 'Building responsive, component-driven interfaces with React, TypeScript, and modern CSS. Focus on performance, accessibility, and pixel-perfect UX.', icon: 'Monitor', tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { title: 'Backend & API Development', description: 'Designing RESTful APIs, database schemas, and server-side logic with Python, SQL, and Firebase for scalable data-driven applications.', icon: 'Server', tags: ['Python', 'SQL', 'Firebase', 'REST APIs'] },
    { title: 'Database Engineering', description: 'Crafting efficient queries, managing relational databases, and implementing data pipelines for analytics and reporting workflows.', icon: 'Database', tags: ['MySQL', 'PostgreSQL', 'Data Modeling', 'Query Optimization'] },
    { title: 'DevOps & Tooling', description: 'Version control with Git, CI/CD awareness, deployment to Vercel/Netlify, and development environment optimization.', icon: 'GitBranch', tags: ['Git', 'GitHub', 'Vercel', 'Vite'] },
  ] as ServiceItem[],
  skillCategories: [
    { category: 'Frontend', skills: ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'], icon: 'Code2' },
    { category: 'Backend & Data', skills: ['Python', 'SQL', 'MySQL', 'PostgreSQL', 'Firebase', 'REST APIs'], icon: 'Database' },
    { category: 'Development Practices', skills: ['Git', 'GitHub', 'Responsive Design', 'Debugging', 'Testing', 'Code Review'], icon: 'Wrench' },
    { category: 'Tools & Platforms', skills: ['VS Code', 'Vite', 'npm', 'Figma', 'Vercel', 'Netlify'], icon: 'Library' },
  ] as SkillCategory[],
  projects: [
    { id: 'portfolio-web-app', number: '01', name: 'Developer Portfolio', technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'], description: 'A responsive personal portfolio designed to clearly communicate projects, skills, and professional background with premium glassmorphism design.', details: 'Built as a component-driven React application with TypeScript, reusable UI patterns, responsive layouts, interactive project modals, resume preview, and animated micro-interactions powered by Framer Motion.', outcomes: ['Structured a maintainable component architecture with 15+ reusable components', 'Built responsive navigation with scroll spy and accessible interactive controls', 'Implemented glassmorphism design system with custom CSS utilities', 'Used TypeScript data models to keep project content consistent and easy to extend'], githubUrl: 'https://github.com/vaibhavmishra-sde/portfolio', demoUrl: 'https://vaibhavmishra.dev', visualType: 'web_app' },
    { id: 'customer-segmentation', number: '02', name: 'Customer Segmentation Engine', technologies: ['Python', 'SQL', 'Pandas', 'Data Processing'], description: 'A data-processing pipeline that groups customer behaviour into actionable segments using RFM analysis.', details: 'Used Python with Pandas for feature preparation and SQL for aggregation to turn raw transaction data into clear customer segments, scoring matrices, and actionable summaries.', outcomes: ['Prepared and transformed 10K+ rows of transactional data into reusable features', 'Calculated Recency, Frequency, and Monetary indices with scoring algorithms', 'Produced structured CSV summaries for downstream reporting and decisions', 'Achieved 95% accuracy in customer segment classification'], githubUrl: 'https://github.com/vaibhavmishra-sde', visualType: 'data_platform' },
    { id: 'bal-kavach', number: '03', name: 'Bal-Kavach Safety Platform', technologies: ['Flutter', 'Firebase', 'AI/ML', 'Google Maps API'], description: 'A child-safety platform concept with real-time monitoring, geo-fencing, and emergency alert workflows.', details: 'Designed a mobile-first system architecture for safety monitoring, threat signals, live location tracking with geo-fencing, and parent-facing notifications via Firebase Cloud Messaging.', outcomes: ['Designed real-time location and alert data flows with Firebase Realtime DB', 'Defined notification triggers for emergency situations with sub-second latency', 'Created a parent-monitoring dashboard concept for fast visibility', 'Implemented geo-fence boundary detection with Google Maps API'], githubUrl: 'https://github.com/vaibhavmishra-sde', visualType: 'bal_kavach' },
  ] as Project[],
  certifications: [
    { title: 'HackerRank SQL (Advanced)', issuer: 'HackerRank', status: 'Completed', date: '2025', badgeColor: 'emerald' },
    { title: 'Google Data Analytics Professional Certificate', issuer: 'Coursera / Google', status: 'Pursuing', badgeColor: 'cyan' },
    { title: 'IBM Statistics 101', issuer: 'IBM Cognitive Class', status: 'Completed', date: '2025', badgeColor: 'purple' },
  ] as Certification[],
  openSource: { gssoc: { role: 'GSSoC 2026 Contributor', organization: 'GirlScript Summer of Code', description: 'Contributing to open-source projects through collaborative development, pull request workflows, and Git/GitHub-based code review processes.' }, osci: { role: 'Contributor Selection', organization: 'OpenSource Connect India (OSCI)', description: 'Selected to participate in community-driven open-source development initiatives focused on real-world impact.' } },
  journey: [
    { year: '2025', title: 'Enrolled in BCA at Parul University', description: 'Started a Computer Applications degree in Vadodara, building foundations in programming, data structures, databases, and software engineering principles.', tag: 'Academic Foundation' },
    { year: '2025', title: 'Started Building Practical Projects', description: 'Applied programming, SQL, and product-thinking skills to portfolio and data-processing projects with real-world use cases.', tag: 'Projects' },
    { year: '2025', title: 'Earned HackerRank SQL (Advanced)', description: 'Validated advanced querying skills including complex joins, subqueries, CTEs, and window functions.', tag: 'Certification' },
    { year: '2026', title: 'Selected for OSCI & GSSoC 2026', description: 'Chosen to contribute to collaborative open-source development communities, reviewing code and submitting pull requests.', tag: 'Open Source' },
    { year: 'Present', title: 'Seeking Software Engineer Internships', description: 'Ready to contribute curiosity, solid fundamentals, and a builder mindset to a professional engineering team.', tag: 'Career Goal' },
  ] as JourneyMilestone[],
  achievements: ['Selected as Contributor for GirlScript Summer of Code (GSSoC 2026)', 'Selected as Contributor for OpenSource Connect India (OSCI)', 'Certified in HackerRank SQL (Advanced)', 'Built practical projects with React, TypeScript, Python, SQL, and Firebase', 'Maintains 7.61 / 10 CGPA in BCA at Parul University', 'Active open-source contributor on GitHub'],
  stats: {
    projectsBuilt: 5,
    techStack: 15,
    commits: '200+',
    openSourcePRs: 10,
  },
};
