/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { FC } from 'react';
import { isActiveSidebarItem, Collapsible, useCollapsible, ThemeClassNames } from '@docusaurus/theme-common';
import classNames from 'classnames';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.scss';
import { useCategoryHrefWithSSRFallback } from './hooks/useCategoryHrefWithSSRFallback';
import { useAutoExpandActiveCategory } from './hooks/useAutoExpandActiveCategory';
import DocSidebarItems from './DocSidebarItems';
import { iconMap } from './helper';

const DocSidebarItemCategory: FC = ({
  item,
  onItemClick,
  activePath,
  level,
  ...props
}: Props & { item: PropSidebarItemCategory }) => {
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

  useAutoExpandActiveCategory({ isActive, collapsed, setCollapsed });

  return (
    <li
      className={classNames(
        ThemeClassNames.docs.docSidebarItemCategory,
        ThemeClassNames.docs.docSidebarItemCategoryLevel(level),
        styles.menuListItem,
        {
          'menu__list-item--collapsed': collapsed
        },
        className
      )}
    >
      <div className={styles.menuListItemCollapsible}>
        <Link
          className={classNames(styles.menuLink, {
            [styles.menuLinkSublist]: collapsible && !href,
            [styles.menuLinkActive]: isActive,
            [styles.menuLinkText]: !collapsible,
            [styles.hasHref]: !!hrefWithSSRFallback
          })}
          onClick={
            collapsible
              ? e => {
                  onItemClick?.(item);
                  if (href) {
                    setCollapsed(false);
                  } else {
                    e.preventDefault();
                    toggleCollapsed();
                  }
                }
              : () => {
                  onItemClick?.(item);
                }
          }
          href={collapsible ? hrefWithSSRFallback ?? '#' : hrefWithSSRFallback}
          {...props}
        >
          {iconMap[label]}
          {label}
        </Link>
        {href && collapsible && (
          <button
            aria-label={translate(
              {
                id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',
                message: "Toggle the collapsible sidebar category '{label}'",
                description: 'The ARIA label to toggle the collapsible sidebar category'
              },
              { label }
            )}
            type="button"
            className="clean-btn menu__caret"
            onClick={e => {
              e.preventDefault();
              toggleCollapsed();
            }}
          />
        )}
      </div>

      <Collapsible lazy as="ul" className={styles.menuList} collapsed={collapsed}>
        <DocSidebarItems
          items={items}
          tabIndex={collapsed ? -1 : 0}
          onItemClick={onItemClick}
          activePath={activePath}
          level={level + 1}
        />
      </Collapsible>
    </li>
  );
};

export default DocSidebarItemCategory;
