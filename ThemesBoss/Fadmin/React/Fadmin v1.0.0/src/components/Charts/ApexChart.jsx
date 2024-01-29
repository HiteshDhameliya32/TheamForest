
import Chart from "react-apexcharts"

import { Card1, CardHeader1 } from "../Cards/Card";

function ApexChart({ series, options, type,height,title, description , className}) {
  return (
    <Card1 className={className}>
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

export default ApexChart;
