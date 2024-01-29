import React from 'react'

// Layout & Components
import Layout from "@/layouts/Layout";
import {Card1,CardHeader} from '@/components/Cards/Card';

function FixedHeader() {
  return (
    <div class="container-fluid" id="main-wrapper">
      <div class="row">
          <div class="col-lg-12">
              <Card1 className="mb-0">
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