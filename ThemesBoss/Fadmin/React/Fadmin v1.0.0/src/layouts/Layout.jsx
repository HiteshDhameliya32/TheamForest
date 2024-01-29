"use client";
import  { useEffect } from "react";


// Fadmin Theme Contexts
import {
  useThemeContextController,
  setPageSidebarFixed,
  setLayout,
  setPageSidebarCollapsed,
  setThemeMode,
  setPageHeaderFixed,
} from "@/context/ThemeContext";

import Navbar from "@/components/Navbars/Navbar";
import Sidebar from "@/components/Sidebars/Sidebar";
import RightSidebar from "@/components/Sidebars/RightSidebar";
import Footer from "@/components/Footers.js/Footer";
import Header from "@/components/Header";

function Layout({
  children,
  dataCurrentPage,
  title,
  breadcrumb,
  description,
  settings,
}) {
  const [
    {
      layout,
      page_sidebar_fixed,
      page_sidebar_collapsed,
      page_header_fixed,
      right_sidebar_display,
      theme_mode,
    },
    dispatch,
  ] = useThemeContextController();

  // ********* Configure layout default settings ************
  useEffect(() => {
    // Set layout mode
    if (settings?.layout) {
      setLayout(dispatch, settings.layout);
    } else {
      setLayout(dispatch, layout);
    }

    // Set sidebar collapsed
    if (settings?.page_sidebar_collapsed) {
      setPageSidebarCollapsed(dispatch, settings.page_sidebar_collapsed);
    } else {
      setPageSidebarCollapsed(dispatch, page_sidebar_collapsed);
    }

    // Set theme mode
    if (settings?.theme_mode) {
      setThemeMode(dispatch, settings.theme_mode);
    } else {
      setThemeMode(dispatch, theme_mode);
    }

    // Set header fixed
    if (settings?.page_header_fixed) {
      setPageHeaderFixed(dispatch, settings.page_header_fixed);
    } else {
      setPageHeaderFixed(dispatch, page_header_fixed);
    }

    // Set sidebar fixed
    if (settings?.page_sidebar_fixed) {
      setPageSidebarFixed(dispatch, settings.page_sidebar_fixed);
    } else {
      setPageSidebarFixed(dispatch, page_sidebar_fixed);
    }
  }, [
    layout,
    page_sidebar_fixed,
    page_sidebar_collapsed,
    page_header_fixed,
    right_sidebar_display,
    theme_mode,
    dispatch,
    settings?.layout,
    settings?.page_header_fixed,
    settings?.page_sidebar_collapsed,
    settings?.page_sidebar_fixed,
    settings?.theme_mode,
  ]);

  return (
    <>
       
        {
            layout ==="boxed" ? (
            <div className="container">
                <Sidebar dataCurrentPage={dataCurrentPage} />
                <div className="page-container">
                    <Navbar />
                    <div className="page-content">
                        <div className="page-inner">
                            <Header
                                title={title}
                                breadcrumb={breadcrumb}
                                description={description}
                            />
                            {children}
                        </div>
                        {right_sidebar_display && <RightSidebar />}
                        <Footer />
                    </div>
                </div>
            </div>
            ) :(
                <>
                    <Sidebar dataCurrentPage={dataCurrentPage} />
                    <div className="page-container">
                        <Navbar />
                        <div className="page-content">
                            <div className="page-inner">
                                <Header
                                    title={title}
                                    breadcrumb={breadcrumb}
                                    description={description}
                                />
                                {children}
                            </div>
                            {right_sidebar_display && <RightSidebar />}
                            <Footer />
                        </div>
                    </div>
                </>
            )
        }
    </>
  );
}

export default Layout;
