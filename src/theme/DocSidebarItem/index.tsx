import React from 'react';
import type { Props } from '@theme/DocSidebarItem';
import DocSidebarItemCategory from './DocSidebarItemCategory';
import DocSidebarItemLink from './DocSidebarItemLink';
import DocSidebarItemsComponent from './DocSidebarItems';

const DocSidebarItem = ({ item, ...props }: Props): JSX.Element | null => {
  switch (item.type) {
    case 'category':
      if (item.items.length === 0) {
        return null;
      }
      return <DocSidebarItemCategory item={item} {...props} />;
    case 'link':
    default:
      return <DocSidebarItemLink item={item} {...props} />;
  }
};

export const DocSidebarItems = DocSidebarItemsComponent;
export default DocSidebarItem;
