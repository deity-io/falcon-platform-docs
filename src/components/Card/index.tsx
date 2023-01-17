import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  isPadding: boolean;
  variant?: 'horizontal' | 'vertical';
};

const Card = ({ children, isPadding = true, variant = 'vertical' }: Props) => (
  <div
    className={clsx(styles.container, {
      [styles.padding]: isPadding,
      [styles.horizontal]: variant === 'horizontal'
    })}
  >
    {children}
  </div>
);

const CardContent = ({ children }) => <div className={styles.content}>{children}</div>;

export { Card, CardContent };
