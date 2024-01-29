import React, { useRef,useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

import { useThemeContextController, } from "@/context/ThemeContext";
import DynamicIcon from "./DynamicIcon";


function AccordionSubmenu({menu:{ title, Icon, subMenus, dataPage, path,version},isActive, onSetActive}) {

    const pathname = usePathname();

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
      if (submenu_opacity_animation) {
        const elements = contentRef.current?.children;
        if (elements) {
          let currentIndex = 0;
    
          function toggleAnimationClass() {
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
    }, [isActive,   ,submenu_animation_speed,submenu_opacity_animation]);
    

   return (
    <li className={`animation ${isActive ? "open" : ""}`}>
      <Link href={path ? path : "#"} data-page={dataPage} onClick={toggleDropdown}>
        <i className="menu-icon mdi fa">{Icon}</i>
        <span>{title}</span>
        {subMenus?.length !== 0 && (
          <i className="accordion-icon fa">
            <DynamicIcon icon={"FaAngleRight"} iconFamily={"fa6"} size={12} />
          </i>
        )}
        {version && <span className="label label-danger">{version}</span>}
      </Link>
      {subMenus?.length !== 0 && (
        <ul ref={contentRef} className="sub-menu" style={{ display:`${isActive ? "block" : "none"}` }}>
          {subMenus?.map((submenu, index) => (
            <li key={index}  className={`animation ${pathname === submenu.path  ? "active-page" : ""}`}>
            <Link href={`${submenu.path}`} data-page={submenu.dataPage}>
              {submenu.title}
            </Link>
          </li>
          ))
            }
        </ul>
      )}
    </li>
  ); 
}

export default AccordionSubmenu;
