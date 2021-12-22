import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import {
  isSamePath,
  useCollapsible,
  Collapsible,
  isRegexpStringMatch,
  useLocalPathname
} from '@docusaurus/theme-common';
import type { DesktopOrMobileNavBarItemProps, Props } from '@theme/NavbarItem/DropdownNavbarItem';
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import { NavLink } from '@theme/NavbarItem/DefaultNavbarItem';
import NavbarItem from '@theme/NavbarItem';
import styles from './styles.module.scss';
import { versionMap } from './helper';

const dropdownLinkActiveClass = 'dropdown__link--active';

function isItemActive(item: LinkLikeNavbarItemProps, localPathname: string): boolean {
  if (isSamePath(item.to, localPathname)) {
    return true;
  }
  if (isRegexpStringMatch(item.activeBaseRegex, localPathname)) {
    return true;
  }
  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true;
  }
  return false;
}

function containsActiveItems(items: readonly LinkLikeNavbarItemProps[], localPathname: string): boolean {
  return items.some(item => isItemActive(item, localPathname));
}

function DropdownNavbarItemDesktop({ items, position, className, ...props }: DesktopOrMobileNavBarItemProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLUListElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target as Node)) {
        return;
      }
      setShowDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className={classNames(styles.versionDropdown, 'navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown
      })}
    >
      <NavLink
        href={props.to ? undefined : '#'}
        className={classNames(styles.dropdownLink, 'navbar__link', className)}
        {...props}
        onClick={props.to ? undefined : e => e.preventDefault()}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}
      >
        {props.children ?? props.label}
      </NavLink>
      <ul ref={dropdownMenuRef} className={classNames(styles.dropdownMenu, 'dropdown__menu')}>
        {items.map(childItemProps => (
          <NavbarItem
            isDropdownItem
            onKeyDown={e => {
              if (i === items.length - 1 && e.key === 'Tab') {
                e.preventDefault();
                setShowDropdown(false);
                const nextNavbarItem = dropdownRef.current!.nextElementSibling;
                if (nextNavbarItem) {
                  (nextNavbarItem as HTMLElement).focus();
                }
              }
            }}
            activeClassName={dropdownLinkActiveClass}
            {...childItemProps}
            key={childItemProps.itemID}
          />
        ))}
      </ul>
    </div>
  );
}

function DropdownNavbarItemMobile({
  items,
  className,
  position: _position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(items, localPathname);

  const { collapsed, toggleCollapsed, setCollapsed } = useCollapsible({
    initialState: () => !containsActive
  });

  // Expand/collapse if any item active after a navigation
  useEffect(() => {
    if (containsActive) {
      setCollapsed(!containsActive);
    }
  }, [localPathname, containsActive, setCollapsed]);

  return (
    <li
      className={classNames('menu__list-item', {
        'menu__list-item--collapsed': collapsed
      })}
    >
      <NavLink
        role="button"
        className={classNames('menu__link menu__link--sublist', className)}
        {...props}
        onClick={e => {
          e.preventDefault();
          toggleCollapsed();
        }}
      >
        {props.children ?? props.label}
      </NavLink>
      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        {items.map(childItemProps => (
          <NavbarItem
            mobile
            isDropdownItem
            onClick={props.onClick}
            activeClassName="menu__link--active"
            {...childItemProps}
            key={childItemProps.itemID}
          />
        ))}
      </Collapsible>
    </li>
  );
}

function DropdownNavbarItem({ mobile = false, ...props }: Props): JSX.Element {
  const Comp = mobile ? DropdownNavbarItemMobile : DropdownNavbarItemDesktop;
  return <Comp {...props} />;
}

export default DropdownNavbarItem;
