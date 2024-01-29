import React from 'react'

// Layout & Components
import Layout from "@/layouts/Layout";
import {Card1,CardHeader1} from '@/components/Cards/Card'

function Blank() {
  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
          <div className="col-lg-12">
              <Card1 className="card border mb-0">
                  <CardHeader1 title="Layout Blank">
                      Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                  </CardHeader1>
              </Card1>
          </div>
      </div>
    </div>
  );
}

export default Blank

Blank.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="layout-blank"  
        title="Blank Layout" 
        breadcrumb="Fadmin / Layout" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};