// @ts-nocheck
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { isActiveSidebarItem } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type { Props } from '@theme/DocSidebarItem/Link';
import { iconMap } from '../helper';
import styles from './styles.module.css';

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props & {
  customProps?: {
    label?: string;
    count?: number;
    disabled?: boolean;
  };
}): JSX.Element {
  const { href, label, className, customProps, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className
      )}
      key={label}
    >
      <Link
        className={clsx('menu__link', !isInternalLink && styles.menuExternalLink, {
          'menu__link--active': isActive,
          [styles.disabled]: customProps?.disabled
        })}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={!customProps?.disabled && href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined
        })}
        {...props}
      >
        {customProps?.icon && <div className={styles.icon}>{iconMap[customProps.icon]}</div>}
        {label}
        {!isInternalLink && <IconExternalLink />}
        {customProps?.count && <span className={styles.count}>{customProps.count}</span>}
        {customProps?.label && (
          <span
            className={clsx({
              [styles.label]: !customProps.disabled && customProps.label,
              [styles.soon]: customProps.disabled && customProps.label
            })}
          >
            {customProps.label}
          </span>
        )}
      </Link>
    </li>
  );
}
