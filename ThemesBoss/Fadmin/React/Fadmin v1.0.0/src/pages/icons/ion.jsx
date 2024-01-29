

// Layout & Components
import Layout from "@/layouts/Layout";
import { Card1, CardHeader1 } from '@/components/Cards/Card';

// Ionics Icons -(React Icons)
import * as fontIcons from 'react-icons/io5';
const Icons = Object.keys(fontIcons).map((Icon, ) => ({ name: Icon, Icon: fontIcons[Icon]() }))

function Ion() {
  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
        <div className="col-lg-12">
          <Card1 className="mb-0">
            <CardHeader1 title="Ionics Icons">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <div className="row icon-demo-content">
              {Icons.map(({ name, Icon }, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                  <i>{Icon}</i> {name}
                </div>
              ))}
            </div>
          </Card1>
        </div>
      </div>  
    </div>
  );
}

export default Ion

Ion.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="icons-ion"  
        title="Ion Icons" 
        breadcrumb="Fadmin / Icons" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};