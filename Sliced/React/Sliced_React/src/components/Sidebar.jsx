import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const context = useContext(AppContext);
  const {
    activeMenu,
    activeSubMenu,
    updateMenu,
    updateSubMenu,
  } = context;
  
  return (
    <>
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
                      className={`${activeSubMenu === "email" ? "active" : ""}`}
                      onClick={() => updateSubMenu("email")}
                    >
                      email
                    </NavLink>
                  </li>
                  <li>
                    <a
                      href="chat.html"
                      className={`${activeSubMenu === "chat" ? "active" : ""}`}
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
    </>
  );
};

export default Sidebar;
