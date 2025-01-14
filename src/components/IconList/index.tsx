import { IconBaseProps, IconType } from "react-icons";
import useTheme from "../../hooks/useTheme";

interface Props extends IconBaseProps {
  IconComponent: IconType;
}

export function IconList({ IconComponent, size = 12 }: Props) {
  return (
    <div style={{ display: "inline-block" }}>
      <IconComponent size={size} className="icons-list rounded-circle" />
    </div>
  );
}
