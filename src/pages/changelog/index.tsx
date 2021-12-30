import React, { useState } from 'react';
import Layout from '@theme/Layout';
import FilterIcon from '@site/static/icons/filter.svg';
import EmailIcon from '@site/static/icons/email.svg';
import Page from '../../components/Page';
import { changelogItems } from '../../../data/changelog';
import Button from '../../components/Button';
import styles from '../styles.module.scss';
import ChangelogItems from './ChangelogItems';
import ChangelogModal from './ChangelogModal';

const Changelog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout title="Changelog DEITY Falcon Platform" description="DEITY Falcon Platform documentation and user guides">
      <Page>
        <main className={styles.container}>
          <div className={styles.changelogTopButtons}>
            <Button href="#" variant="contained" color="transparent" endIcon={<FilterIcon />}>
              Filter
            </Button>
            <Button href="#" variant="contained" onClick={() => setOpen(true)} endIcon={<EmailIcon />}>
              Subscribe to updates
            </Button>
            <ChangelogModal open={open} setOpen={setOpen} />
          </div>
          <ChangelogItems items={changelogItems} />
        </main>
      </Page>
    </Layout>
  );
};

export default Changelog;
