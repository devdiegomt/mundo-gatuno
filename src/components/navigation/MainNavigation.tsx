import { useFilter } from "../../hooks/useFilter";
import { Input } from "../atoms/Input";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import searchIcon from "../../assets/icons/searchIcon.png";
import { useState } from "react";

export const MainNavigation = () => {
  const { searchText, setSearchText } = useFilter();
  const width = useWindowWidth();
  const [isSearching, setIsSearching] = useState(false);

  const handleIsSearching = () => {
    setIsSearching((prev) => !prev);
  };

  const searchInput = (
    <Input
      type="text"
      placeholder="Busca una arena"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      labelHidden
      label="Search"
      name="search"
      className={classes["nav__input"]}
    />
  );

  return (
    <>
      <nav className={classes.nav}>
        {width < 768 && (
          <>
            {isSearching ? (
              <>
                {searchInput}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleIsSearching}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                </svg>
              </>
            ) : (
              <>
                <img
                  src={logoImg}
                  alt="Logo de Mundo Gatuno"
                  className={classes["nav__logo"]}
                />
                <img
                  onClick={handleIsSearching}
                  src={searchIcon}
                  alt="Search Icon"
                  className={classes["nav__search-icon"]}
                />
              </>
            )}
          </>
        )}
        {width >= 768 && (
          <>
            <img
              src={logoImg}
              alt="Logo de Mundo Gatuno"
              className={classes["nav__logo"]}
            />
            <Input
              type="text"
              placeholder="Busca una arena"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              labelHidden
              label="Search"
              name="search"
              className={classes["nav__input"]}
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
          </>
        )}
      </nav>
    </>
  );
};
