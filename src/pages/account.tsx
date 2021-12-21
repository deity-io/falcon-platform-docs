import React from 'react';
import Layout from '@theme/Layout';
import Page from '../components/Page';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <Layout title="Account DEITY Falcon Platform" description="DEITY Falcon Platform documentation and user guides">
      <Page>
        <main className={styles.container}>account</main>
      </Page>
    </Layout>
  );
};

export default Home;
