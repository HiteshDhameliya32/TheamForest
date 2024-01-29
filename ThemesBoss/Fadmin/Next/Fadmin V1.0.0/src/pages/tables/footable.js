'use client'
import {useState,useEffect,useMemo} from 'react';

// Layout & Components
import Layout from "@/layouts/Layout";
import TableComponent from '@/components/TableComponent';
import { Card1,CardHeader1 } from '@/components/Cards/Card';

//Data
import { footableData } from '@/data/tables';


function Footable() {
  const [data,setData] = useState([])

  const columns = useMemo(
    ()=>footableData.columns,[]
  )

  useEffect(()=>{
    // you can use your fetching logic here instead
    setData(footableData.rows)
  },[])

  return (
    <div className="container-fluid" id="main-wrapper">
        <div className="row">
            <div className="col-lg-12">
                <Card1 className={"mb-0"}>
                    <CardHeader1 title="Sortable Table">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <TableComponent columns={columns} data={data} className="table table-striped"/>
                        </div>
                </Card1>
            </div>
        </div>
    </div>
  );
}

export default Footable

Footable.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="tables-footable"  
        title="Sortable Table" 
        breadcrumb="Fadmin / Tables" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};