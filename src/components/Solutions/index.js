import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';


const PlatformSolutions = [
  {
    name: "I'm going to use the BigCommerce Extension",
    description: "From within BC's shop panel",
    url: "/docs/platform/integration/bigcommerce/getting-started",
    img: "/img/docs/platform/bc-solution.jpg",
  },
  {
    name: "I'm going to set up DEITY Platform on my own",
    description: "For Magento 2 and custom integrations",
    url: "/docs/platform/getting-started/prerequisites",
    img: "/img/docs/platform/deity-solution.jpg",
  },
];

const Solution = ({ solution }) => {
  const { name, description, url, img } = solution;
  return (
    <article className={styles.solution}>
      <div className={styles.solution__container}>
        <Link to={url}>
          <img src={img} alt={name} className={styles.solution__image} />
        </Link>
        <div className={styles.solution__content}>
          <h3 className={styles.solution__title}>
            <Link to={url}>{name}</Link>
          </h3>
          {description && <p>{description}</p>}
        </div>
      </div>
    </article>
  );
}

const Solutions = () => {
  const solutions = PlatformSolutions.map((solution) => {
    return <Solution key={solution.name} solution={solution} />;
  });

  return (
    <section className={styles.solutions}>
      {solutions}
    </section>
  );
};

export default Solutions;
