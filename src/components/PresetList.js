import BaseList from "./BaseList";
import Button from "./Button";
import presets from "../utils/presets";

function TimeButtonList({ isInverted }) {
  return (
    <BaseList>
      {presets
        .filter((p) => p.isActive)
        .map((p) => (
          <li>
            <Button key={p.slug} isInverted={isInverted} time={p.time}>
              {p.title}
            </Button>
          </li>
        ))}
    </BaseList>
  );
}

export default TimeButtonList;
