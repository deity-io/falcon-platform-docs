import React, { FC } from 'react';
import styles from './styles.module.scss';

type FooterLogoType = {
  url: string;
  alt: string;
};

const FooterLogo: FC<FooterLogoType> = ({ url, alt }) => <img className={styles.footerLogo} alt={alt} src={url} />;

export default FooterLogo;
