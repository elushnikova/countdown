import { preset, second, minute } from './presets';

const subtractSecond = (ms) => ms - second;

const divideByMinute = (ms) => ms / minute;

const moduloByMinute = (ms) => ms % minute;

const truncate = (n) => Math.trunc(n);

const padNumber = (n) => n.toString().padStart(2, '0');

const lessThanMinute = (ms) => ms < minute;
const lessThanTenSec = (ms) => ms < 10 * second;

const lessThanMinimum = (duration) => duration < preset.minimum;
const moreThanMaximum = (duration) => duration > preset.maximum;

const schedule = (callback, duration) => setTimeout(callback, duration);
const cancel = (timeoutId) => clearTimeout(timeoutId);

const scheduleErrorReset = (error, callback) => Boolean(error) && schedule(callback, 5 * second);
const cancelErrorReset = (timeoutId, errorIsGone) => errorIsGone && cancel(timeoutId);

export {
  subtractSecond,
  divideByMinute,
  moduloByMinute,
  truncate,
  padNumber,
  lessThanMinute,
  lessThanTenSec,
  lessThanMinimum,
  moreThanMaximum,
  schedule,
  cancel,
  scheduleErrorReset,
  cancelErrorReset,
};
