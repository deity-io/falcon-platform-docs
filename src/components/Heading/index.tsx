import React from 'react';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

const Badge = ({ children }: Props) => <h1 className={styles.heading}>{children}</h1>;

export default Badge;
