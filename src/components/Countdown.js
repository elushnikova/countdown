import { useEffect, useState } from "react";

function Countdown() {
  const sec = 1000;
  const [ms, setMs] = useState(60 * sec);
  const subtractSecond = (prev) => prev - sec;

  useEffect(() => {
    if (!ms) return;
    const id = setTimeout(() => setMs(subtractSecond), sec);
    return () => clearTimeout(id);
  }, [ms]);

  return (
    <section>
      <h2>Countdown</h2>
      <p>{ms ? `${ms / 1000} s` : "Time is up"}</p>

      <button onClick={() => setMs(5 * sec)}>5 seconds</button>
      <button onClick={() => setMs(60 * sec)}>1 minute</button>
      <button onClick={() => setMs(5 * 60 * sec)}>5 minutes</button>
    </section>
  );
}

export default Countdown;
