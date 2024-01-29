

// Layout & Components
import Layout from "@/layouts/Layout";
import {Card1,CardHeader} from '@/components/Cards/Card';

function FixedHeader() {
  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
          <div className="col-lg-12">
              <Card1>
                  <CardHeader title="Panel">
                      Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                  </CardHeader>
                      <div>
                          <p>Type Text</p>
                      </div>
              </Card1>
          </div>
      </div>
    </div>
  );
}

export default FixedHeader

FixedHeader.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="layout-fixed-header"  
        title="Fixed Header" 
        breadcrumb="Fadmin / Layout" 
        description="A Responsive Bootstrap Admin Template"
        >
            {page}
    </Layout>
  );
};