import React from "react";
import Footer from "./helperComponents/Footer";
import Navbar from "./helperComponents/Navbar";
import { Outlet } from "react-router-dom";

import AllContent from "./helperComponents/AllContent";
import Loader from "./helperComponents/Loader";

function Layout() {
  return (
    <>
      {/*  start Loader */}
      <Loader />
      {/* End loader */}
      {/* start Navbar */}
      <Navbar></Navbar>
      {/* end navbar  */}

      {/* Start outlet */}
      <Outlet />
      {/* End of the outlet */}

      {/* all other content */}
      <AllContent />
      {/* content end*/}

      {/* start Fotter */}
      <Footer></Footer>
      {/* End Footer */}
    </>
  );
}

export default Layout;
