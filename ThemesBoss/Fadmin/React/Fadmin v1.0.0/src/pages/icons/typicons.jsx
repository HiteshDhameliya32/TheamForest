

// Layout & Components
import Layout from "@/layouts/Layout";
import { Card1, CardHeader1 } from '@/components/Cards/Card';

//Typicons (React Icons)
import * as fontIcons from 'react-icons/ti';
const Icons = Object.keys(fontIcons).map((Icon) => ({ name: Icon, Icon: fontIcons[Icon]() }))


function Typicons() {
  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
        <div className="col-lg-12">
          <Card1 className="mb-0">
            <CardHeader1 title="Typicons Icons">
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

export default Typicons

Typicons.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="icons-typicons"  
        title="Typicons Icons" 
        breadcrumb="Fadmin / Icons" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};