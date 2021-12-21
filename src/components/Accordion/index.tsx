import React, { useState, FC } from 'react';
import classNames from 'classnames';
import ArrowBottomIcon from '../../../static/icons/arrow-bottom.svg';
import styles from './styles.module.scss';
import { slugify } from './helper';

type AccordionType = {
  title: string;
  open: boolean;
  variant?: 'small' | 'default';
};

const Accordion: FC<AccordionType> = ({ title, open = false, children, variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(open);
  const slug = slugify(title);

  return (
    <div
      className={classNames({
        [styles.accordion]: variant === 'default',
        [styles.accordionSmall]: variant === 'small'
      })}
    >
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          role="tab"
          aria-expanded={isOpen}
          aria-controls={`answer-${slug}`}
          id={`question-${slug}`}
          className={classNames(styles.question, isOpen ? styles.question__open : null)}
        >
          {variant === 'small' && <ArrowBottomIcon className={styles.arrowSmall} />}
          {title}
        </button>
      </div>
      <div
        role="tabpanel"
        aria-hidden={!isOpen}
        aria-labelledby={`question-${slug}`}
        id={`answer-${slug}`}
        className={classNames(styles.answer, !isOpen ? styles.answer__closed : null)}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
