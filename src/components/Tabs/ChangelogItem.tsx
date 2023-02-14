import React from 'react';
import styles from './styles.module.scss';
import Check from '@site/static/img/icons/check.svg';
import clsx from 'clsx';

type Props = {
  variant: 'breaking' | 'hotfix' | 'feature' | 'improvement' | 'bugfix' | 'deprecated';
  children: React.ReactNode;
};

function ChangelogItem({ children, variant }: Props): JSX.Element {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <Check className={styles.icon} />
        {children}
      </div>
      <div
        className={clsx(styles.badge, {
          [styles[variant]]: variant
        })}
      >
        {variant}
      </div>
    </div>
  );
}

export { ChangelogItem };
