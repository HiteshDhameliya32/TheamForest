
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { Card1, CardHeader1 } from "../Cards/Card";

function OrderOverView({ series, options, type,height,title, description }) {
    const areaChart = {
        title: "Order Overview",
        description:
          "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.",
        series: [
          {
            name: "series1",
            data: [10, 85, 60, 85, 60, 88, 95],
          },
          {
            name: "series2",
            data: [15, 60, 35, 60, 35, 55, 65],
          },
        ],
      
        height: 350,
        type: "area",
        options: {
          chart: {
            toolbar: { show: false },
          },
          legend: {
            show: false,
          },
          fill: {
            type: "solid",
            colors: ["#f7f8fc", "#518ce5"],
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: false,
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2009-09-19T00:00:00.000Z",
              "2010-09-19T01:30:00.000Z",
              "2011-09-19T02:30:00.000Z",
              "2012-09-19T03:30:00.000Z",
              "2013-09-19T04:30:00.000Z",
              "2014-09-19T05:30:00.000Z",
              "2015-09-19T06:30:00.000Z",
            ],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
        },
      };
  return (
    <Card1>
      <CardHeader1 title={title}>
        { description}
        </CardHeader1>
        
        <div>
          <Chart
            series={series}
            options={options}
            type={type}
            height={height}
          />
        </div>
    </Card1>
  );
}

export default OrderOverView;
