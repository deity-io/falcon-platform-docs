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
