import React from 'react';
import Layout from '@theme/Layout';
import FilterIcon from '@site/static/icons/filter.svg';
import Page from '../../components/Page';
import { changelogItems } from '../../../data/changelog';
import Button from '../../components/Button';
import styles from '../styles.module.scss';
import ChangelogItems from './ChangelogItems';

const Changelog = () => (
  <Layout title="Changelog DEITY Falcon Platform" description="DEITY Falcon Platform documentation and user guides">
    <Page>
      <main className={styles.container}>
        <div className={styles.changelogTopButtons}>
          <Button href="#" variant="contained" color="transparent" endIcon={<FilterIcon />}>
            Filter
          </Button>
          <Button href="#" variant="contained">
            Subscribe to updates
          </Button>
        </div>
        <ChangelogItems items={changelogItems} />
      </main>
    </Page>
  </Layout>
);

export default Changelog;
