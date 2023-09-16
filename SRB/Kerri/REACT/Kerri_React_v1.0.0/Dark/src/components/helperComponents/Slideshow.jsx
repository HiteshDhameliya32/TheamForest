import {React,useState ,useEffect} from 'react'

import imgHeaderbg from "../../assets/images/header-bg.jpg"
import imgHeaderbg2 from "../../assets/images/header-bg2.jpg"
import imgHeaderbg3 from "../../assets/images/header-bg3.jpg"

const Slideshow = () => {

    
  //Slide Show
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const images = [
    imgHeaderbg,
    imgHeaderbg2,
    imgHeaderbg3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change images every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[index]);

  return (
    <>
      <div key={index} className="background-slideshow">
        <div
          className={`image old-image background-slideshow ${
            prevIndex !== index ? "fade-out" : ""
          }`}
          style={{ backgroundImage: `url(${images[prevIndex]})` }}
        ></div>
        <div
          className={`image new-image background-slideshow ${
            prevIndex !== index ? "fade-in" : ""
          }`}
          style={{ backgroundImage: `url(${images[index]})` }}
        ></div>
      </div>
    </>
  );
}

export default Slideshow