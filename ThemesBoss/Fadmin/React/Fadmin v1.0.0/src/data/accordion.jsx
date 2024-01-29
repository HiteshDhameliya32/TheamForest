import { BiBullseye, BiClipboard, BiTable } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaStackExchange } from 'react-icons/fa6';
import { MdOutlineKeyboardCommandKey, MdPages } from 'react-icons/md';
import { RiBubbleChartFill } from 'react-icons/ri';
import { TbCards } from 'react-icons/tb';

const accordionMenus = [
    {
        title : "UI Elements",
        Icon: <BiBullseye />,
        subMenus : [
            { title: 'Buttons', dataPage: 'ui-buttons', path: '/ui/buttons' },
            { title: 'Cards', dataPage: 'ui-cards', path: '/ui/cards' },
            { title: 'Tabs & Accordions', dataPage: 'ui-tabs', path: '/ui/tabs-accordions' },
            { title: 'Alerts', dataPage: 'ui-alerts', path: '/ui/alerts' },
            { title: 'Progress Bars', dataPage: 'ui-progressbars', path: '/ui/progressbars' },
            { title: 'Typography', dataPage: 'ui-typography', path: '/ui/typography' },
            { title: 'Grid', dataPage: 'ui-grid', path: '/ui/grid' },    
        ]
    },
    {
        title: 'Icons',
        Icon: <TbCards />, // Replace with your actual icon component
        subMenus: [
          { title: 'Material Design', dataPage: 'icons-material', path: '/icons/material' },
          { title: 'Ion Icons', dataPage: 'icons-ion', path: '/icons/ion' },
          { title: 'Font Awesome', dataPage: 'icons-fontawesome', path: '/icons/fontawesome' },
          { title: 'Feather Icons', dataPage: 'icons-feather', path: '/icons/feather' },
          { title: 'Themify Icons', dataPage: 'icons-themify', path: '/icons/themify' },
          { title: 'Dripicons', dataPage: 'icons-dripicons', path: '/icons/dripicons' },
          { title: 'Typicons Icons', dataPage: 'icons-typicons', path: '/icons/typicons' },
        ],
    },
    {
        title: 'Layouts',
        Icon: <MdOutlineKeyboardCommandKey />,
        subMenus: [
          { title: 'Blank Page', dataPage: 'layout-blank', path: '/layout/blank' },
          { title: 'Boxed Layout', dataPage: 'layout-boxed', path: '/layout/boxed' },
          { title: 'Collapsed Sidebar', dataPage: 'layout-collapsed-sidebar', path: '/layout/collapsed-sidebar' },
          { title: 'Fixed Header', dataPage: 'layout-fixed-header', path: '/layout/fixed-header' },
          { title: 'Fixed Sidebar', dataPage: 'layout-fixed-sidebar', path: '/layout/fixed-sidebar' },
          { title: 'Fixed Sidebar & Header', dataPage: 'layout-fixed-sidebar-header', path: '/layout/fixed-sidebar-header' },
        ],
      },
      {
        title: 'Forms',
        Icon: <BiClipboard />,
        subMenus: [
          { title: 'Form Mask', dataPage: 'form-mask', path: '/form/mask' },
          { title: 'Form Elements', dataPage: 'form-elements', path: '/form/elements' },
          { title: 'Form Xeditable', dataPage: 'form-xeditable', path: '/form/xeditable' },
        ],
      },
      {
        title: 'Tables',
        Icon: <BiTable />,
        subMenus: [
          { title: 'Foo Table', dataPage: 'tables-footable', path: '/tables/footable' },
          { title: 'Responsive Table', dataPage: 'tables-responsive', path: '/tables/responsive' },
          { title: 'Basic Tables', dataPage: 'tables-basic', path: '/tables/basic' },
        ],
      },
      {
        title: 'Charts',
        Icon: <RiBubbleChartFill />,
        subMenus: [
          { title: 'Apexcharts', dataPage: 'apexcharts', path: '/chart/apexcharts' },
          { title: 'Echarts', dataPage: 'echart', path: '/chart/echarts' },
        ],
      },
      {
        title: 'Vector Maps',
        Icon: <FaMapMarkerAlt />,
        subMenus: [],
        dataPage:"maps",
        path:"/maps"
      },
      {
        title: 'Extra Pages',
        Icon: <MdPages />,
        subMenus: [
          { title: 'Login', dataPage: 'pages-login', path: '/pages/login' },
          { title: 'Register', dataPage: 'pages-register', path: '/pages/register' },
          { title: 'Recover Password', dataPage: 'pages-recoverpw', path: '/pages/recoverpw' },
          { title: 'Lock Screen', dataPage: 'pages-lock-screen', path: '/pages/lock-screen' },
          { title: 'Error 400', dataPage: 'pages-400', path: '/pages/400' },
          { title: 'Error 403', dataPage: 'pages-403', path: '/pages/403' },
          { title: 'Error 404', dataPage: 'pages-404', path: '/pages/404' },
          { title: 'Error 500', dataPage: 'pages-500', path: '/pages/500' },
          { title: 'Error 503', dataPage: 'pages-503', path: '/pages/503' },
        ],
      },
      {type:"divider"},
      {
        title: 'Documentation',
        Icon: <FaMapMarkerAlt />,
        subMenus: [],
        dataPage:"documentation",
        path:"/documentation"
      },
      {
        title: 'Changelog',
        Icon: <FaStackExchange/>,
        subMenus: [],
        dataPage:"changelog",
        path:"/changelog",
        version:'1.0'
      },
]


export default accordionMenus;