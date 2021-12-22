import React, { FC } from 'react';
import classNames from 'classnames';
import { iconMap } from '../DocSidebarItem/helper';
import styles from './styles.module.scss';
import VersionDropdown from './DocSidebarVersionDropdown';

type Props = {
  enabled: boolean;
};

const DocSidebarTopElements: FC<Props> = ({ enabled }) => (
  <>
    {enabled ? (
      <>
        <li>
          <a
            href="/"
            className={classNames(
              'menuLink_src-theme-DocSidebarItem-styles-module menuLinkSublist_src-theme-DocSidebarItem-styles-module',
              styles.backLink
            )}
          >
            {iconMap['All docs']}
            All docs
          </a>
        </li>
        <li>
          <a
            href="#"
            className={classNames(
              'menuLink_src-theme-DocSidebarItem-styles-module menuLinkSublist_src-theme-DocSidebarItem-styles-module',
              styles.playground
            )}
          >
            GraphQL Playground
            {iconMap['GraphQL Playground']}
          </a>
        </li>
        <li>
          <div className={styles.versionDropdownContainer}>
            <VersionDropdown items={[]} dropdownItemsAfter={[]} dropdownItemsBefore={[]} />
          </div>
        </li>
      </>
    ) : null}
  </>
);

export default DocSidebarTopElements;