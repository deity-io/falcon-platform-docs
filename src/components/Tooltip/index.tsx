import React, { FC, useState } from 'react';
import styles from './styles.module.scss';

type TooltipType = {
  content: string;
};

const Tooltip: FC<TooltipType> = ({ content, children }) => {
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
      <div className={styles.tooltip} style={style}>
        {content}
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Tooltip;
