import { useThemeConfig } from '@docusaurus/theme-common';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

export default useNavbarItems;
