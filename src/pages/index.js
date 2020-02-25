import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="DEITY documentation and user guides"
    >
      <header className={classnames("hero hero--theme", styles.heroBanner)} style={{ backgroundImage: "url('img/pattern-honeycomb-secondary.svg')" }}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <section className={styles.about}>
          <div className={classnames("container", styles.aboutContainer)}>
            <div className={styles.aboutColumn}>
              <h3>What is Falcon Platform?</h3>
              <p>The Falcon Platform is a fully packed hosted front-end platform, which allows to create the best front-end experiences for eCommerce.</p>
              <p>Falcon is not just a PWA theme, it is a complete platform to build the best shopping experience with top performance and unlimited flexibility, enabling your future growth.</p>
              <Link
                href="/"
                target="_blank"
                className="button"
                rel="noreferrer noopener"
                aria-label="Find out more about the Falcon Platform"
              >Find out more</Link>
            </div>
            <div className={styles.aboutColumn}>
              <img
                srcset="img/hero-pwa-falcon-700.png 700w,
                img/hero-pwa-falcon-1200.png 1200w"
                sizes="(max-width: 600px) 700px, 120px"
                loading="lazy"
                width="1200px"
                height="1197px"
                src="img/hero-pwa-falcon-700.png"
                alt="Deity Falcon illustration"
                className={styles.aboutImg}
              />
            </div>
          </div>
        </section>
        <section className={styles.infoBanner}>
          <div className="container">
            <div className={styles.infoBanner__content}>
              <h3>Looking for Falcon V1 docs?</h3>
              <p>If you're using Falcon V1 the docs can be found <Link href="https://falcon.deity.io/docs/getting-started/intro" target="_blank" rel="noreferrer noopener">here</Link></p>
            </div>
          </div>
        </section>
        <section className="hero hero--theme" style={{ backgroundImage: "url('img/waves.jpg')" }}>
          <div className={classnames("container", styles.architectureContainer)}>
            <div>
              <h3>The Falcon Platform Architecture</h3>
              <p>The Falcon Front-End Platform has a unique decentralized architecture. This architecture makes the platform extremely reliable, flexible and unlimitedly scalable, while at the same time reducing complexity.</p>
              <p>Combined with Falcon Platform Cloud you can enjoy easy deployments, localised hosting and automatic scalability.</p>
            </div>
            <div>
              <img
                src="img/falcon-architecture-expansive.svg"
                alt="Deity Falcon architecture diagram"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
