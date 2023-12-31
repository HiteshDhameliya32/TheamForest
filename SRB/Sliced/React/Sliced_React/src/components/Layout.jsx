import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  const context = useContext(AppContext);
  const { sidebar, toggleSidebar } = context;

  return (
    <>
      {/* <body x-data="main" className={`font-cerebri antialiased relative text-black dark:text-white text-sm font-normal overflow-x-hidden vertical ${sidebar ? "" : "toggle-sidebar" } ${fullscreen ? "full" : "" }`}> */}

      {/* Start Layout */}
      <div className="bg-[#f9fbfd] dark:bg-dark dark:text-darkmuted text-black">
        {/* Start detached bg */}
        <div className="bg-[url('../images/bg-main.png')] bg-black min-h-[220px] sm:min-h-[250px] bg-bottom fixed hidden w-full -z-50 detached-img"></div>
        {/* End detached bg */}

        {/* Start Menu Sidebar Olverlay */}
        <div
          x-cloak
          className={`fixed inset-0 bg-black/60 dark:bg-dark/90 z-[999] lg:hidden ${
            sidebar ? "" : "hidden"
          }`}
          onClick={toggleSidebar}
        ></div>
        {/* End Menu Sidebar Olverlay */}

        {/* Start Main Content */}
        <div className="main-container flex mx-auto">
          {/* Start Sidebar */}
          <Sidebar />
          {/* End sidebar */}

          {/* Start Content Area */}
          <div className="main-content flex-1">
            {/* Start Topbar */}
            <Topbar />
            {/* End Topbar */}

            {/* Start Content  */}
            <div class="h-[calc(100vh-60px)]  relative overflow-y-auto overflow-x-hidden p-4 space-y-4 detached-content">
              {/* Start Breadcrumb  */}
              <div>
                <nav class="w-full">
                  <ul class="space-y-2 detached-breadcrumb">
                    <li class="text-xs dark:text-white/80">Pages</li>
                    <li class="text-black font-semibold text-2xl dark:text-white">
                      Starter Page
                    </li>
                  </ul>
                </nav>
              </div>
              {/* End Breadcrumb  */}

              {/* Start All Card  */}
              <Outlet />
              {/* End All Card  */}

              {/* Start Footer  */}
              <Footer />
              {/* End Footer  */}
            </div>
            {/* End Content  */}
          </div>
          {/* End Content Area */}
        </div>
      </div>
      {/* End Layout */}
    </>
  );
};

export default Layout;
