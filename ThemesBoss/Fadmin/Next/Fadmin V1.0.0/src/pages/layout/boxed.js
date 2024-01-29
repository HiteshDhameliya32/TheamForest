
import React from 'react'

// Layout & Components
import Layout from "@/layouts/Layout";
import {Card1,CardHeader1} from '@/components/Cards/Card';


function Boxed() {

  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
          <div className="col-lg-12">
              <Card1 className="mb-0">
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

export default Boxed

Boxed.getLayout = function getLayout(page) {
  return (
    <Layout
        dataCurrentPage="layout-boxed"  
        title="Boxed Layout" 
        breadcrumb="Fadmin / Layout" 
        description="A Responsive Bootstrap Admin Template"
        settings = {{layout:"boxed"}}
        >
        
            {page}
    </Layout>
  );
};