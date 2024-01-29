import  { useState } from 'react'
import accordionMenus from '@/data/accordion';

import { MdHome,} from "react-icons/md";
import { A } from "hookrouter";
import { useThemeContextController } from '@/context/ThemeContext';
import AccordionSubmenu from './AccordionSubmenu';
import SimpleBar from 'simplebar-react';


function Accordion({dataCurrentPage}) {
  // State to manage active menu item
  const [activeIndex, setActiveIndex] = useState(null);
  const [{page_sidebar_collapsed},] = useThemeContextController();

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
                className={`${activeIndex === null ? "active-page" :""}`}
                onClick={()=>{handleItemClick(null)}}
             >
              <A href="/" data-page="index">
                <i className="menu-icon">
                    <MdHome />
                </i>
                <span>Dashboard</span>
              </A>
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