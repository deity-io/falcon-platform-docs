/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/Footer/Layout';

export default function FooterLayout({ style, links, logo, copyright }: Props): JSX.Element {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark'
      })}
    >
      <div className="container container-fluid">
        <div className="footer__content">
          <div className="footer__content__info">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            <h4>The leading platform for Composable Commerce</h4>
            <p>
              Deity is the endlessly flexible composer providing the utmost customer centric approach to any
              fast-growing and forward thinking ecommerce merchant.
            </p>
            <a rel="noopener noreferrer" target="_blank" href="https://www.deity.com/">
              www.deity.com
            </a>
          </div>
          {links}
        </div>
        <div className="footer__bottom">
          {copyright && copyright}
          <ul className="footer__bottom__links">
            <li>
              <a href="https://www.deity.com/legal/terms-of-service">Terms of use</a>
            </li>
            <li>
              <a href="https://www.deity.com/legal/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
