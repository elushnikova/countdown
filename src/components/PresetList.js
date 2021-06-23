import BaseList from "./BaseList";
import Button from "./Button";
import presets from "../utils/presets";

function PresetList() {
  return (
    <BaseList>
      {presets
        .filter((p) => p.isActive)
        .map((p) => (
          <li>
            <Button key={p.slug} time={p.time}>
              {p.title}
            </Button>
          </li>
        ))}
    </BaseList>
  );
}

export default PresetList;
