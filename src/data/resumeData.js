export const personalInfo = {
  name: "Varun Hirethotlukere Shamaraju",
  shortName: "Varun H Shamaraju",
  initials: "VHS",
  title: "Data Engineer | ML Engineer | Cloud Developer",
  email: "varunhs306@gmail.com",
  phone: "+49 15510081672",
  location: "Leipzig, Germany",
  linkedin: "https://linkedin.com/in/varunhs306",
  github: "https://github.com/varunhs306",
  summary: "Professional experience delivering ETL pipelines, predictive models, and cloud-native solutions. Open to internship opportunities in analytics or engineering",
};

export const experience = [
  {
    title: "Analyst",
    company: "Deloitte South Asia LLP",
    location: "Bengaluru",
    period: "Oct 2024 – Mar 2025",
    description: [
      "Migrated legacy data processes to AWS, improving data accessibility and query performance",
      "Built executive dashboards visualizing subscription revenue, event metrics, and member growth",
      "Implemented predictive models for member engagement scoring using Python and SageMaker",
      "Automated model retraining pipelines using Step Functions and Lambda for continuous improvement",
    ],
  },
  {
    title: "Software Engineer",
    company: "Atria Convergence Technologies",
    location: "Bengaluru",
    period: "Sep 2022 – Oct 2024",
    description: [
      "Automated data ingestion from CRM and OSS/BSS systems using OCI Data Integration",
      "Built operational dashboards for NOC teams to monitor SLA compliance and outage metrics",
      "Developed predictive maintenance models to forecast network equipment failures",
      "Implemented MLOps practices including model versioning and A/B testing on OCI",
    ],
  },
];

export const projects = [
  {
    title: "SAGE — Stock Analysis & Guidance Engine",
    version: "v1.0.2",
    description: "AI-powered tool for fundamental stock analysis, fetching real-time financial data and generating investment insights using local LLMs.",
    highlights: [
      "Fetches real-time financial data and company fundamentals for comprehensive stock analysis",
      "Generates AI-driven investment insights and recommendations using local LLM models",
      "Provides fundamental analysis including financial metrics, ratios, and market positioning",
      "Designed for privacy and offline use with local LLM integration"
    ],
    tags: ["Python", "LLM", "Financial Analysis", "AI", "Stock Analysis"],
    colab: "https://colab.research.google.com/drive/1lKwHTJuHDtrs_E-5_3pOLCkcnEkAm86Z?usp=sharing",
    demo: null,
  },

  {
    title: "NSE Index Dashboard",
    version: "v1.0",
    description: "Interactive Streamlit dashboard for tracking NSE indices and stocks with real-time data from Yahoo Finance.",
    highlights: [
      "Delivers real-time market insights for NSE indices and individual stocks",
      "Features interactive dashboards with performance metrics, comparisons, and visual analytics",
      "Built with modular Python architecture and Plotly visualizations for clarity and scalability",
      "Provides comprehensive tracking of Indian stock market movements and trends"
    ],
    tags: ["Python", "Pandas", "Yfinance", "Streamlit", "Plotly", "Dashboard"],
    github: "https://github.com/BigData-SRH/Varun-Finance-Dashboard",
    demo: "https://finance-dashboard-vhs.streamlit.app/",
  },

  {
    title: "Serverless Telegram Bot",
    description: "Telegram bot backend deployed using Terraform and AWS Lambda, tested locally using LocalStack for serverless simulation.",
    highlights: [
      "Built serverless bot architecture using AWS Lambda for scalable message processing",
      "Automated infrastructure deployment and management using Terraform IaC",
      "Implemented local development and testing workflow using LocalStack for serverless simulation",
      "Designed for cost-effective, event-driven bot operations with minimal infrastructure overhead"
    ],
    tags: ["Terraform", "AWS Lambda", "Python", "LocalStack", "Serverless", "IaC"],
    github: "https://github.com/varunhs306/my-terraform-localstack",
    demo: null,
  },

  {
    title: "Depression Detection from Social Media",
    description: "ML pipeline for detecting depression in social posts using NLP and classical models (SVM, RF, Naive Bayes). Focused on reproducibility, privacy (PII removal), and robust evaluation metrics.",
    highlights: [
      "Built data pipeline with Twitter/Reddit APIs, text cleaning, TF-IDF/embeddings, and PII removal for privacy",
      "Trained and evaluated classical ML models (SVM, Random Forest, Naive Bayes) with cross-validation",
      "Implemented robust evaluation using precision, recall, F1-score, ROC-AUC, and bias analysis",
      "Ensured reproducibility through structured pipeline and comprehensive documentation"
    ],
    tags: ["Python", "ML", "NLP", "SVM", "Random Forest", "Scikit-learn", "Privacy"],
    github: "#",
    demo: null,
  },
];

export const skills = {
  "Languages": ["Python", "SQL", "Bash"],
  "Data & ML": ["Scikit-learn", "Pandas", "Polars", "RAG Concepts"],
  "Cloud & Infra": ["AWS", "Oracle Cloud Infra", "Oracle OCA", "Google Cloud Platform", "Snowflake", "QuickSight"],
  "DevOps": ["Docker", "Kubernetes", "Terraform", "Apache Airflow", "Grafana"],
  "Databases": ["PostgreSQL", "SQLite"],
  "Practices": ["MLOps", "CI/CD", "Data Quality", "RAG Concepts"],
};

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure — Certified Generative AI Professional",
    issuer: "Oracle",
    link: null,
  },
  {
    title: "Oracle Cloud Infrastructure — Certified Data Science Professional",
    issuer: "Oracle",
    link: null,
  },
];

export const education = [
  {
    degree: "M.Sc.",
    institution: "SRH University",
    location: "Leipzig, Germany",
    period: "2025 – Present",
  },
  {
    degree: "B.E.",
    institution: "Visvesvaraya Technological University",
    location: "Bengaluru, India",
    period: "2018 – 2022",
  },
];

export const publications = [
  {
    title: "Mining Social Media for Mental Health Insights: A Machine Learning Approach to Depression Detection",
    authors: "Varun H. S., Shilpa H.",
    journal: "IJRAR",
    volume: "Vol. 12, Issue 1",
    date: "Mar 2025",
    link: null,
  },
];

export const research = [
  {
    title: "Literature Review",
    description: "Comprehensive literature review exploring recent advances and methodologies in the field.",
    keywords: ["Research", "Literature Review", "AI", "ML"],
    file: "/literature-review.pdf",
  },
];

export const languages = [
  { name: "Kannada", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "German", level: "A1" },
];
