import React from 'react';
import { isActiveSidebarItem, useCollapsible } from '@docusaurus/theme-common';
import type { Props } from '@theme/DocSidebarItem';
import ArrowLeftIcon from '@site/static/icons/arrow-left.svg';
import ExternalIcon from '@site/static/icons/external.svg';
import { useCategoryHrefWithSSRFallback } from './hooks/useCategoryHrefWithSSRFallback';

export function DocSidebarItemCategory({
  item,
  onItemClick,
  activePath,
  level,
  ...props
}: Props & { item: PropSidebarItemCategory }) {
  const { items, label, collapsible, className, href } = item;
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);

  const isActive = isActiveSidebarItem(item, activePath);

  const { collapsed, setCollapsed, toggleCollapsed } = useCollapsible({
    // active categories are always initialized as expanded
    // the default (item.collapsed) is only used for non-active categories
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    }
  });
}

export const iconMap = {
  'All docs': <ArrowLeftIcon />,
  'GraphQL Playground': <ExternalIcon />
};
