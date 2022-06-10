import { animated, config, useSpring } from 'react-spring';

function Rotate() {
  const rotateProps = useSpring({
    from: { rotateZ: 0, backgroundColor: 'turquoise' },
    to: { rotateZ: 180, backgroundColor: 'aquamarine' },
    loop: { reverse: true },
    delay: 300,
    config: config.gentle,
  });

  return (
    <section>
      <h2>Rotate</h2>
      <animated.div
        style={{
          width: 50,
          height: 50,
          borderRadius: 10,
          ...rotateProps,
        }}
      />
    </section>
  );
}

export default Rotate;
