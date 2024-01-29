import DynamicIcon from '@/components/DynamicIcon';

function Button({color,title,rounded,size,disabled,type,width,social}) {
   
  return (
    <button 
      type={type ? type : "button"} 
      className={`btn btn-${color
      } ${rounded ? "btn-rounded" : ""
      } ${size==='sm'? 'btn-sm mo-mb-2' : size==='lg' ? 'btn-lg mo-mb-2' :""
      } ${disabled ? "disabled" :""
      } ${width==='xs' ? 'w-xs' : width==='sm' ? 'w-sm' : width==='md' ? 'w-md': width==='lg' ? 'w-lg' :''
      } ${social  ? !title  ? 'btn-icon' : 'd-inline-flex gap-1':''}`}
    >
      {social==="facebook" && <DynamicIcon iconFamily="fa6" icon={"FaFacebook"} />}
      {social==="twitter" && <DynamicIcon iconFamily="fa6" icon={"FaTwitter"} />}
      {social==="linkedin" && <DynamicIcon iconFamily="fa6" icon={"FaLinkedinIn"} />}
      {social==="dribbble" && <DynamicIcon iconFamily="fa6" icon={"FaDribbble"} />}
      {social==="googleplus" && <DynamicIcon iconFamily="fa6" icon={"FaGooglePlus"} />}
      {social==="instagram" && <DynamicIcon iconFamily="fa6" icon={"FaInstagram"} />}
      {social==="skype" && <DynamicIcon iconFamily="fa6" icon={"FaSkype"} />}
      {social==="youtube" && <DynamicIcon iconFamily="fa6" icon={"FaYoutube"} />}
      {social==="github" && <DynamicIcon iconFamily="fa6" icon={"FaGithub"} />}
      {title}
    </button>
  )
}

export default Button