import { divideByMinute, lessThanMinute, lessThanTenSec, moduloByMinute, padNumber, subtractSecond, truncate } from "./lib"

describe('subtractSecond', () => {
  it('returns its input milliseconds minus 1000 ms', () => {
    expect(subtractSecond(5000)).toBe(4000);
    expect(subtractSecond(500)).toBe(-500);
    expect(subtractSecond(0)).toBe(-1000);
  });
});

describe('divideByMinute', () => {
  it('returns its input milliseconds divided by 60 * 1000 ms', () => {
    expect(divideByMinute(42 * 60 * 1000)).toBe(42);
  });
});

describe('moduloByMinute', () => {
  it('returns remainder of its input milliseconds divided by 60 * 1000 ms', () => {
    expect(moduloByMinute(5 * 60 * 1000 + 12)).toBe(12);
  });
});

describe('truncate', () => {
  it('returns the integer part of a number by removing any fractional digits', () => {
    expect(truncate(5.1)).toBe(5);
    expect(truncate(5.5)).toBe(5);
    expect(truncate(5.9999)).toBe(5);
  });
});

describe('padNumber', () => {
  it('returns string with a number padded to 2 digits', () => {
    expect(padNumber(1)).toBe('01');
    expect(padNumber(9)).toBe('09');
    expect(padNumber(99)).toBe('99');
    expect(padNumber(0)).toBe('00');
    
    expect(padNumber(-5)).toBe('-5');
    expect(padNumber(12.34)).toBe('12.34');
  });
});

describe('lessThanMinute', () => {
  it('returns boolean: whether its input ms are less than 60 * 1000 ms', () => {
    expect(lessThanMinute(10 * 60 * 1000)).toBe(false);
    expect(lessThanMinute(59 * 1000)).toBe(true);
  });
});

describe('lessThanTenSec', () => {
  it('returns boolean: whether its input ms are less than 10 * 1000 ms', () => {
    expect(lessThanTenSec(11 * 1000)).toBe(false);
    expect(lessThanTenSec(9 * 1000)).toBe(true);
  });
});
