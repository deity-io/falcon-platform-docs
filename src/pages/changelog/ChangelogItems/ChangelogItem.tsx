import React, { FC } from 'react';
import Badge, { BadgeType } from '../../../components/Badge';
import Tooltip from '../../../components/Tooltip';
import styles from './styles.module.scss';

export type ChangelogItemType = {
  id: string;
  type: 'feature' | 'bugfix' | 'hotfix' | 'improvement';
  text: string;
};

const badgeVariantMap: {
  [key in ChangelogItemType['type']]: BadgeType['variant'];
} = {
  feature: 'primary',
  bugfix: 'error',
  hotfix: 'warning',
  improvement: 'secondary'
};

const tooltipBadgeMap: {
  [key in ChangelogItemType['type']]: string;
} = {
  feature: 'lorem feature ipsum',
  bugfix: 'lorem bugfix ipsum',
  hotfix: 'lorem bugfix ipsum',
  improvement: 'lorem improvement ipsum'
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
