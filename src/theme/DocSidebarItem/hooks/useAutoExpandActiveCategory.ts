/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';
import { usePrevious } from '@docusaurus/theme-common';

// If we navigate to a category and it becomes active, it should automatically expand itself
export function useAutoExpandActiveCategory({
  isActive,
  collapsed,
  setCollapsed
}: {
  isActive: boolean;
  collapsed: boolean;
  setCollapsed: (b: boolean) => void;
}) {
  const wasActive = usePrevious(isActive);
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      setCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, setCollapsed]);
}
