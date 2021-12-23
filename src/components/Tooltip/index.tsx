import React, { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type TooltipType = {
  content?: string;
  open?: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
};

const Tooltip: FC<TooltipType> = ({ content, children, open = false, position = 'top' }) => {
  const [style, setStyle] = useState({ display: 'none' });

  return content ? (
    <div
      className={styles.container}
      onMouseEnter={() => {
        setStyle({ display: 'block' });
      }}
      onMouseLeave={() => {
        setStyle({ display: 'none' });
      }}
    >
      {children}
      <div className={classNames(styles.tooltip, styles[position])} style={open === true ? null : style}>
        {content}
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Tooltip;
