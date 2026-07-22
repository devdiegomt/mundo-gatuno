import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useFilter } from "../../hooks/useFilter";
import { NavItems } from "../common/nav-items/NavItems";

import logoImg from "../../assets/logo.png";
import searchIcon from "../../assets/icons/searchIcon.png";
import menuIcon from "../../assets/icons/menu.png";

import classes from "./MainNavigation.module.css";

export const MainNavigation = () => {
  const { searchText, setSearchText } = useFilter();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // Cierra el menú móvil cada vez que cambia la ruta. Un solo estado,
  // sin depender del ancho de ventana: evita el "menú fantasma" al rotar
  // el dispositivo o pasar a escritorio.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link to="/" className={classes.logoLink} aria-label="Ir al inicio">
          <img src={logoImg} alt="Mundo Gatuno" className={classes.logo} />
        </Link>

        {isHome && (
          <div className={classes.search}>
            <img src={searchIcon} alt="" className={classes.searchIcon} />
            <input
              type="text"
              placeholder="Busca una arena"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className={classes.searchInput}
              aria-label="Buscar productos"
            />
          </div>
        )}

        {/* Enlaces en escritorio */}
        <div className={classes.desktopLinks}>
          <NavItems />
        </div>

        {/* Botón de menú en móvil */}
        <button
          type="button"
          className={classes.menuButton}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <img src={menuIcon} alt="" className={classes.menuIcon} />
        </button>
      </nav>

      {/* Panel desplegable en móvil */}
      {menuOpen && (
        <div className={classes.mobilePanel}>
          <NavItems />
        </div>
      )}
    </header>
  );
};
