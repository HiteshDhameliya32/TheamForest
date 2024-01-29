
// Layout & Components
import Layout from "../layouts/Layout"
import StatCard from "../components/Cards/StateCard";
import ApexChart from "../components/Charts/ApexChart";

// Data
import { areaChart, barChart, donutChart } from "../data/apexchart";
import { statCardsData } from "../data/state";
import {salesData} from "../data/tables";

export default function Home() {
    
  return (
    <>
      <div className="container-fluid" id="main-wrapper">
        <div className="row">
          {/* State Card Section */}
          {statCardsData.map(
            ({ total, title, trendIcon, widgetIcon, trendClass }) => {
              return (
                <StatCard
                  key={title}
                  total={total}
                  title={title}
                  trendIcon={trendIcon}
                  widgetIcon={widgetIcon}
                  trendclassName={trendClass}
                />
              );
            }
          )}
        </div>

        <div className="row">
          {/* Apex Area Chart */}
          <div className="col-md-8 col-sm-12 col-xs-12 col-lg-8">
            <ApexChart
              series={areaChart.series}
              options={areaChart.options}
              type={areaChart.type}
              height={areaChart.height}
              title={areaChart.title}
            />
          </div>
          {/* Apex Bar Chart */}
          <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
            <ApexChart
              series={barChart.series}
              options={barChart.options}
              type={barChart.type}
              height={barChart.height}
              title={barChart.title}
            />
          </div>
        </div>
        <div className="row">
          {/* Apex Donut Chart */}
          <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
            <ApexChart
                className="mb-0"
              series={donutChart.series}
              options={donutChart.options}
              type={donutChart.type}
              height={donutChart.height}
              title={donutChart.title}
            />
          </div>
          {/* Table */}
          <div className="col-md-8 col-sm-12 col-xs-12 col-lg-8">
            <div className="card border mb-0">
              <div className="card-body">
                <h4 className="header-title border-bottom mb-24 mt-0">
                  Sale status
                </h4>
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        {salesData.columns.map((col,i)=><th key={i} scope="col">{col.Header}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {salesData.rows.map(row => (
                        <tr key={row.id}>
                          <th scope="row">{row.id}</th>
                          <td>{row.date}</td>
                          <td>{row.sales}</td>
                          <td>{row.cancelled}</td>
                          <td>
                            <span className={`badge badge-${row.status ==="Pending" ? 'primary':'success'}`}>{row.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.title = "DashBoard"

Home.getLayout = function getLayout(page) {
  return <Layout  dataCurrentPage="index"  title="Dashboard" breadcrumb="Fadmin" description="Welcome to Fadmin">{page}</Layout>;
};
