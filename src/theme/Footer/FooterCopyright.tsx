import React, { FC } from 'react';
import styles from './styles.module.scss';

type FooterCopyrightType = {
  copyrightText: string;
};

const FooterCopyright: FC<FooterCopyrightType> = ({ copyrightText }) => (
  <div className={styles.copyright}>
    <b>Deity</b>
    <br />
    Developer Documentation
    <br />
    {copyrightText}
  </div>
);

export default FooterCopyright;
