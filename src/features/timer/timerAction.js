const type = {
  SET: 'SET',
  SUBTRACT: 'SUBTRACT_SECOND',
};

const timerAction = {
  setTime: (ms) => ({ type: type.SET, payload: ms }),
  subtract: () => ({ type: type.SUBTRACT }),
};

export default timerAction;
export { type };
