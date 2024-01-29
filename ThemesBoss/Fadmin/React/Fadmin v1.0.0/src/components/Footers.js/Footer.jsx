import React,{useState, useEffect, use} from "react";
import { Heart } from "react-feather";

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
              &copy; {`${year}" "`}
              Fadmin - Crafted with.
              <i className="text-danger"> <Heart  fill="red" size={16}/> </i>
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
