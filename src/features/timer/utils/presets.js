const second = 1000;
const minute = 60 * second;

const preset = {
  fiveMin: 5 * minute,
  tenMin: 10 * minute,

  get default() { return this.tenMin; },
  get minimum() { return 1 * second; },
  get maximum() { return 45 * minute; },
};

/** Duration in milliseconds */
const presets = [
  { title: '5 мин', duration: preset.fiveMin },
  { title: '10 мин', duration: preset.tenMin },
];

export default presets;
export { second, minute, preset };
