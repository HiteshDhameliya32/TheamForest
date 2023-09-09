import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router";
import Footer3 from "../../components/Footer3";

function Layout3() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer3 />
    </>
  );
}

export default Layout3;
