import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
