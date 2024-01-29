

// Layout & Components
import Layout from "@/layouts/Layout";
import {Card1,CardHeader1} from '@/components/Cards/Card';

function CollapsedSidebar() {
  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
          <div className="col-lg-12">
              <Card1 className="card border mb-0">
                  <CardHeader1 title="Panel">
                      Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                  </CardHeader1>
                      <div>
                          <p>Type Text</p>
                      </div>
              </Card1>
          </div>
      </div>
    </div>
  );
}

export default CollapsedSidebar

CollapsedSidebar.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="layout-collapsed-sidebar"  
        title="Collapsed Sidebar" 
        breadcrumb="Fadmin / Layout" 
        description="A Responsive Bootstrap Admin Template"
        settings={{page_sidebar_collapsed:true}}
        >
            {page}
    </Layout>
  );
};