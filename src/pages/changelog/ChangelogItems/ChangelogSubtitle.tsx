import React, { FC } from 'react';
import Badge from '../../../components/Badge';
import Typography from '../../../components/Typography';
import styles from './styles.module.scss';
import { ChangelogItemsChange } from './types';

type Props = {
  data: ChangelogItemsChange;
};

const ChangelogSubtitle: FC<Props> = ({ children, data }) => (
  <div className={styles.changeTitleContainer}>
    <Typography variant="title4" gutterBottom={false}>
      {children}
    </Typography>
    {data.breaking === true && (
      <div className={styles.changeTitleBadge}>
        <Badge variant="warning">breaking</Badge>
      </div>
    )}
  </div>
);

export default ChangelogSubtitle;
