/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type { Props } from '@theme/Icon/Home';

export default function IconHome(props: Props): JSX.Element {
  return (
    <svg viewBox="0 0 15 15" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.07914 0.222314C7.31263 -0.00737297 7.68718 -0.00737297 7.92067 0.222314L14.6707 6.86233C14.9069 7.09471 14.91 7.47459 14.6776 7.71083C14.4453 7.94706 14.0654 7.95018 13.8291 7.7178L12.9999 6.90207V12.5001C12.9999 12.7762 12.776 13.0001 12.4999 13.0001H2.4999C2.22376 13.0001 1.9999 12.7762 1.9999 12.5001V6.90207L1.17067 7.7178C0.934436 7.95018 0.55455 7.94706 0.322168 7.71083C0.0897858 7.47459 0.0929063 7.09471 0.329138 6.86233L7.07914 0.222314ZM7.4999 1.49169L11.9999 5.91837V12.0001H9.4999V8.50006C9.4999 8.22391 9.27604 8.00005 8.9999 8.00005H5.9999C5.72376 8.00005 5.4999 8.22391 5.4999 8.50006V12.0001H2.9999V5.91837L7.4999 1.49169ZM6.4999 12.0001H8.4999V9.00006H6.4999V12.0001Z"
        fill="currentColor"
      />
    </svg>
  );
}
