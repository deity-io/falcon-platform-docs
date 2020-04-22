import React, { useState } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

const PlanFeatures = {
  1: "Multi tenant",
  2: "Access to Falcon Server",
  3: "SLA 99.99% / month",
  4: "Monitoring 24/7/365",
  5: "Custom SSL / domain",
  6: "Containerised Cluster",
  7: "Managed CI/CD flow",
  8: "Build & Deploy Pipeline",
  9: "Autoscaling",
  10: "Optional Geo-Region"
};

const PlanEnvironments = {
  1: "Test",
  2: "Acceptance",
  3: "Production"
};

const PricePlans = [
  {
    name: "Sandbox",
    description: "For Developers",
    price: 82.50,
    monthlyCost: 120,
    features: [6, 7, 8],
    popular: false,
    environments: [1],
  },
  {
    name: "Production",
    description: "For Shop Owners",
    price: 207,
    monthlyCost: 249,
    features: [3, 4, 5, 6, 7, 8, 9, 10],
    popular: true,
    environments: [1, 2, 3],
  },
  {
    name: "Enterprise",
    description: "For Agencies",
    price: null,
    monthlyCost: null,
    features: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    popular: false,
    environments: [1, 2, 3],
  },
];

const EnvironmentLayout = ({ environments }) => {
  const environmentCount = environments.length;
  
  const items = (
    <ul className={styles.environmentsList}>
      {Object.keys(PlanEnvironments).map((key) => {
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
      <span
        className={classnames(
          styles.environmentCount,
          environmentCount > 1 ? styles.environmentCountHighlighted : ""
        )}
      >
        <span className={styles.environmentCount__amount}>
          {environmentCount}
        </span>
        <span className={styles.environmentCount__text}>Env</span>
      </span>
      {items}
    </div>
  );
};

const PaymentPeriodSwitcher = ({ monthly, setMonthly }) => (
  <label htmlFor="payment-switcher" className={styles.switcher}>
    <input
      id="payment-switcher"
      name="payment-switcher"
      type="checkbox"
      checked={monthly}
      className={styles.input}
      onChange={() => setMonthly(!monthly)}
    />
    <span
      className={classnames(
        styles.label,
        monthly ? styles.label__active : null
      )}
    >
      Monthly
    </span>
    <span
      className={classnames(
        styles.switch,
        !monthly ? styles.switch__active : null
      )}
    ></span>
    <span
      className={classnames(
        styles.label,
        !monthly ? styles.label__active : null
      )}
    >
      Annualy <span className={styles.label__highlight}>(2 months free)</span>
    </span>
  </label>
);

const PlanLayout = ({ plan, monthly }) => {
  const { features, name, description, popular, environments, price, monthlyCost } = plan;
  return (
    <article
      className={classnames(
        styles.plan,
        popular && `${styles.popularPlan} pricePlan--highlight`
      )}
    >
      {popular && (
        <span className={styles.flag}>
          <span className={styles.flagText}>Popular</span>
        </span>
      )}
      <div className={styles.titles}>
        <h3 className={styles.planTitle}>{name}</h3>
        <h4 className={styles.planDescription}>{description}</h4>
      </div>
      <div className={styles.price}>
        {!price ? (
          <p className={styles.priceQuote}>Contact us for a price</p>
        ) : (
          <>
            <p className={styles.priceAmount}>
              ${monthly ? monthlyCost : price}
            </p>
            <p className={styles.priceNote}>
              {monthly ? "per month" : "per year"}
            </p>
          </>
        )}
      </div>
      <EnvironmentLayout environments={environments} />
      <div>
        <ul className={styles.planFeatures}>
          {Object.keys(PlanFeatures).map((key) => {
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
              );
            }
          })}
        </ul>
      </div>
    </article>
  );
};

const PlanPriceLayout = ({ plan, monthly }) => {
  const { price, monthlyCost } = plan;
  return (
    <div className={styles.price}>
      {!price ? (
        <p className={styles.priceQuote}>Contact us for a price</p>
      ) : (
        <>
          <p className={styles.priceAmount}>${monthly ? monthlyCost : price}</p>
          <p className={styles.priceNote}>
            {monthly ? "per month" : "per year"}
          </p>
        </>
      )}
    </div>
  );
}

const PlanFeatureLayout = ({ plan, featureKey }) => {
  const { features } = plan;
  const specialFeatures = [9, 10];
  if (features.includes(parseInt(featureKey))) {
    return (
      <div key={featureKey}>
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
        <span className={styles.feature}>{PlanFeatures[featureKey]}</span>
        {specialFeatures.includes(parseInt(featureKey)) &&
          <a href="" className={styles.feature__link}>View Details</a>
        }
      </div>
    );
  }
  if (specialFeatures.includes(parseInt(featureKey))) return <>N/A</>;

  return <>&nbsp;</>;
}

const PlanTable = ({ monthly }) => (
  <table>
    <tbody>
      <tr className={styles.table__row}>
        <th className={styles.table__head}>Details</th>
        {PricePlans.map((plan) => (
          <td
            key={`${plan.name}-details`}
            className={classnames(
              styles.table__cell,
              styles.cellCurve,
              styles.cellCurve__top,
              plan.popular ? styles.popular : ""
            )}
          >
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

              <PlanPriceLayout monthly={monthly} plan={plan} />
            </div>
          </td>
        ))}
      </tr>
      <tr className={styles.table__row}>
        <th className={styles.table__head}>Environments</th>
        {PricePlans.map((plan) => (
          <td
            key={`${plan.name}-env`}
            className={classnames(
              styles.table__cell,
              plan.popular ? styles.popular : ""
            )}
          >
            <div className={styles.table__cellContent}>{plan.description}</div>
          </td>
        ))}
      </tr>
      {Object.keys(PlanFeatures).map((key) => (
        <tr key={key} className={styles.table__row}>
          <th className={styles.table__head}>{PlanFeatures[key]}</th>
          {PricePlans.map((plan) => (
            <td
              key={`${plan.name}-${key}`}
              className={classnames(
                styles.table__cell,
                plan.popular ? styles.popular : ""
              )}
            >
              <div className={styles.table__cellContent}>
                <PlanFeatureLayout featureKey={key} plan={plan} />
              </div>
            </td>
          ))}
        </tr>
      ))}
      <tr className={styles.table__row}>
        <td className={classnames(styles.table__head, styles.table__cellFoot)}>
          &nbsp;
        </td>
        {PricePlans.map((plan) => (
          <td
            key={`${plan.name}-foot`}
            className={classnames(
              styles.table__cell,
              styles.table__cellFoot,
              styles.cellCurve,
              styles.cellCurve__bottom,
              plan.popular ? styles.popular : ""
            )}
          >
            <div className={styles.table__cellContent} style={{ padding: 0 }}>&nbsp;</div>
          </td>
        ))}
      </tr>
    </tbody>
  </table>
);

/**
 * Pricing widget
 * @todo - replace data source (so plans aren't hardcoded)
 */
const Pricing = () => {
  if (PricePlans.length) {
    const [monthly, setMonthly] = useState(false);

    return (
      <>
        <header>
          <PaymentPeriodSwitcher monthly={monthly} setMonthly={setMonthly} />
        </header>
        <section className={styles.plans}>
          <PlanTable monthly={monthly} />
        </section>
      </>
    );
  }

  // No Plans
  return <p>There are no plans currently available.</p>;
};

export default Pricing;
