import { type } from './timerAction';
import { lessThanMinimum, moreThanMaximum, subtractSecond } from './utils/lib';
import { preset, second } from './utils/presets';

const timerReducer = (currentDuration, action) => {
  switch (action.type) {
    case type.SET: {
      const duration = Number(action.payload);
      const isInvalid = Number.isNaN(duration);

      if (isInvalid) {
        return preset.default;
      }

      if (lessThanMinimum(duration)) {
        return preset.default;
      }

      if (moreThanMaximum(duration)) {
        return preset.maximum;
      }

      return action.payload;
    }

    case type.SUBTRACT: {
      if (currentDuration < second) {
        return 0;
      }

      return subtractSecond(currentDuration);
    }

    default: {
      return currentDuration;
    }
  }
};

export default timerReducer;
