import  { useState,useRef,useEffect } from "react";
import { A } from "hookrouter"; 'hookrouter'

import { FaAngleRight } from "react-icons/fa6";

import { useThemeContextController, } from "@/context/ThemeContext";


function AccordionSubmenu({menu:{ title, Icon, subMenus, dataPage, path,version},isActive, onSetActive}) {

    // For setting up the active page A
    const [activeIndex, setActiveIndex] = useState(null);
    // Function to handle menu item click
     const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ?  null : index));
    };

    // slide up- down animation
    const [{
      submenu_opacity_animation,
      submenu_animation_speed
    }] = useThemeContextController()
    const contentRef = useRef();

    function toggleDropdown() { 
      if (!isActive) {
        if (!submenu_opacity_animation) {
          for(const li of contentRef.current.children){
            li.classList.add("animation")
          }
        }
      }else{
        if (!submenu_opacity_animation) {
          for(const li of contentRef.current.children){
            li.classList.remove("animation")
          }
        }
      }
      onSetActive();
    }
    
    useEffect(() => {
        var toggleAnimationClass;
      if (submenu_opacity_animation) {
        const elements = contentRef.current?.children;
        if (elements) {
          let currentIndex = 0;
    
           toggleAnimationClass =function() {
            if (currentIndex < elements.length) {
              const action = isActive ? 'add' : 'remove';
              elements[currentIndex].classList[action]('animation');
              currentIndex++;
            } else {
              clearInterval(animationInterval);
            }
          }
          // Set interval to toggle the class every submenu_animation_speed milliseconds
          const animationInterval = setInterval(toggleAnimationClass, submenu_animation_speed);
        }
      }
    }, [isActive   ,submenu_animation_speed,submenu_opacity_animation]); 
    

   return (
    <li className={`animation ${isActive ? "open" : ""}`}>
      <A href={path ? path : "#"} data-page={dataPage} onClick={toggleDropdown}>
        <i className="menu-icon mdi fa">{Icon}</i>
        <span>{title}</span>
        {subMenus?.length !== 0 && (
          <i className="accordion-icon fa">
            <FaAngleRight size={12} />
          </i>
        )}
        {version && <span className="label label-danger">{version}</span>}
      </A>
      {subMenus?.length !== 0 && (
        <ul ref={contentRef} className="sub-menu" style={{ display:`${isActive ? "block" : "none"}` }}>
          {subMenus?.map((submenu, index) => (
            <li key={index}  onClick={()=>{handleItemClick(index)}} className={`animation ${activeIndex === index ? "active-page" : ""}`}>
            <A href={`${submenu.path}`} data-page={submenu.dataPage}>
              {submenu.title}
            </A>
          </li>
          ))
            }
        </ul>
      )}
    </li>
  ); 
}

export default AccordionSubmenu;
