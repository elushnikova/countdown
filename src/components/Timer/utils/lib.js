import unit from "../../../utils/unit";

function subtractSecond(prev) {
  return prev - unit.second;
}

function divideByMinute(ms) {
  return ms / unit.minute;
}

function moduloByMinute(ms) {
  return ms % unit.minute;
}

function truncate(n) {
  return Math.trunc(n);
}

function padNumber(n) {
  return n.toString().padStart(2, "0");
}

function lessThanMinute(ms) {
  return ms < unit.minute;
}

function lessThanTenSec(ms) {
  return ms < 10 * unit.second;
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
