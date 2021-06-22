import { animated } from "react-spring";
import classes from "./TimeOver.module.scss";

function TimeOver({ style }) {
  return (
    <animated.div style={style} className={classes.block}>
      Перерыв<br/>закончен
    </animated.div>
  );
}

export default TimeOver;
