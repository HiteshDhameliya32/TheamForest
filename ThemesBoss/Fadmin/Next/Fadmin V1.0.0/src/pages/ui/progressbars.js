import React from 'react'

// Layout & Components
import Layout from "@/layouts/Layout";
import Progressbar from '@/components/Progressbars/Progressbar';

function Progressbars() {
  return (
    <div className="container-fluid" id="main-wrapper">
        <div className="row">
            <div className="col-lg-6">
                <div className="card border">
                    <div className="card-body">
                        <h4 className="mt-0 header-title border-bottom">Basic example</h4>
                        <p className="text-muted mb-24 fs-15">Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
                        <div>{/* Basic example */}
                            <Progressbar percentage={25} className="mb-24" />
                            <Progressbar percentage={50} className="mb-24" />
                            <Progressbar percentage={75} className="mb-24" />
                            <Progressbar percentage={100} className="progress-bar-primary"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card border">
                    <div className="card-body">
                        <h4 className="mt-0 header-title border-bottom">Basic with lable example</h4>
                        <p className="text-muted mb-24 fs-15">Progress bars use some of the same button and alert classes for consistent styles.</p>
                        <div>{/* Basic example with label */}
                            <Progressbar className="mb-24" percentage={25} isLabelVisible={true} barColor="bg-success"/>
                            <Progressbar className="mb-24" percentage={50} isLabelVisible={true} barColor="bg-info"/>
                            <Progressbar className="mb-24" percentage={75} isLabelVisible={true} barColor="bg-warning"/>
                            <Progressbar  percentage={100} isLabelVisible={true} barColor="bg-danger"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6">
                <div className="card border mb-0">
                    <div className="card-body">
                        <h4 className="mt-0 header-title border-bottom">Striped example</h4>
                        <p className="text-muted mb-24 fs-15">Uses a gradient to create a striped effect. Not available in IE9 and below.</p>
                        <div> {/* striped */}
                            <Progressbar percentage={25} className="mb-24" barColor="progress-bar-success" isLabelVisible={true} isStriped={true}/>
                            <Progressbar percentage={50} className="mb-24" barColor="progress-bar-info" isLabelVisible={true} isStriped={true}/>
                            <Progressbar percentage={75} className="mb-24" barColor="progress-bar-warning" isLabelVisible={true} isStriped={true}/>
                            <Progressbar percentage={100}  barColor="progress-bar-danger" isLabelVisible={true} isStriped={true}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card border mb-0">
                    <div className="card-body">
                        <h4 className="mt-0 header-title border-bottom">Animated example</h4>
                        <p className="text-muted mb-24 fs-15">Add <code>.active</code> to <code>.progress-bar-striped</code> to animate the stripes right to left. Not available in IE9 and below.</p>
                        <div> {/* animated */}
                            <Progressbar className="mb-24" percentage={25}  barColor="bg-success" isLabelVisible={true} isStriped={true} isAnimated={true}/>
                            <Progressbar className="mb-24" percentage={50}  barColor="bg-info" isLabelVisible={true} isStriped={true} isAnimated={true}/>
                            <Progressbar className="mb-24" percentage={75}  barColor="bg-warning" isLabelVisible={true} isStriped={true} isAnimated={true}/>
                            <Progressbar  percentage={100}  barColor="bg-danger" isLabelVisible={true} isStriped={true} isAnimated={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Progressbars

Progressbars.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="ui-progressbars"  
        title="Progressbars" 
        breadcrumb="Fadmin / Elements" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};