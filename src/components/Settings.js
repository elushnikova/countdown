import { useContext } from "react";
import { animated } from "react-spring";
import TimerContext from "../contexts/TimerContext";
import unit from "../utils/unit";
import Overlay from "./Overlay";
import PresetList from "./PresetList";
import Sidebar from "./Sidebar";

const AnimatedSidebar = animated(Sidebar);

function Settings({ style }) {
  const { setOpen, closeTimeout, setCloseTimeout, isInverted } =
    useContext(TimerContext);

  function handleSettingsClick(e) {
    e.stopPropagation();
    clearTimeout(closeTimeout);

    const timeoutId = setTimeout(() => {
      setOpen(false);
    }, 5 * unit.second);

    setCloseTimeout(timeoutId);
  }

  return (
    <Overlay onClick={() => setOpen(false)}>
      <AnimatedSidebar
        isInverted={isInverted}
        style={style}
        onClick={handleSettingsClick}
      >
        <PresetList />
      </AnimatedSidebar>
    </Overlay>
  );
}

export default Settings;
