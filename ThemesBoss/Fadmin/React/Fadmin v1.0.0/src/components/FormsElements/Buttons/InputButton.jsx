

function Button({color,value,rounded,size,disabled,type,width}) {
  return (
    <input 
      type={type ? type : "button"} 
      value={value}
      className={`btn btn-${color
      } ${rounded ? "btn-rounded" : ""
      } ${size==='sm'? 'btn-sm mo-mb-2' : size==='lg' ? 'btn-lg mo-mb-2' :""
      } ${disabled ? "disabled" :""
      } ${width==='xs' ? 'w-xs' : width==='sm' ? 'w-sm' : width==='md' ? 'w-md': width==='lg' ? 'w-lg' :''}`}
    />
  )
}


export default Button