import Giscus from '@giscus/react';

import styles from './styles.module.css';

export default function GiscusComments() {
  return (
    <section className={styles.comments} aria-label="Page discussion">
      <h2>Q&A</h2>
      <Giscus
        repo="OGTechStories/developer-roadmap"
        repoId="R_kgDOUaSheA"
        category="Announcements"
        categoryId="DIC_kwDOUaSheM4DGAq8"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark_dimmed"
        lang="en"
        loading="lazy"
      />
    </section>
  );
}