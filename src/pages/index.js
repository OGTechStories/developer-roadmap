import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const RoadmapSections = [
  {
    number: '01',
    title: 'Foundations',
    description: 'Build the tools and habits every Python developer needs first.',
    topics: [
      ['Computer Fundamentals', 'computer-fundamentals'], ['Linux & Command Line', 'linux-command-line'], ['Bash Scripting', 'bash-scripting'], ['Git & GitHub', 'git-github'],
    ],
  },
  {
    number: '02',
    title: 'Programming',
    description: 'Move from Python syntax into confident, production-minded programming.',
    topics: [
      ['Python Basics', 'python-basics'], ['Python Intermediate', 'python-intermediate'], ['Object-Oriented Programming (OOP)', 'object-oriented-programming'], ['Python Advanced', 'python-advanced'], ['Testing (pytest)', 'testing-pytest'], ['Debugging & Profiling', 'debugging-profiling'],
    ],
  },
  {
    number: '03',
    title: 'Computer Science Core',
    description: 'Develop the reasoning skills behind efficient software and systems.',
    topics: [
      ['Time & Space Complexity', 'time-space-complexity'], ['Data Structures', 'data-structures'], ['Algorithms', 'algorithms'], ['Recursion & Backtracking', 'recursion-backtracking'], ['Dynamic Programming', 'dynamic-programming'], ['Graph Algorithms', 'graph-algorithms'], ['Operating Systems', 'operating-systems'], ['Computer Networking', 'computer-networking'], ['Computer Architecture (basics)', 'computer-architecture-basics'],
    ],
  },
  {
    number: '04',
    title: 'Databases',
    description: 'Learn how application data is modeled, queried, scaled, and maintained.',
    topics: [
      ['Database Fundamentals', 'database-fundamentals'], ['SQL', 'sql'], ['Advanced SQL', 'advanced-sql'], ['PostgreSQL', 'postgresql'], ['Query Optimization & Indexing', 'query-optimization-indexing'], ['ORMs & Migrations', 'orms-migrations'], ['NoSQL', 'nosql'], ['Vector Databases', 'vector-databases'],
    ],
  },
  {
    number: '05',
    title: 'Career Options',
    description: 'Understand the paths available and choose a direction deliberately.',
    topics: [['Career Tracks Overview', 'career-tracks-overview'], ['Choosing Your Track', 'choosing-your-track']],
  },
  {
    number: '06',
    title: 'Backend Development',
    description: 'Create secure, reliable APIs and services with the Python ecosystem.',
    topics: [
      ['Web Fundamentals', 'web-fundamentals'], ['FastAPI', 'fastapi'], ['Django', 'django'], ['Flask', 'flask'], ['Authentication & Authorization', 'authentication-authorization'], ['Web Security (OWASP)', 'web-security-owasp'], ['Caching', 'caching'], ['Background Jobs & Task Queues', 'background-jobs-task-queues'], ['Message Brokers', 'message-brokers'], ['API Design', 'api-design'], ['Basic Frontend', 'basic-frontend'],
    ],
  },
  {
    number: '07',
    title: 'DevOps & Cloud',
    description: 'Ship and operate software with repeatable infrastructure and observability.',
    topics: [['Docker', 'docker'], ['CI/CD', 'ci-cd'], ['Cloud Fundamentals (AWS)', 'cloud-fundamentals-aws'], ['Web Servers', 'web-servers'], ['Kubernetes', 'kubernetes'], ['Infrastructure as Code (Terraform)', 'infrastructure-as-code-terraform'], ['Monitoring & Observability', 'monitoring-observability'], ['Logging', 'logging']],
  },
  {
    number: '08',
    title: 'Engineering Practices',
    description: 'Build the collaboration and quality practices that make teams effective.',
    topics: [['Clean Code & Refactoring', 'clean-code-refactoring'], ['Code Reviews', 'code-reviews'], ['Agile & Scrum', 'agile-scrum'], ['Technical Documentation', 'technical-documentation'], ['AI-Assisted Development', 'ai-assisted-development']],
  },
  {
    number: '09',
    title: 'Software Design',
    description: 'Learn to shape maintainable codebases and communicate design decisions.',
    topics: [['SOLID Principles', 'solid-principles'], ['Design Patterns', 'design-patterns'], ['Low-Level Design (LLD)', 'low-level-design'], ['UML & Diagrams', 'uml-diagrams'], ['Clean & Hexagonal Architecture', 'clean-hexagonal-architecture'], ['Domain-Driven Design (DDD)', 'domain-driven-design'], ['Python Performance Optimization', 'python-performance-optimization']],
  },
  {
    number: '10',
    title: 'Architecture',
    description: 'Progress toward designing scalable, distributed, and resilient systems.',
    topics: [['High-Level Design (HLD) / System Design', 'high-level-design-system-design'], ['Scalability & Load Balancing', 'scalability-load-balancing'], ['Database Scaling', 'database-scaling'], ['Distributed Systems', 'distributed-systems'], ['CAP Theorem & Consistency Models', 'cap-theorem-consistency-models'], ['Microservices & Event-Driven Architecture', 'microservices-event-driven-architecture'], ['Reliability Engineering', 'reliability-engineering'], ['Security Architecture', 'security-architecture']],
  },
  {
    number: '11',
    title: 'Specializations',
    description: 'Choose one or more tracks for deeper work in data, AI, or platform engineering.',
    topics: [['Data Engineering', 'data-engineering'], ['Data Science', 'data-science'], ['Machine Learning', 'machine-learning'], ['Deep Learning', 'deep-learning'], ['LLMs, RAG & AI Agents', 'llms-rag-ai-agents'], ['MLOps', 'mlops'], ['SRE & Platform Engineering', 'sre-platform-engineering']],
  },
  {
    number: '12',
    title: 'Interview & Career Prep',
    description: 'Turn your learning into evidence, confidence, and strong interview performance.',
    topics: [['Resume & Portfolio', 'resume-portfolio'], ['DSA Interview Practice', 'dsa-interview-practice'], ['Machine Coding Rounds', 'machine-coding-rounds'], ['Behavioral Interviews (STAR Method)', 'behavioral-interviews-star-method'], ['Mock Interviews', 'mock-interviews'], ['Salary Negotiation', 'salary-negotiation']],
  },
  {
    number: '13',
    title: 'Soft Skills',
    description: 'Strengthen the communication and ownership skills behind sustainable careers.',
    topics: [['Communication', 'communication'], ['Time Management & Ownership', 'time-management-ownership'], ['Giving & Receiving Feedback', 'giving-receiving-feedback'], ['Working with Stakeholders', 'working-with-stakeholders']],
  },
  {
    number: '14',
    title: 'Senior Engineer Skills',
    description: 'Grow from executing tasks to leading technical outcomes across teams.',
    topics: [['Technical Ownership', 'technical-ownership'], ['Design Docs & RFCs', 'design-docs-rfcs'], ['Architecture Decision Making', 'architecture-decision-making'], ['Production Support & Incident Management', 'production-support-incident-management'], ['Mentoring', 'mentoring'], ['Cross-Team Collaboration', 'cross-team-collaboration'], ['Project Planning & Delivery', 'project-planning-delivery'], ['Product & Business Thinking', 'product-business-thinking'], ['Cost Optimization', 'cost-optimization'], ['Compliance & Privacy Awareness', 'compliance-privacy-awareness']],
  },
  {
    number: '15',
    title: 'Beyond Senior',
    description: 'Explore leadership, architecture, consulting, and founder paths.',
    topics: [['Staff / Principal Engineer', 'staff-principal-engineer'], ['Engineering Manager', 'engineering-manager'], ['Solutions Architect', 'solutions-architect'], ['Consultant / Specialist', 'consultant-specialist'], ['Founder / CTO', 'founder-cto']],
  },
  {
    number: '16',
    title: 'AI Foundations',
    roadmapRoot: 'ai',
    overview: '/docs/category/ai-foundations',
    description: 'Build a practical mental model for modern AI, machine learning, and language models.',
    topics: [['AI, ML & Generative AI Overview', 'ai-ml-generative-ai-overview'], ['How LLMs Work', 'how-llms-work'], ['Strengths & Limitations of AI', 'strengths-limitations-ai'], ['Choosing the Right Model', 'choosing-right-model']],
  },
  {
    number: '17',
    title: 'AI-Assisted Development',
    roadmapRoot: 'ai',
    overview: '/docs/category/ai-assisted-development',
    description: 'Use AI coding tools thoughtfully while keeping engineering judgment in the loop.',
    topics: [['AI Coding Assistants', 'ai-coding-assistants'], ['Prompting for Code', 'prompting-for-code'], ['Reviewing & Verifying AI-Generated Code', 'reviewing-verifying-ai-generated-code'], ['Agentic Coding Workflows', 'agentic-coding-workflows'], ['Context Engineering', 'context-engineering']],
  },
  {
    number: '18',
    title: 'Building with AI',
    roadmapRoot: 'ai',
    overview: '/docs/category/building-with-ai',
    description: 'Learn the building blocks for reliable applications powered by language models.',
    topics: [['Prompt Engineering', 'prompt-engineering'], ['LLM APIs', 'llm-apis'], ['Structured Outputs & Function Calling', 'structured-outputs-function-calling'], ['Streaming Responses', 'streaming-responses'], ['Embeddings & Semantic Search', 'embeddings-semantic-search'], ['Vector Databases', 'vector-databases'], ['RAG (Retrieval-Augmented Generation)', 'rag-retrieval-augmented-generation']],
  },
  {
    number: '19',
    title: 'Agents & Automation',
    roadmapRoot: 'ai',
    overview: '/docs/category/agents--automation',
    description: 'Understand the tools and patterns behind AI agents and workflow automation.',
    topics: [['AI Agents', 'ai-agents'], ['MCP & Tool Integration', 'mcp-tool-integration'], ['Agent Frameworks', 'agent-frameworks'], ['AI Workflow Automation', 'ai-workflow-automation']],
  },
  {
    number: '20',
    title: 'Production AI',
    roadmapRoot: 'ai',
    overview: '/docs/category/production-ai',
    description: 'Operate AI systems with measurable quality, reliability, performance, and cost.',
    topics: [['LLM Evaluation', 'llm-evaluation'], ['AI Observability & Monitoring', 'ai-observability-monitoring'], ['Cost & Latency Optimization', 'cost-latency-optimization'], ['AI Reliability (Retries, Fallbacks, Rate Limits)', 'ai-reliability-retries-fallbacks-rate-limits'], ['Deploying AI Apps', 'deploying-ai-apps']],
  },
  {
    number: '21',
    title: 'AI Security & Responsibility',
    roadmapRoot: 'ai',
    overview: '/docs/category/ai-security--responsibility',
    description: 'Build AI features with privacy, security, safety, and responsible use in mind.',
    topics: [['Prompt Injection & AI Security', 'prompt-injection-ai-security'], ['Data Privacy & Sensitive Data', 'data-privacy-sensitive-data'], ['Guardrails & Safety', 'guardrails-safety'], ['Compliance & Copyright Awareness', 'compliance-copyright-awareness']],
  },
  {
    number: '22',
    title: 'AI for Your Own Track',
    roadmapRoot: 'ai',
    overview: '/docs/category/ai-for-your-own-track',
    description: 'Choose the AI applications that fit your existing engineering path.',
    topics: [['AI for Backend', 'ai-for-backend'], ['AI for Frontend (Chat UIs, AI UX)', 'ai-for-frontend-chat-uis-ai-ux'], ['AI for DevOps (LLMOps)', 'ai-for-devops-llmops'], ['AI for Testing & QA', 'ai-for-testing-qa'], ['AI for Data Engineering', 'ai-for-data-engineering']],
  },
  {
    number: '23',
    title: 'AI Developer Track',
    roadmapRoot: 'ai',
    overview: '/docs/category/ai-developer-track',
    description: 'Follow a deeper path for machine learning and AI engineering careers.',
    topics: [['Math for AI', 'math-for-ai'], ['Machine Learning', 'machine-learning'], ['Deep Learning', 'deep-learning'], ['Transformers & Hugging Face', 'transformers-hugging-face'], ['Fine-Tuning', 'fine-tuning'], ['Open-Source Models & Local Inference', 'open-source-models-local-inference'], ['MLOps', 'mlops'], ['Multimodal AI', 'multimodal-ai'], ['Multi-Agent Systems', 'multi-agent-systems']],
  },
  {
    number: '24',
    title: 'Durable Skills for the AI Era',
    roadmapRoot: 'ai',
    sectionSlug: 'durable-skills-ai-era',
    overview: '/docs/category/durable-skills-for-the-ai-era',
    description: 'Strengthen the durable reasoning and learning habits that stay valuable as tools change.',
    topics: [['Problem Decomposition', 'problem-decomposition'], ['Critical Thinking & Code Review', 'critical-thinking-code-review'], ['Knowing When to Use AI and When Not To', 'knowing-when-to-use-ai-and-when-not-to'], ['Staying Current with AI', 'staying-current-with-ai'], ['Building AI Side Projects', 'building-ai-side-projects']],
  },
];

function toSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGlow1} />
      <div className={styles.heroGlow2} />
      <div className="container">
        <div className={styles.eyebrowBadge}>Roadmaps + interview preparation</div>
        <Heading as="h1">
          Learn with direction. <span className={styles.gradientText}>Prepare with confidence.</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          {siteConfig.tagline} Follow focused learning paths and return to well-organized
          interview questions whenever you need to test your understanding.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/Roadmaps/introduction">
            Explore the roadmap
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/Interview-Questions/Python/fundamentals">
            Practice questions
          </Link>
        </div>
      </div>
    </header>
  );
}

function RoadmapShowcase() {
  return (
    <section className={styles.showcaseSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Python Developer Roadmap
          </Heading>
          <p className={styles.sectionSubtitle}>
            Follow the sequence from foundations to leadership. Every topic has a dedicated page that we will expand with practical lessons, examples, and projects over time.
          </p>
        </div>
        <div className={styles.roadmapSections}>
          {RoadmapSections.map((section) => (
            <section key={section.number} className={styles.roadmapSection}>
              <div className={styles.sectionHeading}>
                <span className={styles.sectionNumber}>{section.number}</span>
                <div>
                  <Heading as="h3">{section.title}</Heading>
                  <p>{section.description}</p>
                  {section.overview && (
                    <Link className={styles.sectionOverviewLink} to={section.overview}>
                      View section overview
                    </Link>
                  )}
                </div>
              </div>
              <div className={styles.topicGrid}>
                {section.topics.map(([title, slug], index) => (
                  <Link key={slug} to={`/docs/Roadmaps/${section.roadmapRoot ? `${section.roadmapRoot}/` : ''}${section.sectionSlug || toSlug(section.title)}/${slug}/introduction`} className={styles.topicLink}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{title}</strong>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Technology roadmaps and interview preparation"
      description="Practical technology roadmaps and organized interview questions for developers.">
      <HomepageHeader />
      <main>
        <RoadmapShowcase />
      </main>
    </Layout>
  );
}
