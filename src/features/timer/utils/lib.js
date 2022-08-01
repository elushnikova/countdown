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
};
