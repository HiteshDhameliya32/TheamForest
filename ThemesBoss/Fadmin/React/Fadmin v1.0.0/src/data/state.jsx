import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { FaDollarSign, } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";


export const statCardsData = [
    {
        total: "48505",
        title: "Total Visits",
        trendIcon: < MdArrowUpward className="text-success" />,
        widgetIcon: < IoEye />,
        trendClass: "text-success"
    },
    {
        total: "2832",
        title: "Sales Analytics",
        trendIcon: <MdArrowDownward  className="text-danger"/>,
        widgetIcon: <FaChartLine />,
        trendClass: "text-danger"
    },
    {
        total: "2658",
        title: "Daily Sales",
        trendIcon: <MdArrowUpward className="text-success" />,
        widgetIcon: <LuBadgePercent />,
        trendClass: "text-success"
    },
    {
        total: "$4926",
        title: "Total Revenue",
        trendIcon: <MdArrowDownward className="text-danger" />,
        widgetIcon: <FaDollarSign />,
        trendClass: "text-danger"
    },

]