import { IconContext } from "react-icons";

export function Icon(size, color, icon, className = "nav-icon") {
  return (
    <IconContext.Provider value={{ size, className, color }}>
      {icon}
    </IconContext.Provider>
  );
}
