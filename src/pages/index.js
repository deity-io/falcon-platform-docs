import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ComparisonTable from './../components/ComparisonTable';
import Integrations from '../components/Integrations';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Documentation for DEITY Falcon"
      description="DEITY DEITY Platform documentation and user guides"
    >
      <header
        className={classnames("hero hero--theme", styles.heroBanner)}
        style={{
          backgroundImage: "url('img/pattern-honeycomb-secondary.svg')",
        }}
      >
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.heroSearch}>
            <SearchBar
              placeholder="Search our documentation"
              position="home"
              isSearchBarExpanded={true}
              size="large"
            />
          </div>
        </div>
      </header>
      <main>
        <section className={classnames(styles.aboutDark, styles.about)}>
          <h3 style={{ textAlign: "center" }}>Jump right in</h3>
          <div className={classnames("container", styles.aboutContainer)}>
            <div className={classnames(styles.padded, styles.aboutColumn)}>
              <div className={styles.aboutBlock}>
                <h4>DEITY Platform</h4>
                <ul>
                  <li>
                    <Link to="/docs/platform/getting-started/overview">
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link to="/docs/platform/client/theming/overview">Theming</Link>
                  </li>
                  <li>
                    <Link to="/docs/platform/integration/bigcommerce/overview">
                      Setup your BigCommerce Integration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.comparison}>
          <div className="container">
            <h3>DEITY Platform Overview</h3>
            <p>
              Falcon platform is a production ready, fully managed, lightening fast PWA for your ecommerce store.
            </p>
            <ComparisonTable />
            <p>
              <Link
                href="https://deity.io/contact"
                target="_blank"
                className="button"
                rel="noreferrer noopener"
              >
                Get in touch
              </Link>
            </p>
          </div>
        </section>
        <section
          className="hero hero--theme"
        >
          <img
            src="img/waves.jpg"
            alt="Wave background"
            loading="lazy"
            width="1200"
            height="1200"
            className="hero-background"
          />
          <div
            className={classnames("container", styles.architectureContainer)}
          >
            <div>
              <h3>Falcon Architecture</h3>
              <p>
                Falcon has a unique decentralized architecture. This
                architecture makes the platform extremely reliable, flexible and
                unlimitedly scalable, while at the same time reducing
                complexity.
              </p>
              <p>
                Combined with DEITY Platform Cloud you can enjoy easy
                deployments, localized hosting and automatic scalability.
              </p>
            </div>
            <div>
              <img
                src="img/falcon-architecture-expansive.svg"
                alt="Deity Falcon architecture diagram"
                loading="lazy"
                width="1012"
                height="730"
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </section>
        <Integrations />
      </main>
    </Layout>
  );
}

export default Home;
