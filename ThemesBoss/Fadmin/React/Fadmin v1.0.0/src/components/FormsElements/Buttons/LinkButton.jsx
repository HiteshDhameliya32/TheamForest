

function LinkButton({color,title,rounded,size,disabled,href,tabIndex,ariaDisabled,width}) {
  return (
    <a  className={`btn btn-${color
        } ${rounded ? "btn-rounded" : ""
        } ${size==='sm'? 'btn-sm mo-mb-2' : size==='lg' ? 'btn-lg mo-mb-2' :""
        } ${disabled ? "disabled" :""
        } ${width==='xs' ? 'w-xs' : width==='sm' ? 'w-sm' : width==='md' ? 'w-md': width==='lg' ? 'w-lg' :''}`} 
        href={href || "#"} 
        role="button"
        tabIndex = {tabIndex?tabIndex:''}
        aria-disabled={ariaDisabled}
        >
        {title}
    </a>
  )
}

export default LinkButton