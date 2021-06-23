import { useContext } from "react";
import TimerContext from "../contexts/TimerContext";
import BaseButton from "./BaseButton";

function Button({ time, children, isInverted }) {
  const { setTime } = useContext(TimerContext);

  return (
    <BaseButton isInverted={isInverted} onClick={() => setTime(time)}>
      {children}
    </BaseButton>
  );
}

export default Button;
