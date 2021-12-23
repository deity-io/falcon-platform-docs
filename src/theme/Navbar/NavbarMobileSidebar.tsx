import React from 'react';
import classNames from 'classnames';
import Translate from '@docusaurus/Translate';
import Toggle from '@theme/Toggle';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import NavbarItem from '@theme/NavbarItem';
import IconClose from '@theme/IconClose';
import styles from './styles.module.scss';
import useNavbarItems from './hooks/useNavbarItems';
import useColorModeToggle from './hooks/useColorModeToggle';
import useSecondaryMenu from './hooks/useSecondaryMenu';

type NavbarMobileSidebarProps = {
  sidebarShown: boolean;
  toggleSidebar: () => void;
};

function NavbarMobileSidebar({ sidebarShown, toggleSidebar }: NavbarMobileSidebarProps) {
  useLockBodyScroll(sidebarShown);
  const items = useNavbarItems();

  const colorModeToggle = useColorModeToggle();

  const secondaryMenu = useSecondaryMenu({
    sidebarShown,
    toggleSidebar
  });

  return (
    <div className={classNames(styles.sidebar, 'navbar-sidebar')}>
      <div className="navbar-sidebar__brand">
        {!colorModeToggle.disabled && (
          <Toggle
            className={styles.navbarSidebarToggle}
            checked={colorModeToggle.isDarkTheme}
            onChange={colorModeToggle.toggle}
          />
        )}
        <button type="button" className="clean-btn navbar-sidebar__close" onClick={toggleSidebar}>
          <IconClose color="var(--ifm-color-emphasis-600)" className={styles.navbarSidebarCloseSvg} />
        </button>
      </div>

      <div
        className={classNames('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenu.shown
        })}
      >
        <div className={classNames(styles.sidebar, 'navbar-sidebar__item', 'menu')}>
          <ul className="menu__list">
            {items.map(item => (
              <NavbarItem mobile {...item} onClick={toggleSidebar} key={item.itemID} />
            ))}
          </ul>
        </div>

        <div className="navbar-sidebar__item menu">
          {items.length > 0 && (
            <button type="button" className="clean-btn navbar-sidebar__back" onClick={secondaryMenu.hide}>
              <Translate
                id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
                description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"
              >
                ← Back to main menu
              </Translate>
            </button>
          )}
          {secondaryMenu.content}
        </div>
      </div>
    </div>
  );
}

export default NavbarMobileSidebar;
