import React from 'react'

// Layout & Components
import Layout from "@/layouts/Layout";
import Accordion from '@/components/Accordions/Accordion';
import NavPills from '@/components/Accordions/NavPills';
import Tabs from '@/components/Accordions/Tabs';

// Data
import tabsData from "@/data/tabs";
import { Card1, CardHeader1 } from '@/components/Cards/Card';

function TabsAccordions() {
  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
          <div className="col-lg-6">
              <div className="card border mb-lg-0">
                  <div className="card-body">
                      <h4 className="mt-0 header-title border-bottom">Accordion</h4>
                      <p className="text-muted mb-24 fs-15">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.</p>
                      {/* Accorions */}
                      <Accordion />
                  </div>
              </div>
              <Card1 >
                  <CardHeader1 title="Default Tabs">
                     Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                      {/* Default Tabs */}
                  </CardHeader1>
                      <Tabs tabs={tabsData[0]} />
              </Card1>
              <div className="card border">
                  <div className="card-body">
                      <h4 className="mt-0 header-title border-bottom">Left Tabs</h4>
                      <p className="text-muted mb-24 fs-15">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.</p>
                      {/* Left Tabs */}
                      <Tabs tabs={tabsData[1]} type="left"/>
                  </div>
              </div>                                
          </div>

          <div className="col-lg-6">
              <div className="card border">
                  <div className="card-body">
                      <h4 className="mt-0 header-title border-bottom">Fade Effect</h4>
                      <p className="text-muted mb-24 fs-15">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.</p>
                      {/* Fade Animation Tabs */}
                      <Tabs tabs={tabsData[2]} fade={true}/>
                  </div>
              </div>
              <div className="card border">
                  <div className="card-body">
                      <h4 className="mt-0 header-title border-bottom">Right Tabs</h4>
                      <p className="text-muted mb-24 fs-15">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.</p>
                      <div className="d-flex">
                        {/* Right Tabs */}
                        <Tabs tabs={tabsData[3]} type="right" />
                      </div>
                  </div>
              </div>
              <div className="card border">
                  <div className="card-body">
                      <h4 className="mt-0 header-title border-bottom">Justified Tabs</h4>
                      <p className="text-muted mb-24 fs-15">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.</p>
                      {/* Justified Tabs */}
                      <Tabs tabs={tabsData[4]} type="justified" fade={true}/>
                  </div>
              </div>
              <div className="card border mb-0">
                  <div className="card-body">
                      <h4 className="mt-0 header-title border-bottom">Nav Pills</h4>
                      <p className="text-muted mb-24 fs-15">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.</p>
                      {/* Nav Pills Tabs */}
                      <NavPills />
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default TabsAccordions

TabsAccordions.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="ui-tabs"  
        title="Tab & Accordions" 
        breadcrumb="Fadmin / Elements" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};