
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { Card1, CardHeader1 } from "../Cards/Card";

function ApexChart({ series, options, type,height,width,title, description, className }) {
  return (
    <Card1 className={className}>
      <CardHeader1 title={title}>
        { description}
        </CardHeader1>
        
        <div style={ type ==='donut' ? {height:'325px'} :null}>
          <Chart
            series={series}
            options={options}
            type={type}
            height={height}
            width = {width}
          />
        </div>
    </Card1>
  );
}

export default ApexChart;
