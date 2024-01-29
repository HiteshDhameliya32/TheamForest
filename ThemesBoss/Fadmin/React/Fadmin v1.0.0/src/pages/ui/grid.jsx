

// Layout & Components
import Layout from "@/layouts/Layout";

// Data

function Grid() {
  return (
    <div className="container-fluid" id="main-wrapper">
        <div className="row">
            <div className="col-lg-12">
                <div className="card border mb-0">
                    <div className="card-body">

                        <h4 className="mt-0 header-title border-bottom">Grid System</h4>
                        <p className="text-muted mb-24 fs-15">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.</p>

                        <div className="table-responsive">
                            <table className="table table-bordered table-striped mb-0">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        Extra small devices
                                        <small>Phones (&lt;768px)</small>
                                    </th>
                                    <th>
                                        Small devices
                                        <small>Tablets (≥768px)</small>
                                    </th>
                                    <th>
                                        Medium devices
                                        <small>Desktops (≥992px)</small>
                                    </th>
                                    <th>
                                        Large devices
                                        <small>Desktops (≥1200px)</small>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>Grid behavior</th>
                                    <td>Horizontal at all times</td>
                                    <td colSpan="3">Collapsed to start, horizontal above breakpoints</td>
                                </tr>
                                <tr>
                                    <th>Max container width</th>
                                    <td>None (auto)</td>
                                    <td>750px</td>
                                    <td>970px</td>
                                    <td>1170px</td>
                                </tr>
                                <tr>
                                    <th>className prefix</th>
                                    <td><code>.col-xs-</code></td>
                                    <td><code>.col-sm-</code></td>
                                    <td><code>.col-md-</code></td>
                                    <td><code>.col-lg-</code></td>
                                </tr>
                                <tr>
                                    <th># of columns</th>
                                    <td colSpan="4">12</td>
                                </tr>
                                <tr>
                                    <th>Max column width</th>
                                    <td className="text-muted">Auto</td>
                                    <td>60px</td>
                                    <td>78px</td>
                                    <td>95px</td>
                                </tr>
                                <tr>
                                    <th>Gutter width</th>
                                    <td colSpan="4">30px (15px on each side of a column)</td>
                                </tr>
                                <tr>
                                    <th>Nestable</th>
                                    <td colSpan="4">Yes</td>
                                </tr>
                                <tr>
                                    <th>Offsets</th>
                                    <td colSpan="1" className="text-muted">N/A</td>
                                    <td colSpan="3">Yes</td>
                                </tr>
                                <tr>
                                    <th>Column ordering</th>
                                    <td className="text-muted">N/A</td>
                                    <td colSpan="3">Yes</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Grid

Grid.getLayout = function getLayout(page) {

  return (
    <Layout  
        dataCurrentPage="ui-grid"  
        title="Grid" 
        breadcrumb="Fadmin / Elements" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};