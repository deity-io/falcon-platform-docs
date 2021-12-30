import React, { FC } from 'react';
import Badge, { BadgeType } from '../../../components/Badge';
import Tooltip from '../../../components/Tooltip';
import { tooltipBadgeMap } from './helper';
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
      <Tooltip content={tooltipBadgeMap[type]}>
        <Badge variant={badgeVariantMap[type]}>{type}</Badge>
      </Tooltip>
    </div>
    <div className={styles.itemText}>{text}</div>
  </div>
);

export default ChangelogItem;
