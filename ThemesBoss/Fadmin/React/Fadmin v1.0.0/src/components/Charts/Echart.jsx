
import ReactEcharts  from "echarts-for-react";

import { Card1, CardHeader1 } from "../Cards/Card"; 


function Echart({ options,title, description, divStyle, className }) {
    
  return (
    <Card1 className={className}>
        <CardHeader1 title={title}>
            {description}
        </CardHeader1>
        <div id="linechart" style={divStyle}>
            <ReactEcharts option={options} />
        </div>
    </Card1>
  )
}

export default Echart