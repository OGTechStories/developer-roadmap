import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const ShowcaseRoadmaps = [
  {
    title: 'Python Fundamentals',
    tag: 'Programming Language',
    description: 'Master variables, data structures, OOP, and asynchronous programming in Python.',
    link: '/docs/Programming/Python/introduction',
    time: 'Core Roadmap',
  },
  {
    title: 'Developer Stories',
    tag: 'Case Studies',
    description: 'In-depth articles, architectural breakdowns, and practical lessons from real-world software.',
    link: '/blog',
    time: 'Weekly Articles',
  },
  {
    title: 'Technology Path',
    tag: 'Getting Started',
    description: 'Build solid mental models and step-by-step knowledge for software engineering.',
    link: '/docs/Programming/Python/introduction',
    time: 'Beginner Friendly',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGlow1} />
      <div className={styles.heroGlow2} />
      <div className="container">
        <div className={styles.eyebrowBadge}>
          <span>🚀 The Technology Learning Library</span>
        </div>
        <Heading as="h1">
          Build your path through <span className={styles.gradientText}>technology.</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          {siteConfig.tagline} Follow clear, focused roadmaps from fundamentals
          to practical engineering projects.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/Programming/Python/introduction">
            Explore Roadmaps →
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
            Featured Learning Paths
          </Heading>
          <p className={styles.sectionSubtitle}>
            Curated roadmaps designed to help you build rock-solid mental models and practical skills.
          </p>
        </div>
        <div className={styles.grid}>
          {ShowcaseRoadmaps.map((item, idx) => (
            <Link key={idx} to={item.link} className={styles.roadmapCard}>
              <span className={styles.cardTag}>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.cardFooter}>
                <span>{item.time}</span>
                <span>Start Path →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Technology roadmaps and stories"
      description="Practical technology roadmaps, explanations, and stories from OGTechStories.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <RoadmapShowcase />
      </main>
    </Layout>
  );
}
