import { NavLink } from "react-router-dom";
import classes from "./NavItems.module.css";

const LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/about-us", label: "Sobre Nosotros" },
  { to: "/contact-us", label: "Contacto" },
];

export const NavItems = () => (
  <ul className={classes.links}>
    {LINKS.map(({ to, label }) => (
      <li key={to}>
        <NavLink
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            isActive ? `${classes.link} ${classes.active}` : classes.link
          }
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);
