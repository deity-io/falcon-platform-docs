import React, { FC } from 'react';
import classNames from 'classnames';
import Tooltip from '../Tooltip';
import styles from './styles.module.scss';

export type BadgeType = {
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  tooltipText?: string;
};

const Badge: FC<BadgeType> = ({ children, variant, tooltipText }) => (
  <Tooltip content={tooltipText}>
    <div
      className={classNames(styles.container, {
        [styles[variant]]: variant
      })}
    >
      {children}
    </div>
  </Tooltip>
);

export default Badge;
