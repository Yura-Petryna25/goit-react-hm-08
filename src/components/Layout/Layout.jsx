// import { Outlet } from "react-router-dom";
// import AppBar from "../AppBar/AppBar";

// const Layout = () => {
//   return (
//     <>
//       <AppBar />
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default Layout;
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
