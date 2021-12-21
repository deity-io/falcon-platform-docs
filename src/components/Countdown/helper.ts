// Change the time from Milliseconds to a useful string
export const formatTime = timeInMs => {
  const seconds = Math.floor((timeInMs / 1000) % 60),
    minutes = Math.floor((timeInMs / (1000 * 60)) % 60),
    hours = Math.floor((timeInMs / (1000 * 60 * 60)) % 24);

  const h = String(hours < 10 ? `0${hours}` : hours);
  const m = String(minutes < 10 ? `0${minutes}` : minutes);
  const s = String(seconds < 10 ? `0${seconds}` : seconds);

  return `${h}:${m}:${s}`;
};
