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
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>

      <path d="M12 9.75V13.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.7058 3.75024L2.45585 18.0002C2.32442 18.2279 2.25512 18.4861 2.25488 18.7489C2.25465 19.0118 2.3235 19.2701 2.45452 19.498C2.58555 19.7258 2.77416 19.9153 3.00145 20.0473C3.22875 20.1793 3.48674 20.2493 3.7496 20.2502H20.2496C20.5125 20.2493 20.7705 20.1793 20.9977 20.0473C21.225 19.9153 21.4136 19.7258 21.5447 19.498C21.6757 19.2701 21.7445 19.0118 21.7443 18.7489C21.7441 18.4861 21.6748 18.2279 21.5434 18.0002L13.2934 3.75024C13.1629 3.5223 12.9746 3.33287 12.7474 3.20113C12.5202 3.06938 12.2622 3 11.9996 3C11.737 3 11.479 3.06938 11.2518 3.20113C11.0246 3.33287 10.8363 3.5223 10.7058 3.75024V3.75024Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 17.8125C12.5178 17.8125 12.9375 17.3928 12.9375 16.875C12.9375 16.3572 12.5178 15.9375 12 15.9375C11.4822 15.9375 11.0625 16.3572 11.0625 16.875C11.0625 17.3928 11.4822 17.8125 12 17.8125Z"/>

    </svg>
  );
}
