import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import KeyIcon from '@site/static/icons/key.svg';
import RocketIcon from '@site/static/icons/rocket.svg';
import CloudIcon from '@site/static/icons/cloud.svg';
import BasketIcon from '@site/static/icons/basket.svg';
import DollarIcon from '@site/static/icons/dollar.svg';
import DataIcon from '@site/static/icons/data.svg';
import ServiceIcon from '@site/static/icons/service.svg';
import HeroImage from '@site/static/img/hero-home.svg';
import Typography from '../components/Typography';
import ProductBox from '../components/ProductBox';
import Card from '../components/Card';
import Page from '../components/Page';
import styles from './styles.module.scss';

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout title="Documentation for DEITY Falcon" description="DEITY Falcon Platform documentation and user guides">
      <Page>
        <header className={styles.heroBanner}>
          <div className={styles.heroBannerContainer}>
            <div className={styles.heroBannerText}>
              <Typography variant="title1" tag="h1">
                {siteConfig.title}
              </Typography>
              <Typography variant="title1Description">{siteConfig.tagline}</Typography>
            </div>
            <div>
              <HeroImage className={styles.heroImage} />
            </div>
          </div>
        </header>
        <main>
          <section className={styles.cards}>
            <Card
              title="Key concepts"
              description="Understand the key concepts of the Deity Platform to make the most of it."
              icon={<KeyIcon />}
              href="#"
            />
            <Card
              title="Getting started"
              description="Follow our tutorial to get started with development on Deity Platform."
              icon={<RocketIcon />}
              href="/docs/platform/getting-started/overview"
            />
            <Card
              title="System status"
              description="Check our system status to stay on top of recent events."
              icon={<CloudIcon />}
              href="#"
            />
          </section>
          <section className={styles.topSeparator}>
            <div className={styles.container}>
              <Typography variant="title2" tag="h3">
                Products
              </Typography>
            </div>
            <div className={styles.products}>
              <ProductBox
                icon={<BasketIcon />}
                title="Storefront"
                description="Est quidam nemore vituperata ex vulputate intellegebat vix ipsum vulputate at albucius utroque.
"
                links={[
                  {
                    title: 'Getting started',
                    url: '/docs/platform/getting-started/overview'
                  },
                  {
                    title: 'Routing',
                    url: '#'
                  },
                  {
                    title: 'Caching',
                    url: '#'
                  },
                  {
                    title: 'UI Kit',
                    url: '#'
                  }
                ]}
              />
              <ProductBox
                icon={<ServiceIcon />}
                title="Service Composer"
                description="Est quidam nemore vituperata ex vulputate intellegebat vix ipsum vulputate at albucius utroque.
"
                links={[
                  {
                    title: 'Getting started',
                    url: '#'
                  },
                  {
                    title: 'QuickLink2',
                    url: '#'
                  },
                  {
                    title: 'QuickLink3',
                    url: '#'
                  },
                  {
                    title: 'QuickLink4',
                    url: '#'
                  }
                ]}
              />
              <ProductBox
                icon={<DollarIcon />}
                title="Payments"
                description="Est quidam nemore vituperata ex vulputate intellegebat vix ipsum vulputate at albucius utroque.
"
                links={[
                  {
                    title: 'Getting started',
                    url: '#'
                  },
                  {
                    title: 'QuickLink2',
                    url: '#'
                  },
                  {
                    title: 'QuickLink3',
                    url: '#'
                  },
                  {
                    title: 'QuickLink4',
                    url: '#'
                  }
                ]}
              />
              <ProductBox
                icon={<DataIcon />}
                title="Data Integrator"
                description="Est quidam nemore vituperata ex vulputate intellegebat vix ipsum vulputate at albucius utroque.
"
                links={[
                  {
                    title: 'Getting started',
                    url: '#'
                  },
                  {
                    title: 'QuickLink2',
                    url: '#'
                  },
                  {
                    title: 'QuickLink3',
                    url: '#'
                  },
                  {
                    title: 'QuickLink4',
                    url: '#'
                  }
                ]}
              />
            </div>
          </section>
        </main>
      </Page>
    </Layout>
  );
};

export default Home;
