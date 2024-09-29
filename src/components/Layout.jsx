import Navbar from "./Navbar"; // Adjust the path as needed
// import Footer from "./Footer"; // Adjust the path as needed
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      
      <main>
        <Outlet /> {/* This is where child routes will render */}
      </main>
      {/* <Footer />*/}
    </div>
  );
};

export default Layout;
