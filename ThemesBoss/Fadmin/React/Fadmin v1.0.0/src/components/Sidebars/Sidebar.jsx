import React, { useCallback } from "react";

import { Close } from "@mui/icons-material";
import { Icon } from "@iconify/react";

// Fadmin Theme Contexts
import {
  useThemeContextController,
  setPageSidebarVisible,
} from "@/context/ThemeContext";
import Accordion from "../AccordionMenu";

function Sidebar({dataCurrentPage}) {
  const [controller, dispatch] = useThemeContextController();

  const onCloseSidebar = () => {
    setPageSidebarVisible(dispatch, false);
  };
  
  return (
    <div className="page-sidebar">
      <a className="logo-box">
        <span>
          <i className="mdi mdi-chemical-weapon" id="fixed-sidebar-toggle-button">
            <Icon icon="mdi:chemical-weapon" color="white" />
          </i>
          <span>Fadmin</span>
        </span>
        <i
          onClick={onCloseSidebar}
          className="mdi mdi-close"
          id="sidebar-toggle-button-close"
        >
          <Close />
        </i>
      </a>
      <Accordion dataCurrentPage={dataCurrentPage} />
    </div>
  );
}

export default Sidebar;
