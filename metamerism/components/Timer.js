


export const timer = (seconds) => {
  const now = Date.now();
  const end = now + seconds * 1000;
  const intervalTimer;
  intervalTimer = setInterval(() => {
    const secondsLeft = Math.round((end - Date.now()) / 1000);

    if(secondsLeft === 0) {
      this.endTime = 0;
    }

    if(secondsLeft < 0) {
      clearInterval(intervalTimer);
      return;
    }
    this.displayTimeLeft(secondsLeft)
  }, 1000);

  return end
};