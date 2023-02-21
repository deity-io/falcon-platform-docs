/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type { Props } from '@theme/Admonition/Icon/Note';

export default function AdmonitionIconNote(props: Props): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="black"
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.25 11.25H12V16.5H12.75"
        stroke="black"
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.8125 8.8125C12.3303 8.8125 12.75 8.39277 12.75 7.875C12.75 7.35723 12.3303 6.9375 11.8125 6.9375C11.2947 6.9375 10.875 7.35723 10.875 7.875C10.875 8.39277 11.2947 8.8125 11.8125 8.8125Z"
        fill="black"
      />
    </svg>
  );
}
