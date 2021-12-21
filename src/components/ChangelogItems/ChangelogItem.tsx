import React, { FC } from 'react';
import Badge, { BadgeType } from '../Badge';
import styles from './styles.module.scss';
import { ChangelogItemType } from './types';

const badgeVariantMap: {
  [key in ChangelogItemType['type']]: BadgeType['variant'];
} = {
  feature: 'primary',
  bugfix: 'error',
  hotfix: 'warning',
  improvement: 'secondary'
};

const ChangelogItem: FC<ChangelogItemType> = ({ type, text }) => (
  <div className={styles.itemContainer}>
    <div className={styles.itemBadge}>
      <Badge variant={badgeVariantMap[type]}>{type}</Badge>
    </div>
    <div className={styles.itemText}>{text}</div>
  </div>
);

export default ChangelogItem;
