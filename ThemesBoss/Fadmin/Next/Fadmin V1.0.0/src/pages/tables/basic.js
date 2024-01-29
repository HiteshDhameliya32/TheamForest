import React,{useState,useEffect,useMemo} from 'react'

// Layout & Components
import Layout from "@/layouts/Layout";
import { Card1, CardHeader1 } from '@/components/Cards/Card';
import BasicTable from '@/components/Tables/Basic';
import TableComponent from '@/components/TableComponent';

// Data
import { basicTable } from '@/data/tables';

function Basic() {

  const [basicData,setBasicData] = useState([])

  const columnsBasic = useMemo(
    ()=>basicTable.columns,[]
  )

  useEffect(()=>{
    // you can use your fetching logic here instead
    setBasicData(basicTable.rows)
  },[])

  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
          <div className="col-lg-6">
              <Card1>
                <CardHeader1 title="Basic Example">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                </CardHeader1>
                <div>
                    <BasicTable data={basicData} columns={columnsBasic} />
                </div>
              </Card1>
          </div>
          <div className="col-lg-6">
            <Card1>
              <CardHeader1 title="Striped Rows">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
              </CardHeader1>
              <div>
                <BasicTable data={basicData} columns={columnsBasic} className="table-striped" />
              </div>
            </Card1>
          </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
            <Card1 className="card border">
                <CardHeader1 title="Bordered table">
                    Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                </CardHeader1>
                    <div>
                        <BasicTable data={basicData} columns={columnsBasic} className="table-bordered" />
                    </div>
            </Card1>
        </div>
        <div className="col-lg-6">
            <Card1 >
                <CardHeader1 title="Hover rows">
                    Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                </CardHeader1>
                    <div>
                        <BasicTable data={basicData} columns={columnsBasic} className="table-hover" />
                    </div>
            </Card1>
        </div>
      </div>
      <div className="row">
          <div className="col-lg-6">
              <Card1>
                <CardHeader1 title="Condensed table">
                    Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                </CardHeader1>
                    <div>
                        <table className="table table-condensed">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
              </Card1>
          </div>
          <div className="col-lg-6">
              <div className="card border">
                  <div className="card-body">

                      <h4 className="mt-0 header-title border-bottom">responsive Table</h4>
                      <p className="text-muted mb-24 fs-15">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.</p>

                      <div className="table-responsive">
                        {/* <table className="table">
                              <thead>
                                  {
                                    [7].map((cols)=>{
                                        let headers =[]
                                        for (let i = 0; i < cols; i++) {
                                            const element = i === 0 ?
                                            <th key = {i}>#</th>
                                            : <th key = {i}>Col {i}</th>;
                                            headers.push(element)
                                        }
                                    return <tr key = {cols}>{headers}</tr>
                                    })            
                                  }                                                
                              </thead>
                                {
                                    [3].map((rows)=>{
                                        const dataRows = []
                                        for (let j = 0; j < rows; j++) {
                                            const rowElememt = [7].map((cols)=>{
                                                let cells =[]
                                                for (let i = 0; i < cols; i++) {
                                                    const cell = i === 0 ?
                                                    <th key = {i} scope="row">{j+1}</th>
                                                    : <td key = {i}>Table cell</td>;
                                                    cells.push(cell)
                                                }
                                            return <tr key = {j}>{cells}</tr>
                                            })  
                                            dataRows.push(rowElememt)
                                        }
                                        return <tbody key={rows}>{dataRows}</tbody>
                                    })
                                }
                        </table> */}
                          <table className="table">
                              <thead>
                                  <tr>
                                      <th>#</th>
                                      <th>Table heading</th>
                                      <th>Table heading</th>
                                      <th>Table heading</th>
                                      <th>Table heading</th>
                                      <th>Table heading</th>
                                      <th>Table heading</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <th scope="row">1</th>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                  </tr>
                                  <tr>
                                      <th scope="row">2</th>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                  </tr>
                                  <tr>
                                      <th scope="row">3</th>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                      <td>Table cell</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-lg-12">
              <Card1 className={"mb-0"}>
                    <CardHeader1 title="Contextual classes">
                      Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                      <div>
                          <table className="table">
                              <thead>
                                  <tr>
                                      <th>#</th>
                                      <th>Column heading</th>
                                      <th>Column heading</th>
                                      <th>Column heading</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr className="table-active">
                                      <th scope="row">1</th>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                  </tr>
                                  <tr>
                                      <th scope="row">2</th>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                  </tr>
                                  <tr className="table-success">
                                      <th scope="row">3</th>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                  </tr>
                                  <tr>
                                      <th scope="row">4</th>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                  </tr>
                                  <tr className="table-info">
                                      <th scope="row">5</th>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                  </tr>
                                  <tr>
                                      <th scope="row">6</th>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                  </tr>
                                  <tr className="table-warning">
                                      <th scope="row">7</th>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                  </tr>
                                  <tr>
                                      <th scope="row">8</th>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                  </tr>
                                  <tr className="table-danger">
                                      <th scope="row">9</th>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                      <td>Column content</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  
              </Card1>
          </div>
      </div>
   </div>
  );
}

export default Basic

Basic.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="tables-basic"  
        title="Basic Tables" 
        breadcrumb="Fadmin / Tables" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};