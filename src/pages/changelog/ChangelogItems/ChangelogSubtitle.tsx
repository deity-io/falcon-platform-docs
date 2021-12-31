import React, { FC } from 'react';
import Badge from '../../../components/Badge';
import Typography from '../../../components/Typography';
import { ChangelogUpdatedPackageType } from './ChangelogAccordion';
import { ChangelogItemType } from './ChangelogItem';
import styles from './styles.module.scss';

export type ChangelogItemsChange = {
  id: string;
  title: string;
  breaking?: boolean;
  updatedPackages?: ChangelogUpdatedPackageType[];
  data?: ChangelogItemType[];
};

type Props = {
  data: ChangelogItemsChange;
};

const ChangelogSubtitle: FC<Props> = ({ children, data }) => (
  <div className={styles.changeTitleContainer}>
    <Typography variant="title4" gutterBottom={false}>
      {children}
    </Typography>
    {data && data.breaking === true && (
      <div className={styles.changeTitleBadge}>
        <Badge variant="warning">breaking</Badge>
      </div>
    )}
  </div>
);

export default ChangelogSubtitle;
