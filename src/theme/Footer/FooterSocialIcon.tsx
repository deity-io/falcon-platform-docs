import React, { FC } from 'react';
import styles from './styles.module.scss';

type FooterSocialIconType = {
  url: string;
  title: string;
  icon: JSX.Element;
};

const FooterSocialIcon: FC<FooterSocialIconType> = ({ icon, url, title }) => (
  <a title={title} href={url} target="_blank" rel="noreferrer" className={styles.socialIcon}>
    {icon}
  </a>
);

export default FooterSocialIcon;
