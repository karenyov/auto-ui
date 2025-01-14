import { IconBaseProps, IconType } from "react-icons";

interface Props extends IconBaseProps {
  IconComponent: IconType;
}

export function Icon({ IconComponent, color = "white", size = 18 }: Props) {
  return (
    <div style={{ display: "inline-block" }}>
      <IconComponent color={color} size={size} />
    </div>
  );
}
