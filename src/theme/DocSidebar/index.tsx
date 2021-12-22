import React, { useState } from 'react';
import classNames from 'classnames';
import {
  useThemeConfig,
  useAnnouncementBar,
  MobileSecondaryMenuFiller,
  MobileSecondaryMenuComponent,
  ThemeClassNames,
  useScrollPosition
} from '@docusaurus/theme-common';
import useWindowSize from '@theme/hooks/useWindowSize';
import Logo from '@theme/Logo';
import IconArrow from '@theme/IconArrow';
import { translate } from '@docusaurus/Translate';
import { DocSidebarItems } from '@theme/DocSidebarItem';
import type { Props } from '@theme/DocSidebar';
import styles from './styles.module.scss';
import DocSidebarTopElements from './DocSidebarTopElements';

function useShowAnnouncementBar() {
  const { isActive } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);

  useScrollPosition(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive]
  );
  return isActive && showAnnouncementBar;
}

function HideableSidebarButton({ onClick }: { onClick: React.MouseEventHandler }) {
  return (
    <button
      type="button"
      title={translate({
        id: 'theme.docs.sidebar.collapseButtonTitle',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar'
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.collapseButtonAriaLabel',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar'
      })}
      className={classNames('button button--secondary button--outline', styles.collapseSidebarButton)}
      onClick={onClick}
    >
      <IconArrow className={styles.collapseSidebarButtonIcon} />
    </button>
  );
}

function DocSidebarDesktop({
  path,
  sidebar,
  onCollapse,
  isHidden,
  showVersionDropdown = true
}: Props & {
  showVersionDropdown?: boolean;
}) {
  const showAnnouncementBar = useShowAnnouncementBar();
  const {
    navbar: { hideOnScroll },
    hideableSidebar
  } = useThemeConfig();

  return (
    <div
      className={classNames(styles.sidebar, {
        [styles.sidebarWithHideableNavbar]: hideOnScroll,
        [styles.sidebarHidden]: isHidden
      })}
    >
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <nav
        className={classNames('menu thin-scrollbar', styles.menu, {
          [styles.menuWithAnnouncementBar]: showAnnouncementBar
        })}
      >
        <ul className={classNames(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
          <DocSidebarTopElements enabled={showVersionDropdown} />
          <DocSidebarItems items={sidebar} activePath={path} level={1} />
        </ul>
      </nav>
      {hideableSidebar && <HideableSidebarButton onClick={onCollapse} />}
    </div>
  );
}

// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu: MobileSecondaryMenuComponent<Props> = ({ toggleSidebar, sidebar, path }) => (
  <ul className={classNames(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
    <DocSidebarTopElements enabled />
    <DocSidebarItems
      items={sidebar}
      activePath={path}
      onItemClick={item => {
        // Mobile sidebar should only be closed if the category has a link
        if (item.type === 'category' && item.href) {
          toggleSidebar();
        }
        if (item.type === 'link') {
          toggleSidebar();
        }
      }}
      level={1}
    />
  </ul>
);

function DocSidebarMobile(props: Props) {
  return <MobileSecondaryMenuFiller component={DocSidebarMobileSecondaryMenu} props={props} />;
}

const DocSidebarDesktopMemo = React.memo(DocSidebarDesktop);
const DocSidebarMobileMemo = React.memo(DocSidebarMobile);

export default function DocSidebar(props: Props): JSX.Element {
  const windowSize = useWindowSize();

  // Desktop sidebar visible on hydration: need SSR rendering
  const shouldRenderSidebarDesktop = windowSize === 'desktop' || windowSize === 'ssr';

  // Mobile sidebar not visible on hydration: can avoid SSR rendering
  const shouldRenderSidebarMobile = windowSize === 'mobile';

  return (
    <>
      {shouldRenderSidebarDesktop && <DocSidebarDesktopMemo {...props} />}
      {shouldRenderSidebarMobile && <DocSidebarMobileMemo {...props} />}
    </>
  );
}
