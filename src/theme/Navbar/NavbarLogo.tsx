import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import LogoImage from '@site/static/img/deity-docs-logo.svg';
import LogoImageDark from '@site/static/img/deity-docs-logo-dark.svg';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './styles.module.scss';

const Logo: FC = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <div className={styles.logoContainer}>
      <Link href="/">
        {isDarkTheme ? <LogoImageDark className={styles.logoImage} /> : <LogoImage className={styles.logoImage} />}
      </Link>
    </div>
  );
};

export default Logo;
