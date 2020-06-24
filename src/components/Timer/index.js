import React, { useState, useMemo } from "react";
import PT from "prop-types";

import "./style.css";

const SEC_IN_MIN = 60;

const addLeadingZeros = (number) => {
  if (number < 10) {
    return `0${number}`;
  }

  return number;
};

const formatSeconds = (seconds) => {
  let minutes = Math.floor(seconds / SEC_IN_MIN);

  seconds = seconds - minutes * SEC_IN_MIN;

  seconds = addLeadingZeros(seconds);
  minutes = addLeadingZeros(minutes);

  return `${minutes}:${seconds}`;
};

const Timer = ({ startTimeSec, handleStop }) => {
  const [seconds, setSeconds] = useState(startTimeSec);

  const timerId = useMemo(
    () =>
      setInterval(
        () =>
          setSeconds((prev) => {
            if (prev <= 0) {
              clearInterval(timerId);
              handleStop()

              return 0;
            }

            return prev - 1;
          }),
        1000
      ),
    [handleStop]
  );

  return <div className="timer">{formatSeconds(seconds)}</div>;
};

Timer.propTypes = {
  startTimeSec: PT.number,
  handleStop: PT.func
};

export { Timer };
