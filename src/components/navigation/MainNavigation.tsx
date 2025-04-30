import { useFilter } from "../../context/useFilter";
import { Input } from "../atoms/Input";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

export const MainNavigation = () => {
  const { searchText, setSearchText } = useFilter();

  return (
    <nav className={classes.nav}>
      <Input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        labelHidden
        label="Search"
        name="search"
      />

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
    </nav>
  );
};
