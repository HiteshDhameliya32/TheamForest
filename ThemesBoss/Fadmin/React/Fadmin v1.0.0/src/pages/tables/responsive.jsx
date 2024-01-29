'use client'
import {useState,useEffect,useMemo} from 'react';

// Layout & Components
import Layout from "@/layouts/Layout";
import TableComponent from '@/components/TableComponent';

//Data
import { compaiesData } from '@/data/tables';

function Responsive() {

  const [data,setData] = useState([])

  const columns = useMemo(
    ()=>compaiesData.columns,[]
  )

  useEffect(()=>{
    // you can use your fetching logic here instead
    setData(compaiesData.rows)
  },[])

  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
          <div className="col-lg-12">
              <div className="card border mb-0">
                  <div className="card-body">

                      <h4 className="mt-0 header-title border-bottom">Responsive Table</h4>
                      <p className="text-muted mb-24 fs-15">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.</p>

                      <div id="table-rep-plugin">
                          <div className="table-responsive border" data-pattern="priority-columns">
                            <TableComponent columns={columns} data={data}  className="table table-striped"/>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Responsive

Responsive.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="tables-responsive"  
        title="Responsive Table" 
        breadcrumb="Fadmin / Tables" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};