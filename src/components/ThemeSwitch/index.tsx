import { FiMoon } from "react-icons/fi";
import { Icon } from "../Icon";
import { Switch } from "../Switch";
import { useTheme } from "../../contexts/themeContext";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <>
      <Switch
        label={<Icon IconComponent={FiMoon} size={15} />}
        onChange={handleChange}
        checked={theme === "dark"}
      />
    </>
  );
}
