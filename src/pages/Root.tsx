import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components/navigation/MainNavigation";
import { Footer } from "../components/footer/Footer";
import classes from "./Root.module.css";

export const Root = () => {
  return (
    <>
      <main className={classes.main}>
        <MainNavigation />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
