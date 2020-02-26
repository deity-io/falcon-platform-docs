import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

const PlanFeatures = {
  1: 'Containerised Cluster',
  2: 'Managed CI/CD Flow',
  3: 'Build & Deploy Pipeline',
  4: 'SLA 99.9% / month',
  5: 'Monitoring 24/7/365',
  6: 'Custom SSL / domain'
}

const PricePlans = [
  {
    name: 'Sandbox',
    price: 99,
    features: [1, 2, 3, 4, 5],
    popular: false,
    environments: [
      {
        name: 'Test',
        cpu: 0.5,
        ram: 0.5,
        bandwidth: 5,
        storage: 10
      }
    ]
  },
  {
    name: 'Basic',
    price: 199,
    features: [1, 2, 3, 4, 5, 6],
    popular: false,
    environments: [
      {
        name: 'Test',
        cpu: 0.5,
        ram: 0.5,
        bandwidth: 5,
        storage: 10
      },
      {
        name: 'Accept',
        cpu: 0.5,
        ram: 0.5,
        bandwidth: 5,
        storage: 10
      },
      {
        name: 'Prod',
        cpu: 0.5,
        ram: 0.5,
        bandwidth: 5,
        storage: 10
      }
    ]
  },
  ,
  {
    name: 'Extra',
    price: 499,
    features: [1, 2, 3, 4, 5, 6],
    popular: true,
    environments: [
      {
        name: 'Test',
        cpu: 0.5,
        ram: 0.5,
        bandwidth: 5,
        storage: 10
      },
      {
        name: 'Accept',
        cpu: 0.5,
        ram: 0.5,
        bandwidth: 5,
        storage: 10
      },
      {
        name: 'Prod',
        cpu: 1.0,
        ram: 1.0,
        bandwidth: 10,
        storage: 20
      }
    ]
  },
  {
    name: 'Plus',
    price: 999,
    features: [1, 2, 3, 4, 5, 6],
    popular: false,
    environments: [
      {
        name: 'Test',
        cpu: 0.5,
        ram: 0.5,
        bandwidth: 5,
        storage: 10
      },
      {
        name: 'Accept',
        cpu: 0.5,
        ram: 0.5,
        bandwidth: 5,
        storage: 10
      },
      {
        name: 'Prod',
        cpu: 2.0,
        ram: 2.0,
        bandwidth: 20,
        storage: 20
      }
    ]
  }
]

const EnvironmentLayout = ({ environments }) => {
  const environmentCount = environments.length;
  const items = environments.map(environment => {
    const { name, cpu, ram, bandwidth, storage } = environment;
    return (
      <tr key={name} className={styles.environmentsRow}>
        <td className={classnames(styles.environmentsName, styles.environmentsCell)}>{name}</td>
        <td className={styles.environmentsCell}>{cpu}</td>
        <td className={styles.environmentsCell}>{ram}</td>
        <td className={styles.environmentsCell}>{bandwidth}</td>
        <td className={styles.environmentsCell}>{storage}</td>
      </tr>
    )
  })

  return (
    <table className={styles.environments}>
      <thead>
        <tr className={styles.environmentsRow}>
          <th className={styles.environmentsCell}>
            <span className={classnames(styles.environmentCount, environmentCount > 1 ? styles.environmentCountHighlighted : '')}>
              <span className={styles.environmentCount__amount}>{environmentCount}</span>
              <span className={styles.environmentCount__text}>Env</span>
            </span>
          </th>
          <th className={styles.environmentsHeading}>CPU</th>
          <th className={styles.environmentsHeading}>RAM (gb)</th>
          <th className={styles.environmentsHeading}>Bandwidth (gb)</th>
          <th className={styles.environmentsHeading}>Storage (gb)</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
  )
}


const PlanLayout = ({ plan }) => {
  const { features, name, popular, environments, price } = plan;
  return (
    <article className={classnames(styles.plan, popular && `${styles.popularPlan} pricePlan--highlight`)}>
      {popular &&
        <span className={styles.flag}>
          <span className={styles.flagText}>Popular</span>
        </span>
      }
      <div>
        <h3 className={styles.planTitle}>{name}</h3>
        <EnvironmentLayout environments={environments} />
      </div>
      <div>
        <ul className={styles.planFeatures}>
          {Object.keys(PlanFeatures).map(key => {
            if (features.includes(parseInt(key))) {
              return (
                <li key={key} className={styles.planFeature}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#7d9a2e"
                    viewBox="0 0 24 24"
                    className={styles.tick}
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                  {PlanFeatures[key]}
                </li>
              )
            }
          })}
        </ul>
      </div>
      <div className={styles.price}>
        <p className={styles.priceAmount}>&euro;{price}</p>
        <p className={styles.priceNote}>per month</p>
      </div>
    </article>
  )
};

/**
 * Pricing widget
 * @todo - replace data source (so plans aren't hardcoded)
 */
const Pricing = () => {

  if (PricePlans.length) {
    const plans = PricePlans.map(plan => {
      return (
        <PlanLayout key={plan.name} plan={plan} />
      )
    });

    return (
      <section className={styles.plans}>{plans}</section>
    )
  }

  // No Plans
  return (
    <p>There are no plans currently available.</p>
  )
};

export default Pricing;
