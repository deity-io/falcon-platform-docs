import useIsBrowser from '@docusaurus/useIsBrowser';
import { useMemo } from 'react';
import { findFirstCategoryLink } from '@docusaurus/theme-common';

// When a collapsible category has no link, we still link it to its first child during SSR as a temporary fallback
// This allows to be able to navigate inside the category even when JS fails to load, is delayed or simply disabled
// React hydration becomes an optional progressive enhancement
// see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
// see https://github.com/facebook/docusaurus/issues/3030
export function useCategoryHrefWithSSRFallback(item: PropSidebarItemCategory): string | undefined {
  const isBrowser = useIsBrowser();
  return useMemo(() => {
    if (item.href) {
      return item.href;
    }
    // In these cases, it's not necessary to render a fallback
    // We skip the "findFirstCategoryLink" computation
    if (isBrowser || !item.collapsible) {
      return undefined;
    }
    return findFirstCategoryLink(item);
  }, [item, isBrowser]);
}
