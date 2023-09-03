import React from "react";
import Loader from "./helperComponents/Loader";
import Navbar from "./helperComponents/Navbar";
import AosAllcontent from "./helperComponents/AosAllcontent";
import Footer from "./helperComponents/Footer";
import { Outlet } from "react-router-dom";

const Layout1 = () => {
  return (
    <>
      {/*  start Loader */}
      <Loader />
      {/* End loader */}
      {/* start Navbar */}
      <Navbar />
      {/* end navbar  */}

      {/* Start outlet */}
      <Outlet />
      {/* End of the outlet */}

      {/* all Aos other content */}
      <AosAllcontent />
      {/* Aos content end*/}

      {/* start Fotter */}
      <Footer />
      {/* End Footer */}
    </>
  );
};

export default Layout1;
