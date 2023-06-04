import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Content from '@site/src/components/HomepageContent/content.mdx'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
      </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`FaceDoodle`}
      description="A 2D plotter like no other.">
      <HomepageHeader />
      <main>
        <Content/>
      </main>
    </Layout>
  );
}
