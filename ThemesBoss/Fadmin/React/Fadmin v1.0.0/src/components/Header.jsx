import { useEffect, useState } from 'react' ;
import { A } from "hookrouter";

function Header({title,description,breadcrumb}) {
    const [bcList, setBCList] = useState()

    useEffect(()=>{
        const bcArray = `${breadcrumb} / ${title}`.split('/').map(item=>item.trim())
        setBCList(bcArray)
    },[title,breadcrumb])
  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-12">
            <div className="page-title mb-15">
                <div className="d-flex justify-content-md-between justify-content-center py-2">
                    <div className="d-none d-md-block">
                        <h3 className="breadcrumb-header">{title}</h3>
                        <p className="text-muted mb-0">{description}</p>
                    </div>
                    <div className="float-end">
                        <div className="btn-group mx-auto">
                           <ol className="breadcrumb hide-phone m-0" id="breadcrumb-placeholder" data-breadcrumb={`${breadcrumb} / ${title}`}>
                                { bcList &&   bcList.map((item,indx)=>(
                                    <li 
                                        key={indx} 
                                        className={`breadcrumb-item ${indx === bcList.length-1 ? "active" : ""}`}>
                                        { indx === bcList.length-1 ? item : <A href="#">{item}</A>}
                                    </li>
                                ))
                                }
                            </ol> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header
