/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ChangelogIcon from '@site/static/icons/changelog.svg';
import CheckListIcon from '@site/static/icons/checklist.svg';
import SlackIcon from '@site/static/icons/slack.svg';
import classNames from 'classnames';
import Card from '../../components/Card';
import { Chat } from '../../components/Intercom';
import styles from './styles.module.scss';
import FooterLink from './FooterLink';
import FooterLogo from './FooterLogo';
import FooterSocials from './FooterSocials';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;
  const { copyright, links = [], logo = {} } = footer || {};

  if (!footer) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <section className={styles.cards}>
        <Card
          title="Changelog"
          description="Learn about our recent changes and new features."
          icon={<ChangelogIcon />}
          href="/changelog"
        />
        <Card
          title="FAQ"
          description="Read up on the most frequently asked questions."
          icon={<CheckListIcon />}
          href="/docs/platform/support/faqs"
        />
        <Card
          title="Support"
          description="Get connected to our Slack community or get in touch with us directly"
          icon={<SlackIcon />}
          href="/docs/platform/support/contact"
        />
      </section>
      <div className={styles.container}>
        {links && links.length > 0 && (
          <div className="row footer__links">
            {links.map(linkItem => (
              <div key={linkItem.title} className={classNames(styles.footerColumn, 'col', 'footer__col')}>
                {linkItem.title != null ? <h4 className={styles.footerTitle}>{linkItem.title}</h4> : null}
                {linkItem.items != null && Array.isArray(linkItem.items) && linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map(item =>
                      item.html ? (
                        <li key={item.label} className={styles.footerItem} />
                      ) : (
                        <li key={item.label || item.to} className={styles.footerItem}>
                          <FooterLink {...item} />
                        </li>
                      )
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
            <div className="col footer__col">
              <FooterCopyright copyrightText={copyright} />
              <FooterLogo alt={logo.alt} />
              <FooterSocials />
            </div>
          </div>
        )}
      </div>
      <Chat loadOnClick />
    </footer>
  );
};

export default Footer;
