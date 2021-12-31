import React, { useState, useLayoutEffect } from 'react';
import { formatTime } from './helper';
import styles from './styles.module.scss';

const Countdown = ({ seconds }) => {
  const millisecond = 1000,
    startTime = seconds ? seconds * millisecond : millisecond * 5,
    [time, setTime] = useState(startTime),
    [isActive, setIsActive] = useState(true);

  useLayoutEffect(() => {
    const tick = setTimeout(() => {
      if (time <= 0) {
        console.log('ere');
        setIsActive(false);
      } else {
        setTime(time - millisecond);
      }
    }, 1000);

    return () => {
      clearTimeout(tick);
    };
  }, [time]);

  return (
    <div className={styles.countdown}>
      {isActive ? <p>{`${formatTime(time)} until sale begins`}</p> : <p>Sale Started</p>}
    </div>
  );
};

export default Countdown;
