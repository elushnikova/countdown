import { useEffect, useState } from "react";

function Countdown() {
  const sec = 1000;
  const [count, setCount] = useState(60 * sec);
  const minusSecond = (prev) => prev - sec;

  useEffect(() => {
    if (!count) return;
    const id = setTimeout(() => setCount(minusSecond), sec);
    return () => clearTimeout(id);
  }, [count]);

  return (
    <section>
      <h2>Countdown</h2>
      <p>{count ? `${count / 1000} s` : "Time is up"}</p>

      <button onClick={() => setCount(5 * sec)}>5 seconds</button>
      <button onClick={() => setCount(60 * sec)}>1 minute</button>
      <button onClick={() => setCount(5 * 60 * sec)}>5 minutes</button>
    </section>
  );
}

export default Countdown;
