import React, { useCallback, useState } from "react";

//fontawesom icons
import { FaAngleRight, FaBars, FaRegBell } from "react-icons/fa";

// matirial designs icon
import {
  MdMenu,
  MdFullscreen,
  MdOutlineEmail,
  MdSearch,
} from "react-icons/md";

import { BsMoonStars, BsSun } from "react-icons/bs";

// Fadmin Theme Contexts
import {
  useThemeContextController,
  setPageSidebarVisible,
  setRightSidebarDisplay,
  setPageSidebarCollapsed,
  setThemeMode,
} from "@/context/ThemeContext";
import NotificationDropdown from "../Dropdowns/NotificationDropdown";
import AccountMenuDropdown from "../Dropdowns/AccountMenuDropdown";
import Searchbar from "../Searchbar";

function Navbar() {
  const [{
    page_sidebar_collapsed,
    theme_mode
  }, dispatch] = useThemeContextController();

  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false)

  // set sidebar visibility
  const onOpenSidebar = useCallback(() => {
    setPageSidebarVisible(dispatch, true);
  });

  const onOpenRightSidebar = useCallback(() => {
    setRightSidebarDisplay(dispatch, true);
  });

  // Fulscreen Function
  function toggleFullScreen() {
    if (
      !document.fullscreenElement && // alternative standard method
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  function toggleCollapsMenu(){
    setPageSidebarCollapsed(dispatch,!page_sidebar_collapsed);
  }

  function toggleSearchbar(){
    document.body.classList?.toggle('search-open')
    setIsSearchbarOpen((prev=>!prev));
  }

  function toggleTheme(){
    setThemeMode(dispatch,theme_mode ==="dark" ? "light":"dark");
  }

  return (
    <div className="page-header">
      {isSearchbarOpen && <Searchbar toggleSearchbar={toggleSearchbar}/>}
      <nav className="navbar navbar-expand-lg navbar-default border bg-body-tertiary py-0">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-header d-lg-none">
              <div className="logo-sm">
                <a onClick={onOpenSidebar} id="sidebar-toggle-button">
                  <FaBars />
                </a>
              </div>
            </div>
            <div className="d-flex">
              <ul className="nav navbar-nav d-none d-lg-flex mb-2 mb-lg-0">
                <li>
                  <a onClick={toggleCollapsMenu} id="collapsed-sidebar-toggle-button">
                    <i>
                      <MdMenu />
                    </i>
                  </a>
                </li>
                <li>
                  <a onClick={toggleFullScreen} id="toggle-fullscreen">
                    <i>
                      <MdFullscreen />
                    </i>
                  </a>
                </li>
                <li>
                  <a onClick={toggleSearchbar} id="search-button">
                    <i>
                      <MdSearch />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="dropdown topbar-head-dropdown header-item">
                <a
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle border-0"
                  onClick={toggleTheme}
                  id="theme-toggle-switch"
                >
                  <i className="fs-20">
                    {
                        theme_mode ==="light" ? 
                        <BsMoonStars size={18} />
                         : <BsSun size={18} />
                    }
                  </i>
                </a>
              </div>
              <div className="ms-1 header-item">
                <a
                  onClick={onOpenRightSidebar}
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle border-0 right-sidebar-toggle"
                  data-sidebar-id="main-right-sidebar"
                >
                  <i className="fs-20">
                    <MdOutlineEmail size={18} />
                  </i>
                </a>
              </div>
              <NotificationDropdown />
              <AccountMenuDropdown />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
