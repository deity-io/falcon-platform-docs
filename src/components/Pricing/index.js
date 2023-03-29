import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const PlanFeatures = {
  1: 'Multi tenant',
  2: 'Access to Falcon Server',
  3: 'SLA 99.99% / month',
  4: 'Monitoring 24/7/365',
  5: 'Custom SSL / domain',
  6: 'Containerised Cluster',
  7: 'Managed CI/CD flow',
  8: 'Build & Deploy Pipeline',
  9: 'Autoscaling',
  10: 'Optional Geo-Region'
};

const PlanEnvironments = {
  1: 'Test',
  2: 'Acceptance',
  3: 'Production'
};

const PricePlans = [
  {
    name: 'Sandbox',
    description: 'For Developers',
    price: 82.5,
    monthlyCost: 120,
    features: [6, 7, 8],
    popular: false,
    environments: [1]
  },
  {
    name: 'Production',
    description: 'For Shop Owners',
    price: 207,
    monthlyCost: 249,
    features: [4, 5, 6, 7, 8, 9, 10],
    popular: true,
    environments: [3]
  },
  {
    name: 'Enterprise',
    description: 'For Agencies',
    price: null,
    monthlyCost: null,
    features: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    popular: false,
    environments: [1, 2, 3]
  }
];

function EnvironmentLayout({ environments }) {
  const environmentCount = environments.length;

  const items = (
    <ul className={styles.environmentsList}>
      {Object.keys(PlanEnvironments).map(key => {
        if (environments.includes(parseInt(key))) {
          return (
            <li key={key} className={styles.environmentsItem}>
              {PlanEnvironments[key]}
            </li>
          );
        }
      })}
    </ul>
  );

  return (
    <div className={styles.environments}>
      <span className={clsx(styles.environmentCount, environmentCount > 1 ? styles.environmentCountHighlighted : '')}>
        <span className={styles.environmentCount__amount}>{environmentCount}</span>
        <span className={styles.environmentCount__text}>Env</span>
      </span>
      {items}
    </div>
  );
}

function PaymentPeriodSwitcher({ monthly, setMonthly }) {
  return (
    <label htmlFor="payment-switcher" className={styles.switcher}>
      <input
        id="payment-switcher"
        name="payment-switcher"
        type="checkbox"
        checked={monthly}
        className={styles.input}
        onChange={() => setMonthly(!monthly)}
      />
      <span className={clsx(styles.label, monthly ? styles.label__active : null)}>Monthly</span>
      <span className={clsx(styles.switch, !monthly ? styles.switch__active : null)} />
      <span className={clsx(styles.label, !monthly ? styles.label__active : null)}>
        Annualy <span className={styles.label__highlight}>(2 months free)</span>
      </span>
    </label>
  );
}

function PlanTabsLayout({ activePlan, setActivePlan }) {
  return (
    <nav className={styles.tabs}>
      {PricePlans.map(plan => (
        <button
          key={`${plan.name}-tab`}
          type="button"
          className={clsx(styles.tab, activePlan === plan.name ? styles.activeTab : null)}
          onClick={() => setActivePlan(plan.name)}
        >
          <span className={styles.tabName}>{plan.name}</span>
          <span className={styles.tabDescription}>{plan.description}</span>
        </button>
      ))}
    </nav>
  );
}

function PlanPriceLayout({ plan, monthly }) {
  const { price, monthlyCost } = plan;
  return (
    <div className={styles.price}>
      {!price ? (
        <p className={styles.priceQuote}>Contact us for a price</p>
      ) : (
        <>
          <p className={styles.priceAmount}>${monthly ? monthlyCost : price}</p>
          <p className={styles.priceNote}>{monthly ? 'per month' : 'per month, billed annually'}</p>
        </>
      )}
    </div>
  );
}

function PlanFeatureLayout({ hasFeature, featureKey }) {
  const specialFeatures = [9, 10];
  if (hasFeature) {
    return (
      <div key={featureKey}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className={styles.tick}>
          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
        </svg>
        <span className={styles.feature}>{PlanFeatures[featureKey]}</span>
      </div>
    );
  }
  if (specialFeatures.includes(parseInt(featureKey))) return <>N/A</>;

  return <>&nbsp;</>;
}

const planHasFeature = (plan, featureKey) => plan.features.includes(parseInt(featureKey));

function PlanTable({ monthly, activePlan, showPrice }) {
  return (
    <table className={styles.table}>
      <tbody className={styles.table__body}>
        <tr className={styles.table__row}>
          <th className={styles.table__head} arial-lable="Plan Details">
            &nbsp;
          </th>
          {PricePlans.map(plan => (
            <td
              key={`${plan.name}-details`}
              className={clsx(
                styles.table__cell,
                plan.popular ? styles.popular : '',
                plan.name === activePlan ? styles.activePlan : ''
              )}
            >
              <div className={clsx(styles.cellCurve, styles.cellCurve__top)} />
              <div className={styles.table__cellContent}>
                {plan.popular && (
                  <span className={styles.flag}>
                    <span className={styles.flagText}>Popular</span>
                  </span>
                )}
                <div className={styles.titles}>
                  <h3 className={styles.planTitle}>{plan.name}</h3>
                  <h4 className={styles.planDescription}>{plan.description}</h4>
                </div>
                {showPrice && <PlanPriceLayout monthly={monthly} plan={plan} />}
              </div>
            </td>
          ))}
        </tr>
        <tr className={styles.table__row}>
          <th className={styles.table__head}>Environments</th>
          {PricePlans.map(plan => (
            <td
              key={`${plan.name}-env`}
              className={clsx(
                styles.table__cell,
                plan.popular ? styles.popular : '',
                plan.name === activePlan ? styles.activePlan : ''
              )}
            >
              <div className={styles.table__cellContent}>
                <EnvironmentLayout environments={plan.environments} />
              </div>
            </td>
          ))}
        </tr>
        {Object.keys(PlanFeatures).map(key => (
          <tr key={key} className={styles.table__row}>
            <th className={styles.table__head}>{PlanFeatures[key]}</th>
            {PricePlans.map(plan => {
              const hasFeature = planHasFeature(plan, key);
              return (
                <td
                  key={`${plan.name}-${key}`}
                  className={clsx(
                    styles.table__cell,
                    plan.popular ? styles.popular : '',
                    plan.name === activePlan && hasFeature ? styles.activePlan : ''
                  )}
                >
                  <div className={styles.table__cellContent}>
                    <PlanFeatureLayout featureKey={key} hasFeature={hasFeature} />
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
        <tr className={styles.table__row}>
          <td className={clsx(styles.table__head, styles.table__cellFoot)}>&nbsp;</td>
          {PricePlans.map(plan => (
            <td
              key={`${plan.name}-foot`}
              className={clsx(
                styles.table__cell,
                styles.table__cellFoot,
                plan.popular ? styles.popular : '',
                plan.name === activePlan ? styles.activePlan : ''
              )}
            >
              <div className={clsx(styles.cellCurve, styles.cellCurve__bottom)} />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

/**
 * Get the first plan marked as Popular
 */
const getPopularPlan = () => {
  const popularPlans = PricePlans.filter(plan => plan.popular);
  return popularPlans[0];
};

/**
 * Pricing widget
 * @todo - replace data source (so plans aren't hardcoded)
 */
function Pricing({ showPrice }) {
  if (PricePlans.length) {
    const popularPlan = getPopularPlan();
    const [monthly, setMonthly] = useState(false);
    const [activePlan, setActivePlan] = useState(popularPlan.name);
    return (
      <>
        <header>
          {showPrice && <PaymentPeriodSwitcher monthly={monthly} setMonthly={setMonthly} />}
          <PlanTabsLayout activePlan={activePlan} setActivePlan={setActivePlan} />
        </header>
        <section className={styles.plans}>
          <PlanTable monthly={monthly} activePlan={activePlan} showPrice={showPrice} />
          {showPrice && (
            <div className={styles.plansAdditional}>
              <p>
                ** Autoscaling may increase the cost listed. Please{' '}
                <Link href="https://deity.io/contact">contact us for more information</Link>
              </p>
            </div>
          )}
        </section>
      </>
    );
  }

  // No Plans
  return <p>There are no plans currently available.</p>;
}

export default Pricing;
