import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  variant: 'default' | 'green' | 'purple';
  children: React.ReactNode;
  rounded: boolean;
};

const Badge = ({ children, variant = 'default', rounded }: Props) => {
  if (variant === 'default') {
    return <span className="badge badge--secondary mb20">{children}</span>;
  }

  return (
    <span
      className={clsx(styles.tag, {
        [styles[variant]]: variant,
        [styles.rounded]: rounded
      })}
    >
      {children}
    </span>
  );
};

export default Badge;
