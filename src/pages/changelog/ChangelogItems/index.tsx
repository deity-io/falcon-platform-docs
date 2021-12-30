import React, { FC } from 'react';
import styles from './styles.module.scss';
import ChangelogItem from './ChangelogItem';
import ChangelogAccordion from './ChangelogAccordion';
import ChangelogSubtitle, { ChangelogItemsChange } from './ChangelogSubtitle';
import ChangelogTitle from './ChangelogTitle';

export type ChangelogItemsType = {
  items: {
    id: string;
    title?: string;
    date: Date;
    changes: ChangelogItemsChange[];
  }[];
};

const ChangelogItems: FC<ChangelogItemsType> = ({ items }) => (
  <>
    {items &&
      items.map((item, idx) => {
        const date = item.date.toISOString().slice(0, 10);
        const id = `release-${date}`;

        return (
          <div key={item.id} id={id} className={styles.container}>
            <ChangelogTitle idx={idx} id={id}>
              {item.title ? item.title : 'Release'} {date}
            </ChangelogTitle>
            {item.changes.map(change => (
              <div key={change.id} className={styles.changeContainer}>
                <ChangelogSubtitle data={change}>{change.title}</ChangelogSubtitle>
                {change.updatedPackages && <ChangelogAccordion items={change.updatedPackages} />}
                {change.data &&
                  change.data.map(changeItem => (
                    <ChangelogItem
                      key={changeItem.id}
                      id={changeItem.id}
                      type={changeItem.type}
                      text={changeItem.text}
                    />
                  ))}
              </div>
            ))}
          </div>
        );
      })}
  </>
);

export default ChangelogItems;
