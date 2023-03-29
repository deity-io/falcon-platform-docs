import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Pricing from '../components/Pricing';

function Prices() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Falcon Platform Prices" description="Price list for DEITY Falcon Platform plans.">
      <header
        className={clsx('hero hero--theme', styles.heroBanner)}
        style={{
          backgroundImage: "url('../img/pattern-honeycomb-secondary.svg')"
        }}
      >
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">Falcon Platform Plans</p>
        </div>
      </header>
      <main>
        <section style={{ padding: '2rem 0' }}>
          <div className="container">
            <h3 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Our Plans</h3>
            <Pricing />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Prices;
