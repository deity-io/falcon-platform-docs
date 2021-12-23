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
