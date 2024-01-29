import React,{useState, useEffect} from "react";

import DynamicIcon from "../DynamicIcon";

function Footer() {
    const [year, setYear] = useState()

    useEffect(()=>{
        const tempYear = new Date().getFullYear();
        setYear(tempYear)
    },[])
  return (
    <div className="page-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <p className="mb-0">
              &copy; {`${year} `}
              Fadmin - Crafted with.
              <i className="text-danger"> <DynamicIcon icon={"FiHeart"} iconFamily={"fi"}  fill="red" size={16}/> </i>
              <a href="https://themeforest.net/user/themesboss" target="_blank">
                ThemesBoss.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
