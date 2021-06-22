import { useEffect, useState } from "react";
import preset, { second } from "./utils/preset";
import {
  subtractSecond,
  padNumber,
  truncate,
  divideByMinute,
  moduloByMinute,
} from "./utils/lib";

function Timer() {
  const [debug] = useState(false);
  const [ms, setMs] = useState(preset.tenMin);

  useEffect(() => {
    if (!ms) return;

    const id = setTimeout(() => {
      setMs(subtractSecond);
    }, second);

    return () => {
      clearTimeout(id);
    };
  }, [ms]);

  return (
    <section>
      <h2>Timer</h2>

      <p>
        {ms ? (
          <>
            <span>{padNumber(truncate(divideByMinute(ms)))}:</span>
            <span>{padNumber(moduloByMinute(ms) / second)}</span>
          </>
        ) : (
          "Time is up"
        )}
      </p>

      {debug && (
        <>
          <button onClick={() => setMs(preset.fiveSec)}>5 seconds</button>
          <button onClick={() => setMs(preset.oneMin)}>1 minute</button>
        </>
      )}

      <button onClick={() => setMs(preset.fiveMin)}>5 minutes</button>
      <button onClick={() => setMs(preset.tenMin)}>10 minutes</button>
      <button onClick={() => setMs(preset.fifteenMin)}>15 minutes</button>
    </section>
  );
}

export default Timer;
