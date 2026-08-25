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
  visualType: 'financial_dashboard' | 'customer_segmentation' | 'bal_kavach';
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  status: 'Completed' | 'Pursuing';
  date?: string;
  badgeColor: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Vaibhav Mishra",
    role: "Data Analyst & Business Analytics Enthusiast",
    secondaryRole: "Python • SQL • Power BI • Excel • Data Visualization",
    heroBadge: "AVAILABLE FOR DATA ANALYST INTERNSHIPS",
    tagline: "Turning raw data into insights, dashboards, and better decisions.",
    heroDescription: "BCA student at Parul University with hands-on experience in SQL, Python, Excel, Power BI, data visualization, dashboard development, and business analytics.",
    email: "vaibhavmishra9679@gmail.com",
    phone: "+91 9679577062",
    location: "Vadodara, Gujarat, India",
    linkedin: "https://linkedin.com/in/vaibhav-mishra-369488322",
    github: "https://github.com/vaibhavmishra-sde",
  },
  quickFacts: {
    education: "BCA — Parul University",
    duration: "2025 – 2028",
    cgpa: "7.61 / 10",
    focus: "Data Analytics & Business Intelligence",
    location: "Vadodara, Gujarat, India",
    currentGoal: "Data Analyst Internship",
  },
  skillCategories: [
    {
      category: "Programming",
      skills: ["Python", "SQL", "JavaScript (Basic)"],
      icon: "Code2"
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "Oracle"],
      icon: "Database"
    },
    {
      category: "Data Analytics",
      skills: ["Excel", "Power BI", "Data Cleaning", "Data Visualization", "Dashboard Development", "Business Analytics"],
      icon: "BarChart3"
    },
    {
      category: "Python Libraries",
      skills: ["Pandas", "NumPy", "Matplotlib"],
      icon: "Library"
    },
    {
      category: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code"],
      icon: "Wrench"
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "financial-dashboard",
      number: "01",
      name: "Financial Dashboard Analysis",
      technologies: ["SQL", "Excel", "Power BI"],
      description: "Built interactive Power BI dashboards to track sales, profit, and KPI performance.",
      details: "Cleaned and transformed datasets to identify trends and business insights. Formulated DAX measures, automated weekly summaries, and designed regional breakdown views for executive decision making.",
      outcomes: [
        "Transformed messy sales transactions into clean, structured data models",
        "Formulated dynamic KPIs for sales revenue, profit margin, and volume trends",
        "Created interactive drill-down views by category, region, and time periods"
      ],
      githubUrl: "https://github.com/vaibhavmishra-sde",
      visualType: "financial_dashboard"
    },
    {
      id: "customer-segmentation",
      number: "02",
      name: "Customer Segmentation Analysis",
      technologies: ["Python", "SQL", "Power BI"],
      description: "Analyzed customer purchasing behavior using transactional data.",
      details: "Segmented customers based on spending patterns and created analytical reports. Utilized Python (Pandas/NumPy) for feature extraction and SQL for data aggregation.",
      outcomes: [
        "Calculated Recency, Frequency, and Monetary (RFM) indices for transactional records",
        "Categorized customer segments to identify high-value customer clusters",
        "Exported analytical summaries into interactive Power BI report views"
      ],
      githubUrl: "https://github.com/vaibhavmishra-sde",
      visualType: "customer_segmentation"
    },
    {
      id: "bal-kavach",
      number: "03",
      name: "Bal-Kavach",
      technologies: ["AI/ML", "Flutter", "Firebase"],
      description: "AI-powered child safety and parental monitoring platform.",
      details: "Designed system architecture and workflow for real-time safety monitoring, emergency alerts, threat detection, and location tracking.",
      outcomes: [
        "Structured real-time data flow for live geolocation telemetry",
        "Designed threat detection notification triggers and emergency alert system",
        "Created parent monitoring dashboard concept for immediate alert visualization"
      ],
      githubUrl: "https://github.com/vaibhavmishra-sde",
      visualType: "bal_kavach"
    }
  ] as Project[],

  certifications: [
    {
      title: "HackerRank SQL (Advanced)",
      issuer: "HackerRank",
      status: "Completed",
      badgeColor: "emerald"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera / Google",
      status: "Pursuing",
      badgeColor: "cyan"
    },
    {
      title: "IBM Statistics 101",
      issuer: "IBM Cognitive Class",
      status: "Completed",
      badgeColor: "purple"
    }
  ] as Certification[],

  openSource: {
    gssoc: {
      role: "GSSoC 2026 Contributor",
      organization: "GirlScript Summer of Code",
      description: "Contributed to open-source projects through collaborative development and used Git/GitHub for version control and project management."
    },
    osci: {
      role: "Contributor Selection",
      organization: "OpenSource Connect India (OSCI)",
      description: "Selected as an open-source contributor to participate in community-driven open development initiatives."
    }
  },

  journey: [
    {
      year: "2025",
      title: "Enrolled in BCA at Parul University",
      description: "Started degree in Computer Applications at Parul University, Vadodara with a core focus on Data Analytics and Database Management.",
      tag: "Academic Foundation"
    },
    {
      year: "2025",
      title: "Built First Data Analytics Dashboards",
      description: "Developed end-to-end analytical models in Excel and Power BI, exploring financial KPIs and customer behavior analysis.",
      tag: "Projects & SQL"
    },
    {
      year: "2025",
      title: "Earned HackerRank SQL (Advanced)",
      description: "Validated advanced query techniques, window functions, subqueries, and complex relational join optimization.",
      tag: "Certification"
    },
    {
      year: "2026",
      title: "Selected for OSCI & GSSoC 2026",
      description: "Chosen as an active open-source contributor for OpenSource Connect India and GirlScript Summer of Code 2026.",
      tag: "Open Source"
    },
    {
      year: "Present",
      title: "Seeking Data Analyst Internships",
      description: "Eager to apply Python, SQL, Power BI, and analytical problem-solving skills to real-world business datasets.",
      tag: "Career Milestone"
    }
  ] as JourneyMilestone[],

  achievements: [
    "Selected as Contributor for GirlScript Summer of Code (GSSoC 2026)",
    "Selected as Contributor for OpenSource Connect India (OSCI)",
    "Certified in HackerRank SQL (Advanced) with verified query mastery",
    "Built 3+ end-to-end Data Analytics projects utilizing SQL, Python, Excel & Power BI",
    "Maintains 7.61 / 10 CGPA in BCA at Parul University"
  ]
};
