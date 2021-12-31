import React, { FC } from 'react';
import ArrowRightIcon from '@site/static/icons/arrow-right.svg';
import { ProductBoxType } from './types';
import styles from './styles.module.scss';

type ProductBoxLinksType = Pick<ProductBoxType, 'links'>;

const ProductBoxLinks: FC<ProductBoxLinksType> = ({ links }) => (
  <>
    {links.map(link => (
      <a key={link.title} href={link.url} className={styles.link}>
        <span>{link.title}</span>
        <div className={styles.linkIcon}>
          <ArrowRightIcon />
        </div>
      </a>
    ))}
  </>
);

export default ProductBoxLinks;
