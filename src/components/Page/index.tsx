import React, { FC } from 'react';
import Sidebar from '@theme/DocSidebar';
import { sidebarLinks } from '../../../data/pageSidebar';
import styles from './styles.module.scss';

const Page: FC = ({ children }) => (
  <div className={styles.pageContainer}>
    <aside className={styles.sidebar}>
      <Sidebar path="" showVersionDropdown={false} sidebar={sidebarLinks} onCollapse={() => {}} isHidden={false} />
    </aside>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Page;
