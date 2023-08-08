import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { NavLink } from "react-router-dom";

const Layout = () => {
  const context = useContext(AppContext);
  const {
    sidebar,
    activeMenu,
    activeSubMenu,
    fullScreen,
    mode,
    notificationMode,
    updateMenu,
    updateSubMenu,
    toggleSidebar,
    toggleFullScreen,
    toggleMode,
    toggleNotificationMode,
  } = context;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };
  const handleHide = (event) => {
    const parentLi = event.currentTarget.closest("li");
    parentLi.style.transition = "opacity 300ms ease-in";
    parentLi.style.opacity = "0";

    setTimeout(() => {
      parentLi.style.display = "none";
    }, 300);
  };

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
          <nav className="sidebar fixed z-[9999] flex-none w-[240px] border-r dark:bg-darkborder border-black/10 transition-all duration-300 overflow-hidden">
            <div className="bg-white dark:bg-darklight h-full">
              <div className="p-4">
                <a href="index.html" className="main-logo w-full">
                  <img
                    src="assets/images/logo-dark.svg"
                    className="mx-auto dark-logo h-7 logo dark:hidden"
                    alt="logo"
                  />
                  <img
                    src="assets/images/logo-light.svg"
                    className="mx-auto light-logo h-7 logo hidden dark:block"
                    alt="logo"
                  />
                  <img
                    src="assets/images/logo-icon.svg"
                    className="logo-icon h-7 mx-auto hidden"
                    alt=""
                  />
                </a>
              </div>
              <div className="h-[calc(100vh-60px)]  overflow-y-auto overflow-x-hidden px-5 pb-4 space-y-16 detached-menu">
                <ul
                  className="relative flex flex-col gap-1 "
                  x-data="{ activeMenu: 'apps' }"
                >
                  <h2 className="my-2 text-black/50 text-sm dark:text-white/30">
                    <span>Menu</span>
                  </h2>
                  <li className="menu nav-item">
                    <a
                      href="javaScript:;"
                      class={`nav-link group active text-black items-center justify-between ${
                        activeMenu === "dashboard" ? "active" : ""
                      }`}
                      onClick={() => updateMenu("dashboard")}
                    >
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path
                            d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM15.8329 7.33748C16.0697 7.17128 16.3916 7.19926 16.5962 7.40381C16.8002 7.60784 16.8267 7.92955 16.6587 8.16418C14.479 11.2095 13.2796 12.8417 13.0607 13.0607C12.4749 13.6464 11.5251 13.6464 10.9393 13.0607C10.3536 12.4749 10.3536 11.5251 10.9393 10.9393C11.3126 10.5661 12.9438 9.36549 15.8329 7.33748ZM17.5 11C18.0523 11 18.5 11.4477 18.5 12C18.5 12.5523 18.0523 13 17.5 13C16.9477 13 16.5 12.5523 16.5 12C16.5 11.4477 16.9477 11 17.5 11ZM6.5 11C7.05228 11 7.5 11.4477 7.5 12C7.5 12.5523 7.05228 13 6.5 13C5.94772 13 5.5 12.5523 5.5 12C5.5 11.4477 5.94772 11 6.5 11ZM8.81802 7.40381C9.20854 7.79433 9.20854 8.4275 8.81802 8.81802C8.4275 9.20854 7.79433 9.20854 7.40381 8.81802C7.01328 8.4275 7.01328 7.79433 7.40381 7.40381C7.79433 7.01328 8.4275 7.01328 8.81802 7.40381ZM12 5.5C12.5523 5.5 13 5.94772 13 6.5C13 7.05228 12.5523 7.5 12 7.5C11.4477 7.5 11 7.05228 11 6.5C11 5.94772 11.4477 5.5 12 5.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span className="pl-1.5">Dashboard</span>
                      </div>
                      <div
                        class={`w-4 h-4 flex items-center justify-center dropdown-icon ${
                          activeMenu === "dashboard" ? "!rotate-180" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <ul
                      x-cloak
                      x-show={`${activeMenu === "dashboard"}`}
                      x-collapse
                      className="sub-menu flex flex-col gap-1 text-black dark:text-white/60"
                    >
                      <li>
                        <NavLink to="/">Default</NavLink>
                      </li>
                      <li>
                        <a href="javascript:;">
                          Projects{" "}
                          <span className="bg-danger/10 ms-3 text-danger text-xs rounded px-2 inline-block py-1 leading-none">
                            Soon
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          eCommerce{" "}
                          <span className="bg-danger/10 ms-3 text-danger text-xs rounded px-2 inline-block py-1 leading-none">
                            Soon
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu nav-item">
                    <a
                      href="javaScript:;"
                      class={`nav-link group text-black items-center justify-between ${
                        activeMenu === "apps" ? "active" : ""
                      }`}
                      onClick={() => updateMenu("apps")}
                    >
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path
                            d="M7.5 11.5C5.01472 11.5 3 9.48528 3 7C3 4.51472 5.01472 2.5 7.5 2.5C9.98528 2.5 12 4.51472 12 7C12 9.48528 9.98528 11.5 7.5 11.5ZM7.5 21.5C5.01472 21.5 3 19.4853 3 17C3 14.5147 5.01472 12.5 7.5 12.5C9.98528 12.5 12 14.5147 12 17C12 19.4853 9.98528 21.5 7.5 21.5ZM17.5 11.5C15.0147 11.5 13 9.48528 13 7C13 4.51472 15.0147 2.5 17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5ZM17.5 21.5C15.0147 21.5 13 19.4853 13 17C13 14.5147 15.0147 12.5 17.5 12.5C19.9853 12.5 22 14.5147 22 17C22 19.4853 19.9853 21.5 17.5 21.5ZM7.5 9.5C8.88071 9.5 10 8.38071 10 7C10 5.61929 8.88071 4.5 7.5 4.5C6.11929 4.5 5 5.61929 5 7C5 8.38071 6.11929 9.5 7.5 9.5ZM7.5 19.5C8.88071 19.5 10 18.3807 10 17C10 15.6193 8.88071 14.5 7.5 14.5C6.11929 14.5 5 15.6193 5 17C5 18.3807 6.11929 19.5 7.5 19.5ZM17.5 9.5C18.8807 9.5 20 8.38071 20 7C20 5.61929 18.8807 4.5 17.5 4.5C16.1193 4.5 15 5.61929 15 7C15 8.38071 16.1193 9.5 17.5 9.5ZM17.5 19.5C18.8807 19.5 20 18.3807 20 17C20 15.6193 18.8807 14.5 17.5 14.5C16.1193 14.5 15 15.6193 15 17C15 18.3807 16.1193 19.5 17.5 19.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span className="pl-1.5">Apps</span>
                      </div>
                      <div
                        class={`w-4 h-4 flex items-center justify-center dropdown-icon ${
                          activeMenu === "apps" ? "!rotate-180" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </a>
                    <ul
                      x-cloak
                      x-show={`${activeMenu === "apps"}`}
                      x-collapse
                      className="sub-menu flex flex-col gap-1 text-black dark:text-white/60"
                    >
                      <li>
                        <NavLink
                          to="/apps/email"
                          className={`${
                            activeSubMenu === "email" ? "active" : ""
                          }`}
                          onClick={() => updateSubMenu("email")}
                        >
                          {activeMenu} {activeSubMenu} email
                        </NavLink>
                      </li>
                      <li>
                        <a
                          href="chat.html"
                          className={`${
                            activeSubMenu === "chat" ? "active" : ""
                          }`}
                          onClick={() => updateSubMenu("chat")}
                        >
                          chat
                        </a>
                      </li>
                      <li>
                        <a
                          href="contact.html"
                          className={`${
                            activeSubMenu === "contact" ? "active" : ""
                          }`}
                          onClick={() => updateSubMenu("contact")}
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          href="invoice.html"
                          className={`${
                            activeSubMenu === "invoice" ? "active" : ""
                          }`}
                          onClick={() => updateSubMenu("invoice")}
                        >
                          invoice
                        </a>
                      </li>
                      <li>
                        <a href="javaScript:;">
                          Calendar{" "}
                          <span className="bg-danger/10 ms-3 text-danger text-xs rounded px-2 inline-block py-1 leading-none">
                            Soon
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="bg-purple p-4 pt-0 text-center rounded-md relative help-box">
                  <div className="-top-6 relative">
                    <span className="text-black mx-auto border border-black/10 shadow-[0_0.75rem_1.5rem_rgba(18,38,63,.03)]  bg-white flex items-center justify-center h-12 w-12 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <h4 className="text-white text-xl">Help Center</h4>
                  <p className="text-white/70 mt-4">
                    Looks like there might be a new theme soon.
                  </p>
                  <div className="mt-5">
                    <a href="javascript:;" className="btn-white">
                      Go to help
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/* End sidebar */}

          {/* Start Content Area */}
          <div className="main-content flex-1">
            {/* Start Topbar */}
            <div class="bg-white dark:bg-darklight dark:border-darkborder flex gap-4 lg:z-10 items-center justify-between px-4 h-[60px] border-b border-black/10 detached-topbar relative">
              <div class="flex items-center gap-2 sm:gap-4 flex-1">
                <button
                  type="button"
                  class="text-black dark:text-white/80"
                  onClick={toggleSidebar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                  >
                    <path
                      d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <form class="flex-1 hidden min-[420px]:block">
                  <div class="relative max-w-[180px] md:max-w-[350px]">
                    <input
                      type="text"
                      id="search"
                      class="border-black/10 dark:text-white/80 dark:placeholder:text-white/30 dark:border-darkborder dark:bg-dark dark:focus:border-white/30 focus:border-black/30 placeholder:text-black/50 border text-black text-sm rounded block w-full ps-3 pe-7 h-10 bg-[#f9fbfd] focus:ring-0 focus:outline-0"
                      placeholder="Search..."
                      required=""
                    />
                    <button
                      type="button"
                      class="absolute inset-y-0 right-0 flex items-center pe-2 text-black dark:text-white/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="w-4 h-4"
                      >
                        <path
                          d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div class="flex items-center gap-4">
                <div class="h-5" x-data="{ fullScreen: false }">
                  <button
                    className={`text-black dark:text-white/80 ${
                      fullScreen ? "hidden" : "block"
                    }`}
                    onClick={() => {
                      toggleFullScreen();
                      toggleFullscreen();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="h-5 w-5"
                    >
                      <path
                        d="M16 3H22V9H20V5H16V3ZM2 3H8V5H4V9H2V3ZM20 19V15H22V21H16V19H20ZM4 19H8V21H2V15H4V19Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className={`text-black dark:text-white/80 ${
                      fullScreen ? "block" : "hidden"
                    }`}
                    onClick={() => {
                      toggleFullScreen();
                      toggleFullscreen();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="h-5 w-5"
                    >
                      <path
                        d="M18 7H22V9H16V3H18V7ZM8 9H2V7H6V3H8V9ZM18 17V21H16V15H22V17H18ZM8 15V21H6V17H2V15H8Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <a
                    href="javascript:;"
                    class="text-black"
                    mode="light"
                    onClick={() => toggleMode("dark")}
                    style={{ display: mode === "dark" ? "none" : "block" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="h-5 w-5"
                    >
                      <path
                        d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="javascript:;"
                    class="text-black dark:text-white/80"
                    mode="dark"
                    onClick={() => toggleMode("light")}
                    style={{ display: mode === "light" ? "none" : "block" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="w-5 h-5"
                    >
                      <path
                        d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                {/* @click.outside="open = false" */}
                <div class="notification h-5" x-data="dropdown">
                  <button
                    type="button"
                    class="relative text-black dark:text-white/80"
                    onClick={toggleNotificationMode}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="w-5 h-5 mx-auto"
                    >
                      <path
                        d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span class="absolute -top-px right-px h-2 w-2 bg-purple border border-white rounded-full"></span>
                  </button>
                  <div
                    className={`noti-area ${notificationMode ? "open" : ""}`}
                    style={{ display: notificationMode ? "block" : "none" }}
                  >
                    <h4 class="text-black dark:text-white/80 px-2 py-2.5 border-b border-black/10 flex items-center gap-2">
                      Notification{" "}
                      <span class="inline-block bg-purple/10 text-purple text-[10px] p-1 leading-none rounded">
                        32
                      </span>
                    </h4>
                    <ul class="max-h-56 overflow-y-auto ">
                      <li>
                        <div className="flex gap-2 cursor-pointer group">
                          <div className="h-9 w-9 flex-none rounded-full overflow-hidden">
                            <img
                              src="assets/images/avatar-1.png"
                              className="object-cover"
                              alt="avatar"
                            />
                          </div>
                          <div className="flex-1 relative">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[185px] text-black dark:text-white pr-4">
                              Edited the details of Project
                            </p>
                            <p className="text-xs text-black/40 dark:text-darkmuted">
                              5m ago
                            </p>
                            <button
                              type="button"
                              onClick={handleHide}
                              className="absolute top-1 dark:text-white/80 right-0 hidden group-hover:block hover:opacity-80 rotate-0 hover:rotate-180 transition-all duration-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-3.5 h-3.5"
                              >
                                <path
                                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2 cursor-pointer group">
                          <div className="h-9 w-9 flex-none rounded-full overflow-hidden">
                            <img
                              src="assets/images/avatar-4.png"
                              className="object-cover"
                              alt="avatar"
                            />
                          </div>
                          <div className="flex-1 relative">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[185px] text-black dark:text-white pr-4">
                            Released a new version
                            </p>
                            <p className="text-xs text-black/40 dark:text-darkmuted">
                              5m ago
                            </p>
                            <button
                              type="button"
                              onClick={handleHide}
                              className="absolute top-1 dark:text-white/80 right-0 hidden group-hover:block hover:opacity-80 rotate-0 hover:rotate-180 transition-all duration-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-3.5 h-3.5"
                              >
                                <path
                                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2 cursor-pointer group">
                          <div className="h-9 w-9 flex-none rounded-full overflow-hidden">
                            <img
                              src="assets/images/avatar-19.png"
                              className="object-cover"
                              alt="avatar"
                            />
                          </div>
                          <div className="flex-1 relative">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[185px] text-black dark:text-white pr-4">
                            Modified A data in Page
                            </p>
                            <p className="text-xs text-black/40 dark:text-darkmuted">
                              5m ago
                            </p>
                            <button
                              type="button"
                              onClick={handleHide}
                              className="absolute top-1 dark:text-white/80 right-0 hidden group-hover:block hover:opacity-80 rotate-0 hover:rotate-180 transition-all duration-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-3.5 h-3.5"
                              >
                                <path
                                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2 cursor-pointer group">
                          <div className="h-9 w-9 flex-none rounded-full overflow-hidden">
                            <img
                              src="assets/images/avatar-24.png"
                              className="object-cover"
                              alt="avatar"
                            />
                          </div>
                          <div className="flex-1 relative">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[185px] text-black dark:text-white pr-4">
                            Modified A data in Page
                            </p>
                            <p className="text-xs text-black/40 dark:text-darkmuted">
                              5m ago
                            </p>
                            <button
                              type="button"
                              onClick={handleHide}
                              className="absolute top-1 dark:text-white/80 right-0 hidden group-hover:block hover:opacity-80 rotate-0 hover:rotate-180 transition-all duration-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-3.5 h-3.5"
                              >
                                <path
                                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2 cursor-pointer group">
                          <div className="h-9 w-9 flex-none rounded-full overflow-hidden">
                            <img
                              src="assets/images/avatar-1.png"
                              className="object-cover"
                              alt="avatar"
                            />
                          </div>
                          <div className="flex-1 relative">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[185px] text-black dark:text-white pr-4">
                            Edited the details of Project
                            </p>
                            <p className="text-xs text-black/40 dark:text-darkmuted">
                              5m ago
                            </p>
                            <button
                              type="button"
                              onClick={handleHide}
                              className="absolute top-1 dark:text-white/80 right-0 hidden group-hover:block hover:opacity-80 rotate-0 hover:rotate-180 transition-all duration-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-3.5 h-3.5"
                              >
                                <path
                                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2 cursor-pointer group">
                          <div className="h-9 w-9 flex-none rounded-full overflow-hidden">
                            <img
                              src="assets/images/avatar-4.png"
                              className="object-cover"
                              alt="avatar"
                            />
                          </div>
                          <div className="flex-1 relative">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[185px] text-black dark:text-white pr-4">
                            Released a new version
                            </p>
                            <p className="text-xs text-black/40 dark:text-darkmuted">
                              5m ago
                            </p>
                            <button
                              type="button"
                              onClick={handleHide}
                              className="absolute top-1 dark:text-white/80 right-0 hidden group-hover:block hover:opacity-80 rotate-0 hover:rotate-180 transition-all duration-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-3.5 h-3.5"
                              >
                                <path
                                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-2 cursor-pointer group">
                          <div className="h-9 w-9 flex-none rounded-full overflow-hidden">
                            <img
                              src="assets/images/avatar-13.png"
                              className="object-cover"
                              alt="avatar"
                            />
                          </div>
                          <div className="flex-1 relative">
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[185px] text-black dark:text-white pr-4">
                            Submitted a bug
                            </p>
                            <p className="text-xs text-black/40 dark:text-darkmuted">
                              5m ago
                            </p>
                            <button
                              type="button"
                              onClick={handleHide}
                              className="absolute top-1 dark:text-white/80 right-0 hidden group-hover:block hover:opacity-80 rotate-0 hover:rotate-180 transition-all duration-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-3.5 h-3.5"
                              >
                                <path
                                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div class="px-2 py-2.5 border-t border-black/10 dark:border-darkborder">
                      <a
                        href="javascript:;"
                        class="text-black dark:text-white dark:hover:text-purple hover:text-purple duration-300"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="w-3.5 h-3.5 inline-block relative -top-[1px]"
                        >
                          <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Topbar */}
          </div>
          {/* End Content Area */}
        </div>
      </div>
      {/* End Layout */}
    </>
  );
};

export default Layout;
