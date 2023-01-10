/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type { Props } from '@theme/Icon/DarkMode';

export default function IconDarkMode(props: Props): JSX.Element {
  return (
    <svg viewBox="0 0 15 15" width={15} height={15} {...props}>
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.9001 0.500098C2.9001 0.279184 2.72101 0.100098 2.5001 0.100098C2.27918 0.100098 2.1001 0.279184 2.1001 0.500098V1.1001H1.5001C1.27918 1.1001 1.1001 1.27918 1.1001 1.5001C1.1001 1.72101 1.27918 1.9001 1.5001 1.9001H2.1001V2.5001C2.1001 2.72101 2.27918 2.9001 2.5001 2.9001C2.72101 2.9001 2.9001 2.72101 2.9001 2.5001V1.9001H3.5001C3.72101 1.9001 3.9001 1.72101 3.9001 1.5001C3.9001 1.27918 3.72101 1.1001 3.5001 1.1001H2.9001V0.500098ZM5.9001 3.5001C5.9001 3.27918 5.72101 3.1001 5.5001 3.1001C5.27918 3.1001 5.1001 3.27918 5.1001 3.5001V4.1001H4.5001C4.27918 4.1001 4.1001 4.27918 4.1001 4.5001C4.1001 4.72101 4.27918 4.9001 4.5001 4.9001H5.1001V5.5001C5.1001 5.72101 5.27918 5.9001 5.5001 5.9001C5.72101 5.9001 5.9001 5.72101 5.9001 5.5001V4.9001H6.5001C6.72101 4.9001 6.9001 4.72101 6.9001 4.5001C6.9001 4.27918 6.72101 4.1001 6.5001 4.1001H5.9001V3.5001ZM1.9001 6.5001C1.9001 6.27918 1.72101 6.1001 1.5001 6.1001C1.27918 6.1001 1.1001 6.27918 1.1001 6.5001V7.1001H0.500098C0.279184 7.1001 0.100098 7.27918 0.100098 7.5001C0.100098 7.72101 0.279184 7.9001 0.500098 7.9001H1.1001V8.5001C1.1001 8.72101 1.27918 8.9001 1.5001 8.9001C1.72101 8.9001 1.9001 8.72101 1.9001 8.5001V7.9001H2.5001C2.72101 7.9001 2.9001 7.72101 2.9001 7.5001C2.9001 7.27918 2.72101 7.1001 2.5001 7.1001H1.9001V6.5001ZM8.54418 0.981962L8.2463 0.941709C8.03287 0.917798 7.90704 1.16562 8.02948 1.34206C8.17025 1.54491 8.29993 1.75604 8.41766 1.97457C8.9189 2.90497 9.20334 3.96944 9.20334 5.10034C9.20334 8.37213 6.82259 11.0879 3.69899 11.6098C3.45748 11.6501 3.21 11.6773 2.96021 11.6907C2.74575 11.7021 2.62741 11.9536 2.77734 12.1073C2.84563 12.1774 2.91547 12.246 2.98679 12.313L3.05896 12.3797L3.31895 12.6046L3.50696 12.7533L3.62808 12.8434L3.81503 12.9744L3.99091 13.0891C4.11187 13.1653 4.23548 13.2376 4.36169 13.3061L4.62508 13.4413L4.88565 13.5608L5.18849 13.683L5.43182 13.7687C5.56576 13.8129 5.70161 13.853 5.83869 13.8886C5.94274 13.9157 6.04779 13.9402 6.15417 13.9623C6.28005 13.9885 6.40726 14.011 6.53557 14.0299L6.85254 14.0687L7.11946 14.0894C7.24649 14.0966 7.37449 14.1003 7.50334 14.1003C11.1484 14.1003 14.1033 11.1454 14.1033 7.50035C14.1033 7.25056 14.0895 7.00401 14.0624 6.76143L14.0256 6.48419C13.9911 6.26095 13.9454 6.04141 13.8892 5.82654C13.8214 5.56721 13.7383 5.3141 13.641 5.06894L13.5281 4.80144L13.4508 4.63554L13.3767 4.48678C13.2179 4.17785 13.0354 3.88307 12.8313 3.60435L12.6783 3.40365L12.4794 3.16444L12.3158 2.98373L12.1963 2.85963L12.0356 2.70258L11.8135 2.50196L11.4927 2.24203L11.2485 2.06511L10.9563 1.87458L10.6347 1.68907L10.3074 1.52391L10.1939 1.47188L9.955 1.37072L9.67803 1.26702L9.42578 1.18472L9.10087 1.09502L8.83611 1.03498L8.54418 0.981962ZM10.4034 5.30035C10.4034 4.276 10.2003 3.29841 9.83256 2.40616C11.7625 3.29007 13.1033 5.23874 13.1033 7.50035C13.1033 10.5931 10.5961 13.1003 7.50334 13.1003C6.63658 13.1003 5.81609 12.9037 5.08367 12.5523C6.54202 12.0942 7.81093 11.2083 8.74334 10.0417C8.87975 10.2285 9.10041 10.3498 9.3494 10.3498C9.76361 10.3498 10.0994 10.014 10.0994 9.59983C10.0994 9.24269 9.84977 8.94385 9.51547 8.86828C9.57753 8.75177 9.63665 8.63346 9.69272 8.51344C9.8837 8.63175 10.1089 8.70005 10.3501 8.70005C11.0404 8.70005 11.6001 8.1404 11.6001 7.45005C11.6001 6.75989 11.0407 6.20036 10.3507 6.20005C10.3855 5.90499 10.4034 5.60476 10.4034 5.30035Z"
      />
    </svg>
  );
}
