const second = 1000;
const minute = 60 * second;

const preset = {
  fiveSec: 5 * second,
  tenSec: 10 * second,
  oneMin: minute,
  fiveMin: 5 * minute,
  tenMin: 10 * minute,
  fifteenMin: 15 * minute,

  get default() { return this.tenMin; },
  get minimum() { return 1 * second; },
  get maximum() { return 45 * minute; },
};

const presets = [
  { title: '5 сек', duration: preset.fiveSec },
  { title: '10 сек', duration: preset.tenSec },
  { title: '1 мин', duration: preset.oneMin },
  { title: '5 мин', duration: preset.fiveMin },
  { title: '10 мин', duration: preset.tenMin },
  { title: '15 мин', duration: preset.fifteenMin },
];

export default presets;
export { second, minute, preset };
