import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components/navigation/MainNavigation";
import { Footer } from "../components/footer/Footer";
import classes from "./Root.module.css";
import { Sidebar } from "../components/navigation/Sidebar";
import { useState } from "react";

export const Root = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <>
      <MainNavigation onOpenMenu={handleOpenMenu} />
      {openMenu && <Sidebar onOpenMenu={handleOpenMenu} />}
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
