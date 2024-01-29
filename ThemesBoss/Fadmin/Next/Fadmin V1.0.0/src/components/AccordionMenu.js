'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import SimpleBar from 'simplebar-react';

import accordionMenus from '@/data/accordion';

import { useThemeContextController } from '@/context/ThemeContext';
import AccordionSubmenu from './AccordionSubmenu';
import DynamicIcon from './DynamicIcon';

function Accordion({dataCurrentPage}) {

  // State to manage active menu item
  const [activeIndex, setActiveIndex] = useState(null);
  const [{page_sidebar_collapsed}, dispatch] = useThemeContextController();
  const pathname = usePathname();

  // Function to handle menu item click
  const handleItemClick = (index) => {
    // Toggle the active state
    setActiveIndex((prevIndex) => (prevIndex === index ?  null : index));
  };

  const handleMouseEnterExit = (action) => {
    const _action = action==='enter' ? "add" : "remove";
    if (page_sidebar_collapsed) {
      document.querySelector('.page-sidebar').classList[_action]('fixed-sidebar-scroll');
    }
  };



  return (
    <SimpleBar className="page-sidebar-inner simple-bar">
      <div
        className="page-sidebar-menu"
        data-current-page={`${dataCurrentPage}`}
      >
        <ul 
          className="accordion-menu" 
          onMouseEnter={()=>{handleMouseEnterExit('enter')}}
          onMouseLeave={()=>{handleMouseEnterExit('exit')}}>
            <li 
                // className={`${activeIndex === null ? "active-page" :""}`} 
                className={`${pathname === "/" ? "active-page" :""}`}
                onClick={()=>{handleItemClick(null)}}
             >
              <Link href="/" data-page="index">
                <i className="menu-icon">
                    <DynamicIcon icon={"MdHome"} iconFamily={"md"} />
                </i>
                <span>Dashboard</span>
              </Link>
            </li>
            {
            accordionMenus.map((menu,index)=>
              menu.type 
              ? <li className="menu-divider" key={index}></li> 
              :<AccordionSubmenu menu={menu} isActive={index === activeIndex} onSetActive={() => handleItemClick(index)} key={menu.title}/>)
            } 
        </ul>
      </div>
    </SimpleBar>
    
  )
}

export default Accordion