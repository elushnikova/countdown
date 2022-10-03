import { useEffect } from 'react';
import useSidebarContext from './useSidebarContext';
import useTimerContext from '../timer/useTimerContext';
import { second } from '../timer/utils/presets';
import styles from './Toggle.module.scss';

/**
 * Adapted from code by Aaron Iker (https://codepen.io/aaroniker/details/LXVqxR)
 * Designed by Leonid Arestov (https://dribbble.com/shots/4758991-Menu-close-icon-transition)
 */
function Toggle() {
  const { isInverted } = useTimerContext();
  const {
    open,
    setOpen,
    timeoutId,
    setTimeoutId,
    closeSidebar,
  } = useSidebarContext();

  function handleChange() {
    const id = setTimeout(closeSidebar, 5 * second);
    setTimeoutId(id);
    setOpen(!open);
  }

  useEffect(() => () => clearTimeout(timeoutId), [timeoutId]);

  return (
    <>
      <label className={`${styles.toggle} ${isInverted && styles.inverted}`}>
        <input type="checkbox" checked={open} onChange={handleChange} />
        <div>
          <div>
            <span></span>
            <span></span>
          </div>
          <svg>
            <use href="#path" />
          </svg>
          <svg>
            <use href="#path" />
          </svg>
        </div>
      </label>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44 44"
          id="path"
        >
          <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path>
        </symbol>
      </svg>
    </>
  );
}

export default Toggle;
