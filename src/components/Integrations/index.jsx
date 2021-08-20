import React from 'react';
import Link from '@docusaurus/Link';
import AdyenLogo from './img/adyen.svg';
import BraintreeLogo from './img/braintree.svg';
import MollieLogo from './img/mollie.svg';
import StripeLogo from './img/stripe.svg';
import styles from "./styles.module.css";

const integrations = [
  {
    name: 'Adyen',
    url: '/docs/next/dpsg/integrations/adyen/overview',
    logo: <AdyenLogo />,
    isActive: true,
  },
  {
    name: 'Mollie',
    url: '/docs/next/dpsg/integrations/mollie/overview',
    logo: <MollieLogo />,
    isActive: true,
  },
  {
    name: 'stripe',
    url: '/docs/next/dpsg/integrations/stripe/overview',
    logo: <StripeLogo />,
    isActive: true,
  },
  {
    name: 'braintree',
    url: '/docs/next/dpsg/integrations/braintree/overview',
    logo: <BraintreeLogo />,
    isActive: false,
  },
];

const IntegrationItems = () => {
  if (integrations) {
    const integrationContent = integrations.map((integration) => {
      if (integration.isActive) {
        return (
          <Link
            className={styles.integration}
            to={integration.url}
            key={integration.name}
            title={integration.name}
          >
            {integration.logo}
          </Link>
        );
      }

      return (
        <div
          className={`${styles.integration} ${styles.integrationDisabled}`}
          key={integration.name}
        >
          <span className={styles.comingSoon}>comming soon</span>
          {integration.logo}
        </div>
      );
    });

    return (
      <div className={styles.integrationsInner}>{integrationContent}</div>
    );
  }

  return null;
};

const Integrations = () => (
  <section className={styles.integrations}>
    <div className={styles.integrationsWrapper}>
      <h3>Payment Integrations</h3>
      <p>Checkout out how to use each of our payment integrations below.</p>
      <IntegrationItems />
    </div>
  </section>
);

export default Integrations;
