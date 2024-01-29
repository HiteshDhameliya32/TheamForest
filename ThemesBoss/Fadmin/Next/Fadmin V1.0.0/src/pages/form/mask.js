import React from 'react'

// Layout & Components
import Layout from "@/layouts/Layout";
import {Card1,CardHeader1} from '@/components/Cards/Card';

import MaskFormGroup from '@/components/FormsElements/MaskFormGroup'       
function MaskForm() {
  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
          <div className="col-lg-12">
              <Card1 className="mb-0">
                  <CardHeader1 title="Form Mask">
                      Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                  </CardHeader1>
                    <div>
                      <form action="#">
                          <MaskFormGroup label= "ISBN 1" mask = "999-99-999-9999-9" iput_type = "text"/>
                          <MaskFormGroup label= "ISBN 2" mask = "999 99 999 9999 9" iput_type = "text"/>
                          <MaskFormGroup label= "ISBN 3" mask = "999/99/999/9999/9" iput_type = "text"/>
                          <MaskFormGroup label= "IPV4" mask = "999.999.999.9999" iput_type = "text"/>
                          <MaskFormGroup label= "IPV6" mask = "9999:9999:9999:9:999:9999:9999:9999" iput_type = "text"/>
                          <MaskFormGroup label= "Tax ID" mask = "99-9999999" iput_type = "text"/>
                          <MaskFormGroup label= "Phone" mask = "(999) 999-9999" iput_type = "text"/>
                          <MaskFormGroup label= "Currency" mask = "$ 999,999,999.99" iput_type = "text"/>
                          <MaskFormGroup label= "Date 2" mask = "99-99-9999" iput_type = "text"/>
                          <MaskFormGroup label= "Date" mask = "99/99/9999" iput_type = "text"/>
                      </form>  
                  </div>
              </Card1>
          </div>
      </div>
    </div>
  );
}

export default MaskForm

MaskForm.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="from-mask"  
        title="Form Mask" 
        breadcrumb="Fadmin / Form" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};