import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';


const ExampleProjects = [
  {
    name: 'Demo V1',
    shortName: 'demo-v1',
    url: '',
    img: '',
    description: 'Some text here about the demo'
  },
  {
    name: 'Demo V2',
    shortName: 'demo-v2',
    url: '',
    img: '',
    description: 'Some text here about the demo'
  }
]

const Example = ({ example }) => {
  return (
    <section>
      <h3>{example.name}</h3>
      <p>{example.shortName}</p>
    </section>
  )
}

const Examples = () => {

  if (ExampleProjects.length) {
    const examples = ExampleProjects.map(example => {
      return (
        <Example key={example.shortName} example={example} />
      )
    });

    return (
      <div>{examples}</div>
    )
  }

  // No Examples
  return (
    <p>There are no examples currently available.</p>
  )
};

export default Examples;
