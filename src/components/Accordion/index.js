import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

/**
 * Function to convert text to a slug format (stolen from https://gist.github.com/mathewbyrne/1280286)
 * @param {string} string
 * @returns {string}
 */
const slugify = string =>
  string
    .toString()
    .toLowerCase()
    .substring(0, 30) // We dont want it to be too long
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '');

function Accordion({ title, open = false, children }) {
  const [isOpen, setIsOpen] = useState(open);
  const slug = slugify(title);

  return (
    <div className={styles.accordion}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        role="tab"
        aria-expanded={isOpen}
        aria-controls={`answer-${slug}`}
        id={`question-${slug}`}
        className={classnames(styles.question, isOpen ? styles.question__open : null)}
      >
        {title}
      </button>
      <div
        role="tabpanel"
        aria-hidden={!isOpen}
        aria-labelledby={`question-${slug}`}
        id={`answer-${slug}`}
        className={classnames(styles.answer, !isOpen ? styles.answer__closed : null)}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
