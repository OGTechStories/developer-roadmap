import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    number: '01',
    badge: 'CORE CONCEPTS',
    title: 'Start with fundamentals',
    description: (
      <>
        Build the mental models that make every new tool, language, and
        framework easier to understand and apply.
      </>
    ),
  },
  {
    number: '02',
    badge: 'GUIDED PATHS',
    title: 'Follow a deliberate path',
    description: (
      <>
        Move through focused roadmaps that connect concepts logically instead of
        getting lost in disconnected tutorials.
      </>
    ),
  },
  {
    number: '03',
    badge: 'PRACTICAL PROJECTS',
    title: 'Learn by making things',
    description: (
      <>
        Turn theoretical knowledge into working projects, then use each project to
        decide what deserves a deeper look.
      </>
    ),
  },
];

function Feature({number, badge, title, description}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={styles.feature}>
        <div className={styles.headerRow}>
          <span className={styles.number}>{number}</span>
          <span className={styles.badge}>{badge}</span>
        </div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
