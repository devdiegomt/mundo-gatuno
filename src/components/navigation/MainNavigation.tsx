/* React and React Router */

import { useState } from "react";
import { useLocation } from "react-router-dom";

/* Hooks */

import { useFilter } from "../../hooks/useFilter";
import { useWindowWidth } from "../../hooks/useWindowWidth";

/* Components */

import { Input } from "../common/input/Input";
import { NavItems } from "../common/nav-items/NavItems";

/* Assets */
import logoImg from "../../assets/logo.png";
import searchIcon from "../../assets/icons/searchIcon.png";
import menuIcon from "../../assets/icons/menu.png";

/* Styles */
import classes from "./MainNavigation.module.css";

export const MainNavigation: React.FC<{ onOpenMenu: () => void }> = ({
  onOpenMenu,
}) => {
  const { searchText, setSearchText } = useFilter();
  const [isSearching, setIsSearching] = useState(false);
  const width = useWindowWidth();
  const location = useLocation();

  const handleIsSearching = () => setIsSearching((prev) => !prev);

  const renderLogo = () => (
    <img
      src={logoImg}
      alt="Logo de Mundo Gatuno"
      className={classes["nav__logo"]}
    />
  );

  const renderSearchInput = () => (
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

  const renderXIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleIsSearching}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={classes["nav__x-icon"]}
    >
      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
    </svg>
  );

  const renderSearchIcon = () => (
    <img
      onClick={handleIsSearching}
      src={searchIcon}
      alt="Search Icon"
      className={classes["nav__search-icon"]}
    />
  );

  const renderMenuIcon = () => (
    <img
      src={menuIcon}
      alt="Menu Icon"
      className={classes["nav__menu-icon"]}
      onClick={onOpenMenu}
    />
  );

  const isHome = location.pathname === "/";
  const isMobile = width < 768;

  const renderMobileHome = () =>
    isSearching ? (
      <>
        {renderSearchInput()}
        {renderXIcon()}
      </>
    ) : (
      <>
        {renderLogo()}
        <div>
          {renderSearchIcon()}
          {renderMenuIcon()}
        </div>
      </>
    );

  const renderDesktopHome = () => (
    <>
      {renderLogo()}
      {renderSearchInput()}
      <NavItems />
    </>
  );

  const renderMobileOther = () => (
    <>
      {renderLogo()}
      {renderMenuIcon()}
    </>
  );

  const renderDesktopOther = () => (
    <>
      {renderLogo()}
      <NavItems />
    </>
  );

  return (
    <>
      <nav className={classes.nav}>
        {isHome
          ? isMobile
            ? renderMobileHome()
            : renderDesktopHome()
          : isMobile
          ? renderMobileOther()
          : renderDesktopOther()}
      </nav>
    </>
  );
};
