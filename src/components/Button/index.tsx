import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  color: 'primary' | 'secondary';
  variant: 'contained' | 'outlined';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

const Button = ({ children, variant = 'contained', color = 'primary', size = 'large', ...rest }: Props) => (
  <a
    className={clsx(styles.button, {
      [styles[variant]]: variant,
      [styles[color]]: color,
      [styles[size]]: size
    })}
    {...rest}
  >
    {children}
  </a>
);

export default Button;
