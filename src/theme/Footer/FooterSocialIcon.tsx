import React, { FC } from 'react';
import styles from './styles.module.scss';

type FooterSocialIconType = {
  url: string;
  icon: JSX.Element;
};

const FooterSocialIcon: FC<FooterSocialIconType> = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noreferrer" className={styles.socialIcon}>
    {icon}
  </a>
);

export default FooterSocialIcon;
