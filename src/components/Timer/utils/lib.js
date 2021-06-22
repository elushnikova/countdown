import { second, minute } from "./preset";

function subtractSecond(prev) {
  return prev - second;
}

function divideByMinute(ms) {
  return ms / minute;
}

function moduloByMinute(ms) {
  return ms % minute;
}

function truncate(n) {
  return Math.trunc(n);
}

function padNumber(n) {
  return n.toString().padStart(2, "0");
}

function lessThanMinute(ms) {
  return ms < minute;
}

function lessThanTenSec(ms) {
  return ms < 10 * second;
}

export {
  subtractSecond,
  divideByMinute,
  moduloByMinute,
  truncate,
  padNumber,
  lessThanMinute,
  lessThanTenSec,
};
