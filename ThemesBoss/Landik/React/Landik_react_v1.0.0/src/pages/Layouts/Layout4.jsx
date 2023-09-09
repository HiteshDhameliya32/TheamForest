import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router";
import Footer4 from "../../components/Footer4";

function Layout4() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer4 />
    </>
  );
}

export default Layout4;
