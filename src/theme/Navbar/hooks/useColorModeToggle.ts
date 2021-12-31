/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useCallback } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { useThemeConfig } from '@docusaurus/theme-common';

function useColorModeToggle() {
  const {
    colorMode: { disableSwitch }
  } = useThemeConfig();
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const toggle = useCallback(e => (e.target.checked ? setDarkTheme() : setLightTheme()), [setLightTheme, setDarkTheme]);
  return { isDarkTheme, toggle, disabled: disableSwitch };
}

export default useColorModeToggle;
