
// Layout & Components
import Layout from "@/layouts/Layout";
import {
  Card,
  Card1,
  CardBody,
  CardHeader,
  CardHeader1,
  CardFooter
} from '@/components/Cards/Card'

function Cards() {
  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
          <div className="col-lg-6">
            
            <Card1>
              <CardHeader1 title="Basic Card">
                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              </CardHeader1> 
              {/* BasicCard */}
              <Card className="mb-0">
                <CardBody>
                  <p className="text-muted">Basic card example</p>
                </CardBody>
              </Card>
            </Card1>

            <Card1>
              <CardHeader1 title="Card With Footer" >
                Wrap buttons or secondary text in <code>.card-footer</code>. Note that card footers <strong>do not</strong> inherit colors and borders when using contextual variations as they are not meant to be in the foreground.
              </CardHeader1>
              {/* Card With Footer */}
              <Card className="mb-0">
                <CardBody>
                  Card content
                </CardBody>
                <CardFooter>Card Footer</CardFooter>
              </Card>
            </Card1>
      
            <Card1 className="mb-0">
                <CardHeader1 title={"Card with header Card"} >
                  For proper link coloring, be sure to place links in header within <code>.card-title</code>.
                </CardHeader1>
                {/* CardWithHeader without title */}
                <Card >
                    <CardHeader>card header without title</CardHeader>
                  <CardBody>
                    Card Content
                  </CardBody>
                </Card>
                {/* CardWithHeader with title */}
                <Card  className="mb-0">
                    <CardHeader title="Card Title"/>
                  <CardBody>
                    Card Content
                  </CardBody>
                </Card>
            </Card1>
          </div>
          <div className="col-lg-6">
          <Card1 className={"mb-0"}>
            <CardHeader1 title="Basic Card">
            Like other components, easily make a card more meaningful to a particular context by adding any of the contextual state classes.
            </CardHeader1> 
            <Card className="text-bg-primary">
              <CardHeader>card header without title</CardHeader>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
            <Card className="text-bg-success">
              <CardHeader>card header without title</CardHeader>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
            <Card className="text-bg-info">
              <CardHeader>card header without title</CardHeader>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
            <Card className="text-bg-warning">
              <CardHeader>card header without title</CardHeader>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
            <Card className="text-bg-danger">
              <CardHeader>card header without title</CardHeader>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Card1>
          </div> 
      </div>
    </div>
  );
}

export default Cards

Cards.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="ui-cards"  
        title="Card" 
        breadcrumb="Fadmin / Elements" 
        description="A Responsive Bootstrap Admin Template">
        {page}
    </Layout>
  );
};