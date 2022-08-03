const type = {
  SET: 'SET',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SUBTRACT: 'SUBTRACT_SECOND',
};

const timerAction = {
  setDuration: (ms) => ({ type: type.SET, payload: ms }),
  subtract: () => ({ type: type.SUBTRACT }),
  clearError: () => ({ type: type.CLEAR_ERROR }),
};

export default timerAction;
export { type };
