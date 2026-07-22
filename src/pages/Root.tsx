import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components/navigation/MainNavigation";
import { Footer } from "../components/footer/Footer";
import classes from "./Root.module.css";

export const Root = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
