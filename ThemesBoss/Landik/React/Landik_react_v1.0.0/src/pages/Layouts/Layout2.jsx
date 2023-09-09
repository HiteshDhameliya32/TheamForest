import React from "react";

import { Outlet } from "react-router";
import Header from "../../components/Header";
import Footer2 from "../../components/Footer2";

function Layout2() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer2 />
    </>
  );
}

export default Layout2;
