import React, { FC } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import LogoImage from '@site/static/img/deity-logo-full.svg';
import LogoImageDark from '@site/static/img/deity-logo-full-dark.svg';
import styles from './styles.module.scss';

type FooterLogoType = {
  alt: string;
};

const FooterLogo: FC<FooterLogoType> = ({ alt }) => {
  const { isDarkTheme } = useThemeContext();

  return (
    <div title={alt}>
      {isDarkTheme ? <LogoImageDark className={styles.logoImage} /> : <LogoImage className={styles.logoImage} />}
    </div>
  );
};

export default FooterLogo;
