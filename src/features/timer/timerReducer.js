import { type } from './timerAction';
import { lessThanMinimum, moreThanMaximum, subtractSecond } from './utils/lib';
import { preset, second, minute } from './utils/presets';

const timerReducer = (timer, action) => {
  switch (action.type) {
    case type.SET: {
      const duration = Number(action.payload);
      const isInvalid = Number.isNaN(duration);

      if (isInvalid) {
        return {
          ...timer,
          error: `Неподходящее значение.\nЗапускаю таймер на ${preset.default / minute} минут.`,
          duration: preset.default,
        };
      }

      if (lessThanMinimum(duration)) {
        return {
          ...timer,
          error: `Неподходящее значение.\nЗапускаю таймер на ${preset.default / minute} минут.`,
          duration: preset.default,
        };
      }

      if (moreThanMaximum(duration)) {
        return {
          ...timer,
          error: `Многовато будет :)\nЗапускаю таймер на ${preset.maximum / minute} минут.`,
          duration: preset.maximum,
        };
      }

      return {
        ...timer,
        duration: action.payload,
      };
    }

    case type.SUBTRACT: {
      if (timer.duration < second) {
        return {
          ...timer,
          duration: 0,
        };
      }

      return {
        ...timer,
        duration: subtractSecond(timer.duration),
      };
    }

    case type.CLEAR_ERROR: {
      return {
        ...timer,
        error: null,
      };
    }

    default: {
      return timer;
    }
  }
};

export default timerReducer;
