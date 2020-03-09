import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';


const ExampleProjects = [
  {
    name: 'Demo V1',
    shortName: 'shop-with-blog',
    url: '',
    img: '/img/docs/platform/demo-v1-700.png',
    description: 'This example will work straight out of the box. It\'s connected to our example Magento 2 store and wordpress blog.'
  },
  {
    name: 'Demo V2',
    shortName: 'new-theme',
    url: 'https://demo.deity.io',
    img: '/img/docs/platform/demo-v2-700.png',
    description: 'This is our most feature rich example. It requires a BigCommerce, Stripe and Algolia account to get started.'
  }
]

const Example = ({ example }) => {
  const { name, shortName, description, url, img } = example;
  return (
    <section className={styles.example}>
      <div className={styles.image}>
        {url ?
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={name} />
          </Link>
          :
          <img src={img} alt={name} />
        }
        
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p><code>{`--example ${shortName}`}</code></p>
        <p>{description}</p>
        {url &&
          <Link href={url} target="_blank" className="button" rel="noopener noreferrer">View Demo</Link>
        }
      </div>
    </section>
  )
}

const Examples = () => {
  const exampleCount = ExampleProjects.length;
  if (exampleCount) {
    const examples = ExampleProjects.map(example => {
      return (
        <Example key={example.shortName} example={example} />
      )
    });

    return (
      <>
        <div>
          <p>{`We have ${exampleCount} example projects you can start with.`}</p>
        </div>
        <div className={styles.examples}>{examples}</div>
      </>
    )
  }

  // No Examples
  return (
    <p>There are no examples currently available.</p>
  )
};

export default Examples;
