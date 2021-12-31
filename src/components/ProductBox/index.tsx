import React, { FC } from 'react';
import Typography from '../Typography';
import ProductBoxLinks from './ProductBoxLinks';
import styles from './styles.module.scss';
import { ProductBoxType } from './types';

const ProductBox: FC<ProductBoxType> = ({ title, description, icon, links }) => (
  <div className={styles.box}>
    <div className={styles.iconContainer}>{icon}</div>
    <div>
      <Typography variant="title3">{title}</Typography>
      <Typography variant="title3Description">{description}</Typography>
      <div className={styles.linksContainer}>
        <ProductBoxLinks links={links} />
      </div>
    </div>
  </div>
);

export default ProductBox;
