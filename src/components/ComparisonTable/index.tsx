import React, { FC } from 'react';
import styles from './styles.module.scss';

const Features = [
  {
    name: 'Production Ready',
    note: 'This code is ready to be used on live sites and projects.',
    availability: {
      platform: true
    }
  },
  {
    name: 'PWA Theme',
    note: 'Optimised for performance, includes offline support and a pre-configured service worker.',
    availability: {
      platform: true
    }
  },
  {
    name: 'Latest Features',
    note: 'Including our latest features such as our BigCommerce, Stripe and Algolia integrations.',
    availability: {
      platform: true
    }
  },
  {
    name: 'Latest Codebase',
    note: 'Includes improvements to code splitting, caching, Typescript support and much more.',
    availability: {
      platform: true
    }
  },
  {
    name: 'Falcon Cloud Evironment(s)',
    note: 'Your hosting, deployments, configuration and test sites are all provided.',
    availability: {
      platform: true
    }
  },
  {
    name: '24/7 Monitoring',
    note: "We'll keep an eye on your app 24 hours a day.",
    availability: {
      platform: true
    }
  },
  {
    name: '99% Uptime Guarantee',
    note: 'We guarantee your Falcon app will have 99% uptime.',
    availability: {
      platform: true
    }
  }
];

const ComparisonFeatures: FC = () => (
  <>
    {Features.map(Feature => {
      const { name, note, availability } = Feature;
      return (
        <tr key={name}>
          <td className={styles.feature}>
            <h5 className={styles.name}>{name}</h5>
            {note && <p className={styles.note}>{note}</p>}
          </td>
          <td className={styles.value}>
            {availability.platform ? (
              <>
                <span className={styles.hidden}>Yes</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#7d9a2e" viewBox="0 0 24 24">
                  <title>Tick</title>
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
              </>
            ) : (
              <span className={styles.hidden}>No</span>
            )}
          </td>
        </tr>
      );
    })}
  </>
);

const ComparisonTable = () => {
  return (
    <table>
      <tbody>
        <ComparisonFeatures />
      </tbody>
    </table>
  );
};

export default ComparisonTable;
