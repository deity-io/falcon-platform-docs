import React, { useEffect, useState } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
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
          data-hr-token="2cb66ba3-54e8-41e3-a66d-45320ca50f5f"
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
