import React, { FC } from 'react';
import styles from './styles.module.scss';
import { ChangelogItemsType } from './types';
import ChangelogItem from './ChangelogItem';
import ChangelogAccordion from './ChangelogAccordion';
import ChangelogSubtitle from './ChangelogSubtitle';
import ChangelogTitle from './ChangelogTitle';
import { handleCopyUrl } from './helper';

const ChangelogItems: FC<ChangelogItemsType> = ({ items }) => (
  <>
    {items.map((item, idx) => {
      const date = item.date.toISOString().slice(0, 10);
      const id = `release-${date}`;

      return (
        <div role="presentation" className={styles.container} id={id} onClick={() => handleCopyUrl(id)}>
          <ChangelogTitle idx={idx}>
            {item.title ? item.title : 'Release'} {date}
          </ChangelogTitle>
          {item.changes.map(change => (
            <div className={styles.changeContainer}>
              <ChangelogSubtitle data={change}>{change.title}</ChangelogSubtitle>
              {change.updatedPackages && <ChangelogAccordion items={change.updatedPackages} />}
              {change.data &&
                change.data.map(changeItem => <ChangelogItem type={changeItem.type} text={changeItem.text} />)}
            </div>
          ))}
        </div>
      );
    })}
  </>
);

export default ChangelogItems;
