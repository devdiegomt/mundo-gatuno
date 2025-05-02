/* Atoms */

import { Input } from "../atoms/Input";

/* Hooks */

import { useFilter } from "../../hooks/useFilter";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useState } from "react";

/* Images & Icons */
import logoImg from "../../assets/logo.png";
import searchIcon from "../../assets/icons/searchIcon.png";
import menuIcon from "../../assets/icons/menu.png";

/* Styles */

import classes from "./MainNavigation.module.css";

/* React Router */

import { Link, useLocation } from "react-router-dom";

export const MainNavigation: React.FC<{ onOpenMenu: () => void }> = ({
  onOpenMenu,
}) => {
  const { searchText, setSearchText } = useFilter();
  const [isSearching, setIsSearching] = useState(false);
  const width = useWindowWidth();
  const location = useLocation();

  console.log(location);

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

  const logoImage = (
    <img
      src={logoImg}
      alt="Logo de Mundo Gatuno"
      className={classes["nav__logo"]}
    />
  );

  const xIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleIsSearching}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
    </svg>
  );

  const searchIconElement = (
    <img
      onClick={handleIsSearching}
      src={searchIcon}
      alt="Search Icon"
      className={classes["nav__search-icon"]}
    />
  );

  const linksElements = (
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

  const menuIconElement = (
    <img
      src={menuIcon}
      alt="Menu Icon"
      className={classes["nav__menu-icon"]}
      onClick={onOpenMenu}
    />
  );

  return (
    <>
      <nav className={classes.nav}>
        {location.pathname !== "/" ? (
          <>
            {logoImage}
            {linksElements}
          </>
        ) : (
          <>
            {width < 768 && (
              <>
                {isSearching ? (
                  <>
                    {searchInput}
                    {xIcon}
                  </>
                ) : (
                  <>
                    {logoImage}
                    <div>
                      {searchIconElement}
                      {menuIconElement}
                    </div>
                  </>
                )}
              </>
            )}
            {width >= 768 && (
              <>
                {logoImage}
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
                {linksElements}
              </>
            )}
          </>
        )}
      </nav>
    </>
  );
};
