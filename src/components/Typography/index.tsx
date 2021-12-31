import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type TypographyType = {
  variant: 'title1' | 'title1Description' | 'title2' | 'title3' | 'title3Description' | 'title4' | 'title4Description';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  gutterBottom?: boolean;
};

const Typography: FC<TypographyType> = ({ variant, children, tag = 'p', gutterBottom = true }) => {
  const Component = tag;

  return (
    <Component
      className={classNames({
        [styles[variant]]: variant,
        [styles.marginBottom0]: !gutterBottom
      })}
    >
      {children}
    </Component>
  );
};

export default Typography;
