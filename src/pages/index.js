import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>What is Falcon Platform?</>,
    imageUrl: 'img/deity-logo.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </>
    ),
  },
  {
    title: <>Who is it for?</>,
    imageUrl: 'img/deity-logo.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </>
    ),
  },
  {
    title: <>How much does it cost?</>,
    imageUrl: 'img/deity-logo.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Deity Cloud"
    >
      <header className={classnames("hero hero--theme", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started/intro")}
            >
              Get Started
            </Link>
          </div>
          <p className={styles.heroNote}>
            Falcon Platform is an enterprise product, please{" "}
            <Link
              to="https://deity.io/contact"
              className={styles.heroNote__link}
            >
              contact our sales team
            </Link>{" "}
            to get started. You can find our{" "}
            <Link
              to="https://falcon.deity.io/docs/getting-started/intro"
              className={styles.heroNote__link}
            >
              open source version here
            </Link>
            .
          </p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
