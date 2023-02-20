import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Check from '@site/static/img/icons/check.svg';
import clsx from 'clsx';

type Props = {
  variant: 'breaking' | 'hotfix' | 'feature' | 'improvement' | 'bugfix' | 'deprecated';
  children: React.ReactNode;
  description?: JSX.Element;
};

function ChangelogItem({ children, variant, description }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef(null);
  const [isOverflowed, setIsOverflowed] = useState(false);

  useEffect(() => {
    function handleOverflow() {
      if (divRef.current) {
        const { scrollHeight, clientHeight } = divRef.current;
        setIsOverflowed(scrollHeight > clientHeight);
      }
    }
    function handleResize() {
      handleOverflow();
    }

    handleOverflow();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <div className={styles.content}>
          <Check className={styles.icon} />
          {children}
        </div>
        <div
          className={clsx(styles.badge, {
            [styles[variant]]: variant
          })}
        >
          {variant}
        </div>
      </div>
      {description && (
        <div className={styles.description}>
          <div
            ref={divRef}
            className={clsx({
              [styles.hiddenDescription]: !isOpen
            })}
          >
            {description}
          </div>
          {isOverflowed && (
            <div className={styles.toggleButton} onClick={() => setIsOpen(prev => !prev)}>
              {isOpen ? 'Hide details' : 'Show details'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export { ChangelogItem };
