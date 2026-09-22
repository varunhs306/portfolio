const PERMIT = "Post-study permit (Section 20(3)), unrestricted full-time work from September 2026";

export const personalInfo = {
  name: "Varun Hirethotlukere Shamaraju",
  shortName: "Varun H S",
  initials: "VHS",
  title: "Data, ML and AI Engineer",
  email: "varunhs306@gmail.com",
  location: "Munich, Germany",
  linkedin: "https://linkedin.com/in/varunhs306",
  github: "https://github.com/varunhs306",
  headline: "I build pipelines that stay up, get models into production and keep them there.",
  summary: "2 years 7 months of production engineering across telecommunications and consulting, now completing an M.Sc. in Computer Science (Big Data and AI) and building grounded LLM applications on Gemini.",
  availability: "Available immediately",
  permit: PERMIT,
  workAuthorisation: `${PERMIT}. No sponsorship required`,
  openTo: "Data Engineer, ML Engineer, MLOps and AI Engineer roles",
};

export const stats = [
  { value: "5M+", label: "records a day through production pipelines" },
  { value: "<1 hour", label: "end-to-end data latency, down from 6 hours" },
  { value: "6", label: "production models shipped" },
  { value: "1 week", label: "model deployment cycle, down from 3 weeks" },
  { value: "1.6", label: "M.Sc. grade (German scale)" },
];

export const about = [
  "Data and ML engineer with 2 years 7 months of production experience across telecommunications and consulting, currently completing an M.Sc. in Computer Science (Big Data and Artificial Intelligence) at SRH University.",
  "At ACT Fibernet I owned ingestion and model deployment for network operations analytics at an ISP serving over two million broadband subscribers, moving 5M+ records a day through Airflow pipelines and cutting end-to-end latency from six hours to under one hour. At Deloitte I re-platformed 12 legacy processes onto AWS and built member engagement scoring models that lifted campaign conversion 9%, client-facing from week one and presenting to stakeholders including two directors.",
  "What I actually do: build data pipelines that stay up, get models into production and keep them there, and make the infrastructure underneath reproducible. Lately most of that is LLM work: agents that call real tools, retrieval-augmented generation, and services that keep every number in a deterministic data layer so the model never invents one.",
  "Outside work I publish research on LLM applications and build in the open.",
];

export const experience = [
  {
    title: "Analyst",
    company: "Deloitte India (Deloitte South Asia LLP)",
    location: "Bengaluru",
    period: "Oct 2024 – Mar 2025",
    context: "Six-person analytics pod delivering a cloud migration and member analytics for a consumer client with a 150,000-member base.",
    description: [
      "Re-platformed 12 legacy data processes onto AWS, improving query performance 25% and cutting infrastructure cost 15%, retiring the client's overnight batch dependency",
      "Built member engagement scoring models in Python and Amazon SageMaker, reaching 0.78 AUC and lifting campaign conversion 9%",
      "Built five self-serve dashboards used by 30+ stakeholders across three business units, replacing 20 hours of manual reporting a month",
      "Client-facing from week one; presented architecture trade-offs and model results to stakeholders including two directors",
    ],
    stack: ["Python", "SQL", "AWS", "Amazon SageMaker", "scikit-learn", "Power BI"],
  },
  {
    title: "Software Engineer",
    company: "Atria Convergence Technologies (ACT Fibernet)",
    location: "Bengaluru",
    period: "Sep 2022 – Oct 2024",
    context: "Team of six data engineers in a 40-person technology group at an ISP serving 2M+ broadband subscribers across 20+ Indian cities.",
    description: [
      "Automated ingestion across three CRM and OSS/BSS systems with Apache Airflow, processing 5M+ records daily and cutting end-to-end latency from six hours to under one hour",
      "Owned orchestration for 40+ scheduled pipelines, adding retry logic, alerting and data quality checks that took failed overnight runs from several a week to roughly one a month",
      "Shipped six production models with versioning and A/B testing, cutting deployment cycles from three weeks to one week and moving retraining from quarterly to monthly",
      "Deployed predictive maintenance across 1,200+ network nodes, forecasting failures seven days ahead and reducing unplanned downtime 12%",
      "Containerised services with Docker, provisioned infrastructure with Terraform, and mentored two junior engineers through design and code review",
    ],
    stack: ["Python", "SQL", "Apache Airflow", "OCI", "Docker", "Terraform", "PyTorch", "scikit-learn"],
  },
];

export const projects = [
  {
    title: "SIGMA: Grounded LLM Equity Research Service",
    description: "Self-hosted Telegram bot giving equity research across global exchanges (/price, /analyze, handles tickers like RELIANCE.NS and SAP.DE). Metrics are computed deterministically and Gemini writes only the narrative, so every figure comes from the data layer and never from model priors. If the model is disabled or unavailable, a null-LLM implementation replies with the metrics digest alone.",
    highlights: [],
    labels: ["LLM", "Gemini", "Docker", "CI/CD"],
    tags: ["Python 3.12", "uv", "Gemini 2.5 Flash-Lite", "Docker Compose", "SQLite", "GitHub Actions", "Pytest", "Ruff", "MyPy"],
    github: "https://github.com/varunhs306/SIGMA",
  },
  {
    title: "SAGE: Agentic Stock Analysis Assistant",
    description: "Agent that decides which live financial data tools to call, chains the results and grounds every claim in what came back. Orchestration and tool registry written by hand. Runs on a self-hosted model to keep inference cost and data in-house.",
    highlights: [],
    labels: ["Agents", "Tool use", "Local LLM"],
    tags: ["Python", "Local LLM inference", "Financial data APIs"],
    colab: "https://colab.research.google.com/drive/1lKwHTJuHDtrs_E-5_3pOLCkcnEkAm86Z?usp=sharing",
  },
  {
    title: "Serverless AI Assistant",
    description: "Gemini-powered conversational assistant on AWS Lambda, with functions, IAM roles and triggers defined in Terraform and integration-tested against LocalStack before any cloud deployment.",
    highlights: [],
    labels: ["Serverless", "IaC", "Gemini"],
    tags: ["AWS Lambda", "Terraform", "LocalStack", "Gemini API"],
    github: "https://github.com/varunhs306/my-terraform-localstack",
  },
  {
    title: "NSE Index Dashboard",
    description: "Live dashboard tracking NSE indices and equities from Yahoo Finance, with caching to keep latency stable against a rate-limited upstream feed.",
    highlights: [],
    labels: ["Data app", "Live data"],
    tags: ["Python", "Streamlit"],
    demo: "https://finance-dashboard-vhs.streamlit.app/",
  },
];

export const research = [
  {
    title: "Early Detection of Depression from Social Media Data",
    status: "Published research, 2025",
    citation: "Varun H. S., Shilpa H. IJRAR, Vol. 12, Issue 1, Mar 2025",
    description: "Benchmarked classifiers on noisy, imbalanced social media text, selected on precision-recall, and deployed the best model behind a web application scoring severity for clinical evaluation.",
    keywords: ["NLP", "scikit-learn", "Model evaluation"],
  },
  {
    title: "Zero-Shot Detection of Market Manipulation Intent with Local LLMs",
    status: "Independent research",
    description: "Retrieval-augmented generation on locally deployed LLMs to detect manipulation intent without task-specific fine-tuning, measured against a labelled baseline, with quantisation tuned for constrained hardware.",
    keywords: ["RAG", "LLM evaluation", "Prompt engineering"],
  },
];

export const skills = {
  "Languages": ["Python", "SQL", "Bash"],
  "AI and LLM": ["Gemini API", "Agentic workflows and tool use", "Retrieval-augmented generation", "Prompt engineering", "Output grounding", "Self-hosted inference", "LLM evaluation"],
  "Machine Learning": ["PyTorch", "scikit-learn", "Amazon SageMaker", "Model versioning", "A/B testing", "Monitoring and retraining"],
  "Data Engineering": ["Apache Airflow", "ETL/ELT pipeline design", "PostgreSQL", "SQLite", "Data quality and validation"],
  "Cloud and Infrastructure": ["AWS (Lambda, S3, SageMaker)", "Terraform", "LocalStack", "Docker", "Docker Compose"],
  "Engineering Practice": ["Git", "GitHub Actions", "CI/CD", "Pytest", "Ruff", "MyPy", "pre-commit", "Code review"],
  "Apps and Analytics": ["Streamlit", "Power BI"],
};

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2026",
    link: "https://www.credly.com/badges/52307710-90d9-4c17-824a-378046cc0da2/public_url",
  },
  {
    title: "OCI Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    link: null,
  },
  {
    title: "OCI Certified Data Science Professional",
    issuer: "Oracle",
    year: "2025",
    link: null,
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science: Big Data and Artificial Intelligence",
    institution: "SRH University",
    location: "Leipzig, Germany",
    period: "2025 – 2026",
    grade: "Grade 1.6",
  },
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Visvesvaraya Technological University",
    location: "Bengaluru, India",
    period: "2018 – 2022",
  },
];

export const languages = [
  { name: "English", level: "C1, professional proficiency" },
  { name: "German", level: "A2, improving" },
  { name: "Kannada", level: "Native" },
];
