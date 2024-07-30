(function () {
  console.log("session started");
  const start = document.querySelector(".start");
  const stop = document.querySelector(".stop");
  const reset = document.querySelector(".reset");

  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");
  const milli = document.querySelector("#milliseconds");

  let minuteValue = 0;
  let secondValue = 0;
  let milliValue = 0;
  let intervalMinitues;
  let intervalSeconds;
  let intervalMilli;

  start.onclick = () => {
    console.log("start button clicked");

    intervalMinitues = setInterval(() => {
      minuteValue += 1;
      minuteValue = minuteValue > 59 ? 0 : minuteValue;
      minutes.innerHTML = minuteValue;
    }, 60000);
    intervalSeconds = setInterval(() => {
      secondValue += 1;
      secondValue = secondValue > 59 ? 0 : secondValue;
      seconds.innerHTML = secondValue;
    }, 1000);
    intervalMilli = setInterval(() => {
      milliValue += 1;
      milliValue = milliValue > 99 ? 0 : milliValue;
      milli.innerHTML = milliValue;
    }, 1);
  };
  stop.onclick = () => {
    console.log("stop button clicked");
    console.log("reset button clicked");
    clearInterval(intervalMinitues);
    clearInterval(intervalSeconds);
    clearInterval(intervalMilli);
  };
  reset.onclick = () => {
    console.log("reset button clicked");
    clearInterval(intervalMinitues);
    clearInterval(intervalSeconds);
    clearInterval(intervalMilli);
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    milli.innerHTML = "00";
    minuteValue = 0;
    secondValue = 0;
    milliValue = 0;
  };
})();
