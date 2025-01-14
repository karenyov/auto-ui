import { FiMoon } from "react-icons/fi";
import { Icon } from "../Icon";
import { Switch } from "../Switch";
import useTheme from "../../hooks/useTheme";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Switch
        label={<Icon IconComponent={FiMoon} size={15} />}
        onClick={toggleTheme}
        checked={theme === "dark"}
      />
    </>
  );
}
