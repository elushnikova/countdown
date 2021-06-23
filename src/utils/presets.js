import unit from "./unit";

class Preset {
  constructor({ slug, title, time, isActive = true }) {
    this.slug = slug;
    this.title = title;
    this.time = time;
    this.isActive = isActive;
  }
}

const presets = [
  new Preset({ slug: "five-sec", title: "5 сек", time: 5 * unit.second }),
  new Preset({ slug: "ten-sec", title: "10 сек", time: 10 * unit.second }),
  new Preset({ slug: "one-min", title: "1 мин", time: unit.minute }),
  new Preset({ slug: "five-min", title: "5 мин", time: 5 * unit.minute }),
  new Preset({ slug: "ten-min", title: "10 мин", time: 10 * unit.minute }),
  new Preset({ slug: "fifteen-min", title: "15 мин", time: 15 * unit.minute }),
];

export default presets;
