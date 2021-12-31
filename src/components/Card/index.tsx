import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import Typography from '../Typography';
import styles from './styles.module.scss';

type CardType = {
  title: string;
  description: string;
  icon?: JSX.Element;
  href: string;
};

const Card: FC<CardType> = ({ title, description, icon, href }) => (
  <div className={styles.box}>
    <Link href={href} className={styles.link} title={title}>
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <Typography variant="title4">{title}</Typography>
      <Typography variant="title4Description" gutterBottom={false}>
        {description}
      </Typography>
    </Link>
  </div>
);

export default Card;
