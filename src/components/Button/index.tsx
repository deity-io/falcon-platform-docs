import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type ButtonType = {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'transparent';
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  href: string;
};

const Button: FC<ButtonType> = ({ children, variant = 'contained', color = 'primary', startIcon, endIcon, href }) => (
  <a
    className={classNames(styles.container, {
      [styles[variant]]: variant,
      [styles[color]]: color
    })}
    href={href}
  >
    {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
    {children}
    {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
  </a>
);

export default Button;
