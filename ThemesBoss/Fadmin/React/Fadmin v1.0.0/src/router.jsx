
// Home Page
import Home from './pages/dashboard'

//  Ui Pages
import Alerts from "./pages/ui/alerts";
import Buttons from "./pages/ui/buttons";
import Cards from "./pages/ui/cards";
import Grid from "./pages/ui/grid";
import Progressbars from "./pages/ui/progressbars";
import Typograghy from "./pages/ui/typography";
import TabsAccordions from "./pages/ui/tabs-accordions";

// // Icons Pages
import MaterialDesign from "./pages/icons/material";
import Dripicons from "./pages/icons/dripicons";
import Feather from "./pages/icons/feather";
import FontAwesome from "./pages/icons/fontawesome";
import Ion from "./pages/icons/ion";
import Themify from "./pages/icons/themify";
import Typicons from "./pages/icons/typicons";

// //  Layout Pages
import Blank from "./pages/layout/blank";
import Boxed from "./pages/layout/boxed";
import CollapsedSidebar from "./pages/layout/collapsed-sidebar";
import FixedHeader from "./pages/layout/fixed-header";
import FixedSidebar from "./pages/layout/fixed-sidebar";
import FixedSidebarHeader from "./pages/layout/fixed-sidebar-header";

// //  Forms Pages
import FormElements from "./pages/form/elements";
import MaskForm from "./pages/form/mask";
import Xeditable from "./pages/form/xeditable";

// // Tables Pages
import Basic from "./pages/tables/basic";
import Footable from "./pages/tables/footable";
import Responsive from "./pages/tables/responsive";

// // Chart Pages
import Apexcharts from "./pages/chart/apexcharts";
import Echarts from "./pages/chart/echarts";

// // Maps Pages
import DefaultMaps from "./pages/maps/index";

// // Extra Pages
import Page400 from "./pages/pages/400";
import Page403 from "./pages/pages/403";
import Page404 from "./pages/pages/404";
import Page500 from "./pages/pages/500";
import Page503 from "./pages/pages/503";
import LockScreen from "./pages/pages/lock-screen";
import Login from "./pages/pages/login";
import Recoverpw from "./pages/pages/recoverpw";
import Register from "./pages/pages/register";


export default  {
    "/" : ()=><Home />,
    //Ui  Pages
    "/ui/buttons" : ()=><Buttons />,
    "/ui/cards" : ()=><Cards />,
    "/ui/tabs-accordions" : ()=><TabsAccordions />,
    "/ui/alerts" : ()=><Alerts />,
    "/ui/progressbars" : ()=><Progressbars />,
    "/ui/typography" : ()=><Typograghy />,
    "/ui/grid" : ()=><Grid />,

    // Icons pages
    "/icons/material" : ()=><MaterialDesign />,
    "/icons/ion" : ()=><Ion />,
    "/icons/fontawesome" : ()=><FontAwesome />,
    "/icons/feather" : ()=><Feather />,
    "/icons/themify" : ()=><Themify />,
    "/icons/dripicons" : ()=><Dripicons />,
    "/icons/typicons" : ()=><Typicons />,

    //   Layouts  Pages
    "/layout/blank" : ()=><Blank />,
    "/layout/boxed" : ()=><Boxed />,
    "/layout/collapsed-sidebar" : ()=><CollapsedSidebar />,
    "/layout/fixed-header" : ()=><FixedHeader />,
    "/layout/fixed-sidebar" : ()=><FixedSidebar />,
    "/layout/fixed-sidebar-header" : ()=><FixedSidebarHeader />,
    
    //      Forms Pages
    "/form/mask" : ()=><MaskForm />,
    "/form/elements" : ()=><FormElements />,
    "/form/xeditable" : ()=><Xeditable />,

    //  Tables Pages
    "/tables/footable" : ()=><Footable />,
    "/tables/responsive" : ()=><Responsive />,
    "/tables/basic" : ()=><Basic />,

    // Chart Pages
    "/chart/apexcharts":()=><Apexcharts />,
    "/chart/echarts":()=><Echarts />,

    // Maps Pages
    "/maps":()=><DefaultMaps />,

    // Extra Pages
    "/pages/login":()=><Login />,
    "/pages/register":()=><Register />,
    "/pages/recoverpw":()=><Recoverpw />,
    "/pages/lock-screen":()=><LockScreen />,
    "/pages/403":()=><Page403 />,
    "/pages/400":()=><Page400 />,
    "/pages/404":()=><Page404 />,
    "/pages/500":()=><Page500 />,
    "/pages/503":()=><Page503 />,
}



