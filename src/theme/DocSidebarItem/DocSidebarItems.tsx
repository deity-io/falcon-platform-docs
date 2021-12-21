import React, { memo } from 'react';
import type { DocSidebarItemsProps } from '@theme/DocSidebarItem';
import DocSidebarItem from '.';

const DocSidebarItems = memo(
  ({ items, ...props }: DocSidebarItemsProps): JSX.Element => (
    <>
      {items.map(item => (
        <DocSidebarItem key={item.type + item.label} item={item} {...props} />
      ))}
    </>
  )
);

export default DocSidebarItems;
