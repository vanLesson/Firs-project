import React, { useState, useMemo, useCallback } from "react";

import beach from "./beach-1846009_1920.jpg";
import campfire from "./campfire-4786067_1920.jpg";
import forest from "./plant-2717148_1920.jpg";
import delphin from "./дельфин.mp3";

import { DirectionButton } from "./components/DirectionButton";
import { Timer } from "./components/Timer";
import { Holder } from "./components/Holder";

import "./App.css";

function App() {
  const background = useMemo(() => [forest, campfire, beach], []); // массив импортированых картинок

  const [bgIndex, setBgIndex] = useState(0);

  const [timerStopped, setTimerStopped] = useState(false);

  const handleRightClick = useCallback(
    () =>
      setBgIndex((prev) => {
        if (prev >= background.length - 1) {
          return 0;
        }

        return prev + 1;
      }),
    [background.length]
  );

  const handleLeftClick = useCallback(
    () =>
      setBgIndex((prev) => {
        if (prev <= 0) {
          return background.length - 1;
        }

        return prev - 1;
      }),
    [background.length]
  );

  const handleTimerStop = useCallback(() => {
    setTimerStopped(true);
  }, []);

  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${background[bgIndex]})` }}
    >
      <DirectionButton direction="left" handleClick={handleLeftClick} />
      <Holder>
        <Timer startTimeSec={25000} handleStop={handleTimerStop} />
      </Holder>
      <DirectionButton direction="right" handleClick={handleRightClick} />
      {timerStopped && (
        <audio autoPlay>
          <source src={delphin}></source>
        </audio>
      )}
    </div>
  );
}

export default App;
