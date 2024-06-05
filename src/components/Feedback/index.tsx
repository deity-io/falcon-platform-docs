import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type Props = {
  resource: string;
};

export default function Feedback({ resource }: Props) {
  const [isReacted, setReaction] = useState(false);

  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  const handleReaction = () => {
    setReaction(true);
  };

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      window.HappyReact?.init({
        onReaction: handleReaction
      });
    }
  }, []);

  return (
    <div className={styles.feedback}>
      <h3 className={styles.title}>Was this article helpful?</h3>
      {isReacted ? (
        <span>Thanks for your feedback. </span>
      ) : (
        <div
          className={styles.widget}
          data-hr-token="38285585-9be2-4009-9457-5263181d22bf"
          data-hr-resource={resource}
          data-hr-styles={JSON.stringify({
            container: styles.container,
            grid: styles.grid,
            cell: styles.cell,
            reaction: styles.reaction,
            loader: styles.loader,
            footer: styles.footer
          })}
        />
      )}
    </div>
  );
}
