import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  isPadding: boolean;
  variant?: 'horizontal' | 'vertical';
  to: string;
};

const Card = ({ children, isPadding = true, variant = 'vertical', to }: Props) => {
  const history = useHistory();

  return (
    <div
      onClick={() => (to ? history.push(to) : null)}
      className={clsx(styles.root, {
        [styles.padding]: isPadding,
        [styles.horizontal]: variant === 'horizontal',
        [styles.clickable]: !!to
      })}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children }) => <div className={styles.content}>{children}</div>;

export { Card, CardContent };
