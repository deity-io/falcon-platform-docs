/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { isRegexpStringMatch } from '@docusaurus/theme-common';
import IconArrowTopRight from '../../components/Icon/ArrowTopRight';
import type { Props } from '@theme/NavbarItem/NavbarNavLink';
import styles from './styles.module.scss';

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  icon,
  html,
  isDropdownLink,
  prependBaseUrlToHref,
  ...props
}: Props & {
  icon?: string;
}): JSX.Element {
  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  const isExternalLink = label && href && !isInternalUrl(href);

  // Link content is set through html XOR label
  const linkContentProps = html
    ? { dangerouslySetInnerHTML: { __html: html } }
    : {
        children: (
          <>
            {isDropdownLink && icon && <img className={styles.icon} alt="" src={icon} />}
            {label}
            {isExternalLink && <IconArrowTopRight {...(isDropdownLink && { width: 12, height: 12 })} />}
          </>
        )
      };

  if (href) {
    return <Link href={prependBaseUrlToHref ? normalizedHref : href} {...props} {...linkContentProps} />;
  }

  return (
    <Link
      to={toUrl}
      isNavLink
      {...((activeBasePath || activeBaseRegex) && {
        isActive: (_match, location) =>
          activeBaseRegex
            ? isRegexpStringMatch(activeBaseRegex, location.pathname)
            : location.pathname.startsWith(activeBaseUrl)
      })}
      {...props}
      {...linkContentProps}
    />
  );
}
