/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useCallback, useState, useEffect } from 'react';
import { useMobileSecondaryMenuRenderer, usePrevious } from '@docusaurus/theme-common';

function useSecondaryMenu({ sidebarShown, toggleSidebar }: NavbarMobileSidebarProps) {
  const content = useMobileSecondaryMenuRenderer()?.({
    toggleSidebar
  });
  const previousContent = usePrevious(content);

  const [shown, setShown] = useState<boolean>(
    () =>
      // /!\ content is set with useEffect,
      // so it's not available on mount anyway
      // "return !!content" => always returns false
      false
  );

  // When content is become available for the first time (set in useEffect)
  // we set this content to be shown!
  useEffect(() => {
    const contentBecameAvailable = content && !previousContent;
    if (contentBecameAvailable) {
      setShown(true);
    }
  }, [content, previousContent]);

  const hasContent = !!content;

  // On sidebar close, secondary menu is set to be shown on next re-opening
  // (if any secondary menu content available)
  useEffect(() => {
    if (!hasContent) {
      setShown(false);
      return;
    }
    if (!sidebarShown) {
      setShown(true);
    }
  }, [sidebarShown, hasContent]);

  const hide = useCallback(() => {
    setShown(false);
  }, []);

  return { shown, hide, content };
}

export default useSecondaryMenu;
