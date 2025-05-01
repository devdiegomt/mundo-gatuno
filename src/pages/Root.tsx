import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components/navigation/MainNavigation";
import { Footer } from "../components/footer/Footer";
import classes from "./Root.module.css";
/* import { Sidebar } from "../components/navigation/Sidebar"; */

export const Root = () => {
  return (
    <>
      <MainNavigation />
      {/* <Sidebar /> */}
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
