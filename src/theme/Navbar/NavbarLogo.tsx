import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import LogoImage from '@site/static/img/deity-docs-logo.svg';
import styles from './styles.module.scss';

const Logo: FC = () => (
  <div className={styles.logoContainer}>
    <Link href="/">
      <LogoImage className={styles.logoImage} />
    </Link>
  </div>
);

export default Logo;
