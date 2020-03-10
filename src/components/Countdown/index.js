import React, { useState, useLayoutEffect } from 'react';
import styles from './styles.module.css';

const Countdown = ({ seconds }) => {

  const millisecond = 1000,
    startTime = seconds ? seconds * millisecond : millisecond * 5,
    [time, setTime] = useState(startTime),
    [isActive, setIsActive] = useState(true);

  useLayoutEffect(() => {
    let tick = setTimeout(() => {
      if (time <= 0) {
        console.log('ere')
        setIsActive(false);
      } else {
        setTime(time - millisecond);
      }
    }, 1000);

    return () => {
      clearTimeout(tick);
    }
  }, [time]);


  // Change the time from Milliseconds to a useful string
  const formatTime = timeInMs => {
    let seconds = Math.floor((timeInMs / 1000) % 60),
      minutes = Math.floor((timeInMs / (1000 * 60)) % 60),
      hours = Math.floor((timeInMs / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

  return (
    <div className={styles.countdown}>
      {isActive ?
        <p>{`${formatTime(time)} until sale begins`}</p>
      :
        <p>Sale Started</p>
      }
    </div>
  );
}

export default Countdown;
