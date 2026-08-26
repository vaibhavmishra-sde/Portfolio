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

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Vaibhav Mishra',
    role: 'Software Developer',
    secondaryRole: 'JavaScript • React • TypeScript • Python • SQL',
    heroBadge: 'OPEN TO SOFTWARE DEVELOPER INTERNSHIPS',
    tagline: 'Building thoughtful, reliable software for real-world problems.',
    heroDescription: 'BCA student at Parul University focused on building clean web experiences, practical applications, and developer-friendly solutions with modern JavaScript, React, TypeScript, Python, and SQL.',
    email: 'vaibhavmishra9679@gmail.com', phone: '+91 9679577062', location: 'Vadodara, Gujarat, India',
    linkedin: 'https://linkedin.com/in/vaibhav-mishra-369488322', github: 'https://github.com/vaibhavmishra-sde',
  },
  quickFacts: { education: 'BCA — Parul University', duration: '2025 – 2028', cgpa: '7.61 / 10', focus: 'Software Development & Problem Solving', location: 'Vadodara, Gujarat, India', currentGoal: 'Software Developer Internship' },
  skillCategories: [
    { category: 'Frontend', skills: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS'], icon: 'Code2' },
    { category: 'Backend & Data', skills: ['Python', 'SQL', 'MySQL', 'PostgreSQL', 'Firebase'], icon: 'Database' },
    { category: 'Development Practices', skills: ['Git', 'GitHub', 'REST APIs', 'Responsive Design', 'Debugging'], icon: 'Wrench' },
    { category: 'Tools', skills: ['VS Code', 'Vite', 'npm', 'Figma'], icon: 'Library' },
  ] as SkillCategory[],
  projects: [
    { id: 'portfolio-web-app', number: '01', name: 'Developer Portfolio', technologies: ['React', 'TypeScript', 'Vite'], description: 'A responsive personal portfolio designed to clearly communicate projects, skills, and professional background.', details: 'Built as a component-driven React application with TypeScript, reusable UI patterns, responsive layouts, and interactive project and resume views.', outcomes: ['Structured a maintainable component architecture for every portfolio section', 'Built responsive navigation and accessible interactive controls', 'Used TypeScript data models to keep project content consistent and easy to extend'], githubUrl: 'https://github.com/vaibhavmishra-sde', visualType: 'web_app' },
    { id: 'customer-segmentation', number: '02', name: 'Customer Segmentation Tool', technologies: ['Python', 'SQL', 'Data Processing'], description: 'A data-processing project that groups customer behaviour into useful, actionable segments.', details: 'Used Python for feature preparation and SQL for aggregation to turn raw transaction data into clear customer segments and summaries.', outcomes: ['Prepared and transformed transactional data into reusable features', 'Calculated Recency, Frequency, and Monetary indices', 'Produced structured summaries for downstream reporting and decisions'], githubUrl: 'https://github.com/vaibhavmishra-sde', visualType: 'data_platform' },
    { id: 'bal-kavach', number: '03', name: 'Bal-Kavach', technologies: ['Flutter', 'Firebase', 'AI/ML'], description: 'A child-safety platform concept with real-time monitoring and emergency alert workflows.', details: 'Designed a mobile-first system architecture for safety monitoring, threat signals, live location tracking, and parent-facing notifications.', outcomes: ['Designed real-time location and alert data flows', 'Defined notification triggers for emergency situations', 'Created a parent-monitoring dashboard concept for fast visibility'], githubUrl: 'https://github.com/vaibhavmishra-sde', visualType: 'bal_kavach' },
  ] as Project[],
  certifications: [
    { title: 'HackerRank SQL (Advanced)', issuer: 'HackerRank', status: 'Completed', badgeColor: 'emerald' },
    { title: 'Google Data Analytics Professional Certificate', issuer: 'Coursera / Google', status: 'Pursuing', badgeColor: 'cyan' },
    { title: 'IBM Statistics 101', issuer: 'IBM Cognitive Class', status: 'Completed', badgeColor: 'purple' },
  ] as Certification[],
  openSource: { gssoc: { role: 'GSSoC 2026 Contributor', organization: 'GirlScript Summer of Code', description: 'Contributing to open-source projects through collaborative development and Git/GitHub-based workflows.' }, osci: { role: 'Contributor Selection', organization: 'OpenSource Connect India (OSCI)', description: 'Selected to participate in community-driven open-source development initiatives.' } },
  journey: [
    { year: '2025', title: 'Enrolled in BCA at Parul University', description: 'Started a Computer Applications degree in Vadodara, building foundations in programming, databases, and software development.', tag: 'Academic Foundation' },
    { year: '2025', title: 'Started Building Practical Projects', description: 'Applied programming, SQL, and product-thinking skills to portfolio and data-processing projects.', tag: 'Projects' },
    { year: '2025', title: 'Earned HackerRank SQL (Advanced)', description: 'Validated advanced querying skills including joins, subqueries, and window functions.', tag: 'Certification' },
    { year: '2026', title: 'Selected for OSCI & GSSoC 2026', description: 'Chosen to contribute to collaborative open-source development communities.', tag: 'Open Source' },
    { year: 'Present', title: 'Seeking Software Developer Internships', description: 'Ready to contribute curiosity, solid fundamentals, and a builder mindset to an engineering team.', tag: 'Career Goal' },
  ] as JourneyMilestone[],
  achievements: ['Selected as Contributor for GirlScript Summer of Code (GSSoC 2026)', 'Selected as Contributor for OpenSource Connect India (OSCI)', 'Certified in HackerRank SQL (Advanced)', 'Built practical projects with React, TypeScript, Python, SQL, and Firebase', 'Maintains 7.61 / 10 CGPA in BCA at Parul University'],
};
