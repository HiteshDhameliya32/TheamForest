// import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
const Icon = dynamic(()=>import("@iconify/react").then((mod)=>mod["Icon"]))
// dynamic(() => import("react-icons/ci").then((mod) => mod[icon])),

// Fadmin Theme Contexts
import {
  useThemeContextController,
  setPageSidebarVisible,
} from "@/context/ThemeContext";
import Accordion from "../AccordionMenu";
import DynamicIcon from "../DynamicIcon";


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
          <DynamicIcon icon={"MdClose"} iconFamily={"md"} />
        </i>
      </a>
      <Accordion dataCurrentPage={dataCurrentPage} />
    </div>
  );
}

export default Sidebar;
