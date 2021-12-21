import React, { FC } from 'react';
import Badge from '../Badge';
import Typography from '../Typography';
import styles from './styles.module.scss';

type Props = {
  idx: number;
};

const ChangelogTitle: FC<Props> = ({ children, idx }) => (
  <div className={styles.title}>
    <div className={styles.copyIconContainer}>
      <Typography variant="title2" gutterBottom={false}>
        {children}
      </Typography>
      <div className={styles.copyIcon} />
    </div>
    {idx === 0 && <Badge variant="success">latest</Badge>}
  </div>
);

export default ChangelogTitle;
