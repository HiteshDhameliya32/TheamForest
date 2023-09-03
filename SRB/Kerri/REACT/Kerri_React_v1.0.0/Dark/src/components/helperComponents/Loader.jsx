import React, { useEffect } from "react";

function Loader() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const status = document.getElementById("status");

    // Simulate loading delay (you can replace this with actual loading logic)
    setTimeout(() => {
      status.style.display = "none";
      preloader.style.display = "none";
      document.body.style.overflow = "visible";
    }, 350); // Adjust the delay time as needed
  }, []);
  return (
    <>
      {/*  Loader  */}
      <div id="preloader">
        <div id="status">
          <div className="spinner">Loading...</div>
        </div>
      </div>
    </>
  );
}

export default Loader;
