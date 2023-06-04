import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Content from "@site/src/components/HomepageContent/content.mdx";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop className={styles.heroVideo}>
          <source src="/vid/teaser.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.titleInfo}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title={`Home`} description="A 2D plotter like no other.">
      <HomepageHeader />
      <main>
        <div className={styles.intro}>
          <p>
            FaceDoodle is more than just a 2D plotter. It's an augmented 2D
            plotter that uses advanced face tracking technology to draw complex
            lines and shapes using only face movement! Your imagination is its
            only limit. It is the combination of a regular 2D plotter and a face
            tracking drawing interface measuring the angular movements of the
            face and representating them by a cursor on a screen.
          </p>
          <Link to="/docs/intro">Read the docs!</Link>
        </div>
      </main>
    </Layout>
  );
}
