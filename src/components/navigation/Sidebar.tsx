import classes from "./Sidebar.module.css";
import logoImg from "../../assets/logo.png";
import arrowImg from "../../assets/icons/arrow.png";
import leftArrowImg from "../../assets/icons/leftArrow.png";
import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <aside className={classes.sidebar}>
      {isOpen ? (
        <img
          src={leftArrowImg}
          onClick={handleClick}
          className={classes["sidebar__arrow"]}
          alt="Arrow icon"
        />
      ) : (
        <img
          src={arrowImg}
          onClick={handleClick}
          className={classes["sidebar__arrow"]}
          alt="Arrow icon"
        />
      )}
      <ul className={classes["sidebar__list"]}>
        {isOpen ? (
          <>
            <li className={classes["sidebar__element--logo"]}>
              <img
                src={logoImg}
                alt="Logo de Mundo Gatuno."
                className={classes["sidebar__logo"]}
              />
            </li>
            <li className={classes["sidebar__element"]}>
              <div className={classes["sidebar__hide"]}>
                <p className={classes["sidebar_text"]}>Mundo Gatuno</p>
              </div>
            </li>
          </>
        ) : (
          <>
            <li className={classes["sidebar__element--logo"]}>
              <img
                src={logoImg}
                alt="Logo de Mundo Gatuno."
                className={classes["sidebar__logo--small"]}
              />
            </li>
            <li className={classes["sidebar__element"]}>
              <div className={classes["sidebar__hide"]}>
                <p className={classes["sidebar_text"]}>MG</p>
              </div>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};
