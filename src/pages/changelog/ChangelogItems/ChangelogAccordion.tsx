import React, { FC } from 'react';
import CodeBlock from '@theme/CodeBlock';
import Accordion from '../../../components/Accordion';
import styles from './styles.module.scss';
import { ChangelogUpdatedPackageType } from './types';

type ChangelogAccordionType = {
  items?: ChangelogUpdatedPackageType[];
};

const ChangelogAccordion: FC<ChangelogAccordionType> = ({ items }) => (
  <div className={styles.accordionContainer}>
    <Accordion open={false} title="Updated packages" variant="small">
      {items &&
        items.map(item => (
          <div key={item.id} className={styles.accordionContent}>
            <div className={styles.accordionContentTitle}>{item.title}</div>
            <CodeBlock>{item.code}</CodeBlock>
          </div>
        ))}
    </Accordion>
  </div>
);

export default ChangelogAccordion;
