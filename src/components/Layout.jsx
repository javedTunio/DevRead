import Navbar from "./Navbar"; // Adjust the path as needed
// import Footer from "./Footer"; // Adjust the path as needed
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Always show Navbar */}
      <main>
        <Outlet /> {/* This is where child routes will render */}
      </main>
      {/* <Footer /> Always show Footer */}
    </div>
  );
};

export default Layout;
