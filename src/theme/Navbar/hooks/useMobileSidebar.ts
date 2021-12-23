import { useCallback, useState, useEffect } from 'react';
import { useHistoryPopHandler } from '@docusaurus/theme-common';
import useWindowSize from '@theme/hooks/useWindowSize';

function useMobileSidebar() {
  const windowSize = useWindowSize();

  // Mobile sidebar not visible on hydration: can avoid SSR rendering
  const shouldRender = windowSize === 'mobile'; // || windowSize === 'ssr';

  const [shown, setShown] = useState(false);

  // Close mobile sidebar on navigation pop
  // Most likely firing when using the Android back button (but not only)
  useHistoryPopHandler(() => {
    if (shown) {
      setShown(false);
      // Should we prevent the navigation here?
      // See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
      return false; // prevent pop navigation
    }
    return undefined;
  });

  const toggle = useCallback(() => {
    setShown(s => !s);
  }, []);

  useEffect(() => {
    if (windowSize === 'desktop') {
      setShown(false);
    }
  }, [windowSize]);

  return { shouldRender, toggle, shown };
}

export default useMobileSidebar;
