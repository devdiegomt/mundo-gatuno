import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components/navigation/MainNavigation";
import { Footer } from "../components/footer/Footer";
import { Sidebar } from "../components/navigation/Sidebar";
import { useState } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

export const Root = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const width = useWindowWidth();

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <>
      <MainNavigation onOpenMenu={handleOpenMenu} />
      {openMenu && width < 768 && <Sidebar onOpenMenu={handleOpenMenu} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
