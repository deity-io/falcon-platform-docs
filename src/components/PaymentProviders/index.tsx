import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

const PaymentProviderData = [
  {
    name: 'Mollie Payments',
    url: '/docs/platform/integration/mollie',
    img: '/img/docs/platform/deity-paymemt-mollie.jpg'
  },
  {
    name: 'Stripe Payments',
    url: '/docs/platform/integration/stripe',
    img: '/img/docs/platform/deity-paymemt-stripe.jpg'
  }
];

const PaymentProvider = ({ provider }) => {
  const { name, url, img } = provider;
  return (
    <article className={styles.provider}>
      <div className={styles.provider__container}>
        <Link to={url}>
          <img src={img} alt={name} className={styles.provider__image} />
        </Link>
        <div className={styles.provider__content}>
          <h3 className={styles.provider__title}>
            <Link to={url}>{name}</Link>
          </h3>
        </div>
      </div>
    </article>
  );
};

const PaymentProviders = () => {
  const providers = PaymentProviderData.map(provider => <PaymentProvider provider={provider} key={provider.name} />);

  return <section className={styles.providers}>{providers}</section>;
};

export default PaymentProviders;
