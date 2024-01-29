import React, { useState } from 'react'
import { 
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaGooglePlus,
  FaInstagram,
  FaSkype,
  FaYoutube,
  FaGithub
} from 'react-icons/fa6'

function Button({color,title,rounded,size,disabled,type,width,social}) {
  let icon = ''

  switch (social) {
    case 'facebook':
      icon = <FaFacebookF />
      break;
    case 'twitter':
      icon = <FaTwitter />
      break;
    case 'linkedin':
      icon = <FaLinkedinIn />
      break;
    case 'dribbble':
      icon = <FaDribbble />
      break;
    case 'googleplus':
      icon = <FaGooglePlus />
      break;
    case 'instagram':
      icon = <FaInstagram />
      break;
    case 'skype':
      icon = <FaSkype />
      break;
    case 'youtube':
      icon = <FaYoutube />
      break;
    case 'github':
      icon = <FaGithub />
      break;
  
    default:
      icon = ''
      break;
  }

  return (
    <button 
      type={type ? type : "button"} 
      className={`btn btn-${color
      } ${rounded ? "btn-rounded" : ""
      } ${size==='sm'? 'btn-sm mo-mb-2' : size==='lg' ? 'btn-lg mo-mb-2' :""
      } ${disabled ? "disabled" :""
      } ${width==='xs' ? 'w-xs' : width==='sm' ? 'w-sm' : width==='md' ? 'w-md': width==='lg' ? 'w-lg' :''
      } ${icon && !title ? 'btn-icon' :''}`}

    >
      {icon} {title}
    </button>
  )
}

export default Button