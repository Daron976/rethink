import { IconContext } from "react-icons";

export function icon(size, color, icon, className = "nav-icon") {
  return (
    <IconContext.Provider value={{ size, className, color }}>
      {icon}
    </IconContext.Provider>
  );
}
