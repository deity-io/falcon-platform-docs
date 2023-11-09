/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import type { Props } from '@theme/DocPaginator';
import Feedback from '../../components/Feedback';
import { useLocation } from 'react-router-dom';

export default function DocPaginator(props: Props) {
  const { previous, next } = props;
  const { pathname } = useLocation();

  if (pathname === '/' || pathname === '/docs') {
    return null;
  }

  return (
    <>
      <nav
        className="pagination-nav docusaurus-mt-lg"
        aria-label={translate({
          id: 'theme.docs.paginator.navAriaLabel',
          message: 'Docs pages navigation',
          description: 'The ARIA label for the docs pagination'
        })}
      >
        {previous && (
          <PaginatorNavLink
            {...previous}
            subLabel={
              <Translate
                id="theme.docs.paginator.previous"
                description="The label used to navigate to the previous doc"
              >
                Previous
              </Translate>
            }
          />
        )}
        {next && (
          <PaginatorNavLink
            {...next}
            subLabel={
              <Translate id="theme.docs.paginator.next" description="The label used to navigate to the next doc">
                Next
              </Translate>
            }
            isNext
          />
        )}
      </nav>
      <Feedback resource={pathname} />
    </>
  );
}
