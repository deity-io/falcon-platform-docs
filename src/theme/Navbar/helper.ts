import { Props as NavbarItemConfig } from '@theme/NavbarItem';

const DefaultNavItemPosition = 'right';

// If split links by left/right
// if position is unspecified, fallback to right (as v1)
// retrocompatible with v1
export function splitNavItemsByPosition(items: NavbarItemConfig[]) {
  const leftItems = items.filter(item => (item.position ?? DefaultNavItemPosition) === 'left');
  const rightItems = items.filter(item => (item.position ?? DefaultNavItemPosition) === 'right');
  return {
    leftItems,
    rightItems
  };
}
