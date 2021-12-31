/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { FC } from 'react';
import classNames from 'classnames';
import SearchBar from '@theme/SearchBar';
import Toggle from '@theme/Toggle';
import { useThemeConfig } from '@docusaurus/theme-common';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import { useActivePlugin } from '@theme/hooks/useDocs';
import NavbarItem from '@theme/NavbarItem';
import IconMenu from '@theme/IconMenu';
import RightArrowIcon from '@site/static/icons/arrow-right.svg';
import Button from '../../components/Button';
import styles from './styles.module.scss';
import Logo from './NavbarLogo';
import useMobileSidebar from './hooks/useMobileSidebar';
import useColorModeToggle from './hooks/useColorModeToggle';
import useNavbarItems from './hooks/useNavbarItems';
import { splitNavItemsByPosition } from './helper';
import NavbarMobileSidebar from './NavbarMobileSidebar';

const Navbar: FC = () => {
  const {
    navbar: { hideOnScroll, style }
  } = useThemeConfig();

  const mobileSidebar = useMobileSidebar();
  const colorModeToggle = useColorModeToggle();
  const activeDocPlugin = useActivePlugin();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  const items = useNavbarItems();
  const hasSearchNavbarItem = items.some(item => item.type === 'search');
  const { leftItems, rightItems } = splitNavItemsByPosition(items);

  return (
    <nav
      ref={navbarRef}
      className={classNames('navbar', 'navbar--fixed-top', styles.navbar, {
        'navbar--dark': style === 'dark',
        'navbar--primary': style === 'primary',
        'navbar-sidebar--show': mobileSidebar.shown,
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: hideOnScroll && !isNavbarVisible
      })}
    >
      <div className="navbar__inner">
        <div className="navbar__items">
          <Logo />
          {!hasSearchNavbarItem && <SearchBar />}
          <button
            aria-label="Navigation bar toggle"
            className="navbar__toggle clean-btn"
            type="button"
            tabIndex={0}
            onClick={mobileSidebar.toggle}
            onKeyDown={mobileSidebar.toggle}
          >
            <IconMenu />
          </button>
          {leftItems.map(item => (
            <NavbarItem {...item} key={item.itemID} />
          ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map(item => (
            <NavbarItem {...item} key={item.itemID} />
          ))}
          {!colorModeToggle.disabled && (
            <Toggle className={styles.toggle} checked={colorModeToggle.isDarkTheme} onChange={colorModeToggle.toggle} />
          )}
          <div className={styles.button}>
            <Button href="#" variant="contained" endIcon={<RightArrowIcon />}>
              Cloud Console
            </Button>
          </div>
        </div>
      </div>

      <div role="presentation" className="navbar-sidebar__backdrop" onClick={mobileSidebar.toggle} />

      {mobileSidebar.shouldRender && (
        <NavbarMobileSidebar sidebarShown={mobileSidebar.shown} toggleSidebar={mobileSidebar.toggle} />
      )}
    </nav>
  );
};

export default Navbar;
