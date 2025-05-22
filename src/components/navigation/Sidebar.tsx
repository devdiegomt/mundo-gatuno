import classes from "./Sidebar.module.css";
import logoImg from "../../assets/logoNav.png";
import { NAV_ITEMS } from "../../config/navigation";
import { NavItem } from "../common/nav-items/NavItem";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar: React.FC<{
  onOpenMenu: () => void;
}> = ({ onOpenMenu }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleNavItemClick = (to: string) => {
    navigate(to);
    onOpenMenu();
  };

  return (
    <aside className={classes.sidebar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={onOpenMenu}
        className={classes["sidebar__x"]}
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
      </svg>
      <div className={classes["sidebar__logo"]}>
        <img
          src={logoImg}
          alt="Logo image"
          width="100px"
          className={classes["sidebar__logo--img"]}
        />
      </div>
      <ul className={classes["sidebar__links"]}>
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <NavItem
              to={item.to}
              end={item.end}
              onClick={() => handleNavItemClick(item.to)}
            >
              {item.text}
            </NavItem>
          </li>
        ))}
      </ul>
    </aside>
  );
};
