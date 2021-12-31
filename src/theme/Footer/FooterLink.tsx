import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { FC } from 'react';
import ExternalIcon from '@site/static/icons/external.svg';
import styles from './styles.module.scss';

type FooterLinkType = {
  to: string;
  href: string;
  label: string;
};

const iconMap = {
  'Deity.io': <ExternalIcon />
};

const FooterLink: FC<FooterLinkType> = ({ to, href, label, ...props }) => {
  const toUrl = useBaseUrl(to);

  return (
    <Link
      key={label}
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
      {label} {iconMap[label]}
    </Link>
  );
};

export default FooterLink;
