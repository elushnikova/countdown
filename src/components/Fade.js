import { useState } from "react";
import { useSpring, config, animated } from "react-spring";

function Fade() {
  const [fadeOut, setFadeOut] = useState(false);
  const fadeProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reverse: fadeOut,
    config: config.molasses,
    onRest: () => setFadeOut(!fadeOut),
  });

  return (
    <section>
      <h2>Fade</h2>
      <animated.p style={fadeProps}>
        <span>Fade </span>
        <span>{fadeOut ? "out" : "in"}</span>
      </animated.p>
    </section>
  );
}

export default Fade;
