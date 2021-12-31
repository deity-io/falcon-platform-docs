/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import classNames from 'classnames';
import React from 'react';
import { isActiveSidebarItem, ThemeClassNames } from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import Link from '@docusaurus/Link';
import IconExternalLink from '@theme/IconExternalLink';
import styles from './styles.module.scss';
import { iconMap } from './helper';

const DocSidebarItemLink = ({
  item,
  onItemClick,
  activePath,
  level,
  ...props
}: Props & { item: PropSidebarItemLink }) => {
  const { href, label, className } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  return (
    <li
      className={classNames(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        styles.menuListItem,
        'lol',
        className
      )}
      key={label}
    >
      <Link
        className={classNames(styles.menuLink, {
          [styles.menuLinkActive]: isActive
        })}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalUrl(href) && {
          onClick: onItemClick ? () => onItemClick(item) : undefined
        })}
        {...props}
      >
        {isInternalUrl(href) ? (
          <>
            {iconMap[label]}
            {label}
          </>
        ) : (
          <span>
            {label}
            <IconExternalLink />
          </span>
        )}
      </Link>
    </li>
  );
};

export default DocSidebarItemLink;
