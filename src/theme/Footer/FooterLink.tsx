import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { FC } from 'react';
import styles from './styles.module.scss';

type FooterLinkType = {
  to: string;
  href: string;
  label: string;
};

const FooterLink: FC<FooterLinkType> = ({ to, href, label, ...props }) => {
  const toUrl = useBaseUrl(to);

  return (
    <Link
      className={styles.footerLink}
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href
          }
        : {
            to: toUrl
          })}
      {...props}
    >
      {label}
    </Link>
  );
};

export default FooterLink;
