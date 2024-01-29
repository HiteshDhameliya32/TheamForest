
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

// Icons Pages
import MaterialDesign from "./pages/icons/material";
import Dripicons from "./pages/icons/dripicons";
import Feather from "./pages/icons/feather";
import FontAwesome from "./pages/icons/fontawesome";
import Ion from "./pages/icons/ion";
import Themify from "./pages/icons/themify";
import Typicons from "./pages/icons/typicons";

//  Layout Pages
import Blank from "./pages/layout/blank";
import Boxed from "./pages/layout/boxed";
import CollapsedSidebar from "./pages/layout/collapsed-sidebar";
import FixedHeader from "./pages/layout/fixed-header";
import FixedSidebar from "./pages/layout/fixed-sidebar";
import FixedSidebarHeader from "./pages/layout/fixed-sidebar-header";

//  Forms Pages
import FormElements from "./pages/form/elements";
import MaskForm from "./pages/form/mask";
import Xeditable from "./pages/form/xeditable";

// Tables Pages
import Basic from "./pages/tables/basic";
import Footable from "./pages/tables/footable";
import Responsive from "./pages/tables/responsive";

// Chart Pages
import Apexcharts from "./pages/chart/apexcharts";
import Echarts from "./pages/chart/echarts";

// Maps Pages
import DefaultMaps from "./pages/maps/index";

// Extra Pages
import Page400 from "./pages/pages/400";
import Page403 from "./pages/pages/403";
import Page404 from "./pages/pages/404";
import Page500 from "./pages/pages/500";
import Page503 from "./pages/pages/503";
import LockScreen from "./pages/pages/lock-screen";
import Login from "./pages/pages/login";
import Recoverpw from "./pages/pages/recoverpw";
import Register from "./pages/pages/register";





export const routes = [
    {
      title: "DashBoard",
      path: "/dashboard",
      component: <Home />,
      dataPage: "dashboard",
      breadcrumb: "Fadmin",
    },
  // Ui  Pages
  {
    title: "Buttons",
    path: "/ui/buttons",
    component: <Buttons />,
    dataPage: "ui-buttons",
    breadcrumb: "Fadmin / Elements",
  },
  {
    title: "Cards",
    path: "/ui/cards",
    component: <Cards />,
    dataPage: "ui-cards",
    breadcrumb: "Fadmin / Elements",
  },
  {
    title: "Tabs & Accordions",
    path: "/ui/tabs-accordions",
    component: <TabsAccordions />,
    dataPage: "ui-tabs",
  },
  {
    title: "Alerts",
    path: "/ui/alerts",
    component: <Alerts />,
    breadcrumb: "Fadmin / Elements",
    dataPage: "ui-alerts",
  },
  {
    title: "Progress Bars",
    path: "/ui/progressbars",
    component: <Progressbars />,
    dataPage: "ui-progressbars",
    breadcrumb: "Fadmin / Elements",
  },
  {
    title: "Typography",
    path: "/ui/typography",
    component: <Typograghy />,
    dataPage: "ui-typography",
    breadcrumb: "Fadmin / Elements",
  },
  {
    title: "Grid",
    path: "/ui/grid",
    component: <Grid />,
    dataPage: "ui-grid",
    breadcrumb: "Fadmin / Elements",
  },

  // Icons pages
  {
    title: "Material Design",
    path: "/icons/material",
    component: <MaterialDesign />,
    dataPage: "icons-material",
    breadcrumb: "Fadmin / Icons",
  },
  {
    title: "Ion Icons",
    path: "/icons/ion",
    component: <Ion />,
    dataPage: "icons-ion",
    breadcrumb: "Fadmin / Icons",
  },
  {
    title: "Font Awesome",
    path: "/icons/fontawesome",
    component: <FontAwesome />,
    dataPage: "icons-fontawesome",
    breadcrumb: "Fadmin / Icons",
  },
  {
    title: "Feather Icons",
    path: "/icons/feather",
    component: <Feather />,
    dataPage: "icons-feather",
    breadcrumb: "Fadmin / Icons",
  },
  {
    title: "Themify Icons",
    path: "/icons/themify",
    component: <Themify />,
    dataPage: "icons-themify",
    breadcrumb: "Fadmin / Icons",
  },
  {
    title: "Dripicons",
    path: "/icons/dripicons",
    component: <Dripicons />,
    dataPage: "icons-dripicons",
    breadcrumb: "Fadmin / Icons",
  },
  {
    title: "Typicons Icons",
    path: "/icons/typicons",
    component: <Typicons />,
    dataPage: "icons-typicons",
    breadcrumb: "Fadmin / Icons",
  },

  //   Layouts  Pages
  {
    title: "Blank Page",
    path: "/layout/blank",
    component: <Blank />,
    dataPage: "layout-blank",
    breadcrumb: "Fadmin / Layout",
  },
  {
    title: "Boxed Layout",
    path: "/layout/boxed",
    component: <Boxed />,
    dataPage: "layout-boxed",
    breadcrumb: "Fadmin / Layout",
  },
  {
    title: "Collapsed Sidebar",
    path: "/layout/collapsed-sidebar",
    component: <CollapsedSidebar />,
    dataPage: "layout-collapsed-sidebar",
    breadcrumb: "Fadmin / Layout",
  },
  {
    title: "Fixed Header",
    path: "/layout/fixed-header",
    component: <FixedHeader />,
    dataPage: "layout-fixed-header",
    breadcrumb: "Fadmin / Layout",
  },
  {
    title: "Fixed Sidebar",
    path: "/layout/fixed-sidebar",
    component: <FixedSidebar />,
    dataPage: "layout-fixed-sidebar",
    breadcrumb: "Fadmin / Layout",
  },
  {
    title: "Fixed Sidebar & Header",
    path: "/layout/fixed-sidebar-header",
    component: <FixedSidebarHeader />,
    dataPage: "layout-fixed-sidebar-header",
    breadcrumb: "Fadmin / Layout",
  },

  //      Forms Pages
  {
    title: "Form Mask",
    path: "/form/mask",
    component: <MaskForm />,
    dataPage: "form-mask",
    breadcrumb: "Fadmin / Form",
  },
  {
    title: "Form Elements",
    path: "/form/elements",
    component: <FormElements />,
    dataPage: "form-elements",
    breadcrumb: "Fadmin / Form",
  },
  {
    title: "Form Xeditable",
    path: "/form/xeditable",
    component: <Xeditable />,
    dataPage: "form-xeditable",
    breadcrumb: "Fadmin / Form",
  },

  //  Tables Pages
  {
    title: "Foo Table",
    path: "/tables/footable",
    component: <Footable />,
    dataPage: "tables-footable",
    breadcrumb: "Fadmin / Tables",
  },
  {
    title: "Responsive Table",
    path: "/tables/responsive",
    component: <Responsive />,
    dataPage: "tables-responsive",
    breadcrumb: "Fadmin / Tables",
  },
  {
    title: "Basic Tables",
    path: "/tables/basic",
    component: <Basic />,
    dataPage: "tables-basic",
    breadcrumb: "Fadmin / Tables",
  },

  // Chart Pages
  {
    title: "Apexcharts",
    path: "/chart/apexcharts",
    component: <Apexcharts />,
    dataPage: "apexcharts",
    breadcrumb: "Fadmin / Charts",
  },
  {
    title: "Echarts",
    path: "/chart/echarts",
    component: <Echarts />,
    dataPage: "echart",
    breadcrumb: "Fadmin / Charts",
  },

  // Maps Pages
  {
    title: "Vector Maps",
    path: "/maps",
    component: <DefaultMaps />,
    dataPage: "maps",
    breadcrumb: "Fadmin",
  },
]
  // Extra Pages
export const authRoutes = [
    {
        title: "Login",
        path: "/pages/login",
        component: <Login />,
        dataPage: "pages-login",
    },
    {
        title: "Register",
        path: "/pages/register",
        component: <Register />,
        dataPage: "pages-register",
    },
    {
        title: "Recover Password",
        path: "/pages/recoverpw",
        component: <Recoverpw />,
        dataPage: "pages-recoverpw",
    },
    {
        title: "Lock Screen",
        path: "/pages/lock-screen",
        component: <LockScreen />,
        dataPage: "pages-lock-screen",
    },
    {
        title: "Error 403",
        path: "/pages/403",
        component: <Page403 />,
        dataPage: "pages-403",
    },
    {
        title: "Error 400",
        path: "/pages/400",
        component: <Page400 />,
        dataPage: "pages-400",
    },
    {
        title: "Error 404",
        path: "/pages/404",
        component: <Page404 />,
        dataPage: "pages-404",
    },
    {
        title: "Error 500",
        path: "/pages/500",
        component: <Page500 />,
        dataPage: "pages-500",
    },
    {
        title: "Error 503",
        path: "/pages/503",
        component: <Page503 />,
        dataPage: "pages-503",
    },
];


