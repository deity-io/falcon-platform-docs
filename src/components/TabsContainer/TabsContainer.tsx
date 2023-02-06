import React from 'react';
import styles from './styles.module.scss';

type Props = {
  title?: string;
  packageName?: string;
  children: React.ReactNode;
};

function TabsContainer({ children, title, packageName }: Props): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {title && <div className={styles.title}>{title}</div>}
        {packageName && <div className={styles.packageName}>{packageName}</div>}
      </div>
      {children}
    </div>
  );
}

export { TabsContainer };
