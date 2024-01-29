
// Layout & Components
import Layout from "@/layouts/Layout";
import { Card1, CardHeader1 } from '@/components/Cards/Card';
import Alert from '@/components/Alert';

// Data

function Alerts() {
  const classes = ['success','danger', 'warning', 'info'];
 //  const classes2 = ['primary', 'secondary' , 'light', 'dark'];
  return (
    <div className="container-fluid" id="main-wrapper">
        <div className="row">
            <div className="col-lg-6">
                <Card1 >
                    <CardHeader1 title="Alert example">
                        Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <strong>required</strong> contextual classes (e.g., <code>.alert-success</code>). For inline dismissal, use the alerts jQuery plugin.
                    </CardHeader1>
                    <div>
                        {classes.map(cl=>(
                            <Alert key={cl} color={cl}>
                                 A simple {cl} alert—check it out! 
                            </Alert>
                        ))}
                    </div>
                </Card1>
            </div>

            <div className="col-lg-6">
                <Card1>
                    <CardHeader1 title="Link Color">
                        Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.
                    </CardHeader1>
                        <div>
                        {classes.map(cl=>(
                            <Alert key={cl} color={cl} > 
                                A simple {cl} 
                                <a href="#" className={`alert-link alert-${cl}`}>
                                    an example link
                                </a>. Give it a click if you like. 
                            </Alert>
                        ))}
                        </div>
                </Card1>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6">
                <Card1 >
                    <CardHeader1 title="Dismissing Alert">
                        Using the alert JavaScript plugin, it's possible to dismiss any alert inline.
                    </CardHeader1>
                    <div>
                        <Alert color="success" dismissible={true}>
                            Well done! You successfully read this important alert message.
                        </Alert>
                        <Alert color="info" dismissible={true}>
                            Heads up! This alert needs your attention, but it's not super important.
                        </Alert>
                        <Alert color="warning" dismissible={true}>
                            Warning! Better check yourself, you're not looking too good.
                        </Alert>
                        <Alert color="danger" dismissible={true}>
                            Oh snap! Change a few things up and try submitting again.
                        </Alert>
                    </div>
                </Card1>
            </div>

            <div className="col-lg-6">
                <Card1 className="card border mb-0">
                    <CardHeader1 title="Additional content">
                        Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
                    </CardHeader1>
                    <div>
                        <Alert color="success">
                            <h5 className="alert-heading">Well done!</h5>
                            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                            <hr/>
                            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                        </Alert>
                        <Alert color="danger">
                            <h5 className="alert-heading">Well done!</h5>
                            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                            <hr/>
                            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                        </Alert>
                    </div>
                </Card1>
            </div>
        </div>

    </div>
  );
}

export default Alerts

Alerts.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="ui-alerts"  
        title="Alerts" 
        breadcrumb="Fadmin / Elements" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};