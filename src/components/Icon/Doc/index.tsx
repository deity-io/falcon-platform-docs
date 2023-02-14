import React, { ComponentProps } from 'react';

import styles from './styles.module.scss';

export default function IconArrowTopRight({ width = 15, height = 15 }: ComponentProps<'svg'>): JSX.Element {
  return (
    <svg width={width} height={height} aria-hidden="true" viewBox="0 0 15 15" className={styles.root}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 1.5C1 1.22386 1.22386 1 1.5 1H7.08579C7.21839 1 7.34557 1.05268 7.43934 1.14645L9.85355 3.56066C9.94732 3.65443 10 3.78161 10 3.91421V11.5C10 11.7761 9.77614 12 9.5 12H1.5C1.22386 12 1 11.7761 1 11.5V1.5ZM1.5 0C0.671573 0 0 0.671573 0 1.5V11.5C0 12.3284 0.671573 13 1.5 13H9.5C10.3284 13 11 12.3284 11 11.5V3.91421C11 3.51639 10.842 3.13486 10.5607 2.85355L8.14645 0.43934C7.86514 0.158035 7.48361 0 7.08579 0H1.5ZM2.5 3C2.22386 3 2 3.22386 2 3.5C2 3.77614 2.22386 4 2.5 4H5.5C5.77614 4 6 3.77614 6 3.5C6 3.22386 5.77614 3 5.5 3H2.5ZM2.5 6C2.22386 6 2 6.22386 2 6.5C2 6.77614 2.22386 7 2.5 7H8.5C8.77614 7 9 6.77614 9 6.5C9 6.22386 8.77614 6 8.5 6H2.5ZM2.5 9C2.22386 9 2 9.22386 2 9.5C2 9.77614 2.22386 10 2.5 10H8.5C8.77614 10 9 9.77614 9 9.5C9 9.22386 8.77614 9 8.5 9H2.5Z"
      />
    </svg>
  );
}
