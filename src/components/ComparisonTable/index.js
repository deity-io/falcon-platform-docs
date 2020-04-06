import React from 'react';
import styles from './styles.module.css';


const Features = [
  {
    name: 'Production Ready',
    note: 'This code is ready to be used on live sites and projects.',
    availability: {
      openSource: true,
      platform: true
    }
  },
  {
    name: 'Open Source Codebase',
    note: 'This is a public repositiory and you can use it how you want.',
    availability: {
      openSource: true,
      platform: false
    }
  },
  {
    name: 'PWA Theme',
    note: 'Optimised for performance, includes offline support and a pre-configured service worker.',
    availability: {
      openSource: true,
      platform: true
    }
  },
  {
    name: 'Latest Features',
    note: 'Including our latest features such as our BigCommerce, Stripe and Algolia integrations.',
    availability: {
      openSource: false,
      platform: true
    }
  },
  {
    name: 'Latest Codebase',
    note: 'Includes improvements to code splitting, caching, Typescript support and much more.',
    availability: {
      openSource: false,
      platform: true
    }
  },
  {
    name: 'Falcon Cloud Evironment(s)',
    note: 'Your hosting, deployments, configuration and test sites are all provided.',
    availability: {
      openSource: false,
      platform: true
    }
  },
  {
    name: '24/7 Monitoring',
    note: 'We\'ll keep an eye on your app 24 hours a day.',
    availability: {
      openSource: false,
      platform: true
    }
  },
  {
    name: '99% Uptime Guarantee',
    note: 'We guarantee your Falcon app will have 99% uptime.',
    availability: {
      openSource: false,
      platform: true
    }
  }
]

const ComparisonFeatures = () => {
  const output = Features.map(Feature => {
    const { name, note, availability } = Feature;
    return (
      <tr key={name}>
        <td className={styles.feature}>
          <h5 className={styles.name}>{name}</h5>
          {note && 
            <p className={styles.note}>{note}</p>
          }
        </td>
        <td className={styles.value}>
          {availability.openSource ?
            <>
              <span className={styles.hidden}>Yes</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="#7d9a2e"
                viewBox="0 0 24 24"
              >
                <title>Tick</title>
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
            </>
            :
            <span className={styles.hidden}>No</span>
          }
        </td>
        <td className={styles.value}>
          {availability.platform ?
            <>
              <span className={styles.hidden}>Yes</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="#7d9a2e"
                viewBox="0 0 24 24"
              >
                <title>Tick</title>
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
            </>
            :
            <span className={styles.hidden}>No</span>
          }
        </td>
      </tr>
    )
  });

  return output;
}

const ComparisonTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Falcon Open Source</th>
          <th>Falcon Platform</th>
        </tr>
      </thead>
      <tbody>
        <ComparisonFeatures />
      </tbody>
    </table>
  );
}

export default ComparisonTable;
