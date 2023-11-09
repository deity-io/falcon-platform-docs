import React from 'react';
import styles from './styles.module.scss';
import Tabs from '../../theme/Tabs';
import TabItem from '../../theme/TabItem';

type Props = {
  title?: string;
  packageName?: string;
  href?: string;
  children: React.ReactNode;
};

function TabsContainer({ children, title, packageName, href }: Props): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {title && <div className={styles.title}>{title}</div>}
        {packageName && href && (
          <a href={href} target="_blank" rel="noreferrer noopener" className={styles.packageName}>
            {packageName}
          </a>
        )}
      </div>
      {children}
    </div>
  );
}

export { TabsContainer, Tabs, TabItem };
