

// Layout & Components
import Layout from "@/layouts/Layout";
import Echart from '@/components/Charts/Echart';

// Data
import { 
    basicLineChart,
    barChart,
    pieChart,
    scatterChart,
    candlestickChart,
    radarChart,
    graphChart,
    sunburstChart,
    gaugeChart
} from '@/data/echarts'; 

function Echarts() {
  return (
    <div className="container-fluid" id="main-wrapper">
        <div className="row">
            <div className="col-lg-12">
                <Echart 
                    options={basicLineChart.options}  
                    title= {basicLineChart.title}
                    description={basicLineChart.description}
                    divStyle ={ { height : 350+'px', minWidth:350+'px'}}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                 <Echart 
                    options={barChart.options}  
                    title= {barChart.title}
                    description={barChart.description}
                    divStyle ={ { height : 350+'px'}}
                />
            </div>
            <div className="col-lg-6">
                <Echart
                    options={pieChart.options}
                    title={pieChart.title}
                    description={pieChart.description}
                    divStyle={{ height : 350+'px'}}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <Echart
                    options={scatterChart.options}
                    title={scatterChart.title}
                    description={scatterChart.description}
                    divStyle={{ height : 350+'px'}}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <Echart
                    options={candlestickChart.options}
                    title={candlestickChart.title}
                    description={candlestickChart.description}
                    divStyle={{ height : 350+'px'}}
                />
                
            </div>
            <div className="col-lg-6">
                <Echart
                    options={radarChart.options}
                    title={radarChart.title}
                    description={radarChart.description}
                    divStyle={{ height : 350+'px'}}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <Echart
                    options={graphChart.options}
                    title={graphChart.title}
                    description={graphChart.description}
                    divStyle={{ height : 350+'px'}}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <Echart
                    className="mb-0"
                    options={sunburstChart.options}
                    title={sunburstChart.title}
                    description={sunburstChart.description}
                    divStyle={{ height : 350+'px'}}
                />
            </div>
            <div className="col-lg-6">
                <Echart
                    className="mb-0"
                    options={gaugeChart.options}
                    title={gaugeChart.title}
                    description={gaugeChart.description}
                    divStyle={{ height : 350+'px'}}
                />
            </div>
        </div>
    </div>
  );
}

export default Echarts

Echarts.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="echarts"  
        title="Echarts" 
        breadcrumb="Fadmin / Charts" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};