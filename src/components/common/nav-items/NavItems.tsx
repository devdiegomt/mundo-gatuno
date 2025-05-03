import { Link } from "react-router-dom";
import classes from "./NavItems.module.css";

export const NavItems = () => (
  <ul className={classes.links}>
    <li>
      <Link className={classes.link} to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className={classes.link} to="/about-us">
        Sobre Nosotros
      </Link>
    </li>
    <li>
      <Link className={classes.link} to="/contact-us">
        Contacto
      </Link>
    </li>
  </ul>
);
