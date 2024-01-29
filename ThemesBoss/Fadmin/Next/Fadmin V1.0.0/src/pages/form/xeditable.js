import React from 'react'

// Layout & Components
import Layout from "@/layouts/Layout";
import {Card1,CardHeader1} from '@/components/Cards/Card';


function Xeditable() {
  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
          <div className="col-lg-12">
              <Card1 className="mb-0">
                  <CardHeader1 title="Form Xeditable">
                    Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                  </CardHeader1>
                    <div>
                        <table className="table table-bordered table-striped">
                            <tbody>
                                <tr>
                                    <td width="35%">Simple text field</td>
                                    <td width="65%"><a href="#" id="inline-username" data-type="text" data-pk="1" data-title="Enter username">superuser</a></td>
                                </tr>
                                <tr>
                                    <td>Empty text field, required</td>
                                    <td><a href="#" id="inline-firstname" data-type="text" data-pk="1" data-placement="right" data-placeholder="Required" data-title="Enter your firstname"></a></td>
                                </tr>
                                <tr>
                                    <td>Select, local array, custom display</td>
                                    <td><a href="#" id="inline-sex" data-type="select" data-pk="1" data-value="" data-title="Select sex"></a></td>
                                </tr>
                                <tr>
                                    <td>Select, remote array, no buttons</td>
                                    <td><a href="#" id="inline-group" data-type="select" data-pk="1" data-value="5" data-source="/groups" data-title="Select group">Admin</a></td>
                                </tr>
                                <tr>
                                    <td>Select, error while loading</td>
                                    <td><a href="#" id="inline-status" data-type="select" data-pk="1" data-value="0" data-source="/status" data-title="Select status">Active</a></td>
                                </tr>

                                <tr>
                                    <td>Combodate (date)</td>
                                    <td><a href="#" id="inline-dob" data-type="combodate" data-value="1984-05-15" data-format="YYYY-MM-DD" data-viewformat="DD/MM/YYYY" data-template="D / MMM / YYYY" data-pk="1"  data-title="Select Date of birth"></a></td>
                                </tr>
                                <tr>
                                    <td>Combodate (datetime)</td>
                                    <td><a href="#" id="inline-event" data-type="combodate" data-template="D MMM YYYY  HH:mm" data-format="YYYY-MM-DD HH:mm" data-viewformat="MMM D, YYYY, HH:mm" data-pk="1"  data-title="Setup event date and time"></a></td>
                                </tr>

                                <tr>
                                    <td>Textarea, buttons below. Submit by <i>ctrl+enter</i></td>
                                    <td><a href="#" id="inline-comments" data-type="textarea" data-pk="1" data-placeholder="Your comments here..." data-title="Enter comments">awesome user!</a></td>
                                </tr>

                                <tr>
                                    <td>Checklist</td>
                                    <td><a href="#" id="inline-fruits" data-type="checklist" data-value="2,3" data-title="Select fruits"></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
              </Card1>
          </div>
      </div>
    </div>
  )
}

export default Xeditable

Xeditable.getLayout = function getLayout(page) {
    return (
      <Layout  
          dataCurrentPage="from-mask"  
          title="Form Xeditable" 
          breadcrumb="Fadmin / Form" 
          description="A Responsive Bootstrap Admin Template">
              {page}
      </Layout>
    );
  };