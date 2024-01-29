import React from 'react'

// Layout & Components
import Layout from "@/layouts/Layout";
import ApexChart from '@/components/Charts/ApexChart';

// Data
import { 
    lineChart,
    areaChart2, 
    columnChart, 
    barChart2, 
    mixedChart ,
    rangeAreaChart,
    timelineCharts,
    funnelChart,
    candlestickChart,
    scatterChart,
    heatMapChart,
    treemapChart,
    piechart2,
    radialBarChart,
    radarChart,
    polareaChart,
    boxPlotChart
} from '@/data/apexchart';

function Apexcharts() {
  return (
    <div className="container-fluid" id="main-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <ApexChart
                                    series={lineChart.series}
                                    options={lineChart.options}
                                    type={lineChart.type}
                                    height={lineChart.height}
                                    title={lineChart.title}
                                    description={lineChart.description}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ApexChart
                                    series={areaChart2.series}
                                    options={areaChart2.options}
                                    type={areaChart2.type}
                                    height={areaChart2.height}
                                    title={areaChart2.title}
                                    description={areaChart2.description}
                                />
                            </div>
                            <div className="col-lg-6">
                                <ApexChart
                                    series={columnChart.series}
                                    options={columnChart.options}
                                    type={columnChart.type}
                                    height={columnChart.height}
                                    title={columnChart.title}
                                    description={columnChart.description}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ApexChart
                                    series={barChart2.series}
                                    options={barChart2.options}
                                    type={barChart2.type}
                                    height={barChart2.height}
                                    title={barChart2.title}
                                    description={barChart2.description}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ApexChart
                                    series={mixedChart.series}
                                    options={mixedChart.options}
                                    type={mixedChart.type}
                                    height={mixedChart.height}
                                    title={mixedChart.title}
                                    description={mixedChart.description}
                                />
                            </div>
                            <div className="col-lg-6">
                                <ApexChart
                                    series={rangeAreaChart.series}
                                    options={rangeAreaChart.options}
                                    type={rangeAreaChart.type}
                                    height={rangeAreaChart.height}
                                    title={rangeAreaChart.title}
                                    description={rangeAreaChart.description}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ApexChart
                                    series={timelineCharts.series}
                                    options={timelineCharts.options}
                                    type={timelineCharts.type}
                                    height={timelineCharts.height}
                                    title={timelineCharts.title}
                                    description={timelineCharts.description}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ApexChart
                                    series={funnelChart.series}
                                    options={funnelChart.options}
                                    type={funnelChart.type}
                                    height={funnelChart.height}
                                    title={funnelChart.title}
                                    description={funnelChart.description}
                                />
                            </div>
                            <div className="col-lg-6">
                                 <ApexChart
                                    series={candlestickChart.series}
                                    options={candlestickChart.options}
                                    type={candlestickChart.type}
                                    height={candlestickChart.height}
                                    title={candlestickChart.title}
                                    description={candlestickChart.description}
                                />  
                            </div>
                            <div className="col-lg-6">
                                <ApexChart
                                    series={boxPlotChart.series}
                                    options={boxPlotChart.options}
                                    type={boxPlotChart.type}
                                    height={boxPlotChart.height}
                                    title={boxPlotChart.title}
                                    description={boxPlotChart.description}
                                />
                            </div>
                            <div className="col-lg-6">
                                <ApexChart
                                    series={scatterChart.series}
                                    options={scatterChart.options}
                                    type={scatterChart.type}
                                    height={scatterChart.height}
                                    title={scatterChart.title}
                                    description={scatterChart.description}
                                />
                            </div>
                            <div className="col-lg-6">
                                <ApexChart
                                    series={treemapChart.series}
                                    options={treemapChart.options}
                                    type={treemapChart.type}
                                    height={treemapChart.height}
                                    title={treemapChart.title}
                                    description={treemapChart.description}
                                />
                            </div>
                            <div className="col-lg-6">
                                <ApexChart
                                    series={piechart2.series}
                                    options={piechart2.options}
                                    type={piechart2.type}
                                    height={piechart2.height}
                                    title={piechart2.title}
                                    description={piechart2.description}
                                />
                            </div>
                            <div className="col-lg-6">
                                <ApexChart
                                    series={radialBarChart.series}
                                    options={radialBarChart.options}
                                    type={radialBarChart.type}
                                    height={radialBarChart.height}
                                    title={radialBarChart.title}
                                    description={radialBarChart.description}
                                />
                            </div>
                            <div className="col-lg-6">
                                <ApexChart
                                    series={polareaChart.series}
                                    options={polareaChart.options}
                                    type={polareaChart.type}
                                    height={polareaChart.height}
                                    title={polareaChart.title}
                                    description={polareaChart.description}
                                />
                            </div>
                            <div className="col-lg-6">
                                <ApexChart
                                    className = "mb-0"
                                    series={radarChart.series}
                                    options={radarChart.options}
                                    type={radarChart.type}
                                    height={radarChart.height}
                                    title={radarChart.title}
                                    description={radarChart.description}
                                />
                            </div>
                        </div>
                    </div>
  );
}

export default Apexcharts

Apexcharts.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="apexcharts"  
        title="Apex Chart" 
        breadcrumb="Fadmin / Charts" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};